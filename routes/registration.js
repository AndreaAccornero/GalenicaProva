var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');
var bcrypt = require('bcryptjs');

router.get('/', function(req,res){
    /*dbConn.query('SELECT * FROM t_user', (error,rows) => {
        if(error) {
            res.render('login',{});
        } else {*/
            res.render('registration', {});
        /*}
    });*/
});

router.post('/', function (req,res) {
    bcrypt.genSalt(10, function (err, Salt) {
        // The bcrypt is used for encrypting password.
        bcrypt.hash(req.body.psw, Salt, function (err, hash) {
            if (err) {
                return console.log('Cannot encrypt');
            }
            dbConn.query('CALL newUser(?,?,?,?,?,?,?)',[req.body.email, hash,req.body.nome,req.body.cognome,req.body.nrAlbo,req.body.nomeFarmacia,req.body.cittaFarmacia], function(err,rows) {
                if(err) {
                    res.render('registrationUser',{data:''});   
                } else {
                    check = Object.values(JSON.parse(JSON.stringify(rows)));
                    if(check[0][0].CHECK == 1){ //registrazione andata a buon fine
                        res.render('login');
                    } else {
                        res.render('registration',{});
                    }
                }
            });
        })
    });
});


module.exports = router;