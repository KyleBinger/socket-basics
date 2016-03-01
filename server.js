var PORT = process.env.PORT || 3000;
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

//When connection from server to front end, do the following
io.on('connection', function (socket) {
	console.log('User connected via socket.io!');

	socket.on('message', function (message) {
		console.log('Message received: ' + message.text);


		message.timestamp = moment().valueOf();

		//sends it to every single person including the sender
		io.emit('message', message);
		//sends it to every single person but the sender
		//socket.broadcast.emit('message', message);
	});

	//emit event
	socket.emit('message', {
		text: 'Welcome to the chat application!',
		timestamp: moment().valueOf()
	});
});


//lets you listen to the port
http.listen(PORT, function () {
	console.log('Server started!');
});










