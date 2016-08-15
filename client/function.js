function script(socket){
	socket.on(CONNECT_SV, function(data){
		document.write(data);
		socket.emit(CONNECT_CL, 'SERVER received from client');
	});
};