/* eslint-disable react/prop-types */
import React from 'react';
import ReviewBubble from './reviewBubble';
import ReviewHalfBubble from './reviewHalfBubble';
import ReviewEmptyBubble from './reviewEmptyBubble';

const ReviewBubbles = () => (
  <div className="review-bubbles">
    <ReviewBubble />
    <ReviewHalfBubble />
    <ReviewEmptyBubble />
  </div>
);

export default ReviewBubbles;
