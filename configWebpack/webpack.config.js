const alias = require('./aliases.config');

module.exports = (config) => ({
  resolve: {
    ...config.resolve,

    alias: { ...config.resolve.alias, ...alias },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
});
