var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

router.get('/', function(req,res){
    dbConn.query('SELECT * FROM t_user', (error,rows) => {
        if(error){
            res.render('', {})
        }else {
            console.log("SONO QUI INDEX")
            res.render('', {rows})
        } 
    })  
})

module.exports = router;