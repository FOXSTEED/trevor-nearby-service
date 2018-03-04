/* eslint-disable react/prop-types, function-paren-newline */
import React from 'react';
import NearbyItem from './nearbyItem';

const NearbyItems = props => (
  <div className="nearby-items">
    <div className="section-title">Nearby {props.type}s</div>
    {props.items.map(item => (
      <NearbyItem
        key={JSON.stringify(item)}
        type={props.type}
        item={item}
        getDistance={props.getDistance}
      />
    ))}
  </div>
);

export default NearbyItems;
