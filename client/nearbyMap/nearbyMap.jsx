/* eslint-disable react/prop-types, no-unused-vars, no-undef */
import React from 'react';
import loadJS from './loadJS';
import style from './nearbyMap.css';
import GOOGLE_MAPS_API_KEY from './googlemaps.config';

class NearbyMap extends React.Component {
  componentDidMount() {
    // Google Maps' script will be loaded onto the DOM as a script tag and will run this function,
    //   so it's needed on the global scope
    window.initializeMap = this.initializeMap.bind(this);
    loadJS(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initializeMap`);
  }

  initializeMap() {
    let attraction = { lat: this.props.attraction.latitude, lng: this.props.attraction.longitude };
    let map = new google.maps.Map(window.document.getElementById('map'), {
      zoom: 4,
      center: attraction
    });
    let marker = new google.maps.Marker({
      position: attraction,
      map
    });
  }

  render() {
    return (
      <div className={style.nearbyMap}>
        <div id="map" className={style.map} />
      </div>
    );
  }
}

export default NearbyMap;
