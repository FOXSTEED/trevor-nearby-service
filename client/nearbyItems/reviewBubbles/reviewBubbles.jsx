/* eslint-disable react/prop-types */
import React from 'react';
import ReviewBubble from './reviewBubble.jsx';
import ReviewHalfBubble from './reviewHalfBubble.jsx';
import ReviewEmptyBubble from './reviewEmptyBubble.jsx';

let lastKey = -1;
const newKey = () => {
  lastKey += 1;
  return lastKey;
};

const ReviewBubbles = ({ rating }) => {
  let fullBubbleCount = Math.floor(rating / 2);
  let halfBubbleCount = rating % 2;
  let emptyBubbleCount = 5 - (fullBubbleCount + halfBubbleCount);

  return (
    <div className="review-bubbles">
      {(new Array(fullBubbleCount))
        .fill('')
        .map(() => <ReviewBubble key={newKey()} />)}

      {(new Array(halfBubbleCount))
        .fill('')
        .map(() => <ReviewHalfBubble key={newKey()} />)}

      {(new Array(emptyBubbleCount))
        .fill('')
        .map(() => <ReviewEmptyBubble key={newKey()} />)}
    </div>
  );
};

export default ReviewBubbles;
