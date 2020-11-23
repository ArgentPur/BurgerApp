const orm = require("../config/orm.js");

const burger = {
    all: function(cb) {
        orm.all("burgers_db", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers_db", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers_db", objColsVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;