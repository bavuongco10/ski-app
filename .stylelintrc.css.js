// This file exists because of some how when stylelint can not lint both css and styled-component with the some config,
// so we need to run css file with .stylelintrc.css.js and js,jsx file with the default styleLint config

module.exports = {
  "extends": [
    "stylelint-config-recommended"
  ],
  "syntax": "scss"
};
