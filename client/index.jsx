import React from 'react';
import { render } from 'react-dom';
import Nearby from './nearby';

const url = require('url');

let id =
  parseInt(
    url.parse(window.location.href)
      .path
      .split('/')[2]
    , 10
  );

render(<Nearby
  id={id}
/>, document.getElementById('nearby'));

