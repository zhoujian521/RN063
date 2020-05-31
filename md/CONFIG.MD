# config

## 1：创建新项目

> 使用 React Native 内建的命令行工具来创建一个名为"project"的新项目

```npx react-native init RN063 --version 0.63.0-rc.1```

## 2：更新 Pod source

```
    01：/ios/Podfile
    02：source 'https://github.com/CocoaPods/Specs.git
    03：pod repo remove trunk
    04：cd ios && pod install && cd ..
```

## 3：更新 .gitignore

### CocoaPods

```
    /ios/app/
    /ios/vendor/
```

### Android

```
    android/.project
    android/.settings
    android/gradle/wrapper/*.zip
    android/out
    android/app/.project
    android/app/bin
    android/app/.classpath
    android/app/.settings
    apks
```

## 3：配置 TypeScript 编译器 

>详情参考  md/TypeScrip.MD

## 4：配置 ESLint 代码检测

```
Lint 工具用于检查代码的语法是否正确、风格是否符合要求。最新的工具 ESLint 不仅允许你自定义语法规则，还允许用户创造插件，改变默认的 JavaScript 语法，比如支持 ES6 和 JSX 的语法。
```
