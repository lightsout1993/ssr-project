const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

if (process.env.NODE_ENV) process.env.NODE_ENV = 'development';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    es6: true,
    jest: true,
    node: true,
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
  ],
  plugins: [
    'jest',
    'import',
    'jsx-a11y',
    'react-hooks',
  ],
  rules: {
    // airbnb-base
    complexity: [WARN, 11],
    'no-eq-null': ERROR,
    'no-magic-numbers': [WARN, {
      ignore: [0, -1, 1, 100],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // react
    'react-hooks/rules-of-hooks': ERROR,
    'react/jsx-props-no-spreading': WARN,

    // import
    'import/extensions': [
      ERROR,
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],

    // flow
    'flowtype/no-weak-types': WARN,
  },
  settings: {
    'import/resolver': {
      node: {},
      webpack: { config: 'configWebpack/webpack.config.js' },
    },
  },
  overrides: [
    {
      files: ['*.config.*'],
      rules: {
        strict: OFF,
        'global-require': OFF,
        'import/no-commonjs': OFF,
      },
    },
  ],
};
