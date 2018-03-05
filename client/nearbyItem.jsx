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

const NearbyItem = ({ item, getDistance }) => (
  <div className="nearby-item">
    <img className="item-image" alt="" src={item.image_url} />
    <div className="item-column">
      <div className="item-name">{item.name}</div>
      <div className="item-reviews">
        <ReviewBubbles rating={item.rating} />
        <div className="review-count">{renderReviews(item.num_reviews)}</div>
      </div>
      <div className="item-distance">
        {renderMiles(getDistance(item.latitude, item.longitude))}
      </div>
    </div>

  </div>
);

export default NearbyItem;
