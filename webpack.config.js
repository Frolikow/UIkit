'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
let pathToClean = 'dist';


module.exports = {
  entry: "./src/home",
  output: {
    path: __dirname + "/dist",
    filename: "build.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.pug",
      inject: 'head'
    }),
    new CleanWebpackPlugin(pathToClean)
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  }
};

