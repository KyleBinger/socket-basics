var socket = io();

//When connection from front end to server is made, do the following
socket.on('connect', function () {
	console.log('Connected to socket.io server!');
});