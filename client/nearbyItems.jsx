/* eslint-disable react/prop-types */
import React from 'react';
import NearbyItem from './nearbyItem';

const NearbyItems = props => (
  <div>
    <h2>Nearby {props.type}s</h2>
    <NearbyItem type={props.type} />
  </div>
);

export default NearbyItems;
