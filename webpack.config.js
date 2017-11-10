'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let pathToClean = 'dist';


const common = {
  entry: "./src/home",
  output: {
    path: __dirname + "/dist",
    filename: "build.js"
  },

  module: {
    loaders: [{
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader']
    }, {
      test: /\.pug$/,
      loader: 'pug-loader',
      options: {
        pretty: true
      }
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.pug",
      inject: 'head'
    }),
    new CleanWebpackPlugin(pathToClean),
    new ExtractTextPlugin('styles.css')
  ]
};

const developmentConfig = {
  devServer: {
    stats: 'minimal',
    port: 9000
  }
};

module.exports = function (env) {
  if (env === 'production') {
    return common;
  }
  if (env === 'development') {
    return Object.assign(
      {},
      common,
      developmentConfig
    )
  }
};