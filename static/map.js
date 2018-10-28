DG.then(function() {
    var map;

    map = DG.map('map', {
        center: [54.98, 82.89],
        zoom: 13
    });
    console.log(map);
    console.log(DG);

    map.locate({setView: true, watch: true})
        .on('locationfound', function(e) {
            DG.marker([e.latitude, e.longitude]).addTo(map);
        })
        .on('locationerror', function(e) {
            DG.popup()
              .setLatLng(map.getCenter())
              .setContent('Доступ к определению местоположения отключён')
              .openOn(map);
        });
        // DG.get(query, {
        //   types: [ 'house'],
        //   limit: 0,
        //   // Обработка успешного поиска
        //   success: function(geocoderObjects) {
        //       // Сброс результатов прошлого поиска:
        //       // Обходим в цикле все полученные геообъекты:
        //
                  // Получаем необходимые данные о геообъекте и устанавливаем желаемый формат вывода информации

    // map.geocoder.get('Новосибирск', {
    //      types: ['city', 'settlement', 'district'],
    //      limit: 10,
    //      // Обработка успешного поиска
    //      success: function(geocoderObjects) {
    //        console.log(1);
    //      },
    //     // Обработка ошибок
    //     failure: function(code, message) {
    //         alert(code + ' ' + message);
    //     }
    // });
});
//
// DG.geocoder.get('Новосибирск', {
//      types: ['city', 'settlement', 'district'],
//      limit: 10,
//      // Обработка успешного поиска
//      success: function(geocoderObjects) {
//          // Обходим циклом все полученные геообъекты
//          for(var i = 0, len = geocoderObjects.length; i < len; i++) {
//              var geocoderObject = geocoderObjects[i];
//
//              // Получаем маркер из геообъекта с помощью метода getMarker.
//              // Первый параметр - иконка маркера, второй параметр - функция, которая сработает при клике на маркер
//              var markerIcon = new DG.Icon('http://api.2gis.ru/upload/images/2314.png', new DG.Size(53, 25));
//              var marker = geocoderObject.getMarker(markerIcon, (function(geocoderObject) {
//                  return function () {
//                      var info = '';
//
//                      // Основная информация о геообъекте
//                      info += 'Type: ' + geocoderObject.getType() + '\n';
//                      info += 'Name: ' + geocoderObject.getName() + '\n';
//                      info += 'Short name: ' + geocoderObject.getShortName() + '\n';
//
//                      // Дополнительная информация о геообъекте
//                      var attributes = geocoderObject.getAttributes();
//                      for (var attribute in attributes) {
//                          if (attributes.hasOwnProperty(attribute)) {
//                               info += attribute + ': ' + attributes[attribute] + '\n';
//                           }
//                      }
//
//                      // Географические координаты центра геообъекта
//                      var centerGeoPoint = geocoderObject.getCenterGeoPoint();
//                      info += 'Longitude: ' + centerGeoPoint.getLon() + '\n';
//                      info += 'Latitude: ' + centerGeoPoint.getLat();
//
//                      alert (info);
//                  }
//              })(geocoderObject));
//
//              myMap.markers.add(marker);
//          }
//      },
//      // Обработка ошибок
//      failure: function(code, message) {
//          alert(code + ' ' + message);
//      }
//  });
