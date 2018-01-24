module.exports = {
  "plugins": [
    "react"
  ],
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
    },
    "propWrapperFunctions": ["forbidExtraProps"],
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
};
