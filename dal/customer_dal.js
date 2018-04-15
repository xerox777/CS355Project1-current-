var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM customer;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO customer (fname, lname, address, city, state, zip, subscription_amount, description) VALUES (?,?,?,?,?,?,?,?)';
    var queryData = [params.fname, params.lname, params.address, params.city, params.state, params.zip, params.subscription_amount, params.description];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};
