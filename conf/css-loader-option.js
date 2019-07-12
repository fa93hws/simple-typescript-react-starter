const path = require('path');

module.exports = function(hashOutput) {
  const localIdentName = hashOutput
    ? '[hash:base64]'
    : '[path][name]__[local]'
  return {
    modules: {
      mode: 'local',
      context: path.resolve(__dirname, '../src'),
      localIdentName,
    },
    localsConvention: 'camelCaseOnly',
    importLoaders: 0,
    sourceMap: true,
  };
;
}
