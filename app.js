var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var DATA = require('./config/config_app.js');

server.listen(DATA.PORT);

app.get('/',function(req, res){
	res.sendFile(__dirname + '/index.html');
});
console.log(DATA.PORT);

io.on(DATA.CONNECTION,function(socket){
	socket.emit(DATA.CONNECT_SV, 'Connect to Client, send data to client');
	socket.on(DATA.CONNECT_CL, function(data){
		console.log(data);
	});
});
