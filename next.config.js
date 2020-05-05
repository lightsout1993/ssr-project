const getWebpackConfig = require('./configWebpack/webpack.config');

module.exports = {
  webpack: (config) => ({ ...config, ...getWebpackConfig(config) }),
};
