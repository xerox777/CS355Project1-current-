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

router.get('/edit', function(req, res) {
    customer_dal.getinfo(req.query.ecorp_id, function(err, result){
        if(err) {res.send(err); }
        else {
            res.render('customer/customer_update', {
                customer: result[0],
                ecorp_result: result[0][0]
            });
        }
    });
});

router.get('/update', function(req, res) {
    customer_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.redirect(302, '/customer/all');
        }
    });
});


router.get('/delete', function(req, res){
    customer_dal.delete(req.query, function(err, result){
        if(err){
            res.send(err);
        }
        else {
            res.redirect(302, '/customer/all');
        }
    });
});


module.exports = router;