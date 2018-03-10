// using JS option for this file, so we can comment it

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier', // extending recommended config and config derived from eslint-config-prettier
    "prettier/react"
  ],
  plugins: [
    'prettier',  // activating eslint-plugin-prettier (--fix stuff)
    'react',
    'import',
    'jsx-a11y'
  ],
  rules: {
    'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
      'error',
      {
        singleQuote: true,
        trailingComma: 'all'
      },
    ],
    eqeqeq: ['error', 'always'], // adding some custom ESLint rules
    "no-mixed-operators": "error",
    "max-len": [
      "error", {
        "code": 110,
        "ignoreComments": true,
        "ignoreUrls": true
      }
    ],
    "no-underscore-dangle": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-wrap-multilines": 0,
    "arrow-body-style": [0, "as-needed", {
      "requireReturnForObjectLiteral": true
    }],
    "react/jsx-no-bind": ["warn", {
      "ignoreRefs": true,
      "allowArrowFunctions": false,
      "allowBind": false
    }],
    "no-multi-spaces": ["error", {"ignoreEOLComments": true}],
    "padded-blocks": 0,
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": true
      }
    ],
    "react/prefer-stateless-function": 1,
    "arrow-parens": ["error", "as-needed"],
    "no-console": ["error", { allow: ["error"] }],
    "no-shadow": "off"
  },
  globals: {
    // Set each global variable name equal to true to allow the variable to be overwritten
    // or false to disallow overwriting.
    describe: true,
    expect: true,
    test: true,
    beforeEach: true,
    afterEach: true,
    it: false,
    jest: false,
    __DEV__: false,
    Exception: true,
    ENV_FILE: false,
    storiesOf: false,
    document: false
  }
};
