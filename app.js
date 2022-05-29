var express = require('express')
var app = express()
var path = require('path');
var session = require('express-session');

var port = process.env.PORT || 3000 

/****************************************************/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use(session({
    cookie: { maxAge: 3600000 },
    store: new session.MemoryStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}))
/****************************************************/


/*******************ROUTER*********************************/
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registrationRouter = require('./routes/registration');
var logoutRouter = require('./routes/logout');

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/registration',registrationRouter);
app.use('/logout',logoutRouter);

/*******************ROUTER*********************************/

app.listen(port)

module.exports = app;