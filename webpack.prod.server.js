const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = {
  target: 'node',
  entry: [
    path.join(__dirname, './src/server/app.js')
  ],
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'app.js',
  },
  module: {
    loaders: [

    ],
  },
  resolve: {

  },
  plugins: [

  ],
};
