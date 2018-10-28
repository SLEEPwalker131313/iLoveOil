var iLoveOil = {
    init: function() {
        $(function() {
          console.log('init');
          // var socket = io.connect(window.location.hostname + ':5000', {resource: 'api'});
            $('#test_btn').click(function() {
              var socket = io.connect('/');

              console.log('route');
              // socket.emit ('route', [ [32.963, 32.320],[59.437, 59.744] ]);
              socket.emit ('route', [ [59.963, 30.320],[59.437, 24.744] ]);
              socket.on ('messageSuccess', function (data) {
                console.log(1111);
                console.log(data);

              });

            });
          })
    }
};
