module.exports = {
  rules: {
    // Enforce boolean attributes notation in JSX(fixable)
    'react/jsx-boolean-value': 'error',

    // Validate closing bracket location in JSX(fixable)
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],

    // Validate closing tag location in JSX(fixable)
    'react/jsx-closing-tag-location': 'error',

    // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions(fixable)
    'react/jsx-curly-spacing': ['error', 'never', {
      'allowMultiline': true,
    }],

    // Enforce or disallow spaces around equal signs in JSX attributes(fixable)
    'react/jsx-equals-spacing': ['error', 'never'],

    // Restrict file extensions that may contain JSX
    'react/jsx-filename-extension': ['error', {
        'extensions': [
          '.js',
          '.jsx',
        ]
      }
    ],

    // Enforce position of the first prop in JSX(fixable)
    'react/jsx-first-prop-new-line': ['error', 'multiline'],

    // Enforce event handler naming conventions in JSX
    'react/jsx-handler-names': ['off', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],

    // Validate JSX indentation(fixable)
    'react/jsx-indent': ['error', 2],

    // Validate props indentation in JSX(fixable)
    'react/jsx-indent-props': ['error', 2],

    // Validate JSX has key prop when in array or iterator
    'react/jsx-key': 'error',

    // Limit maximum of props on a single line in JSX(fixable)
    'react/jsx-max-props-per-line': ['error', 1],

    // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-bind': ['error', {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: true,
      allowBind: false,
    }],

    // Prevent comments from being inserted as text nodes
    'react/jsx-no-comment-textnodes': 'error',

    // Prevent duplicate props in JSX
    'react/jsx-no-duplicate-props': 'error',

    // Prevent usage of unwrapped JSX strings
    'react/jsx-no-literals': ['off'],

    // Prevent usage of unsafe target='_blank'
    'react/jsx-no-target-blank': 'error',

    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 'error',

    // Limit to one expression per line in JSX
    'react/jsx-one-expression-per-line': 'error',

    // Enforce curly braces or disallow unnecessary curly braces in JSX
    'react/jsx-curly-brace-presence': ['error', {
      props: 'never',
      children: 'never'
    }],

    // Enforce PascalCase for user - defined JSX components
    'react/jsx-pascal-case': 'error',

    // Enforce default props alphabetical sorting
    'react/jsx-sort-default-props': 'off',

    // Enforce props alphabetical sorting(fixable)
    'react/jsx-sort-props': 'off',

    // Validate spacing before closing bracket in JSX(fixable)
    'react/jsx-space-before-closing': ['error', 'always'],

    // Validate whitespace in and around the JSX opening and closing brackets(fixable)
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'allow',
    }],

    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 'error',

    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 'error',

    // Prevent missing parentheses around multilines JSX(fixable)
    'react/jsx-wrap-multilines': ['error', {
      declaration: true,
      assignment: true,
      return: true,
      arrow: true,
    }],
  },
};
