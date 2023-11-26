<!--
 * @Author: mjh
 * @Date: 2023-10-08 11:53:40
 * @LastEditors: mjh
 * @LastEditTime: 2023-10-08 16:34:57
 * @Description: 
-->
# fpi-component 组件库梳理

## 一、目录介绍
1. site 文档站点
2. play 测试文件夹 我们在 `packages/element-plus-expand/component` 内书写的组件，可以直接通过软链接的方式引入，进行简单测试。测试完以后在进行打包后，引入打包后的组件再进行测试。
3. packages 工程核心包文件夹


## 二、lerna 包管理
此组件采用了lerna的独立模式进行包的管理与发布，所以内部的packages版本都是相互独立的，不过再发布版本的时候lerna会自动检查需要发布的版本进行升级。

独立模式：
lerna.json
```js
"version": "independent",
```

内部含有两个包
>element-plus-expand: 主要的element-plus组件库扩展包  
>create-wgms-template: 水产品的主要模版脚手架


## 三、使用工程

### 1.安装
请使用pnpm ！！

- 安装 pnpm

```
npm install pnpm -g
```

- 安装依赖

```
pnpm install
```
- 全局安装gulp
```
npm install --global gulp-cli
```
- 全局安装 lerna
```
npm install -g lerna
```

### 2.快速删除依赖（mac）
```
npm install -g rimraf 

pnpm clear
```

### 3.lerna
- 查看包
```
lerna ls
```
- 发布改动依赖(会打包发布全部改动包)
```
lerna publish
```
- 单独运行某一个包的命令
```
lerna run dev --scope=@ued_fpi/create-wgms-template
```

- 单独发布某一个包
```
lerna run publish --scope=@ued_fpi/create-wgms-template
```

- 更新包阿里代理
```
lerna run browser
```

- 清除所有包的依赖
```
lerna clean
```


### 4.element-plus-expand

- 打包element-plus-expand

```
pnpm run build:element-plus-expand
```

- 发布 element-plus-expand

```
修改 /packages/element-plus-expand/component/changelog.md 

** 提交清空全部本地开发代码 **

npm config set registry=https://registry.npmjs.org

pnpm run publish:element-plus-expand
```
### 5.测试play

- 启动测试项目

```
pnpm run play
```

### 6.文档站点

- 启动静态文档站点

```
pnpm run docs:dev
```

- 打包静态文档站点

``` 
pnpm run docs:build
```


## 四、element-plus-expand 
### 1.打包
起打包采用`vite`和`gulp`相结合的打包方式，vite首先去打包两份内容分别是`es（esbuild规范）`和 `lib（commonjs）`规范，打包时会获取工程根`packages.js`文件进行剔除所有依赖文件，所以后期新组件库加入时也需要遵循零依赖，依赖全部由使用端提供，所以一些不常用的包请自己手写。  
打包会运行：  
`vite build` ，`tsconfig`，`gulp`运行 `element-plus-expand/component/script/build/index.ts`   
分别对应： js文件打包，ts类型打包和 gulp操作css文件打包，ts文件的拷贝，组件原依赖导入文件。
### 2.fpiELementPlusResolver
这是一个自动导入插件用于引入自动按需引入 `element-plus-expand` 文件，以及解决相关 `element-plus` 组件的样式引入问题，[响应使用请看此处](http://ued.fpi-inc.site/fpi-component/page/component/element-plus-expand/quickstart.html#_2-%E5%8A%A8%E6%80%81%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5)  
所有组件必须以 `fpi-el-` 开头命名，只有一下开头的才会被组件识别, 并且相印的element-plus组件样式依赖需要在 `packages/element-plus-expand/component/resolve/dic.ts`内书写对应的字典文件，这样打包的时候就会自动打包出响应的导入文件。

## 五、文档站点
此站点并非独立组件库的文档站点，是一个信息化前端的站点集合，采用`vitepress`进行文档部署，内部有各个项目组的技术网站，pc端的组件库：data-visual大屏组件库文档，element-plus-expand扩展组件库文档，以及模版脚手架，echarts的旧版样例网站。
文档组件：
> demoblock 样例组件，支持iframe，用于书写组件demo例子  
> fetch-docs 远端加载iframe文档组件，主要用于解析data-visual大屏组件  
> page-iframe 嵌入iframe页面组件 主要用于接入外部站点  
> contributor-view 作者组件   

为了实现一些自定义的解析md文件，语法，支持iframe，外部引入vue文件等，所以我们对vitepress的md能力进行了一些扩展和重写，所以在后期升级 `vitepress` 版本的时候请谨慎。  
所有data-visual内的组件都需要在 `site/page/component/screen` 对应组目录下创建文档文件，并远端加载md文件，其md文件会随着组件库的打包部署自动更新到线上，根据组件的文件名称。  

## 问题汇总：

### pnpm run publish:element-plus-expand 发布失败问题
1. 如果直接结束发布，是因为没有把本地修改文件都commit 提交的缘故，发布需要清空本地修改文件
2. 如果是一直卡这边不动，可以尝试讲node版本切换到 14.19.0 版本再进行发布即可
3. 如果是出现无权限是因为根目录下的 `.npmrc` 文件可能被删除了，其内部含有组件发布的权限token以及npm代理设置，但是有一个弊端，该文件强制设置了 `registry=https://registry.npmjs.org/` 的镜象可能导致线上下载依赖失败，但是目前来讲没什么问题，之前有偶发依赖下载失败情况，失败时需要将此句去除，但是这样我们本地发布组件库时需要手动将npm镜象设置为npm原镜象。

### 文档站点无法启动问题
1. 可能需要切换node版本至16以上
2. 目前文档完全可以运行，如果是之前可以，现在不行了请检查提交记录是否有代码书写导致情况。
3. vitepress版本严格锁死，更新请谨慎和测试完毕。

### 文档站点打包失败问题
1. 由于vitepress是服务端渲染的，所以部分依赖再打包时可能会出错，比如document不存在啊等，请参考官网采取相应的保护性写法，使依赖在客户端被加载和解析。
