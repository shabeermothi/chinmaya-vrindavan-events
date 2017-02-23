var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var fs = require('fs');
var moment = require('moment');
var helmet = require('helmet');
var jwt = require("jsonwebtoken");

var user = require('./api/user');
var events = require('./api/events');
var eventsSubscription = require('./api/events-subscription');
var config = require('./config');


var app = express();
var appRouter = express.Router();

app.use(helmet());
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/uploads"));
app.use(bodyParser.json());

app.set('secretToken', config.secret);

// route middleware to verify a token
appRouter.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, app.get('secretToken'), function(err, decoded) {
      if (err) {
        return res.status(401).send({
          success: false,
          message: 'No token provided.'
        });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });

  } else {

    if ((req.method === "POST" && req.originalUrl === "/users") ||
        (req.method === "GET" && req.originalUrl === "/events")) {
      next();
    } else {
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  }
});

app.use('/events', appRouter);
app.use('/users', appRouter);
app.use('/user-details', appRouter);
app.use('/user-events', appRouter);
app.use('/event-price', appRouter);
app.use('/event-field-details', appRouter);

var localMongoDbUrl = "mongodb://localhost:27017";
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

    startApis();
  });
});

function startApis() {
  user(app, db);
  events(app, db);
  eventsSubscription(app, db);
}
