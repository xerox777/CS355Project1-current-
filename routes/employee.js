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

router.get('/edit', function(req, res) {
    employee_dal.getinfo(req.query.employee_id, function(err, result){
        if(err) {res.send(err); }
        else {
            res.render('employee/employee_update', {
                employee: result[0],
                employee_result: result[0][0]
            });
        }
    });
});

router.get('/update', function(req, res) {
    employee_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.redirect(302, '/employee/all');
        }
    });
});


router.get('/delete', function(req, res){
    employee_dal.delete(req.query, function(err, result){
        if(err){
            res.send(err);
        }
        else {
            res.redirect(302, '/employee/all');
        }
    });
});



module.exports = router;