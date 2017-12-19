module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': 'off',

    // enforce consistent spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // enforce line breaks after each array element
    'array-element-newline': 'off',

    // disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': ['error', 'always'],

    // enforce consistent brace style for blocks
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true,
    }],

    // enforce camelcase naming convention
    camelcase: ['error', {
      properties: 'never',
    }],

    // enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // require or disallow trailing commas
    'comma-dangle': ['error', 'always-multiline'],

    // enforce consistent spacing before and after commas
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],

    // enforce consistent comma style
    'comma-style': ['error', 'last'],

    // enforce consistent spacing inside computed property brackets
    'computed-property-spacing': ['error', 'never'],

    // enforce consistent naming when capturing the current execution context
    'consistent-this': ['error', 'that'],

    // require or disallow newline at the end of files
    'eol-last': ['error', 'always'],

    // require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': ['error', 'never'],

    // require function names to match the name of the variable or property to which they
    // are assigned
    'func-name-matching': 'off',

    // require or disallow named function expressions
    'func-names': 'error',

    // enforce the consistent use of either function declarations or expressions
    'func-style': 'off',

    // enforce consistent line breaks inside function parentheses
    'function-paren-newline': 'off',

    // disallow specified identifiers
    'id-blacklist': 'off',

    // enforce minimum and maximum identifier lengths
    'id-length': 'off',

    // require identifiers to match a specified regular expression
    'id-match': 'off',

    // enforce the location of arrow function bodies
    'implicit-arrow-linebreak': ['error', 'beside'],

    // enforce consistent indentation
    indent: ['error', 2],

    // enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': ['error', 'prefer-double'],

    // enforce consistent spacing between keys and values in object literal properties
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],

    // enforce consistent spacing before and after keywords
    'keyword-spacing': ['error', {
      before: false,
      after: true,
    }],

    // enforce position of line comments
    'line-comment-position': 'off',

    // enforce consistent linebreak style
    'linebreak-style': ['error', 'unix'],

    // require empty lines around comments
    'lines-around-comment': 'off',

    // require or disallow an empty line between class members
    'lines-between-class-members': ['error', 'never'],

    // enforce a maximum depth that blocks can be nested
    'max-depth': 'off',

    // enforce a maximum line length
    'max-len': ['error', 100, 2],

    // enforce a maximum number of lines per file
    'max-lines': 'off',

    // enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 'off',

    // enforce a maximum number of parameters in function definitions
    'max-params': 'off',

    // enforce a maximum number of statements allowed in function blocks
    'max-statements': 'off',

    // enforce a maximum number of statements allowed per line
    'max-statements-per-line': 'off',

    // enforce a particular style for multiline comments
    'multiline-comment-style': 'off',

    // enforce newlines between operands of ternary expressions
    'multiline-ternary': 'off',

    // require constructor names to begin with a capital letter
    'new-cap': 'error',

    // require parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // require a newline after each call in a method chain
    'newline-per-chained-call': 'off',

    // disallow Array constructors
    'no-array-constructor': 'error',

    // disallow bitwise operators
    'no-bitwise': 'error',

    // disallow continue statements
    'no-continue': 'error',

    // disallow inline comments after code
    'no-inline-comments': 'error',

    // disallow if statements as the only statement in else blocks
    'no-lonely-if': 'error',

    // disallow mixed binary operators
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: true,
    }],

    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // disallow use of chained assignment expressions
    'no-multi-assign': 'error',

    // disallow multiple empty lines
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxEOF: 1,
    }],

    // disallow negated conditions
    'no-negated-condition': 'off',

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow Object constructors
    'no-new-object': 'error',

    // disallow the unary operators++ and --
    'no-plusplus': 'error',

    // disallow specified syntax
    'no-restricted-syntax': ['error',
      'ForInStatement',
      'ForOfStatement',
      'LabeledStatement',
      'WithStatement',
    ],

    // disallow all tabs
    'no-tabs': 'error',

    // disallow ternary operators
    'no-ternary': 'off',

    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'error',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'error',

    // disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 'error',

    // disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // enforce the location of single-line statements
    'nonblock-statement-body-position': 'error',

    // enforce consistent line breaks inside braces
    'object-curly-newline': ['error', {
      multiline: true,
      minProperties: 2,
      consistent: true,
    }],

    // enforce consistent spacing inside braces
    'object-curly-spacing': ['error', 'always'],

    // enforce placing object properties on separate lines
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
    }],

    // enforce variables to be declared either together or separately in functions
    'one-var': ['error', 'never'],

    // require or disallow newlines around variable declarations
    'one-var-declaration-per-line': ['error', 'always'],

    // require or disallow assignment operator shorthand where possible
    'operator-assignment': ['error', 'never'],

    // enforce consistent linebreak style for operators
    'operator-linebreak': ['error', 'before'],

    // require or disallow padding within blocks
    'padded-blocks': ['error', 'never'],

    // require or disallow padding lines between statements
    'padding-line-between-statements': 'off',

    // require quotes around object literal property names
    'quote-props': ['error', 'as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false,
    }],

    // enforce the consistent use of either backticks, double, or single quotes
    quotes: ['error', 'single', {
      allowTemplateLiterals: true
    }],

    // require JSDoc comments
    'require-jsdoc': 'off',

    // require or disallow semicolons instead of ASI
    semi: 'error',

    // enforce consistent spacing before and after semicolons
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],

    // enforce location of semicolons
    'semi-style': 'error',

    // require object keys to be sorted
    'sort-keys': 'off',

    // require variables within the same declaration block to be sorted
    'sort-vars': 'off',

    // enforce consistent spacing before blocks
    'space-before-blocks': 'error',

    // enforce consistent spacing before function definition opening parenthesis
    'space-before-function-paren': ['error', 'never'],

    // enforce consistent spacing inside parentheses
    'space-in-parens': ['error', 'never'],

    // require spacing around infix operators
    'space-infix-ops': 'error',

    // enforce consistent spacing before or after unary operators
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
    }],

    // enforce consistent spacing after the // or /* in a comment
    'spaced-comment': ['error', 'always'],

    // enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', {
      after: true,
      before: false,
    }],

    // require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error', 'never'],

    // require or disallow Unicode byte order mark(BOM)
    'unicode-bom': ['error', 'never'],

    // require parenthesis around regex literals
    'wrap-regex': 'error',
  },
};
