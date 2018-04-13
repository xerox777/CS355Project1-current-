var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM consumer_credit;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO consumer_credit (fname, lname, credit_score, money_owed) VALUES (?,?,?,?)';
    var queryData = [params.fname, params.lname, params.credit_score, params.money_owed];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};
