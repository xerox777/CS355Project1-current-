var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM ecorp;';

    connection.query(query, function(err, result){
        callback(err, result);
    });

exports.insert = function(params, callback) {
    var query = 'INSERT INTO ecorp (address, stock_trends, street, zip_code, city) VALUES (?,?,?,?,?)';
    var queryData = [params.address,  params.stock_trends, params.street, params.zip_code, params.city];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};

};

