var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

router.get('/', function(req,res){
    /*dbConn.query('SELECT * FROM t_user', (error,rows) => {
        if(error) {
            res.render('login',{});
        } else {*/
            res.render('login', {});
        /*}
    });*/
});


module.exports = router;