(function () {
    'use strict';

    const USERS_COLLECTION = "contacts";
    const USER_EVENTS_COLLECTION = "userEvents";
    const EVENT_PRICE_COLLECTION = "eventPrice";
    const EVENT_PRICE_DETAILS = "eventSubscriptionPrice";

    let cveMailer = require('./mailer');
    let mongodb = require("mongodb");
    let payment = require('./payments/make-payment');
    let paymentDetails = require('./payments/get-transaction-details');
    let ObjectID = mongodb.ObjectID;

    // Generic error handler used by all endpoints.
    function handleError(res, reason, message, code) {
        console.log("ERROR: " + reason);
        res.status(code || 500).json({"error": message});
    }

    function EventsSubscription (app, db) {

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
            db.collection(USER_EVENTS_COLLECTION).find({ userId: req.params.id }).toArray(function(err, doc) {
                if (err) {
                    handleError(res, err.message, "Failed to get event");
                } else {
                    res.status(200).json(doc);
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

        app.delete("/user-events/:id/:userId/:childId", function(req, res) {
            db.collection(USER_EVENTS_COLLECTION).deleteOne({eventId: req.params.id, userId: req.params.userId, childId: req.params.childId}, function(err, result) {
                if (err) {
                    handleError(res, err.message, "Failed to delete user event");
                } else {
                    res.status(204).end();
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


        app.post('/events/make-payment', function (req, res) {
            payment.chargeCreditCard(function (paymentResponse) {
                res.status(200).json(paymentResponse);
            }, req.body);
        });


        app.post('/events/save-price/:userId', function (req, res) {
            var eventPrice = req.body;
            eventPrice.createDate = new Date();

            db.collection(EVENT_PRICE_DETAILS).insertOne(eventPrice, function(err, doc) {
                if (err) {
                    handleError(res, err.message, "Failed to create new price event.");
                } else {
                    var childName;
                    db.collection(USERS_COLLECTION).findOne({_id: new ObjectID(req.params.userId)}, function (err, doc) {
                        if (doc.familyDetails && doc.email) {
                            for (var i=0; i<doc.familyDetails.length; i++) {
                                if (doc.familyDetails[i].id === eventPrice.childId) {
                                    childName = doc.familyDetails[i].name;
                                }
                            }
                            cveMailer.sendMail("chinmayavrindavansummercamp@gmail.com", doc.email, "Chinmaya Vrindavan Summer Camp Registration for " + childName,
                                new require('sendgrid').mail.Content("text/html", "Dear " + doc.familyDetails[0].name + ", <br /><br />" +
                                    "Hari Om!  Your Summer Camp registration for " + childName + " is complete.  Your child’s spot is now reserved.  View details of your registration under <a href='https://chinmaya-vrindavan-events.herokuapp.com/#/login'>My Subscriptions</a> in your account.  Please note summer camp dues paid to CMTC is <b>100% tax deductible</b>. <br /><br />" +
                                    "Thank you for registering your child in the Chariot of Success.  Our team has planned fun and exciting activities for all the children.  If you have any questions, please contact us at chinmayavrindavansummercamp@gmail.com  We look forward to providing a wonderful summer camp experience for your family! <br /><br />" +
                                    "Regards, <br/>" +
                                    "Summer Camp Team"));
                        } else {
                            cveMailer.sendMail("chinmayavrindavansummercamp@gmail.com", doc.email, "Chinmaya Vrindavan Events - Subscription",
                                new require('sendgrid').mail.Content("text/html", "Dear " + doc.familyDetails[0].name + ", <br /><br />" +
                                    "Hari Om!  Your Summer Camp registration for " + childName + " is complete.  Your child’s spot is now reserved.  View details of your registration under <a href='https://chinmaya-vrindavan-events.herokuapp.com/#/login'>My Subscriptions</a> in your account.  Please note summer camp dues paid to CMTC is <b>100% tax deductible</b>. <br /><br />" +
                                    "Thank you for registering your child in the Chariot of Success.  Our team has planned fun and exciting activities for all the children.  If you have any questions, please contact us at chinmayavrindavansummercamp@gmail.com  We look forward to providing a wonderful summer camp experience for your family! <br /><br />" +
                                    "Regards, <br/>" +
                                    "Summer Camp Team"));
                        }

                        res.sendStatus(201);
                    });
                }
            });
        });


        app.get('/events/subscription-price/:eventId/:childId', function (req, res) {
            db.collection(EVENT_PRICE_DETAILS).find({eventId: req.params.eventId, childId: req.params.childId}).toArray(function (err, doc) {
                res.status(200).json(doc);
            });
        });

        app.get('/events/subscription/:transId', function (req, res) {
            paymentDetails.getTransactionDetails(req.params.transId, function (transactionDetails) {
                res.status(200).json(transactionDetails);
            });
        });

    }

    module.exports = EventsSubscription;
}());
