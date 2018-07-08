var io = require('socket.io')({
	transports: ['websocket'],
});

io.attach(4567);

io.on('connection', function(socket){

	socket.on('ready', function(){
		socket.emit('button1');
	});

})
