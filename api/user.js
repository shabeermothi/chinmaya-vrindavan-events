(function () {
    'use strict';

    const USERS_COLLECTION = "contacts";
    const bcrypt = require('bcrypt');

    let cveMailer = require('./mailer');
    let mongodb = require("mongodb");
    let ObjectID = mongodb.ObjectID;
    let jwt = require("jsonwebtoken");
    let multer = require('multer');
    let upload = multer({ dest: 'uploads/' });
    let fs = require('fs');
    let helper = require('sendgrid').mail;
    let randomString = require('randomstring');
    let moment = require('moment');
    let helmet = require('helmet');
    let payment = require('./payments/make-payment');

    // Generic error handler used by all endpoints.
    function handleError(res, reason, message, code) {
        console.log("ERROR: " + reason);
        res.status(code || 500).json({"error": message});
    }

    function User (app, db) {
        app.get("/users", function(req, res) {
            db.collection(USERS_COLLECTION).find({}).toArray(function(err, docs) {
                if (err) {
                    handleError(res, err.message, "Failed to get contacts.");
                } else {
                    res.status(200).json(docs);
                }
            });
        });

        app.post("/login", function(req, res) {
            db.collection(USERS_COLLECTION).find({"email": req.body.email}).toArray(function(err, docs) {
                if (err) {
                    handleError(res, err.message, "Failed to get user.");
                } else if (docs.length > 0) {
                    bcrypt.compare(req.body.password, docs[0].password, function (err, match) {
                        if (match) {
                            var token = jwt.sign(req.body, app.get('secretToken'), {expiresInMinutes: 1440});
                            var response = {
                                token: token,
                                data: docs
                            };
                            res.status(200).json(response);
                        } else {
                            handleError(res, "User entered wrong password", "Wrong password.", 402);
                        }
                    });
                } else {
                    handleError(res, "User does not exist", "User does not exist in system.", 404);
                }
            });
        });

        app.post("/users", function(req, res) {
            var saltRounds = 10;
            var newUser = req.body;
            newUser.createDate = new Date();

            if (!(req.body.name || req.body.email || req.body.password)) {
                handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
            }

            bcrypt.hash(req.body.password, saltRounds).then(function (hash) {
                newUser.password = hash;
                db.collection(USERS_COLLECTION).find({"email": req.body.email}).toArray(function(err, docs) {
                    if (err) {
                        handleError(res, err.message, "Failed to get user.");
                    } else if (docs.length > 0) {
                        handleError(res, "User Exists", "User Exists.", 409);
                    } else {
                        db.collection(USERS_COLLECTION).insertOne(newUser, function(err, doc) {
                            if (err) {
                                handleError(res, err.message, "Failed to create new user.");
                            } else if (doc.ops.length > 0) {
                                var token = jwt.sign(req.body, app.get('secretToken'), {expiresInMinutes: 1440});
                                var response = {
                                    token: token,
                                    data: doc.ops
                                };

                                cveMailer.sendMail("friendsatchinmaya@chinmayavrindavanevents.com", req.body.email, "Welcome to Chinmaya Vrindavan Events");

                                res.status(200).json(response);
                            } else {
                                handleError(res, "Unable to register user in system", "Unable to register user in system.", 500);
                            }
                        });
                    }
                });
            });

        });

        /*  "/users/:id"
         *    GET: find user by id
         *    PUT: update user by id
         *    DELETE: deletes user by id
         */

        app.get("/users/:id", function(req, res) {
            db.collection(USERS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
                if (err) {
                    handleError(res, err.message, "Failed to get user");
                } else {
                    res.status(200).json(doc);
                }
            });
        });

        app.put("/users/:id", function(req, res) {
            var updateDoc = req.body;
            delete updateDoc._id;

            db.collection(USERS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
                if (err) {
                    handleError(res, err.message, "Failed to update user");
                } else {
                    res.status(200).json(doc);
                }
            });
        });

        app.delete("/users/:id", function(req, res) {
            db.collection(USERS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
                if (err) {
                    handleError(res, err.message, "Failed to delete user");
                } else {
                    res.status(204).end();
                }
            });
        });

        app.get('/user-details/child-details/:userId', function (req, res) {
            db.collection(USERS_COLLECTION).find({_id: new ObjectID(req.params.userId)}).toArray(function (err, doc) {
                res.status(200).json(doc[0].familyDetails);
            });
        });

        app.post('/recover-account/:userId/:passwordRecoveryHash', function (req, res) {
            db.collection(USERS_COLLECTION).findOne({_id: new ObjectID(req.params.userId), passwordRecoveryHash: req.params.passwordRecoveryHash}, function (err, doc) {
                if (doc) {
                    var saltRounds = 10;
                    bcrypt.hash(req.body.newPassword, saltRounds).then(function (hash) {
                        doc.password = hash;

                        db.collection(USERS_COLLECTION).updateOne({_id: new ObjectID(doc._id)}, doc, function(err, doc) {
                            res.sendStatus(201);
                        });
                    });
                } else {
                    res.sendStatus(404);
                }
            });
        });

        app.get('/recover-account/:emailId', function (req, res) {

            db.collection(USERS_COLLECTION).findOne({email: req.params.emailId}, function (err, doc) {
                if (!doc) {
                    res.sendStatus(404);
                } else {

                    var hash = randomString.generate(10);
                    var userId = doc._id;
                    doc.passwordRecoveryHash = hash;
                    doc.passwordRecoveryHashExpiry = moment(5, 'm');

                    db.collection(USERS_COLLECTION).updateOne({_id: new ObjectID(doc._id)}, doc, function(err, doc) {
                        if (err) {
                            handleError(res, err.message, "Failed to update event");
                        } else {
                            var from_email = new helper.Email("recovery-manager@chinmayavrindavanevents.com");
                            var to_email = new helper.Email(req.params.emailId);
                            var subject = "Reset your Chinmaya Vrindavan Events Account password";
                            var content = new helper.Content("text/plain", "Click on the below link to reset your password. \n " +
                                "https://chinmaya-vrindavan-events.herokuapp.com/#/recover-account/reset-password/" + userId + "/" + hash + " \n " +
                                "\n " +
                                "Please note that the above link to reset your password will be valid only for 5 mins. \n " +
                                "\n " +
                                "\n " +
                                "Have a great day! \n " +
                                "Chinmaya Vrindavan Events Team");
                            var mail = new helper.Mail(from_email, subject, to_email, content);

                            var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
                            var request = sg.emptyRequest({
                                method: 'POST',
                                path: '/v3/mail/send',
                                body: mail.toJSON()
                            });

                            sg.API(request, function(error, response) {
                                res.sendStatus(response.statusCode);
                            });
                        }
                    });

                }
            });
        });

        app.post('/user-profile/upload/health-docs', upload.single('file'), function (req, res, next) {
            var tmp_path = req.file.path;
            var target_path = 'uploads/' + req.file.originalname;

            var src = fs.createReadStream(tmp_path);
            var dest = fs.createWriteStream(target_path);
            src.pipe(dest);
            src.on('end', function() { res.status(200); });
        });

    }

    module.exports = User;
}());
