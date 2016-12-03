module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "rules": {
     "class-methods-use-this": "off",
     "import/no-named-as-default-member": "off",
     "import/no-named-as-default": "off",
     "no-multiple-empty-lines": ["error", { maxBOF: 0, max: 1, maxEOF: 1 }],
     "react/forbid-prop-types": ["error", { "forbid": ["any", "object"] }],
     "react/prefer-stateless-function": "off",
 },
}
