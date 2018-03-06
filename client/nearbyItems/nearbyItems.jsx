/* eslint-disable react/prop-types, function-paren-newline */
import React from 'react';
import NearbyItem from './nearbyItem';
import style from './nearbyItems.css';

const NearbyItems = ({ type, items, getDistance }) => (
  <div className={style.nearbyItems}>
    <div className={style.sectionTitle}>Nearby {type}s</div>
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
