[[toc]]

## 目录结构
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
│  │  ├─ staticData.ts // 静态文件
│  │  ├─ tools.ts // 公共工具
│  ├─ views // 路由页面
│  │  ├─ map // map 页面
│  │  │  ├─ map.vue
│  │  │  ├─ components // map内部组件
│  │  ├─ home // home 页面
│  │  │  ├─ home.vue
│  │  │  ├─ components // home内部组件
│  │  ....... // home 页面
│  ├─ symbols.ts // 全局唯一标识数据存储 例如定义provide key
│  ├─ App.vue
│  ├─ main.ts
│  └─ auto-import.d.ts
```
### components
目录公共 `components`存放在 `src/components` 下，所有 `views` 内部的文件且不会公共用到的都存放在 当前页面文件夹下。如下
```

├─ views // 路由页面
│  ├─ map // map 页面
│  │  ├─ components // map内部组件
│  │  │  ├─ map-top.vue // map内部组件
│  │  │  ├─ map-bottom.vue // map内部组件
│  │  ├─ map.vue
│  ├─ home // home 页面
│  │  ├─ components // home内部组件
│  │  │  ├─ home-top.vue // map内部组件
│  │  │  ├─ home-bottom.vue // map内部组件
│  │  ├─ types.ts // map内部工具
│  │  ├─ home.vue

```
::: warning
所有的`components`文件夹下的组件名称都不要重复
所有的`view`下的路由组件（也就是非`components`组件）的名称相互间都不要重复
:::

### Api目录
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
