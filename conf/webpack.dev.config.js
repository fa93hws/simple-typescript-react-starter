const merge = require('webpack-merge');
const config = require('./webpack.base.config');

module.exports = merge(config, {
  output: {
    filename: "static/js/[name].js",
    chunkFilename: 'static/js/[name].js',
  },
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true
  },
})
