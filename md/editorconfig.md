# EditorConfig

```
    当多人共同开发一个项目的时候，往往会出现大家用不同编辑器的情况。就前端开发者来说，有人喜欢 Sublime，有人喜欢 Webstorm , 也有人喜欢 Atom，还有人喜欢 Vim，HBuilder 等等。各种不同编程语言的开发者喜欢各种不同的编辑器。EditorConfig 这个项目就是为了解决跨编辑器开发项目的代码风格统一问题的。
```

## 1：安装 EditorConfig for VS Code Plugin

![EditorConfig for VS Code](https://user-gold-cdn.xitu.io/2019/5/27/16af57ec763d64d6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 "安装 EditorConfig for VS Code")

## 2：配置 .editorconfig

### 配置文件

> .editorconfig

```js
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[*.gradle]
indent_size = 4

[BUCK]
indent_size = 4
```
