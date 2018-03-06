/* eslint-disable react/prop-types */
import React from 'react';
import ReviewBubbles from './reviewBubbles/reviewBubbles';
import style from './nearbyItem.css';

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
  <div className={style.nearbyItem}>
    <img className={style.itemImage} alt="" src={item.image_url} />
    <div className={style.itemColumn}>
      <div className={style.itemName}>{item.name}</div>
      <div className={style.itemReviews}>
        <ReviewBubbles rating={item.rating} />
        <div className={style.reviewCount}>{renderReviews(item.num_reviews)}</div>
      </div>
      <div className={style.itemDistance}>
        {renderMiles(getDistance(item.latitude, item.longitude))}
      </div>
    </div>

  </div>
);

export default NearbyItem;
