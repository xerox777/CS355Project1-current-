var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM EMP;';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.insert = function(params, callback) {
    var query = 'INSERT INTO employee (ecorp_id, ssn, fname, lname, street, city, zip) VALUES (?,?,?,?,?,?,?)';
    var queryData = [params.ecorp_id, params.ssn,  params.fname, params.lname, params.street, params.city, params.zip];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });

};


exports.update = function(params, callback){
    var query = 'UPDATE employee SET ecorp_id = ?, ssn = ?, fname = ?, lname = ?, street = ?, city = ?, zip = ? WHERE employee_id = ?';
    var queryData = [params.ecorp_id, params.ssn, params.fname, params.lname, params.street, params.city, params.zip, params.employee_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);

    });
};

exports.delete = function(params, callback) {
    var query = 'DELETE FROM employee WHERE employee_id = ?';
    var queryData = [params.employee_id];
    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};


exports.getinfo = function(eid, callback) {
    var query = 'CALL employee_getinfo(?)';
    var queryData = [eid];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};