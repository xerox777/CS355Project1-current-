var express = require('express');
var router = express.Router();
var consumer_credit_dal = require('../dal/consumer_credit_dal');

router.get('/all', function(req, res, next){
    consumer_credit_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('consumer_credit/consumer_credit_view_all', {consumer_credit: result});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('consumer_credit/consumer_credit_add');
});

router.get('/insert', function(req, res) {
    consumer_credit_dal.insert(req.query, function(err, result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/consumer_credit/all');//, {Ecorp: result});
        }
    });
});


module.exports = router;