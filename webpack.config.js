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
    rules: [{
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        // fallback: 'style-loader',
        use: ['css-loader', 'stylus-loader']
      })
    }, 
    {
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
    new ExtractTextPlugin('style.css')
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