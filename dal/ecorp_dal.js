var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM ecorp;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO Ecorp (partner, stock_trends, street, zip_code, city, state) VALUES (?,?,?,?,?,?)';
    var queryData = [params.partner, params.stock_trends, params.street, params.zip_code, params.city, params.state];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

exports.update = function(params, callback){
    var query = 'UPDATE ecorp SET partner = ?, stock_trends = ?, street = ?, zip_code = ?, city = ?, state = ? WHERE ecorp_id = ?';
    var queryData = [params.partner, params.stock_trends, params.street, params.zip_code, params.city, params.state, params.ecorp_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.delete = function(params, callback) {
    var query = 'DELETE FROM ecorp WHERE ecorp_id = ?';
    var queryData = [params.ecorp_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.getinfo = function(eid, callback) {
    var query = 'CALL ecorp_getinfo(?)';
    var queryData = [eid];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};