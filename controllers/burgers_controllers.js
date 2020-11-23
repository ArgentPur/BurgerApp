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

router.post()

router.put()