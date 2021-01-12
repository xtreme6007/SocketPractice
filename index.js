var express = require('express');


var app = express();

var port =  8000;

var server = app.listen(port, function(){
    console.log('listening to req on port ' + port )
   
});

// static files

app.use(express.static('public'));

