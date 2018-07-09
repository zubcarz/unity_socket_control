// Requires
var Gpio = require('onoff').Gpio;
var LED = new Gpio(4, 'out');
var io = require('socket.io')({
	transports: ['websocket'],
});

// Setting
io.attach(4567);
var isEmiting = 1;

// Sockets
io.on('connection', function(socket){

	socket.on('ready', function(){
		socket.emit('button1');
		isEmiting = (!isEmiting) ? 1 : 0;
		LED.writeSync(isEmiting);
	});

})
