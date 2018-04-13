var express = require('express');
var router = express.Router();
var employee_dal = require('../dal/employee_dal');

router.get('/all', function(req, res, next){
    employee_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('employee/employee_view_all', {employee: result});
        }
    })
});

router.get('/add', function(req, res) {
    res.render('employee/employee_add');
});

router.get('/insert', function(req, res) {
    employee_dal.insert(req.query, function(err, result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/employee/all');//, {Ecorp: result});
        }
    });
});


module.exports = router;