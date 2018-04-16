var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM CON;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO consumer_credit (fname, lname, credit_score, amount_owed, ecorp_id) VALUES (?,?,?,?,?)';
    var queryData = [params.fname, params.lname, params.credit_score, params.amount_owed, params.ecorp_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};
