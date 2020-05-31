module.exports = {
  root: true,
  // plugins: ['redux-saga'],
  extends: [
    '@react-native-community',
    // 'plugin:redux-saga/recommended',
    // 'plugin:prettier/recommended',
    'prettier/react',
    'prettier/react',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-dupe-class-members': 'off',
        'redux-saga/no-unhandled-errors': 'off',
      },
    },
  ],
};
