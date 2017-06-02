/*var http = require('http');
var server = http.createServer(function(req,res){
	res.end("Hello World");
});

server.listen(9999);*/
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 9999;

var bodyParser = require('body-parser');
app.use(bodyParser.json({extended: false}));

app.use(express.static(__dirname + '/public'));

var messages = [];

io.on('connection',function(socket){
	console.log(socket.id + 'is connected');
	socket.emit('init',messages);
	socket.on('write',function(message){
		messages.push(message);
		socket.emit('added',message);
	});
});

app.post('/messages',function(req,res){
	console.log(req.body.name);
	console.log(req.body.message);
	messages.push({name: req.body.name,message:req.body.message})
	console.log(messages);
	res.send('OK');
})

app.get('/messages',function(req,res){
	console.log(messages);
	res.send(messages);
})

server.listen(port,function(){
	console.log(port + "port is Working");
});

