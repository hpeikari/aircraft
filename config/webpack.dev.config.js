'use strict';

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: false,
      allowAsyncCycles: false,
      cwd: process.cwd(),
    }),
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  devServer: {
    compress: true,
    open: true,
    port: 5500
  }
});
