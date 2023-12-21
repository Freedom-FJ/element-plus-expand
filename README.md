# <center> element-plus-expand</center> 

<center> 

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)![vue](https://img.shields.io/badge/-Vue.js-29beb0?style=flat-square&logo=vue.js&labelColor=ffffff&color=4FC08D)
![vue](https://img.shields.io/badge/-vite-646cff?style=flat-square&logo=Vite&labelColor=ffffff&color=646cff)![vue](https://img.shields.io/badge/-Vitest-f16728?style=flat-square&logo=Vitest&labelColor=ffffff&color=f16728)![TS](https://img.shields.io/badge/TS-TypeScript-1C6FBB)

</center> 


<br/>

<center> 
<p>基于Vite4+TypeScript+Vitepress的Vue3前端技术栈组件库管理架构包，作为新版本的信息化前端技术栈文档库</p>

@ued_fpi/element-plus-expand： 
<img style="display:inline" src="https://img.shields.io/npm/v/@ued_fpi/element-plus-expand" />
<img style="display:inline;margin-left:10px" src="https://img.shields.io/npm/dt/@ued_fpi/element-plus-expand" />
<br/>


@ued_fpi/create-wgms-template： 
<img style="display:inline" src="https://img.shields.io/npm/v/@ued_fpi/create-wgms-template" />
<img style="display:inline;margin-left:10px" src="https://img.shields.io/npm/dt/@ued_fpi/create-wgms-template" />
</center> 

## 官网地址：
[https://freedom-fj.github.io/element-plus-expand/](https://freedom-fj.github.io/element-plus-expand/)


## 版本要求：
```
window node v18以上  
mac node v16 以上
```

## 开发 
开发请在 `hotfix-test` 分支开发

## 1.安装
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

## 2.快速删除依赖
```
npm install -g rimraf 

pnpm clear
```

## 3.lerna
- 查看包
```
lerna ls
```
- 发布改动依赖(会打包发布全部改动包)
```
lerna publish
```
- 单独运行某一个包的命令
<!-- lerna publish --contents <dir> // 指定要发布的子目录 -->
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


## 4.element-plus-expand

- 打包element-plus-expand

```
pnpm run build:element-plus-expand
```

<!-- - 发布 element-plus-expand

```
修改 /packages/element-plus-expand/changelog.md 

提交清空全部本地开发代码

npm config set registry=https://registry.npmjs.org

pnpm run publish:element-plus-expand
``` -->
## 5.测试play

- 启动测试项目

```
pnpm run play
```

## 6.文档站点

- 启动静态文档站点

```
pnpm run docs:dev
```

- 打包静态文档站点

```
pnpm run docs:build
```
