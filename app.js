var express = require('express')
var app = express()
var path = require('path');

var port = process.env.PORT || 3000 

/****************************************************/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));
/****************************************************/


/*******************ROUTER*********************************/
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registrationRouter = require('./routes/registration')

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/registration',registrationRouter);

/*******************ROUTER*********************************/

app.listen(port)

module.exports = app;