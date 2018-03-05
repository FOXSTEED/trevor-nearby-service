/* eslint-disable react/prop-types */
import React from 'react';
import NearbyItems from './nearbyItems';

const { getItem, getNearest } = require('./dataHelpers');
const distance = require('gps-distance');
const kmToMi = require('km-to-mi');

const getData = async (id) => {
  let attraction = getItem('attractions', id);
  let hotels = getNearest('hotels', id);
  let restaurants = getNearest('restaurants', id);
  let attractions = getNearest('attractions', id);

  return Promise.all([attraction, hotels, restaurants, attractions]);
};

class Nearby extends React.Component {
  constructor(props) {
    super(props);
    this.getDistance = this.getDistance.bind(this);
    this.state = {
      attraction: {},
      hotels: [],
      restaurants: [],
      attractions: []
    };

    getData(props.id)
      .then(((data) => {
        this.setState({
          attraction: data[0],
          hotels: data[1],
          restaurants: data[2],
          attractions: data[3]
        });
      }));
  }

  getDistance(latitude, longitude) {
    let km = distance(
      this.state.attraction.latitude,
      this.state.attraction.longitude,
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
          items={this.state.hotels}
          getDistance={this.getDistance}
        />
        <NearbyItems
          type="Restaurant"
          items={this.state.restaurants}
          getDistance={this.getDistance}
        />
        <NearbyItems
          type="Attraction"
          items={this.state.attractions}
          getDistance={this.getDistance}
        />
      </div>
    );
  }
}

export default Nearby;
