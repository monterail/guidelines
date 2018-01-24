module.exports = {
  extends: [
    './rules/base',
    './rules/general',
    './rules/jsx',
  ].map(require.resolve),
  rules: {},
};
