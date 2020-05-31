# husky

## 1：添加 husky

```
    yarn add -D husky
    yarn add -D husky lint-staged
```

## 2：配置 package.json

### 配置文件
> package.json

```js
  "scripts": {
    "test": "jest",
    "lint": "eslint src --fix --ext .js,.ts,.tsx",
    "compile": "tsc --noEmit",
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "yarn run compile && yarn test"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx}": [
      "eslint --fix",
      "git add"
    ]
  }
```
