# ESLint

```
    Lint 工具用于检查代码的语法是否正确、风格是否符合要求。最新的工具 ESLint 不仅允许你自定义语法规则，还允许用户创造插件，改变默认的 JavaScript 语法，比如支持 ES6 和 JSX 的语法。

```

## 1：安装 ESLint Plugin

![ESLint Plugin](https://user-gold-cdn.xitu.io/2019/5/27/16af57ec75323152?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "安装 ESLint Plugin")

## 2：配置文件

> .eslintrc.js

```js
module.exports = {
  root: true,
  plugins: ['redux-saga'],
  extends: ['@react-native-community', 'plugin:redux-saga/recommended'],
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
```

> .eslintignore

```js
babel.config.js
react-native.config.js
jest.setup.js
metro.config.js
metro.transformers.js

__mocks__
src/utils/postAsForm.js
```
