/* eslint-disable react/prop-types */
import React from 'react';
import ReviewBubbles from './reviewBubbles';

const NearbyItem = props => (
  <div className="nearby-item">
    <img className="item-image" alt="" />
    <div className="item-column">
      <div className="item-name">{props.item.name}</div>
      <div className="item-reviews">
        <ReviewBubbles rating={props.item.rating} />
        <div className="review-count">42 reviews</div>
      </div>
      <div className="item-distance">123 miles away</div>
    </div>

  </div>
);

export default NearbyItem;
