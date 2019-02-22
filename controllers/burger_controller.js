//Inport dependencies
var express = require("express");
var burger = require("../models/burger.js")

//initilize express router
var router = express.Router();

//route to serve html with handlebars as well as retrieve all burgers from the database
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var handlbearobject = {
      burgers: data
    };
    console.log(data)
    res.render("index", handlbearobject);
  });
});

//route to post new burger to the database.  Set default state of devoured to false
router.post("/api/burgers", function (req, res) {
  burger.insertOne([req.body.name, false], function (result) {
    res.json({ id: result.insertId });
  });
});

//route to update specific burger to devoured true state
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne(req.body.devoured, req.params.id, function (result) {
    if (result.changedRows === 0) {
      res.json({message: "burger was already eaten"})
    }
    else {
      res.json({message: "burger was devoured"})
    }
  });
});

module.exports = router;
