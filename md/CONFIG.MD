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

## 5：配置 Prettier 代码格式化

```
    ESLint 能够检测出代码中的潜在问题，提高代码质量，但是并不能完全统一代码风格。而 Prettier 在格式化代码方面具有更大优势。Prettier 扫描文件中的样式问题，并自动重新格式化代码，以确保缩进、间距、分号、单引号和双引号等遵循一致的规则。
```

## 6：配置 EditorConfig 跨编辑器配置统一

```
    当多人共同开发一个项目的时候，往往会出现大家用不同编辑器的情况。就前端开发者来说，有人喜欢 Sublime，有人喜欢 Webstorm , 也有人喜欢 Atom，还有人喜欢 Vim，HBuilder 等等。各种不同编程语言的开发者喜欢各种不同的编辑器。EditorConfig 这个项目就是为了解决跨编辑器开发项目的代码风格统一问题的。
```

## 7：Git pre-commit Hook

```
    pre-commit钩子在键入提交信息前运行。 它用于检查即将提交的快照，例如，检查是否有所遗漏，确保测试运行，以及核查代码。 如果该钩子以非零值退出，Git 将放弃此次提交，不过你可以用git commit --no-verify来绕过这个环节。 你可以利用该钩子，来检查代码风格是否一致（运行类似 lint 的程序）、尾随空白字符是否存在（自带的钩子就是这么做的），或新方法的文档是否适当.
```
