const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
          './conf/css-module-types-loader',
          {
            loader: MiniCssExtractPlugin.loader,
          },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/[name].css",
      chunkFilename: "static/css/[name].css"
    }),
  ]
})
