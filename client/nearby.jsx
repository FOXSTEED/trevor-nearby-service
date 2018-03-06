/* eslint-disable react/prop-types */
import React from 'react';
import NearbyItems from './nearbyItems/nearbyItems';
import NearbyMap from './nearbyMap/nearbyMap';
import style from './nearby.css';

const { getData } = require('./dataHelpers');
const distance = require('gps-distance');
const kmToMi = require('km-to-mi');

class Nearby extends React.Component {
  constructor(props) {
    super(props);
    this.getDistance = this.getDistance.bind(this);
    this.state = {
      attraction: {},
      hotels: [],
      restaurants: [],
      attractions: [],
      dataLoaded: false
    };

    getData(props.id)
      .then(((data) => {
        this.setState({
          attraction: data[0],
          hotels: data[1],
          restaurants: data[2],
          attractions: data[3],
          dataLoaded: true
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
      <div className={`nearby ${style.nearby}`}>
        <div className={style.blockHeader}>
          <div className={style.blockTitle}>
            Nearby
          </div>
        </div>
        <div className={style.mapBlock}>
          {this.state.dataLoaded &&
            <NearbyMap attraction={this.state.attraction} />}
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
