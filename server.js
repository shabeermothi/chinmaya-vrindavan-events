var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var jwt = require("jsonwebtoken");

var USERS_COLLECTION = "contacts";
var EVENTS_COLLECTION = "events";
var USER_EVENTS_COLLECTION = "userEvents";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var localMongoDbUrl = "mongodb://localhost:27017";
var isLocal = process.argv[2];

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect((isLocal) ? localMongoDbUrl : process.env.MONGODB_URI, function (err, database) {
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