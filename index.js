var express = require('express');
var socket = require('socket.io')


var app = express();

var port =  8000;

var server = app.listen(port, function(){
    console.log('listening to req on port ' + port )
   
});

// static files

app.use(express.static('public'));


// socket set up
var io = socket(server);