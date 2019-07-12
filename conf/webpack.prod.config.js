const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const getCssLoaderOption = require('./css-loader-option');
const config = require('./webpack.base.config');

module.exports = merge(config, {
  output: {
    filename: "static/js/[name].[chunkhash:8].js",
    chunkFilename: 'static/js/[name].[chunkhash:8].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: getCssLoaderOption(true),
          },
        ],
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test:  /node_modules\/(?!markdown-it|katex|mdurl|entities|linkify-it)/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: 4,
        sourceMap: true
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[chunkhash:8].css",
      chunkFilename: "static/css/[name].[chunkhash:8].css"
    }),
  ]
});
