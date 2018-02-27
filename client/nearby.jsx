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
      <div className="nearby">
        <div className="block-header">
          <div className="block-title">
            Nearby
          </div>
        </div>
        <div className="map-block">
          <div className="nearby-map" />
        </div>
        <NearbyItems type="Hotel" />
        <NearbyItems type="Restaurant" />
        <NearbyItems type="Attraction" />
      </div>
    );
  }
}

render(<Nearby />, document.getElementById('nearby'));
