<!--
 * @Author: mjh
 * @Date: 2023-05-07 23:40:04
 * @LastEditors: mjh
 * @LastEditTime: 2023-05-08 12:04:16
 * @Description: 
-->
# 第一代vue3+Ts+Vite公共模版
# vue3-admin-template
> 模版地址 https://git.fpi-inc.site/product/ued-products/vue3-admin-template
> - 1、使用 fpi init [projectName]  （fpi命令使用npm install @ued_fpi/fpi-cli -g下载即可）
> - 2、选择 vue3-template
> - 3、选择 vue3-admin-template 即可


## 一、项目介绍

> - vue3 前端开发脚手架模版，方向为后台管理系统类型的项目
> - 使用了 pnpm 包管理工具
> - 集成技术为 typescript vite3 vue3 vue-router pinia element-plus echarts dayjs axios lodash-es 等

![在这里插入图片描述](http://wgms.dev.fpi-inc.site/file-base-server/api/v1/sys/download/e0683998131a4f14baf677a800dcab9e)


![在这里插入图片描述](http://wgms.dev.fpi-inc.site/file-base-server/api/v1/sys/download/6bfa6f1bf96d4d3582ad0c031da0e9ee)


## 二、辅助开发工具

- commit 规范集成，所有的 commit 都会被校验，不符合[https://git.fpi-inc.site/documents/common/wikis/Git%E6%97%A5%E5%BF%97%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83]内说明规范的，无法提交
- 集成辅助 commit 工具，使用 npm run cz 命令可以打开交互式提交命令窗口
- eslint，prettier，stylelint 规范集成，保证代码走一遍检查，风格统一

## 三、主要命令说明

```json
{
  "dev": "vite", // 本地启动开发
  "build": "vite build", // 打包构建生产包（会检查ts）
  "preview:build": "vite build --mode preview-build", // 预览打包，目的是配合 preview 命令进行预览
  "preview": "vite preview", // 预览，dist文件夹下必须有内容
  "type-check": "vue-tsc --noEmit", // ts类型检查
  "lint-staged": "lint-staged", // lint-staged
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore", // eslint
  "lint:stylelint": "stylelint src/**/*.{vue,css,scss} --fix", // stylelint
  "prepare": "husky install", // 无需关心，系统自调用
  "cz": "npx cz" // 交互式提交命令，通过使用此命令，可以提交绝对符合规范的提交日志
}
```

## 四、项目主要目录文件说明

```typescript
├── dist // 最终build出的目录
├── public // 存放无需打包的文件，如第三方的js文件，大图片，视频等资源
├── src // 源码目录
│   ├── assets // 静态文件
│   ├── components // 公共组件，建议只放置两处或两处以上使用的公共组件，只是为了业务拆分的请放置在views下页面内自己的components内
│   ├── config // 配置文件
│   ├── router // 路由定义文件
│   ├── services // 服务端接口定义
│   ├── stores // 数据仓库定义
│   ├── styles // 公共样式定义
│   ├── utils // 公共工具定义
│   └── views // 页面
│   ├── App.vue // 入口App.vue
│   ├── main.ts // 入口文件
│   ├── systemAuth.ts // 用户信息&权限页面加载前的前置获取
├── .eslintignore // eslint忽略文件
├── .eslintrc.cjs // eslint配置
├── .gitignore // git忽略文件
├── .husky // git提交钩子设置
├── .prettierignore // prettier忽略文件
├── .prettierrc.js // prettier配置
├── .stylelintignore // stylelint忽略文件
├── .stylelintrc.js // stylelint配置
├── README.md // readme
├── auto-imports.d.ts // 自动导入 由插件自动处理，无需修改
├── commitlint.config.js // commit提交规范配置
├── components.d.ts // 自动导入 由插件自动处理，无需修改
├── env.d.ts // 部分包ts的声明文件
├── index.html // 入口html
├── package.json // 包配置文件
├── pnpm-lock.yaml // pnpm lock文件
├── tsconfig.config.json // ts配置
├── tsconfig.json // ts配置
├── vite.config.ts // vite配置
```

## 五、重要源码目录详细说明

### 1、index.html

- 根 html 入口页面

### 2、public

- 存放第三方的库或者不想被编译打包的文件，如 js,图片，视频
- 注意 js 文件必须是浏览器可直接使用的，如 umd 规范，iife 规范的 js 文件，因为不会被编译。
- public 下的文件如果想在 src 源码目录下使用，可以绝对路径的方式，如下

```typescript
const jsUrl = import.meta.env.BASE_URL + 'env.js'
const imgUrl = import.meta.env.BASE_URL + 'images/test-img.png'
```

- public 下的文件如果想在 index.html 文件下使用，可以相对路径的方式，因为最终 build 出 dist 文件后，index.html 会和 public 文件夹内的文件在同一目录下 ，如下

```html
<script src="./env.js"></script>
<img src="./images/test-img.png"></img>
```

### 3、src > systemAuth.ts

- 暴露出一个名叫 systemAuth 的 promise 方法，
- 用于获取用户信息和用户菜单权限等
- 需要在页面内容加载前的前置调用的内容
- 具体内容可以查看 systemAuth.ts, 使用如下

```typescript
systemAuth().then(res => {
  if (res) {
    app.mount('#app')
  }
})
```

### 4、src > config

- 用于系统编写过程中可能会用到的配置项
- 集成 3 块的配置项
  - 配置 1 window.ENV 来源文件 public/env.js
  - 配置 2 devAndProdConfig 与开发还是生产相关的配置，来源文件 src/config/devAndProdConfig.ts
  - 配置 3 commonConfig, 静态配置。来源文件 src/config/index.ts
- src/config/type.ts 编写配置相关的类型 WindowEnvConifg DevOrProdEnvConfig CommonConfig 分别对应配置 1，2，3
- 最终 3 个配置聚集在一处，使用均通过 import { allConfig } from '@/config' 导出使用即可
- 没有使用默认导出，是为了防止各个文件导出后的名字不一致

### 5、src > components

- 只放置公共开发的组件, 在页面其它处的引用达到两个及两次以上的组件
- 只是业务拆分而产生的组件可以放置在 views 下的页面文件夹下的 components 内
- 内置组件
  - SvgIcon 组件，请阅读当前组件下的 read.md
  - BaseEcharts 组件, 请阅读当前组件下的 read.md

### 6、src > services

- 使用 utils 文件夹下的 request.ts 作为请求方法
- 主要分为两种文件 types.d.ts 文件写入参和出参的类型声明, [xxxx].ts 定义接口请求方法
- types.d.ts 类型无需导入导出，可直接使用
- 具体案例参考如下

```typescript
//  src/services/global/types.d.ts 文件

declare namespace GLOBAL_API {
  type GetUserInfo = {
    account: string
    address: string
    comment: string
    email: string
    idcardNo: string
    inHangzhou: number
    mobilePhone: string
    name: string
    orgId: number
    orgName: string
    phone: string
    status: string
    telephone: string
    updatePasswordTime: number
    userId: number
    userIdStr: string
    userUuid: string
  }
}

// src/services/global/index.ts

import request from '@/utils/request'

export const getUserInfo = () => {
  return request<GLOBAL_API.GetUserInfo>({
    url: '/user/login-user',
    server: 'simple',
  })
}
```

### 7、src > stores

- 定义数据仓库，使用了 pinia, 具体查看[https://pinia.web3doc.top/introduction.html#%E5%9F%BA%E6%9C%AC%E7%A4%BA%E4%BE%8B]
- 有两种定义方式

  - 常规标准方式

  ```typescript
  import { defineStore } from 'pinia'

  export const useCounterStore = defineStore('counter', {
    state: () => {
      return { count: 0 }
    },
    actions: {
      increment() {
        this.count++
      },
    },
  })
  ```

  - 定义 hooks 的方式

  ```typescript
  import { reactive } from 'vue'
  import { defineStore } from 'pinia'
  import { allConfig } from '@/config'
  import { getSystemMenus, getUserInfo } from '@/services/global'

  /**
   * 在使用时，需要使用 storeToRefs 包裹 如下
   * const globalStore = useGlobalStore()
   * const { userInfo } = storeToRefs(globalStore)
   * 原因：使用ref生成值, 直接导出ref的值会被解构
   */

  export const useGlobalStore = defineStore('globalState', () => {
    const userInfo = reactive({ name: 'test1' })
    const getAsyncUserInfo = async () => {
      const data = await getUserInfo()
      Object.assign(userInfo, data)
    }

    const systemMenus = reactive([])
    const getAsyncHttpAuth = async () => {
      const { data } = await getSystemMenus({
        systemCode: allConfig.systemCode,
      })
      Object.assign(systemMenus, data.entries)
    }

    return { userInfo, getAsyncUserInfo, getAsyncHttpAuth }
  })
  ```

### 8、src > styles

- 公共样式定义
- 公共变量定义（可根据项目需要绝对是否使用 css 变量）,如下

```css
body {
  --app-font-color: #345678;
}

.style {
  color: var(--app-font-color);
}
```

### 9、src > router

- 路由定义
- 不在建议使用直接导入全部路由的方式，然后根据文件路径自动生成路由的方式
- 建议使用什么路由，定义具体路径，具体导入方式可以使用直接导入或者懒加载导入的方式，具体如下：

```typescript
import { createRouter, createWebHashHistory } from 'vue-router'
import SvgUseDemo from '@/views/svg-use-demo/index.vue'
import EChartsUseDemo from '@/views/echarts-use-demo/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/svg-use-demo',
      name: SvgUseDemo.name,
      component: SvgUseDemo,
    },
    {
      path: '/echarts-use-demo',
      name: EChartsUseDemo.name,
      component: EChartsUseDemo,
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('@/views/other/index.vue'),
    },
    {
      path: '/',
      redirect: '/svg-use-demo',
    },
  ],
})

export default router
```

### 10、src > views

- 页面文件定义
- 文件目录定义示例如下

```typescript
// 案例
├── views
│   ├── page1 // 页面1
│   ├── ├── components // 业务内组件
│   ├── ├── PageHeader.vue // 业务内组件1
│   ├── ├── PageCard.vue // 业务内组件2
│   ├── ├── index.vue // 页面1入口文件
│   ├── page2 // 页面1
│   ├── ├── components // 业务内组件
│   ├── ├── Page2Header.vue // 业务内组件1
│   ├── ├── Page2Card.vue // 业务内组件2
│   ├── ├── index.vue // 页面2入口文件

```

- 提供内置代码示例页面
  - svg-use-demo SvgIcon 组件的使用案例&所有 SvgIcon 组件所有可用的 Svg
  - echarts-use-demo 如何使用 BaseECharts 组件

### 11、src > utils

- 公用方法定义

### 12、src > assets

- 静态文件放置


## 贡献者

<ContributorView name="李国帝,张尚飞,王田,金琳欣,王腾,马佳辉"></ContributorView>