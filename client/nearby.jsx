import React from 'react';
import { render } from 'react-dom';
import NearbyItems from './nearbyItems';

class Nearby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div>Map</div>
        <NearbyItems type="Hotel" />
        <NearbyItems type="Restaurant" />
        <NearbyItems type="Attraction" />
      </div>
    );
  }
}

render(<Nearby />, document.getElementById('nearby'));
