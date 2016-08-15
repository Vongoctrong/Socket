var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(8000);
console.log('dcdc');

app.get('/client/config_html.js',function(req, res, next){
	res.sendFile(__dirname + '/client/config_html.js');
});

app.get('/client/function.js',function(req, res, next){
	res.sendFile(__dirname + '/client/function.js');
});