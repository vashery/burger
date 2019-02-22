//import dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burger_controller.js");

//set variables for port and initilize express
var PORT = process.env.PORT || 3000;
var app = express();

//set static content to the public directory
app.use(express.static("public"));

//Parse body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//initilize handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//use routes from the controller
app.use(routes);

//Start server
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});