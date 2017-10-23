const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
});

module.exports = {
  entry: ['babel-polyfill', './src/client/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'artist_search.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          }],
          fallback: 'style-loader',
        }),
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Artist Search',
      template: 'src/client/index.ejs',
      cache: false,
    }),
    new ExtractTextPlugin('styles.css'),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
