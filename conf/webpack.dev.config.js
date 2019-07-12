const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.config');
const getCssLoaderOption = require('./css-loader-option');

module.exports = merge(config, {
  output: {
    filename: "static/js/[name].js",
    chunkFilename: 'static/js/[name].js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: getCssLoaderOption(false),
          },
        ],
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true
  },
})
