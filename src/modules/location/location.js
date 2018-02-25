'use strict';

function initMap() {
  var element = document.getElementById('map'); //получение дива под карту
  var posLat = element.getAttribute('lat'); //получение координат 
  var posLng = element.getAttribute('lng'); //получение координат

  var geocoder = new google.maps.Geocoder; ////////////

  var options = { //установка настроек карты( зум и координаты центра карты)
    zoom: 12,
    center: { lat: +posLat, lng: +posLng }
  };
  var myMap = new google.maps.Map(element, options); //создание карты в диве element и настройками options

  var markers = [ // массив с координатами всех точек на карте
    {
      coordinates: { lat: +posLat, lng: +posLng },
      image: '/src/modules/location/map-placeholder.svg',
    }
  ];
  for (var i = 0; i < markers.length; i++) { //перебор массива с координатами и вызов функции на каждую метку
    addMarker(markers[i]);
  }

  geocodeLatLng(geocoder, myMap);
  
  function geocodeLatLng(geocoder, myMap) {
    var latlng = { lat: +posLat, lng: +posLng };
    geocoder.geocode({ 'location': latlng }, function (results, status) {
      if (status === 'OK') {
        if (results[1]) {
          document.getElementById('map_address').innerHTML = results[0].formatted_address;
        }
      }
    });
  }

  function addMarker(properties) { // функция установки маркера на карту
    var marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap
    });
    if (properties.image) { //установка своего маркера только при его наличии
      marker.setIcon(properties.image);
    }
  }
}

