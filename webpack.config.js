'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
  entry: "./public/home",
  output: {
    path: __dirname + "/public",
    filename: "build.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.pug"
    })
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

