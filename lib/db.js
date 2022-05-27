const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b013386b33cedc',
    password: 'ec995f84',
    database : 'heroku_310d4ab803c7014'
})

connection.connect(function(error){
	if(!!error) {
		console.log('Error DB');
	} else {
		console.log('Connected to DB..!');
	}
});

module.exports = connection;