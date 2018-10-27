var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3333);
// WARNING: app.listen(80) will NOT work here!

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('socket', socket);
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});



//
// var app = require('express')();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
//
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });
//
// server.listen(8080);
//
// // var io = require('socket.io');
// // var http = require('http');
// //
// // var app = http .createServer();
// // var io = io.listen(app);
// // app.listen(8080);
// //
// io.on('someEvent', function(socket) {
//   console.log(111);
//   // console.log('check');
//     // socket.on
//       // socket.on('test', function(){
//       // console.log('tested');
//       // });
// });
// //
// // // var express = require('express');
// // // var http = require('http');
// // // var path = require('path');
// // // var socketIO = require('socket.io');
// // // var app = express();
// // // var server = http.Server(app);
// // // var io = socketIO(server);
// // // var PORT = 5000;
// // // app.set('port', PORT);
// // // app.use('/static', express.static(__dirname + '/static'));
// // //
// // // app.get('/', function(request, response) {
// // //     response.sendFile(path.join(__dirname, 'index.html'));
// // // });
// // //
// // // var util = require('util'), EventEmitter = require('events').EventEmitter;
// // //
// // // var iLoveOil = module.exports = function() {
// // //     // Init
// // //     EventEmitter.call(this);
// // // }
// // //
// // // util.inherits(iLoveOil, EventEmitter);
// // //
// // // server.listen(PORT, function() {
// // //     console.log('Starting server on port 5000');
// // // });
// // //
// // // io.on('connection', function(socket) {
// // //   console.log("wops");
// // //   socket.on('test', function(){
// // //   console.log('tested');
// // //   });
// // // });
