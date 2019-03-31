var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	// ejs render automatically looks in the views folder
	res.render('index');
});

app.listen(port, function() {
	console.log('O app esta rodando em: http://localhost:' + port);
});