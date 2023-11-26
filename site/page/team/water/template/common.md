
# 基础模版
> Vue 3 + TypeScript + Vite  
> node 16.4.0  
> npm 7.18.1

基础架构模版，采用 `vue3`,`vite4`, `pinia`, `typescript4.8`, `unocss`,`element-plus`, `element-plus-expand`,`element-plus-expand` 等等依赖，内部还有严格的`eslint`,`styleLint`,`commit-husky`校验规则，可以快速搭建后台管理项目。[gitlab地址](https://git.fpi-inc.site/wangtian/vue3-screen-template)

![在这里插入图片描述](http://wgms.dev.fpi-inc.site/file-base-server/api/v1/sys/download/e31a8f8f96f0490b8f7cf5c3a51cdb8c)

::: tip
安装完依赖后需重新打开vscode文件错误提示就会消失
:::
## 1.vscode插件：
此模版需要配合安装的vscode插件:  
`stylelint` css样式检查插件  
`eslint` js，ts代码检查  
`Volar` vue3相关  
`unocss` css原子化提示插件  文档： [unocss](https://uno.antfu.me) 
## 2.内置检查 
stylelint eslint commitLint 请设置vscode保存自动检查语法  
内置了 `@antfu/eslint-config` 有很强的代码检查和格式化能力，可以很好的规范我们的代码，请务必要安装相关vscode插件。  
commitlint 提交规范请查看`commitlint.config.js`文件，通用格式： **feat: 增加了新功能**  
- tips：提交校验失败时，发现修改的文件都消失了，不要慌，执行`git stash pop`操作即可恢复

## 3.config及关于启动代理：
在vite.config.ts内修改`proxy`后，还需要在`config/index.ts`内修改相应的请求地址:
```
// const defaultHost = 'https://wgms-test.fpi-inc.site'
const defaultHost = 'http://wgms.dev.fpi-inc.site'
```
线上环境无需修改config，会自动读取当前运行地址  
`isMustLogin` 是否需要登录项目 在本地开发时可以设置为false进行无登录开发

## 4.文件及变量命名规则：
**文件：**  
```
文件夹 map，map-service  小写横杠 
ts文件名称： map.ts，map-service.ts  小写横杠  
vue文件名称： map.vue，map-service.vue  小写横杠  
```
**ts类型：**   
普通类型大写开头， Ts结尾： PublicTs  MapTs   
`api`请求相关namespace类型，全大写，_连接，以`API_REQUEST`或`API_RESPONSE`结尾(由于此api命名空间会注入全局，所以希望严格准守命名规则不然容易污染全局)，例如：  
```javascript
PUBLIC_API_REQUEST   // `REQUEST`请求参数namespace  
PUBLIC_API_RESPONSE  // `RESPONSE`响应参数namespace
```
命名空间内部类型命名可以自定义，可以以请求方法的名称命名
## 5.api请求说明
### 目录结构：
```
├─ api // 存放api接口文件
│  ├─ map // api的个个模块文件夹
│  │  ├─ index.ts // 存放接口api
│  │  └─ types.d.ts // 存放接口传参类型，相应类型
│  ├─ public
│  │  ├─ index.ts
│  │  └─ types.d.ts
│  ├─ index.ts // 全部api模块导入
├─ service
│  ├─ base-serve.ts // 服务文件
│  ├─ request.ts // 请求核心，请求拦截，响应拦截，请求控制器
│  └─ types.ts // api核心类型
```
### 使用：
```javascript
// 配置
export const getSystemMenus = (data: PUBLIC_API_REQUEST.getSystemMenus, option:apiObjTs={} ) => {
    return Request<PUBLIC_API_RESPONSE.getSystemMenus>({
        url: '/api/v1.0/permissions/systemMenus', // 请求地址
        server: 'bspPermissionServer', // 服务地址，默认可以在config内配置
        method: 'post', // 请求类型 默认get
        headers: { // 请求头
            'Content-Type': 'application/json'
        },
        isIntercept: true // 是否推入全局的请求拦截队列 拦截方法见下：
        baseURL: '/api', // 代理 默认/api 可以不传，除非你要本地调试自定义代理
        data, // 请求参数 get类型要传params
        ...option // 自定义扩展参数
    })
}
// 引入
// import * as publicApi from '@/api/public' // 全部导入-不建议
import { getSystemMenus } from '@/api/public' // 单个请求导入
// import { PublicApi } from '@/api' // 通过index导入整个请求文件夹-不建议
const systemCode = 'wgmsAnalysisDiagnose'
// 根据权限获取菜单信息
const getHttpAuth = async () => {
    const data = await publicApi.getSystemMenus(
        { systemCode },
        {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'token': window.localStorage.getItem('token') || ''
            }
        }
    )
}
```
### 请求拦截，拦截队列清空：
```javascript
import { useAxiosStore } from '@/store/axios';
const axiosStore = useAxiosStore()
axiosStore.clearIntercept(1) // 拦截最新一条请求，并删除
axiosStore.clearIntercept() // 拦截全部并清空拦截队列
```

## 6.路由
所有view文件夹下非 `components`文件夹下的vue文件都会被根据路径设置为按需引入的路由
```javascript
├─ views
├─ home.vue // 解析为路由 path: /home name: home （注意避免名称重复）
├─ form
│  ├─ top.vue  // 解析为路由 path: /form/top name: top （注意避免名称重复）
│  ├─ components // 存放该路由业务相关组件
│  │  ├─ button-list-vue // 不会被解析为路由，会被动态引入组件引入 模版内可以直接使用无需引入（注意避免名称重复）

```
## 7.组件
内置组件：  
`fpi-cascader`, `side-layout`, `fpi-menu`, `fpi-tree`
## 8.目录结构
```
vue3-template
├─ public
├─ src
│  ├─ api  // 请求api
│  ├─ assets // 静态资源包括 fontFamily images svg等等
│  ├─ components // 公共通用性组件
│  ├─ config // 服务相关以及线上环境配置信息
│  ├─ layouts // 页面布局组件
│  ├─ router // 动态路由逻辑
│  ├─ service // 请求封装
│  ├─ store // pinia
│  ├─ styles // 公共样式 以及unocss公共文件
│  ├─ types // 公共类型
│  ├─ utils // 所有工具类
│  ├─ views // 路由页面
│  ├─ symbols.ts // 全局唯一标识数据存储 例如定义provide key
│  ├─ App.vue
│  ├─ main.ts
│  └─ auto-import.d.ts
```

::: warning
所有的`components`文件夹下的组件名称都不要重复
所有的`view`下的路由组件（也就是非`components`组件）的名称相互间都不要重复
:::


## 贡献者

<ContributorView name="王田,马佳辉"></ContributorView>