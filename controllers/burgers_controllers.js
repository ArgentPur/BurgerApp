const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        let hdbsOb = {
            burgers_db: data
        };
        console.log(hdbsOb);
        res.render("index", hdbsOb);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.create([
        "burger_name"
    ],
    [
        req.body.name
    ], function (result) {
        res.json({id: result.insertId});
    });
});

router.put("api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;
    console.log("condition", condition);
    burger.update({
        devoured: req.body.devour
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        }else {
            res.status(200).end();
        }
    });
});


module.exports = router;