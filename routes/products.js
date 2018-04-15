var express = require('express');
var router = express.Router();
var products_dal = require('../dal/products_dal');

router.get('/all', function(req, res, next){
    products_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('products/products_view_all', {products: result});
        }
    })
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