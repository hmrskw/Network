/*var http = require('http');
var server = http.createServer(function(req,res){
	res.end("Hello World");
});

server.listen(9999);*/
var express = require('express');
var app = express();
var port = 9999;

app.use(express.static(__dirname + '/public'));

/*app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.htm');
});
app.get('/about',function(req,res){
	res.send("What on earth are you talking aboit?");
});
*/

app.get('/scream',function(req,res){
	res.send('ギャーーーーーー');
});

app.get('/now',function(req,res){
	res.send(new Date());
});

app.listen(port,function(){
	console.log(port + "port is Working");
});

