import React from 'react';
import { render } from 'react-dom';

class Nearby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <p>This is a react app</p>;
  }
}

render(<Nearby />, document.getElementById('nearby'));
