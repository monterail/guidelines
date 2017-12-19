module.exports = {
  extends: [
    './rules/base',
    './rules/possible_errors',
    './rules/best_practices',
    './rules/strict',
    './rules/variables',
    './rules/node_common',
    './rules/stylistic_issues',
    './rules/ecmascript_6',
    './rules/imports',
  ].map(require.resolve),
  rules: {},
};
