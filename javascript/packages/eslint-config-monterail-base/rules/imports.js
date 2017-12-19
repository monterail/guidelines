module.exports = {
  rules: {
    // Static analysis

    // Ensure imports point to a file/module that can be resolved
    'import/no-unresolved': ['error', {
      commonjs: true,
      caseSensitive: true,
    }],

    // Ensure named imports correspond to a named export in the remote file
    'import/named': 'error',

    // Ensure a default export is present, given a default import
    'import/default': 'off',

    // Ensure imported namespaces contain dereferenced properties as they are dereferenced
    'import/namespace': 'off',

    // Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'off',

    // Prevent importing the submodules of other modules
    'import/no-internal-modules': 'off',

    // Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // Helpful warnings

    // Report any invalid exports, i.e. re-export of the same name
    'import/export': 'error',

    // Report use of exported name as identifier of default export
    'import/no-named-as-default': 'error',

    // Report use of exported name as property of default export
    'import/no-named-as-default-member': 'error',

    // Report imported names marked with @deprecated documentation tag
    'import/no-deprecated': 'off',

    // Forbid the use of extraneous packages
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**',
        'tests/**',
        'spec/**',
        '**/__tests__/**',
        'test.{js,jsx}',
        'test-*.{js,jsx}',
        '**/*.{test,spec}.{js,jsx}',
        '**/jest.config.js',
        '**/webpack.config.js',
        '**/webpack.config.*.js',
      ],
      optionalDependencies: false,
    }],

    // Forbid the use of mutable exports with var or let
    'import/no-mutable-exports': 'error',

    // Module systems

    // Report potentially ambiguous parse goal (script vs. module)
    'import/unambiguous': 'off',

    // Report CommonJS require calls and module.exports or exports.*
    'import/no-commonjs': 'off',

    // Report AMD require and define calls
    'import/no-amd': 'error',

    // No Node.js builtin modules
    'import/no-nodejs-modules': 'off',

    // Styleguide

    // Ensure all imports appear before other statements
    'import/first': ['error', 'absolute-first'],

    // Ensure all exports appear after other statements
    'import/exports-last': 'off',

    // Report repeated import of the same module in multiple places
    'import/no-duplicates': 'error',

    // Report namespace imports
    'import/no-namespace': 'off',

    // Ensure consistent use of file extension within the import path
    'import/extensions': ['error', {
      js: 'never',
      jsx: 'never',
    }],

    // Enforce a convention in module import order
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'parent',
        'sibling',
        'index'
      ],
      'newlines-between': 'always',
    }],

    // Enforce a newline after import statements
    'import/newline-after-import': 'error',

    // Prefer a default export if module exports a single name
    'import/prefer-default-export': 'error',

    // Limit the maximum number of dependencies a module can have
    'import/max-dependencies': 'off',

    // Forbid unassigned imports
    'import/no-unassigned-import': 'error',

    // Forbid named default exports
    'import/no-named-default': 'error',

    // Forbid anonymous values as default exports
    'import/no-anonymous-default-export': 'error',

    // Prefer named exports to be grouped together in a single export declaration
    'import/group-exports': 'off',
  },
};
