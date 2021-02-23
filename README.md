## css_animation

### 拉取项目

~~~~ 
git clone "仓库地址"
克隆成功之后，应该先运行 npm install 安装相关的依赖包
安装成功之后，直接运行 npm start 启动项目
~~~~
#### 当跑项目遇到以下错误：
````angular2html
Error: The loader "XXXXXX" didn't return html.
  
  - index.js:337 HtmlWebpackPlugin.evaluateCompilationResult
    [css]/[html-webpack-plugin]/index.js:337:24
````
可以修改本地node_modules/html-webpack-plugin/index里面的源码。在330行的位置，加上如下内容，然后重启项目就可以了：
```angular2html
let newSource;
    try {
      newSource = vmScript.runInContext(vmContext);
    } catch (e) {
      return Promise.reject(e);
    }
    //----加上一下这一句---
    newSource = vmContext.HTML_WEBPACK_PLUGIN_RESULT;

    if (typeof newSource === 'object' && newSource.__esModule && newSource.default) {
      newSource = newSource.default;
    }
```
