var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM CUS;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO customer (ecorp_id, fname, lname, address, city, state, zip, subscription_amount, description) VALUES (?,?,?,?,?,?,?,?,?);';
    var queryData = [params.ecorp_id, params.fname,  params.lname, params.address, params.city, params.state, params.zip, params.subscription_amount, params.description];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.update = function(params, callback){
    var query = 'UPDATE customer SET ecorp_id = ?, fname = ?, lname = ?, address = ?, city = ?, state = ?, zip = ?, subscription_amount = ?, description = ? WHERE customer_id = ?';
    var queryData = [params.ecorp_id, params.fname, params.lname, params.address, params.city, params.state, params.zip, params.subscription_amount];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.delete = function(params, callback) {
    var query = 'DELETE FROM customer WHERE customer_id = ?';
    var queryData = [params.customer_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.getinfo = function(cid, callback) {
    var query = 'CALL customer_getinfo(?)';
    var queryData = [cid];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};