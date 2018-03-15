/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: 'airbnb',
  "rules": {
    "no-console": "off",
    "comma-dangle": "off",
    "prefer-const": "off"
  },
  "env": {
    "browser": true,
    "node": true
  }  
};
