var express = require('express');
var router = express.Router();
var customer_dal = require('../dal/customer_dal');

router.get('/all', function(req, res, next){
    customer_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('customer/customer_view_all', {customer: result});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('customer/customer_add');
});

router.get('/insert', function(req, res) {
    customer_dal.insert(req.query, function(err, result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/customer/all');//, {Ecorp: result});
        }
    });
});


module.exports = router;