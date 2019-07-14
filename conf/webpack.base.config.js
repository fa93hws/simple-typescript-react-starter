const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.join(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|css)$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.css$/],
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'index.html'})
  ]
};
