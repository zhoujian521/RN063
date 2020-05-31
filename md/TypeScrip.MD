# TypeScript

## 1：添加 TypeScript 编译器

```
    yarn global add typescript
    yarn add -D typescript @types/react @types/react-native
```

## 2：配置 tsconfig.json

[文档](https://www.tslang.cn/docs/handbook/compiler-options.html)
```
    tsc --init --pretty --target esnext --allowJs --checkJs --jsx react-native --allowSyntheticDefaultImports --experimentalDecorators --emitDecoratorMetadata
```
### 配置文件
> tsconfig.json

```java
{
  "compilerOptions": {
    "allowJs": true,                              /* 允许编译 javascript 文件. */
    "allowSyntheticDefaultImports": true,         /*允许从没有设置默认导出的模块中默认导入。这并不影响代码的输出，仅为了类型检查. */
    "baseUrl": ".",                               /* Base directory to resolve non-absolute module names. */
    "checkJs": false,                             /* 在 .js 文件中报告错误。与 --allowJs 配合使用. */
    "experimentalDecorators": true,               /* 启用实验性的 ES 装饰器. */
    "isolatedModules": true,                      /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */
    "jsx": "react-native",                        /* 在 .tsx 文件里支持 JSX： "react"、"react-native"或 "preserve". */
    "lib": ["es6", "dom"],                        /* Specify library files to be included in the compilation. */
    "module": "esnext",                           /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    "moduleResolution": "node",                   /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    "noEmit": true,                               /* Do not emit outputs. */
    "noImplicitAny": true,                        /* Raise error on expressions and declarations with an implied 'any' type. */
    "noImplicitReturns": true,                    /* Report error when not all code paths in function return a value. */
    "noImplicitThis": true,                       /* Raise error on 'this' expressions with an implied 'any' type. */
    "noUnusedLocals": true,                       /* Report errors on unused locals. */
    "paths": {                                    /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
      "*": ["src/*", "src/*.ios", "src/*.android"]
    },
    "sourceMap": true,                            /* Generates a sourcemap for each corresponding '.d.ts' file. */
    "strictNullChecks": true,                     /* Enable strict null checks. */
    "target": "esnext",                           /* 指定 ECMAScript 目标版本 "ES3"（默认），"ES5"，"ES6"/"ES2015"，"ES2016"，"ES2017"，"ES2018", "ES2019" 或 "ESNext"。, 'ES2019', 'ES2020', or 'ESNEXT'. */
    "skipLibCheck": true
  },
  "exclude": ["node_modules"],
  "include": ["src"]
}
```
