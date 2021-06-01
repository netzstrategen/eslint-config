module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['airbnb-base'],
  plugins: ['import'],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'import/no-cycle': [0, { ignoreExternal: true }],
    quotes: [2, 'single', { avoidEscape: true }],
  },
};
