module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  // "parser": "babel-eslint",
  // "parserOptions": {
  //   "ecmaVersion": 7,
  //   "ecmaFeatures": {
  //     "experimentalObjectRestSpread": true,
  //     "jsx": true
  //   }
  // },
  "rules": {
    "class-methods-use-this": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-multiple-empty-lines": ["error", { maxBOF: 0, max: 1, maxEOF: 1 }],
    "react/forbid-prop-types": ["error", { "forbid": ["any"] }],
    "react/no-string-refs": "off",
    "react/prefer-stateless-function": "off",
  },
}
