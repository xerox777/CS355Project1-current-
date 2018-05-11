var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.get1 = function(callback) {
    var query = 'call 1_sql()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};



