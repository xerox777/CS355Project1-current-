var mysql = require('mysql');
var db = require('./db_connection.js');

var connection = mysql.createConnection(db.config);

exports.get1 = function(callback) {
    var query = 'call 1_sql()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};


exports.get2 = function(callback) {
    var query = 'call sql2()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.get3 = function(callback) {
    var query = 'call sql3()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.get4 = function(callback) {
    var query = 'call sql4()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.get5 = function(callback) {
    var query = 'call sql5()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.get6 = function(callback) {
    var query = 'call sql6()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};



exports.get7 = function(callback) {
    var query = 'call sql7()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};

exports.get8 = function(callback) {
    var query = 'call sql8()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};



exports.get9 = function(callback) {
    var query = 'call sql9()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};


exports.get10 = function(callback) {
    var query = 'call sql10()';

    connection.query(query, function (err, result) {
        callback(err, result);
    });
};


