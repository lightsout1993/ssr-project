const webpackConfig = require('./configWebpack/webpack.config');

module.exports = {
  webpack: (config) => ({ ...config, ...webpackConfig }),
};
