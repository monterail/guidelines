module.exports = {
  plugins: [
    'import'
  ],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.json',
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.jsx'
    ],
    'import/ignore': [
      'node_modules'
    ],
  },
};
