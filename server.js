var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

//connecting to the public directory
app.use(express.static("public"));

// Parsing as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setting Handlebars 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// bringing in routes through the controller files
var routes = require("./controllers/burger_controllers.js");
// using the routes
app.use(routes);

// Starting the server
app.listen(PORT, function() {
  
  console.log("Server listening on: http://localhost:" + PORT);
});
