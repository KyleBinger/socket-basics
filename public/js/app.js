var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' joined ' + room);

// Update h1 tag
jQuery('.room-title').text(room); 


//When connection from front end to server is made, do the following
socket.on('connect', function () {
	console.log('Connected to socket.io server!');
	//allows user to join specific room on front end
	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

//listens for message event being emitted from the server, and does the following
socket.on('message', function (message) {
	var momentTimestamp = moment.utc(message.timestamp);
	var $message = jQuery('.messages');
	console.log('New message:');
	console.log(message.text);


	$message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('h:mm a') + '</strong></p>');
	$message.append('<p>' + message.text + '</p>');

});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
	//default requires you to constantly refresh the page, here we disbale it as socket.io is real time
	event.preventDefault();

	var $message = $form.find('input[name=message]');

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val('');
}); 
