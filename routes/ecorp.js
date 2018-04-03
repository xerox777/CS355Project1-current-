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
            res.render('ecorp/ecorp_view_all');
        }
    })
});

router.get('/add', function(req, res) {
    res.render('ecorp_add');
});

module.exports = router;