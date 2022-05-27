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

app.use('/', indexRouter);
/*******************ROUTER*********************************/

app.listen(port)
