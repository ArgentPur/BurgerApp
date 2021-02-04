const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(condition, cb) {
       var condition = "id=" + id;
       orm.update("burgers", {
           devoured: true
       }, condition, cb);
        
    }
};

module.exports = burger;