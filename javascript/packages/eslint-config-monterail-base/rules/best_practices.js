module.exports = {
  rules: {
    // enforce getter and setter pairs in objects
    'accessor-pairs': 'error',

    // enforce return statements in callbacks of array methods
    'array-callback-return': 'error',

    // enforce the use of variables within the scope they are defined
    'block-scoped-var': 'error',

    // enforce that class methods utilize this
    'class-methods-use-this': ['error', {
      exceptMethods: [],
    }],

    // enforce a maximum cyclomatic complexity allowed in a program
    complexity: ['error', {
      max: 7,
    }],

    // require return statements to either always or never specify values
    'consistent-return': 'error',

    // enforce consistent brace style for all control statements
    curly: ['error', 'all'],

    // require default cases in switch statements
    'default-case': ['error', {
      commentPattern: '^no default$',
    }],

    // enforce consistent newlines before and after dots
    'dot-location': ['error', 'property'],

    // enforce dot notation whenever possible
    'dot-notation': ['error', {
      allowKeywords: false,
    }],

    // require the use of === and !==
    eqeqeq: ['error', 'always'],

    // require for-in loops to include an if statement
    'guard-for-in': 'error',

    // disallow the use of alert, confirm, and prompt
    'no-alert': 'error',

    // disallow the use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // disallow lexical declarations in case clauses
    'no-case-declarations': 'error',

    // disallow division operators explicitly at the beginning of regular expressions
    'no-div-regex': 'off',

    // disallow else blocks after return statements in if statements
    'no-else-return': ['error', {
      allowElseIf: false,
    }],

    // disallow empty functions
    'no-empty-function': 'error',

    // disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // disallow null comparisons without type-checking operators
    'no-eq-null': 'error',

    // disallow the use of eval()
    'no-eval': 'error',

    // disallow extending native types
    'no-extend-native': 'error',

    // disallow unnecessary calls to .bind()
    'no-extra-bind': 'error',

    // disallow unnecessary labels
    'no-extra-label': 'error',

    // disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // disallow assignments to native objects or read-only global variables
    'no-global-assign': 'error',

    // disallow shorthand type conversions
    'no-implicit-coercion': ['error', {
      boolean: false,
      number: true,
      string: true,
    }],

    // disallow variable and function declarations in the global scope
    'no-implicit-globals': 'error',

    // disallow the use of eval()-like methods
    'no-implied-eval': 'error',

    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'error',

    // disallow the use of the __iterator__ property
    'no-iterator': 'error',

    // disallow labeled statements
    'no-labels': 'error',

    // disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // disallow function declarations and expressions inside loop statements
    'no-loop-func': 'error',

    // disallow magic numbers
    'no-magic-numbers': ['off', {
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],

    // disallow multiple spaces
    'no-multi-spaces': ['error', {
      ignoreEOLComments: true,
    }],

    // disallow multiline strings
    'no-multi-str': 'error',

    // disallow new operators outside of assignments or comparisons
    'no-new': 'error',

    // disallow new operators with the Function object
    'no-new-func': 'error',

    // disallow new operators with the String, Number, and Boolean objects
    'no-new-wrappers': 'error',

    // disallow octal literals
    'no-octal': 'error',

    // disallow octal escape sequences in string literals
    'no-octal-escape': 'error',

    // disallow reassigning function parameters
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc',
        'e',
        'req',
        'request',
        'res',
        'response',
        '$scope',
      ],
    }],

    // disallow the use of the __proto__ property
    'no-proto': 'error',

    // disallow variable redeclaration
    'no-redeclare': 'error',

    // disallow certain properties on certain objects
    'no-restricted-properties': 'error',

    // disallow assignment operators in return statements
    'no-return-assign': 'error',

    // disallow unnecessary return await
    'no-return-await': 'error',

    // disallow javascript: urls
    'no-script-url': 'error',

    // disallow assignments where both sides are exactly the same
    'no-self-assign': 'error',

    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // disallow comma operators
    'no-sequences': 'error',

    // disallow throwing literals as exceptions
    'no-throw-literal': 'error',

    // disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'off',

    // disallow unused expressions
    'no-unused-expressions': 'error',

    // disallow unused labels
    'no-unused-labels': 'error',

    // disallow unnecessary calls to .call() and .apply()
    'no-useless-call': 'off',

    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'error',

    // disallow unnecessary escape characters
    'no-useless-escape': 'error',

    // disallow redundant return statements
    'no-useless-return': 'error',

    // disallow void operators
    'no-void': 'error',

    // disallow specified warning terms in comments
    'no-warning-comments': ['error', {
      terms: [
        'todo',
        'fixme',
        'xxx'
      ],
      location: 'anywhere',
    }],

    // disallow with statements
    'no-with': 'error',

    // require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', {
      allowEmptyReject: true,
    }],

    // enforce the consistent use of the radix argument when using parseInt()
    radix: ['error', 'as-needed'],

    // disallow async functions which have no await expression
    'require-await': 'error',

    // require var declarations be placed at the top of their containing scope
    'vars-on-top': 'error',

    // require parentheses around immediate function invocations
    'wrap-iife': ['error', 'outside', {
      functionPrototypeMethods: false,
    }],

    // require or disallow “Yoda” conditions
    yoda: 'error',
  },
};
