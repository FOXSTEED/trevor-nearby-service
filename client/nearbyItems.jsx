/* eslint-disable react/prop-types */
import React from 'react';
import NearbyItem from './nearbyItem';

const NearbyItems = props => (
  <div className="nearby-items">
    <div className="section-title">Nearby {props.type}s</div>
    <NearbyItem type={props.type} />
    <NearbyItem type={props.type} />
  </div>
);

export default NearbyItems;
