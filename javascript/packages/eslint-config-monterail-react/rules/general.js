module.exports = {
  rules: {
    // Enforces consistent naming for boolean props
    'react/boolean-prop-naming': 'error',

    // Forbid "button" element without an explicit "type" attribute
    'react/button-has-type': 'error',

    // Prevent extraneous defaultProps on components
    'react/default-props-match-prop-types': 'error',

    // Rule enforces consistent usage of destructuring assignment in component
    'react/destructuring-assignment': ['error', 'always'],

    // Prevent missing displayName in a React component definition
    'react/display-name': 'off',

    // Forbid certain props on Components
    'react/forbid-component-props': 'off',

    // Forbid certain props on DOM Nodes
    'react/forbid-dom-props': 'off',

    // Forbid certain elements
    'react/forbid-elements': 'off',

    // Forbid certain propTypes
    'react/forbid-prop-types': ['error', {
      forbid: [
        'any',
        'array',
        'object'
      ],
    }],

    // Forbid foreign propTypes
    'react/forbid-foreign-prop-types': 'off',

    // Prevent using this.state inside this.setState
    'react/no-access-state-in-setstate': 'error',

    // Prevent using Array index in key props
    'react/no-array-index-key': 'error',

    // Prevent passing children as props
    'react/no-children-prop': 'error',

    // Prevent usage of dangerous JSX properties
    'react/no-danger': 'error',

    // Prevent problem with children and props.dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error',

    // Prevent usage of deprecated methods
    'react/no-deprecated': 'error',

    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': 'error',

    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 'error',

    // Prevent direct mutation of this.state
    'react/no-direct-mutation-state': 'error',

    // Prevent usage of findDOMNode
    'react/no-find-dom-node': 'error',

    // Prevent usage of isMounted
    'react/no-is-mounted': 'error',

    // Prevent multiple component definition per file
    'react/no-multi-comp': ['error', {
      ignoreStateless: true
    }],

    // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-redundant-should-component-update': 'error',

    // Prevent usage of the return value of React.render
    'react/no-render-return-value': 'error',

    // Prevent usage of setState
    'react/no-set-state': 'off',

    // Prevent common casing typos
    'react/no-typos': 'error',

    // Prevent using string references in ref attribute.
    'react/no-string-refs': 'error',

    // Prevent using this in stateless functional components
    'react/no-this-in-sfc': 'error',

    // Prevent invalid characters from appearing in markup
    'react/no-unescaped-entities': 'error',

    // Prevent usage of unknown DOM property(fixable)
    'react/no-unknown-property': 'error',

    // Prevent definitions of unused prop types
    'react/no-unused-prop-types': ['error', {
      customValidators: [],
      skipShapeProps: true,
    }],

    // Prevent definitions of unused state properties
    'react/no-unused-state': 'error',

    // Prevent usage of setState in componentWillUpdate
    'react/no-will-update-set-state': 'error',

    // Enforce ES5 or ES6 class for React Components
    'react/prefer-es6-class': 'error',

    // Enforce stateless React Components to be written as a pure function
    'react/prefer-stateless-function': ['error', {
      ignorePureComponents: true,
    }],

    // Prevent missing props validation in a React component definition
    'react/prop-types': ['error', {
      ignore: [],
      customValidators: [],
      skipUndeclared: false
    }],

    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 'error',

    // Enforce a defaultProps definition for every prop that is not a required prop
    'react/require-default-props': 'error',

    // Enforce React components to have a shouldComponentUpdate method
    'react/require-optimization': 'off',

    // Enforce ES5 or ES6 class for returning value in render function
    'react/require-render-return': 'error',

    // Prevent extra closing tags for components without children(fixable)
    'react/self-closing-comp': 'error',

    // Enforce component methods order(fixable)
    'react/sort-comp': [
      'error',
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          '/^(on|handle).+$/',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],

    // Enforce propTypes declarations alphabetical sorting
    'react/sort-prop-types': 'off',

    // Enforce style prop value being an object
    'react/style-prop-object': 'error',

    // Prevent void DOM elements(e.g. <img />, <br />) from receiving children
    'react/void-dom-elements-no-children': 'error',
  },
};
