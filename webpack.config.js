'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let pathToClean = 'dist';


module.exports = {
  entry: "./src/home",
  output: {
    path: __dirname + "/dist",
    filename: "build.js"
  },

  module: {

    loaders: [{
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'stylus-loader')
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

