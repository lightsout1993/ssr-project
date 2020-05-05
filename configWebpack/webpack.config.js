const alias = require('./aliases.config');

module.exports = ({ resolve = {} } = {}) => ({
  resolve: {
    ...resolve,

    alias: { ...resolve && resolve.alias && resolve.alias, ...alias },
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
});
