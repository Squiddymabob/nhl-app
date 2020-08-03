module.exports = {
    env: {
      browser: true,
      es2020: true,
      jest: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 11,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/prefer-stateless-function': 'off', // For writing components ES6 style
      'max-len': ["error", { "code": 120 }]
    },
  };
