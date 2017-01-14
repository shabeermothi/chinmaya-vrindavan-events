var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var jwt = require("jsonwebtoken");
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var fs = require('fs');
var helper = require('sendgrid').mail;
var bCrypt = require('bcrypt-nodejs');
var randomString = require('randomstring');
var moment = require('moment');

var cveMailer = require('./api/mailer');

var USERS_COLLECTION = "contacts";
var EVENTS_COLLECTION = "events";
var USER_EVENTS_COLLECTION = "userEvents";
var EVENT_PRICE_COLLECTION = "eventPrice";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/uploads"));
app.use(bodyParser.json());

var localMongoDbUrl = "mongodb://localhost:27017";

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || localMongoDbUrl, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

// Events API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.post('/user-profile/upload/health-docs', upload.single('file'), function (req, res, next) {
  var tmp_path = req.file.path;
  var target_path = 'uploads/' + req.file.originalname;

  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
  src.on('end', function() { res.status(200); });
});

/*  "/users"
 *    GET: finds all users
 *    POST: creates a new user
 */

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
  db.collection(USERS_COLLECTION).find({"email": req.body.email, "password": req.body.password}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get user.");
    } else if (docs.length > 0) {
      var token = jwt.sign(req.body, "dsghkasdl235689sahfk", {expiresIn: "1h"});
      var response = {
        token: token,
        data: docs
      };
      res.status(200).json(response);
    } else {
      handleError(res, "User does not exist", "User does not exist in system.", 403);
    }
  });
});

app.post("/users", function(req, res) {
  var newUser = req.body;
  newUser.createDate = new Date();

  if (!(req.body.name || req.body.email || req.body.password)) {
    handleError(res, "Invalid user input", "Must provide a first or last name.", 400);
  }

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
          var token = jwt.sign(req.body, "dsghkasdl235689sahfk", {expiresIn: "1h"});
          var response = {
            token: token,
            data: doc.ops
          };

          cveMailer.sendMail("friendsatchinmaya@chinmayavrindavanevents.com", req.body.email, "Welcome to Chinmaya Vrindavan Events");

          res.status(200).json(response);
        } else {
          handleError(res, "Unable to register user in system", "Unable to register user in system.");
        }
      });
    }
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


/*  "/events"
 *    GET: finds all users
 *    POST: creates a new user
 */

app.get("/events", function(req, res) {
  db.collection(EVENTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get events.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.get("/active-events", function (req, res) {
  db.collection(EVENTS_COLLECTION).find({'eventDate': {$gt: new Date()}}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get events.");
    } else {
      res.status(200).json(docs);
    }
  });
});

app.post("/events", function(req, res) {
  var newEvent = req.body;
  newEvent.createDate = new Date();
  newEvent.eventDate = new Date(newEvent.eventDate);

  if (!(req.body.eventName || req.body.eventDate)) {
    handleError(res, "Invalid user input", "Must provide a name and date.", 400);
  }

  db.collection(EVENTS_COLLECTION).insertOne(newEvent, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new event.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

/*  "/events/:id"
 *    GET: find event by id
 *    PUT: update event by id
 *    DELETE: deletes event by id
 */

app.get("/events/:id", function(req, res) {
  db.collection(EVENTS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to get event");
    } else {
      res.status(200).json(doc);
    }
  });
});

app.put("/events/:id", function(req, res) {
  var updateDoc = req.body;
  delete updateDoc._id;

  db.collection(EVENTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, updateDoc, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to update event");
    } else {
      res.status(204).end();
    }
  });
});

app.delete("/events/:id", function(req, res) {
  db.collection(EVENTS_COLLECTION).deleteOne({_id: new ObjectID(req.params.id)}, function(err, result) {
    if (err) {
      handleError(res, err.message, "Failed to delete event");
    } else {
      res.status(204).end();
    }
  });
});


app.post("/user-events/:token", function(req, res) {
  var newEvent = req.body;
  newEvent.createDate = new Date();

        if (!(req.body.eventId)) {
          handleError(res, "Invalid user input", "Must provide a name and date.", 400);
        }

        db.collection(USER_EVENTS_COLLECTION).insertOne(newEvent, function(err, doc) {
          if (err) {
            handleError(res, err.message, "Failed to create new event.");
          } else {
            res.status(201).json(doc.ops[0]);
          }
        });
  });

app.get("/user-events/:id/:token", function(req, res) {
  jwt.verify(req.params.token, 'dsghkasdl235689sahfk', function (err, response) {
    if (response) {
      db.collection(USER_EVENTS_COLLECTION).find({ userId: req.params.id }).toArray(function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to get event");
        } else {
          res.status(200).json(doc);
        }
      });
    } else {
      res.sendStatus(403);
    }
  });
});

app.get("/user-events/:eventId", function(req, res) {
    db.collection(USER_EVENTS_COLLECTION).find({ eventId: req.params.eventId }).toArray(function(err, doc) {
      if (err) {
        handleError(res, err.message, "Failed to get event");
      } else {
        res.status(200).json(doc);
      }
    });
});


app.delete("/user-events/:id", function(req, res) {
    db.collection(USER_EVENTS_COLLECTION).deleteOne({eventId: req.params.id}, function(err, result) {
      if (err) {
        handleError(res, err.message, "Failed to delete user event");
      } else {
        res.status(204).end();
      }
    });
});

app.delete("/user-events/:id/:userId/:token", function(req, res) {
  jwt.verify(req.params.token, 'dsghkasdl235689sahfk', function (err, response) {
    if (response) {

      db.collection(USER_EVENTS_COLLECTION).deleteOne({eventId: req.params.id, userId: req.params.userId}, function(err, result) {
        if (err) {
          handleError(res, err.message, "Failed to delete user event");
        } else {
          res.status(204).end();
        }
      });
    } else {
      res.sendStatus(403);
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
      doc.password = req.body.newPassword;
      db.collection(USERS_COLLECTION).updateOne({_id: new ObjectID(doc._id)}, doc, function(err, doc) {
          res.sendStatus(201);
      });
    } else {
      res.sendStatus(403);
    }
  });
});

app.post('/event-price/:eventId', function (req, res) {
  var eventPrice = req.body;
  eventPrice.eventId = req.params.eventId;
  eventPrice.createDate = new Date();

  db.collection(EVENT_PRICE_COLLECTION).insertOne(eventPrice, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new price event.");
    } else {
      res.sendStatus(201);
    }
  });
});

app.get('/event-price/:eventId', function (req, res) {
  db.collection(EVENTS_COLLECTION).findOne({ _id: new ObjectID(req.params.eventId) }, function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get events.");
    } else {
      var eventBasePrice = (docs.eventBasePrice) ? docs.eventBasePrice : 0;
      db.collection(EVENT_PRICE_COLLECTION).find({ eventId: req.params.eventId }).toArray(function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to get event");
        } else {
          var response = {
            eventBasePrice: eventBasePrice,
            eventFieldPrices: doc
          };
          res.status(200).json(response);
        }
      });
    }
  });
});

app.post('/event-field-details', function (req, res) {
    var eventFields = req.body;
    var eventId = eventFields[0].eventId;
    var responseArr = [];

    db.collection(EVENTS_COLLECTION).findOne({ _id: new ObjectID(eventId) }, function(err, response) {
        var fields = response.eventDetails.edaFieldsModel;

        for (var a in eventFields) {
            if (eventFields.hasOwnProperty(a)) {
              for (var x in eventFields[a]) {
                  if (eventFields[a].hasOwnProperty(x) && x !== '_id' && x !== 'eventId' && x !== 'createDate') {
                    for (var field of fields) {
                      for (var column of field.columns) {
                        if (x === column.control.key) {
                          var responseObj = {};
                          responseObj[column.control.key] = {};
                          if (column.control.templateOptions.options.length > 0) {
                            responseObj[column.control.key].actualValue = column.control.templateOptions.options;
                            responseObj[column.control.key].label = column.control.templateOptions.label;
                          } else {
                            responseObj[column.control.key].actualValue = column.control.templateOptions.label;
                          }

                          responseObj[column.control.key].priceValue = eventFields[a][x];
                          responseArr.push(responseObj);
                        }
                      }
                    }

                  }
              }
            }
        }
        res.status(200).json(responseArr);
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
              "https://chinmaya-vrindavan-events.herokuapp.com/#!/recover-account/reset-password/" + userId + "/" + hash + " \n " +
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
