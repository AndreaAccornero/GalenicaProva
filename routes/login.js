var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');
var bcrypt = require('bcryptjs');

var User = require('../classes/User');

router.get('/', function(req,res){
    res.render('login', {}); 
});

router.post('/', function(req,res){
    dbConn.query('SELECT EMAIL, PSW, NOME, COGNOME, STATO, RANK FROM T_USER T WHERE EMAIL = ?',[req.body.email], (error,rows) => {
        if(error) {
            console.log("Errore DB");
        } else {
            if(rows.length != 0){
                bcrypt.compare(req.body.psw, rows[0].PSW, function (err, check) {
                    // Comparing the original password to encrypted password   
                    if (check) {    //LOGGATO
                        if(req.session.user === undefined) {
                            switch(rows[0]['RANK']) {
                                case 'USR':
                                    req.session.user = new User(rows[0]['EMAIL'],rows[0]['NOME'],rows[0]['COGNOME'],rows[0]['STATO']);
                                break;
                                case 'ADM':
                                    console.log("Caso ADM");
                                break;
                            }
                            res.redirect('/');      
                        }
                    } else {
                        console.log("Email e/o password errata")
                    }
                })
            } else {
                console.log("Email e/o password errata")
                res.redirect('/login')
            }
        }
    });  
});


module.exports = router;