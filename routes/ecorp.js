var express = require('express');
var router = express.Router();
var ecorp_dal = require('../dal/ecorp_dal');

router.get('/all', function(req, res, next){
    ecorp_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('ecorp/ecorp_view_all', {Ecorp: result});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('ecorp/ecorp_add');
});

router.get('/insert', function(req, res) {
    ecorp_dal.insert(req.query, function(err, result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/ecorp/all');//, {Ecorp: result});
        }
    });
});


router.get('/edit', function(req, res) {
    ecorp_dal.getinfo(req.query.ecorp_id, function(err, result){
        if(err) {res.send(err); }
        else {
            res.render('ecorp/ecorp_update', {
                Ecorp: result[0],
                ecorp_result: result[0][0]
            });
        }
    });
});

router.get('/update', function(req, res) {
    ecorp_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.redirect(302, '/ecorp/all');
        }
    });
});

module.exports = router;