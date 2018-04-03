var express = require('express');
var router = express.Router();

router.get('/all', function(req, res, next){
    res.render('ecorp_view_all');
});

module.exports = router;