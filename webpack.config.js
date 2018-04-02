'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let pathToClean = 'public';

const path = require('path');

const common = {
  context: __dirname + '/src',
  entry: "./home",
  output: {
    path: path.resolve(__dirname, 'public/UIkit'),
    filename: "bundle/[name].js",
    publicPath: '/UIkit/'
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  module: {
    loaders:
      [
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
          use: ['css-loader', 'stylus-loader?resolve url']
          })
        }, {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        }, {
          test: /\.(ttf|eot|woff|woff2|png|jpg|jpeg|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
            }
          ]
        }
      ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./base.pug",
      inject: 'head',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: "firstPage(UIkit)",
      filename: "pages/firstPage.html",
      template: "pages/firstPage/firstPage.pug",
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: "blog(UIkit)",
      filename: "pages/catalog.html",
      template: "pages/catalog/catalog.pug",
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: "blog(UIkit)",
      filename: "pages/productInfo.html",
      template: "pages/catalog/productInfo/productInfo.pug",
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: "blog(UIkit)",
      filename: "pages/contacts.html",
      template: "pages/contacts/contacts.pug",
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: "blog(UIkit)",
      filename: "pages/buyItem.html",
      template: "pages/catalog/buyItem/buyItem.pug",
      inject: 'head'
    }),

    new CleanWebpackPlugin(pathToClean),
    new ExtractTextPlugin('style.css'),
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