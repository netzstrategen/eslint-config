# Netzstrategen eslint config

Standard eslint config for Netzstrategen projects.

## Installation

Install the configuration and all peer dependencies:

```bash
npm install --save-dev @netzstrategen/eslint-config eslint
```

## Usage

### Create the eslint configuration

Create a [eslint configuration](https://eslint.org/docs/user-guide/configuring/configuration-files) js file:

**.eslintrc.js**

```js
module.exports = {
  extends: ['@netzstrategen/eslint-config'],
};
```

### Modifying the config

Overwrite rules from the default Netzstrategen config:

```js
module.exports = {
  extends: ['@netzstrategen/eslint-config'],
  rules: {
    'no-invalid-this': 'off',
  };
}
```
