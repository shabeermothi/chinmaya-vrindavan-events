var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var fs = require('fs');
var moment = require('moment');
var helmet = require('helmet');

var user = require('./api/user');
var events = require('./api/events');
var eventsSubscription = require('./api/events-subscription');

var app = express();

app.use(helmet());
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

    startApis();
  });
});

function startApis() {
  user(app, db);
  events(app, db);
  eventsSubscription(app, db);
}