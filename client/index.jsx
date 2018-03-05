import React from 'react';
import { render } from 'react-dom';
import Nearby from './nearby';
import dh from './dataHelpers';

const url = require('url');

let getData = async (id) => {
  let attraction = dh.getItem('attractions', id);
  let hotels = dh.getNearest('hotels', id);
  let restaurants = dh.getNearest('restaurants', id);
  let attractions = dh.getNearest('attractions', id);

  return Promise.all([id, attraction, hotels, restaurants, attractions]);
};

let id =
  parseInt(
    url.parse(window.location.href)
      .path
      .split('/')[2]
    , 10
  );

getData(id)
  .then((data) => {
    render(<Nearby
      id={data[0]}
      attraction={data[1]}
      hotels={data[2]}
      attractions={data[3]}
      restaurants={data[4]}
    />, document.getElementById('nearby'));
  });
