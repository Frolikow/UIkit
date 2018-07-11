/* global google */

function initMap() {
  const element = document.getElementById('map'); // получение дива под карту
  const posLat = element.getAttribute('lat'); // получение координат
  const posLng = element.getAttribute('lng'); // получение координат

  const geocoder = new google.maps.Geocoder(); // //////////

  const options = { // установка настроек карты( зум и координаты центра карты)
    zoom: 12,
    center: { lat: +posLat, lng: +posLng },
  };
  const myMap = new google.maps.Map(element, options); // создание карты в диве element и настройками options

  const markers = [ // массив с координатами всех точек на карте
    {
      coordinates: { lat: +posLat, lng: +posLng },
      image: require('style/images/map-placeholder.svg'),
    },
  ];

  function addMarker(properties) { // функция установки маркера на карту
    const marker = new google.maps.Marker({
      position: properties.coordinates,
      map: myMap,
    });
    if (properties.image) { // установка своего маркера только при его наличии
      marker.setIcon(properties.image);
    }
  }

  function geocodeLatLng(geocoder) {
    const latlng = { lat: +posLat, lng: +posLng };
    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK') {
        if (results[1]) {
          document.getElementById('map_address').innerHTML = results[0].formatted_address;
        }
      }
    });
  }

  for (let i = 0; i < markers.length; i += 1) { // перебор массива с координатами и вызов функции на каждую метку
    addMarker(markers[i]);
  }

  geocodeLatLng(geocoder);
}
window.initMap = initMap;

