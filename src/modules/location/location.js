/* global google */
import $ from 'jquery';

class Location {
  constructor(element) {
    this.$locationBlock = $(element);
    this.$map = $(this.$locationBlock).find('.location__map');
    this.$positionLat = $(this.$map).attr('lat');
    this.$positionLng = $(this.$map).attr('lng');
    this.$address = $(element).find('.location-menu__address');
    this.initMap();
    this.initData();
  }
  initMap() {
    const options = {
      zoom: 15,
      center: { lat: +this.$positionLat, lng: +this.$positionLng },
    };
    const myMap = new google.maps.Map(this.$map[0], options);
    const markers = [{
      coordinates: { lat: +this.$positionLat, lng: +this.$positionLng },
      image: require('style/images/map-placeholder.svg'),
    }];
    for (let i = 0; i < markers.length; i += 1) {
      const marker = new google.maps.Marker({
        position: markers[i].coordinates,
        map: myMap,
      });
      if (markers[i].image) {
        marker.setIcon(markers[i].image);
      }
    }
  }

  initData() {
    const geocoder = new google.maps.Geocoder();
    const positionLatLng = { lat: +this.$positionLat, lng: +this.$positionLng };
    geocoder.geocode({ location: positionLatLng }, (results, status) => {
      if (status === 'OK') {
        if (results[1]) {
          $(this.$address).text(results[0].formatted_address);
        }
      }
    });
  }
}

window.initMap = function () {
  $('.location').each(function () {
    new Location(this);
  });
};
