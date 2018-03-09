let path = require('path');
const Dotenv = require('dotenv-webpack');

let BUILD_DIR = path.resolve(__dirname, 'public/build');
let APP_DIR = path.resolve(__dirname, 'client');

let config = {
  entry: `${APP_DIR}/nearby.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      }
    ],
  },
  plugins: [
    new Dotenv()
  ],
  node: {
    fs: 'empty'
  },
  resolve: { extensions: ['.js', '.jsx'] }
};

module.exports = config;
