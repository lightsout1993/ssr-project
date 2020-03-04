const path = require('path');

const root = path.resolve(__dirname, '../src');

module.exports = {
  pages: path.resolve(root, 'pages/'),
  components: path.resolve(root, 'components/'),
};
