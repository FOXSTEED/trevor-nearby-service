let path = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let BUILD_DIR = path.resolve(__dirname, 'public/build');
let APP_DIR = path.resolve(__dirname, 'client');
let SERVER = path.resolve(__dirname, 'server');

let config = {
  entry: `${APP_DIR}/browser.js`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: [APP_DIR, SERVER],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]"})
      }
    ],
  },
  plugins: [
    new Dotenv(),
    new ExtractTextPlugin("styles.css")     
  ],
  node: {
    fs: 'empty'
  },
  resolve: { extensions: ['.js', '.jsx'] }
};

const common = {
  context: __dirname + '/client',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'env']
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]"})
      },
    ],
  },
  plugins: [
      new Dotenv(),
      new ExtractTextPlugin("styles.css"),
  ],
  node: {
    fs: 'empty'
  },
};

const client = {
  entry: './client.js',
  output: {
    path: __dirname + '/public',
    filename: 'app.js'
  }
};

const server = {
  entry: './server.js',
  target: 'node',
  output: {
    path: __dirname + '/public',
    filename: 'app-server.js',
    libraryTarget: 'commonjs-module'
  }
};

module.exports = [
  Object.assign({}, common, client),
  Object.assign({}, common, server)
];
