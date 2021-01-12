 // make connection
 var socket = io();

 var socket = io.connect('http://localhost:8000');

 // query dom
 var message = document.getElementById('message');
 var handle = document.getElementById('handle');
 var btn = document.getElementById('send');
 var output = document.getElementById('output');

// Emit events

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value,
    } )
    
})

//Listen for events
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';

})