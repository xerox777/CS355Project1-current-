var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Ecorp;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO Ecorp (partner, address, stock_trends, street, zip_code, city) VALUES (?,?,?,?,?,?)';
    var queryData = [params.partner, params.address,  params.stock_trends, params.street, params.zip_code, params.city];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};



