/* eslint-disable react/prop-types, function-paren-newline */
import React from 'react';
import NearbyItem from './nearbyItem';

const NearbyItems = ({ type, items, getDistance }) => (
  <div className="nearby-items">
    <div className="section-title">Nearby {type}s</div>
    {items.map(item => (
      <NearbyItem
        key={JSON.stringify(item)}
        type={type}
        item={item}
        getDistance={getDistance}
      />
    ))}
  </div>
);

export default NearbyItems;
