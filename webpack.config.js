let path = require('path');

let BUILD_DIR = path.resolve(__dirname, 'public/build');
let APP_DIR = path.resolve(__dirname, 'client');

let config = {
  entry: `${APP_DIR}/nearby.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'nearby.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
