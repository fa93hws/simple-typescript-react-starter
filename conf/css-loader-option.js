const path = require('path');

module.exports = function(hashOutput) {
  return {
    modules: {
      mode: 'local',
      context: path.resolve(__dirname, '../src'),
      localIdentName: '[path][name]__[local]',
    },
    localsConvention: 'camelCaseOnly',
    importLoaders: 0,
    sourceMap: true,
  };
;
}
