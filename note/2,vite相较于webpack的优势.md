# vite相较于webpack的优势

webpack项目越大------>webpack所要处理的js文件就会越多

webpack支持多种模块化：

```js
const loadsh = require('loadsh');
import Vue from 'vue'
```

编译结果：(webpack的编译原理，AST抽象语法分析的工具 分析你写的这个js文件有哪些导入和导出操作)

```js
const loadsh = webpack_require('loadsh');
const Vue = webpack_require('vue');
```



```js
(function(modules){
    function webpack_require(){}
    // 入口时index.js
    // 通过webpack的配置得来的：webpack.config.js ./src/index.js
    modeuls[entry](webpack_require);
},({
    "./src/index.js":(webpack_require) => {
        const loadsh = webpack_require("loadsh");
        const vue = webpack_require("vue");
    }
}))
```



因为webpack支持多种模块化，他一开始必须要统一模块化代码。所以意味着他需要将所有的依赖全部读一遍 



![](.\bundler.png)



![](.\esm.png)