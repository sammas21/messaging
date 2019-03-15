var express = require('express');
var app = express();
//var http = require('http')
//var server = http.createServer(app);
var server = app.listen(8080);
var io = require('socket.io').listen(server);
var os =  require('os');
var EventEmitter= require('events').EventEmitter; 

console.log("Hostname : "+os.hostname);
//console.log("loadtime : "+os.loadavg);

//let event =  new EventEmitter();
//let e = new EventEmitter();

app.use(express.static('public'));

//serve the static page
// app.get('/', function(req, res){
//     res.sendFile(__dirname+'/index.html');
//     //e.emit('customevent');

//     // var listener;
//     // listener.on('customevent', function(){
//     //     console.log('event triggred');
//     // });
// });

io.on('connection', function(socket){
    console.log("client connected"); 

    socket.on('chat_message', function(msg){
        io.emit('chat_message', msg);
        console.log(`${socket.id} : ${msg}`);    
    })

    socket.on('disconnect', function(){
        console.log('client disconnected');
    })  
})

//server.listen(8080);

