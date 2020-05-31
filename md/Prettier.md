# Prettier

```
    ESLint 能够检测出代码中的潜在问题，提高代码质量，但是并不能完全统一代码风格。而 Prettier 在格式化代码方面具有更大优势。Prettier 扫描文件中的样式问题，并自动重新格式化代码，以确保缩进、间距、分号、单引号和双引号等遵循一致的规则。

```

## 1：安装 Prettier Plugin

![Prettier Plugin](https://user-gold-cdn.xitu.io/2019/5/27/16af57ec7619ec3a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "安装 Prettier Plugin")

## 2：Prettier 与 ESLint 配合使用

```yarn add prettier eslint-config-prettier eslint-plugin-prettier -D```

### 配置文件

> .eslintrc.js

```js
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
```

> .prettierrc.js

```js
  module.exports = {
    bracketSpacing: true,       // 对象大括号直接是否有空格，默认为true，效果：{ foo: bar }
    jsxBracketSameLine: true,
    jsxSingleQuote: false,
    printWidth: 120,            // 一行的字符数，如果超过会进行换行，默认为80
    semi: true,                 // 行位是否使用分号，默认为true
    singleQuote: true,          // 字符串是否使用单引号，默认为false，使用双引号
    tabWidth: 2,                // 一个tab代表几个空格数
    trailingComma: 'all',
  };
```
