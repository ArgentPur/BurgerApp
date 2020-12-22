const { create } = require("handlebars");
var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryStr = "SELECT * FROM " + tableInput + ";";
        connection.query(queryStr, function(err, result) {
            if(err){throw err;}cb(result)
        });
    }
}

//create()
//update()


module.exports = orm;