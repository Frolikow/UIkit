/* global google */
import $ from 'jquery';

class Location {
  constructor(element) {
    this.$locationBlock = $(element);
    this.$map = this.$locationBlock.find('.js-location__map');
    this.$positionLat = this.$map.attr('lat');
    this.$positionLng = this.$map.attr('lng');
    this.$address = $(element).find('.js-location__address');
    this.initMap();
    this.initData();
  }
  initMap() {
    const latCoords = ((+this.$positionLat) * 1.000015);
    const options = {
      zoom: 15,
      center: { lat: latCoords, lng: +this.$positionLng },
    };
    const myMap = new google.maps.Map(this.$map[0], options);

    function addMarkers(markerData) {
      const marker = new google.maps.Marker({
        position: markerData.coordinates,
        map: myMap,
      });
      if (markerData.image) {
        marker.setIcon(markerData.image);
      }
    }
    const markersList = [{
      coordinates: { lat: +this.$positionLat, lng: +this.$positionLng },
      image: require('style/images/map-placeholder.svg'),
    }];
    markersList.forEach((el, index) => {
      addMarkers(markersList[index]);
    });
  }

  initData() {
    const geocoder = new google.maps.Geocoder();
    const positionLatLng = { lat: +this.$positionLat, lng: +this.$positionLng };
    geocoder.geocode({ location: positionLatLng }, (results, status) => {
      if (status === 'OK') {
        if (results[1]) {
          this.$address.text(results[0].formatted_address);
          this.$address.attr('title', results[0].formatted_address);
        }
      }
    });
  }
}

window.initMap = function () {
  $('.js-location').each(function () {
    new Location(this);
  });
};
