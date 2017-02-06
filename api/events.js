(function () {
    'use strict';

    const EVENTS_COLLECTION = "events";
    const EVENT_PRICE_COLLECTION = "eventPrice";
    const EVENT_LINK_COLLECTION = "eventLinks";

    let mongodb = require("mongodb");
    let ObjectID = mongodb.ObjectID;
    let fs = require('fs');
    let moment = require('moment');
    let helmet = require('helmet');
    let payment = require('./payments/make-payment');

    // Generic error handler used by all endpoints.
    function handleError(res, reason, message, code) {
        console.log("ERROR: " + reason);
        res.status(code || 500).json({"error": message});
    }

    function Events (app, db) {

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

        app.get('/event-price/:eventId', function (req, res) {
            db.collection(EVENTS_COLLECTION).findOne({ _id: new ObjectID(req.params.eventId) }, function(err, docs) {
                if (err) {
                    handleError(res, err.message, "Failed to get events.");
                } else {
                    var eventBasePrice = (docs.eventBasePrice) ? docs.eventBasePrice : 0;
                    var eventDiscount = (docs.eventDiscount) ? docs.eventDiscount : 20;
                    db.collection(EVENT_PRICE_COLLECTION).find({ eventId: req.params.eventId }).toArray(function(err, doc) {
                        if (err) {
                            handleError(res, err.message, "Failed to get event");
                        } else {
                            var response = {
                                eventBasePrice: eventBasePrice,
                                eventDiscount: eventDiscount,
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

        app.delete("/event/price-and-links/:id", function(req, res) {
            db.collection(EVENTS_COLLECTION).findOne({_id: new ObjectID(req.params.id)}, function(err, result) {
                if (err) {
                    handleError(res, err.message, "Failed to delete event");
                } else {
                    for (var a of result.eventDetails.edaFieldsModel) {
                        for (var b of a.columns) {
                            b.control.formlyExpressionProperties = {};
                        }
                    }

                    db.collection(EVENTS_COLLECTION).updateOne({_id: new ObjectID(req.params.id)}, result, function(err, doc) {
                        if (err) {
                            handleError(res, err.message, "Failed to update event");
                        } else {
                            db.collection(EVENT_PRICE_COLLECTION).deleteMany({eventId: req.params.id}, function(err, delResult) {
                                if (err) {
                                    handleError(res, err.message, "Failed to delete event");
                                } else {
                                    res.status(204).end();
                                }
                            });
                        }
                    });
                }
            });
        });

        app.post("/events/update-links/:eventId", function(req, res) {

            var newLink = req.body;
            newLink.createdDate = new Date();
            newLink.eventId = req.params.eventId;

            db.collection(EVENT_LINK_COLLECTION).insertOne(newLink, function(err, doc) {
                if (err) {
                    handleError(res, err.message, "Failed to create new event.");
                } else {
                    res.status(201).end();
                }
            });
        });

        app.put("/events/update-links/:eventId", function(req, res) {

            var newLink = req.body;
            newLink.createdDate = new Date();
            newLink.eventId = req.params.eventId;

            db.collection(EVENT_LINK_COLLECTION).updateOne({eventId: req.params.eventId}, newLink, function(err, doc) {
                if (err) {
                    handleError(res, err.message, "Failed to create new event.");
                } else {
                    res.status(201).end();
                }
            });
        });

        app.get("/events/update-links/:eventId", function(req, res) {
            db.collection(EVENT_LINK_COLLECTION).find({eventId: req.params.eventId}).toArray(function(err, docs) {
                if (err) {
                    handleError(res, err.message, "Failed to get events.");
                } else {
                    res.status(200).json(docs[0]);
                }
            });
        });

    }

    module.exports = Events;

}());
