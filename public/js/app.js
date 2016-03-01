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

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	//default requires you to constantly refresh the page, here we disbale it as socket.io is real time
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		text: $message.val()
	});

	$message.val('');
}); 
