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