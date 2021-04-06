'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');

const srcPath = fileName => path.resolve('.', 'src', fileName);

const htmlPlugin = (outputHtmlFile, chunks) => new HtmlWebpackPlugin({
  template: srcPath('index.html'),
  chunks: [chunks],
  filename: path.join('..', 'build', outputHtmlFile),
  favicon: path.join(__dirname, '../src/favicon.ico'),
  hash: true,
  minify: {
    minifyJS: true,
    minifyCSS: true,
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true
  }
});

const foldersList = [
  path.resolve(__dirname, '..', 'src')
];

const babelLoader = {
  test: /\.js$/,
  loader: 'babel-loader',
  include: foldersList
};

const svgLoader = {
  test: /\.svg$/,
  oneOf: [{
    // load svg modules to be displayed as icons/images
    include: foldersList,
    loader: 'svg-react-loader'
  }, {
    // load svg files normally (eg. fonts, etc)
    exclude: foldersList,
    loader: 'url-loader',
    options: {
      limit: 200000 // file size limit of 200 KB
    }
  }]
};

const fontLoader = {
  test: /\.(woff|woff2|eot|ttf|gif)$/,
  include: /node_modules/,
  loader: 'url-loader',
  options: {
    limit: 200000 // file size limit of 200 KB
  }
};

const imgLoader = {
  test: /\.(png|jpg|jpeg|gif|ico)$/,
  include: /assets/,
  loader: 'url-loader',
  options: {
    limit: 2000000 // file size limit of 2 MB
  }
};

const cssLoader = isSourceMapEnabled => ({
  test: /\.(css)$/,
  include: /node_modules/,
  use: [{
    loader: MiniCssExtractPlugin.loader
  }, {
    loader: 'css-loader',
    options: {
      sourceMap: isSourceMapEnabled
    }
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: isSourceMapEnabled,
      postcssOptions: {
        config: path.join(__dirname, 'postcss.config.js')
      }
    }
  }]
});

const scssLoader = isSourceMapEnabled => ({
  test: /\.(scss)$/,
  include: foldersList,
  use: [{
    loader: MiniCssExtractPlugin.loader
  }, {
    loader: 'css-loader',
    options: {
      sourceMap: isSourceMapEnabled,
      importLoaders: 2,
      modules: {
        mode: 'local',
        localIdentName: '[name]__[local]__[contenthash:base64:5]'
      }
    }
  }, {
    loader: 'postcss-loader',
    options: {
      sourceMap: isSourceMapEnabled,
      postcssOptions: {
        config: path.join(__dirname, 'postcss.config.js'),
        plugins: () => [
          postcssPresetEnv()
        ]
      }
    }
  }, {
    loader: 'sass-loader',
    options: { sourceMap: isSourceMapEnabled }
  }]
});

// The common webpack configuration and settings
module.exports = {
  entry: {
    app: srcPath('index.js')
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    publicPath: '/',
    filename: '[name]__[contenthash].js'
  },
  target: ['web', 'es5'],
  plugins: [
    htmlPlugin('index.html', 'app'),
    new MiniCssExtractPlugin({ filename: 'bundle__[contenthash].css' })
  ],
  module: {
    rules: [
      babelLoader,
      fontLoader,
      imgLoader,
      svgLoader,
      cssLoader(true),
      scssLoader(true)
    ]
  },
  resolve: {
    fallback: {
      "crypto": false,
      "assert": false,
      "stream": false,
      "buffer": false,
      "https": false,
      "http": false,
      "zlib": false,
      "util": false,
      "path": false,
      "dns": false,
      "net": false,
      "tls": false,
      "fs": false,
    }
  }
};
