const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {},
  plugins: ['@typescript-eslint'],
  rules: {
    quotes: [ERROR, 'single'],
    semi: [ERROR, 'always'],
    "linebreak-style": 0,
    'space-infix-ops': ERROR,
    'prefer-spread': ERROR,
    'no-multi-spaces': ERROR,
    'class-methods-use-this': WARNING,
    'arrow-parens': [ERROR, 'as-needed'],
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-member-accessibility': OFF,
    '@typescript-eslint/no-namespace': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF
  }
};
