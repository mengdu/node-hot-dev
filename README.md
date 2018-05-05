# blog-server

## api 访问规则

```txt
/api/:module/:action?
```

+ module 模块；必须。
+ action 方法；可选，默认'index'
+ site 网站；可选，从query或者post请求中获取，默认空

最终会会访问 `controller/api/<site>/<module>` 模块的 `<action>` 方法。

## 开发

+ 支持热更新（基于nodemon）
+ 支持es6
+ 支持打包es5

**开发**：

```ls
npm run dev
```

**打包**：

```ls
npm run compile
```

**运行**

```ls
npm start
```
