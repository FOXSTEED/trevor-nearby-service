/* eslint-disable react/prop-types */
import React from 'react';
import NearbyItems from './nearbyItems';

const Nearby = props => (
  <div className="nearby">
    <div className="block-header">
      <div className="block-title">
        Nearby
      </div>
    </div>
    <div className="map-block">
      <div className="nearby-map" />
    </div>
    <NearbyItems type="Hotel" items={props.hotels} />
    <NearbyItems type="Restaurant" items={props.restaurants} />
    <NearbyItems type="Attraction" items={props.attractions} />
  </div>
);

export default Nearby;
