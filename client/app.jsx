import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <p>This is a react app</p>;
  }
}

render(<App />, document.getElementById('app'));
