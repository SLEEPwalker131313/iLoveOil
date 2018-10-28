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
  // console.log('socket', socket);
  console.log(111);

  socket.on ('route', function (coord) {
    console.log(coord);
    console.log(333);

    // a = getFillStations(data);

    var fs = require('fs');

    fs.readFile('./fillstations.json', 'utf-8', function(err, data) {
      if (err) {
        console.log('Error while reading file', err)
        return
      }
      json = JSON.parse(data);
      console.log('check');
      console.log(json[1]['$'].lat);
      let i = 0;
      let returnFillStations = [];
      console.log(coord[0][0]);
      json.forEach(function(element) {
        if ( ( ( (element['$'].lat <= coord[1][0])
         && (element['$'].lat > coord[0][0]) ) ||
         ( (element['$'].lat >= coord[1][0])
         && (element['$'].lat < coord[0][0]) ) ) &&
         ( ( (element['$'].lon <= coord[1][1])
         && (element['$'].lon > coord[0][1]) ) ||
         ( (element['$'].lon >= coord[1][1])
         && (element['$'].lon < coord[0][1]) ) ) )
        {
          returnFillStations[i++] = element;
        }

        // features_obj[i++] = {
        //      "type": "Feature", "id": i, "geometry": {"type": "Point", "coordinates": [element.geometry.coordinates[0], element.geometry.coordinates[1]]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}}
      });

      io.sockets.emit ('messageSuccess', returnFillStations);
      // console.log(data[0]['$'].lat);
    });


  });
});

//   function getFillStations(coords){
//
//
//     var fs = require('fs');
//
//     fs.readFile('./fillstations.json', 'utf-8', function(err, data) {
//       if (err) {
//         console.log('Error while reading file', err)
//         return
//       }
//       // console.log(data)
//       console.log(32);
//       console.log(coords);
//       console.log(32321);
//
//       console.log(data[0]);
//       // console.log(data[0]['$'].lat);
// return data;
//     });
//
//
//   }



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




// var fs = require('fs'),
//   xml2js = require('xml2js');
//
// let xml;
//
// var parser = new xml2js.Parser();
// fs.readFile('./rosneft.gpx', 'utf-8', function(err, data) {
//   if (err) {
//     console.log('Error while reading file', err)
//     return
//   }
//   // console.log(data)
//
//     parser.parseString(data, function (err, result) {
//       if (err) {
//         console.log('Error while parsing file', err)
//         return
//       }
//       xml=JSON.stringify(result, null, 2);
//       // var fs = require('fs');
//       // fs.writeFile("fillstations.json", xml, function(err) {
//       //     if (err) {
//       //         console.log(err);
//       //     }
//       // });
//       // console.log(result)
//       console.log(xml.substr(0, 20 * 1000));
//       console.log(11111);
//       console.log(xml[0][gpx]);
//       console.log(3333);
//       console.log('Done');
//     });
// });
