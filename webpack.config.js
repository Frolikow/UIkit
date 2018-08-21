'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let pathToClean = 'public';

const path = require('path');
const { PUBLIC_PATH } = process.env;

const common = {
  context: __dirname + '/src',
  entry: "./home",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle/[name]-[hash].js",
    publicPath: '/' + (PUBLIC_PATH ? (PUBLIC_PATH + '/') : '')
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  module: {
    loaders:
      [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true
          }
        },
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            use: ['css-loader', 'stylus-loader?resolve url']
          })
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
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
      filename: 'demo.html'
    }),
    new HtmlWebpackPlugin({
      title: "first-page(UIkit)",
      inject: 'head',
      filename: "pages/first-page.html",
      template: "pages/first-page/first-page.pug",
    }),
    new HtmlWebpackPlugin({
      title: "blog(UIkit)",
      inject: 'head',
      filename: "pages/catalog.html",
      template: "pages/catalog/catalog.pug",
    }),
    new HtmlWebpackPlugin({
      title: "blog(UIkit)",
      inject: 'head',
      filename: "pages/product-info.html",
      template: "pages/catalog/product-info/product-info.pug",
    }),
    new HtmlWebpackPlugin({
      title: "blog(UIkit)",
      inject: 'head',
      filename: "pages/contacts.html",
      template: "pages/contacts/contacts.pug",
    }),
    new HtmlWebpackPlugin({
      title: "blog(UIkit)",
      inject: 'head',
      filename: "pages/buy-item.html",
      template: "pages/catalog/buy-item/buy-item.pug",
    }),

    new CleanWebpackPlugin(pathToClean),
    new ExtractTextPlugin('style-[hash].css'),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    })
  ]
};

const developmentConfig = {
  devServer: {
    stats: 'minimal',
    port: 9000,
    contentBase: path.resolve(__dirname, 'public')
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