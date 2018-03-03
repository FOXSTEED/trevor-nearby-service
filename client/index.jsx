import React from 'react';
import { render } from 'react-dom';
import Nearby from './nearby';
import dh from './dataHelpers';

let getData = () => {
  let id = 12;

  let attraction = dh.getItem('attractions', id);
  let hotels = dh.getNearest('hotels', id);
  let restaurants = dh.getNearest('restaurants', id);
  let attractions = dh.getNearest('attractions', id);

  return Promise.all([id, attraction, hotels, restaurants, attractions]);
};

getData()
  .then((data) => {
    render(<Nearby
      id={data[0]}
      attraction={data[1]}
      hotels={data[2]}
      attractions={data[3]}
      restaurants={data[4]}
    />, document.getElementById('nearby'));
  });
