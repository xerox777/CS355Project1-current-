var express = require('express');
var router = express.Router();
var sql_dal = require('../dal/sql_dal');

router.get('/sql1', function(req, res, next){
    sql_dal.get1(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/1_sql', {sql: result[0]});
            console.log(result);
        }
    });
});

router.get('/sql2', function(req, res, next){
    sql_dal.get2(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/2_sql', {sql: result[0]});
            console.log(result);
        }
    });
});

router.get('/sql3', function(req, res, next){
    sql_dal.get3(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/3_sql', {sql: result[0]});
            console.log(result);
        }
    });
});

router.get('/sql4', function(req, res, next){
    sql_dal.get4(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/4_sql', {sql: result[0]});
            console.log(result);
        }
    });
});


router.get('/sql5', function(req, res, next){
    sql_dal.get5(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/5_sql', {sql: result[0]});
            console.log(result);
        }
    });
});


router.get('/sql6', function(req, res, next){
    sql_dal.get6(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/6_sql', {sql: result[0]});
            console.log(result);
        }
    });
});




router.get('/sql7', function(req, res, next){
    sql_dal.get7(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/7_sql', {sql: result[0]});
            console.log(result);
        }
    });
});


router.get('/sql8', function(req, res, next){
    sql_dal.get8(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/8_sql', {sql: result[0]});
            console.log(result);
        }
    });
});


router.get('/sql9', function(req, res, next){
    sql_dal.get9(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/9_sql', {sql: result[0]});
            console.log(result);
        }
    });
});


router.get('/sql10', function(req, res, next){
    sql_dal.get10(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('sql/10_sql', {sql: result[0]});
            console.log(result);
        }
    });
});






router.get('/add', function(req, res) {
    res.render('products/products_add');
});

router.get('/insert', function(req, res) {
    products_dal.insert(req.query, function(err, result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/products/all');//, {Ecorp: result});
        }
    });
});


module.exports = router;