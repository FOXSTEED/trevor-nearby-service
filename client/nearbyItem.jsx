/* eslint-disable react/prop-types */
import React from 'react';
import ReviewBubbles from './reviewBubbles';

const NearbyItem = () => (
  <div className="nearby-item">
    <img className="item-image" alt="" />
    <div className="item-column">
      <div className="item-name">Lorem ipsum</div>
      <div className="item-reviews"> <ReviewBubbles /> XX reviews</div>
      <div className="item-distance">123 miles away</div>
    </div>

  </div>
);

export default NearbyItem;
