var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Product;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    //var query = 'INSERT INTO products (computer, tablet, phone, other, ecorp_id) VALUES (?,?,?,?,?)';
    var query = 'call insert_product(?, ?, ?, ?, ?)';
    var queryData = [params.computer,  params.tablet, params.phone, params.other, params.ecorp_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};
