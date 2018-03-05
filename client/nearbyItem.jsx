/* eslint-disable react/prop-types */
import React from 'react';
import ReviewBubbles from './reviewBubbles';

const renderReviews = (numReviews) => {
  if (numReviews === 1) {
    return '1 review';
  }
  return `${numReviews} reviews`;
};

const renderMiles = (miles) => {
  if (miles === 1) {
    return '1 mile away';
  }
  return `${miles} miles away`;
};

const NearbyItem = props => (
  <div className="nearby-item">
    {console.log(props.item)}
    <img className="item-image" alt="" src={props.item.image_url} />
    <div className="item-column">
      <div className="item-name">{props.item.name}</div>
      <div className="item-reviews">
        <ReviewBubbles rating={props.item.rating} />
        <div className="review-count">{renderReviews(props.item.num_reviews)}</div>
      </div>
      <div className="item-distance">
        {renderMiles(props.getDistance(props.item.latitude, props.item.longitude))}
      </div>
    </div>

  </div>
);

export default NearbyItem;
