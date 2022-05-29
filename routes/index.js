var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

router.get('/', function(req,res){
    if(req.session.user !== undefined) {    //LOGGATO
        res.render('',{user: req.session.user})
    } else {    //NON LOGGATO
        res.render('', {user: null})
    }
})

module.exports = router;