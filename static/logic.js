var iLoveOil = {
    // init: function() {
    //     $(function() {
    //       console.log('init');
    //       // var socket = io.connect(window.location.hostname + ':5000', {resource: 'api'});
    //       // var socket = io.connect(window.location.hostname, {port: 5000});
    //         $('#test_btn').click(function() {
    //           console.log('clicked');
    //           var socket = io.connect(window.location.hostname, {port: 8080});
    //           console.log(socket);
    //           socket.emit('test', function(){
    //             console.log(222);
    //           });
    //         });
    //         //
    //         // socket.on('connect', function () {
    //         //     $('#status').html('connected');
    //         // });
    //       })
    // }
};

var socket = io.connect('/');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
