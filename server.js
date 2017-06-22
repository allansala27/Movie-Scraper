// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Require Click schema
var Movies = require("./models/savedMovies");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

var db = process.env.MONGODB_URI || "mongodb://localhost/MovieScraper";

// Connect mongoose to our database
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) {

    // This GET request will search for the latest clickCount
    Click.find({}).exec(function(err, doc) {

        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});

//--- Cheerio ---------------------------------------



// Starting our express server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

module.exports = app; 
