var socket = io();

//When connection from front end to server is made, do the following
socket.on('connect', function () {
	console.log('Connected to socket.io server!');
});

//listens for message event being emitted from the server, and does the following
socket.on('message', function (message) {
	console.log('New message:');
	console.log(message.text);
});
