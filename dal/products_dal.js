var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM products;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO employee (computer, tablet, phone, other) VALUES (?,?,?,?)';
    var queryData = [params.computer,  params.tablet, params.phone, params.other];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};
