
var connection = require("../config/connection.js");



function printQM(num) {
    var arr= [];
    for(i= 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};

function objSql(ob) {
    var arr= [];
    for(var key in ob) {
        arr.push(key + "=" + ob[key]);
    }
};

var orm = {
    all: function(tableInput, cb) {
        var queryStr = "SELECT * FROM " + tableInput + ";";
        connection.query(queryStr, function(err, result) {
            if(err){throw err;}cb(result)
        });
    },
    create: function (table, cols, vals, cb) {
        var qryString = "INSERT INTO " + table;

        qryString += " (";
        qryString += cols.to.String();
        qryString += ") ";
        qryString += "VALUES (";
        qryString += printQM(vals.length);
        qryString += ") ";
        console.log(qryString);
        // "INSERT INTO " + TABLE + "(burger_name) VALUES (" + vals + ")"

        connection.query("INSERT INTO " + TABLE + "(burger_name) VALUES (" + vals + ")", vals, cols, function(result) {
            cb(result);
        });
    },
    update: function(table, objVals, status, cb) {
        var qryString = "UPDATE " + table;

        qryString += "SET ";
        qryString += objSql(objVals);
        qryString += "WHERE ";
        qryString += status;
        console.log(qryString);

        connection.query(qryString, function(result) {
            cb(result);
        })

    }
};


module.exports = orm;