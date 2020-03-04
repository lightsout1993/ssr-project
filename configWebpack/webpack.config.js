const alias = require('./aliases.config');

module.exports = {
  resolve: {
    alias,
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
};
