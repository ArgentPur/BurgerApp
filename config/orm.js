var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryStr = "SELECT * FROM " + tableInput + ";";
        connection.query(queryStr, function(err, result) {
            if(err){throw err;}cb(result)
        });
    }
}
selectAll()
insertOne()
updateOne()


module.exports = orm;