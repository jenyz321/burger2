// import burger.js//
var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();




// creating routes
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/", function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        res.json({id:result.id});
    console.log(result);
  });
});
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.update({devoured: req.body.devoured}, condition, function(result) {
        if (result.changedRows == 0) {
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
    });
});

module.exports = router;