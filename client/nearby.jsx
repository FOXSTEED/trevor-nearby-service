/* eslint-disable react/prop-types */
import React from 'react';
import NearbyItems from './nearbyItems';

const distance = require('gps-distance');
const kmToMi = require('km-to-mi');

class Nearby extends React.Component {
  constructor(props) {
    super(props);
    this.getDistance = this.getDistance.bind(this);
  }

  getDistance(latitude, longitude) {
    let km = distance(
      this.props.attraction.latitude,
      this.props.attraction.longitude,
      latitude,
      longitude
    );
    return Math.floor(kmToMi(km));
  }

  render() {
    return (
      <div className="nearby">
        <div className="block-header">
          <div className="block-title">
            Nearby
          </div>
        </div>
        <div className="map-block">
          <div className="nearby-map" />
        </div>
        <NearbyItems
          type="Hotel"
          items={this.props.hotels}
          getDistance={this.getDistance}
        />
        <NearbyItems
          type="Restaurant"
          items={this.props.restaurants}
          getDistance={this.getDistance}
        />
        <NearbyItems
          type="Attraction"
          items={this.props.attractions}
          getDistance={this.getDistance}
        />
      </div>
    );
  }
}

export default Nearby;
