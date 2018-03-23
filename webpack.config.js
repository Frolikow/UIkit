'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let pathToClean = 'public';

const path = require('path');

const common = {
  entry: "./src/home",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle/[name].js"
  },

  module: {
    loaders:
      [
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            use: ['css-loader', 'stylus-loader']
          })
        }, {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }, {
          test: /\.(ttf|eot|woff|woff2|png|jpg|jpeg|svg|gif)$/,
          loader: 'file-loader',
          include: '/images/',
        }

        // {
        //   test: /\.(ttf|eot|woff|woff2|png|jpg|jpeg|svg|gif)$/,
        //   loader: 'url-loader'
        // }
        // ,
        // {
        //   test: /\.(woff|woff2|eot|ttf)$/,
        //   exclude: /node_modules/,
        //   loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
        // }
      ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/base.pug",
      inject: 'head',
      filename: 'html/index.html'
    }),
    new HtmlWebpackPlugin({
      title: "firstPage(UIkit)",
      filename: "pages/firstPage.html",
      template: "src/pages/firstPage/firstPage.pug",
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: "blog(UIkit)",
      filename: "pages/blog.html",
      template: "src/pages/blog/blog.pug",
      inject: 'head'
    }),
    new CleanWebpackPlugin(pathToClean),
    new ExtractTextPlugin('style/style.css'),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    })
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