

# @ued_fpi/element-plus-expand ^({{packages.version}})

<script setup> 
import packages from '../../../../packages/element-plus-expand/package/package.json'
</script>

<br/>
<img style="display:inline" src="https://img.shields.io/npm/v/@ued_fpi/element-plus-expand" />
<img style="display:inline;margin-left:10px" src="https://img.shields.io/npm/dt/@ued_fpi/element-plus-expand" />

## 快速上手
`element-plus-expend` 致力于为element-plus提供更强的扩展性，内部含有多个扩展组件。

::: tip
1. 在开始之前，推荐先学习 [vue](https://vuejs.org/) 和 [element-plus](https://element-plus.org/zh-CN/)，并正确安装和配置了 Node.js v14 或以上。官方指南假设你已了解关于 vue 和 element-plus 的中级知识，并且已经完全掌握了 vue 的正确开发方式。  
2. 组件内部不含有任何依赖文件，全部 element-plus 和 vue 相关依赖需要你的工程安装，安装[element-plus](https://element-plus.org/zh-CN/guide/quickstart.html)
:::

## 安装


我们建议您使用包管理器 (npm,[yarn](https://classic.yarnpkg.com/lang/en/), [pnpm](https://pnpm.io/) )安装  <code>@ued_fpi/element-plus-expand</code>
```sh
# 选择一个你喜欢的包管理器

# NPM
$ npm install @ued_fpi/element-plus-expand --save

# Yarn
$ yarn add @ued_fpi/element-plus-expand

# pnpm
$ pnpm install @ued_fpi/element-plus-expand
```

# 引入
## 1.全局引入
```js
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import ElementPlusExpend from '@ued_fpi/element-plus-expand'
import App from './app.vue'

// 引入样式
import 'element-plus/dist/index.css'
import '@ued_fpi/element-plus-expand/style'

const app = createApp(App)
app.use(ElementPlusExpend)
app.use(ElementPlus)
app.mount('#app')
```
## 2.动态按需引入
我们内置了 `fpiELementPlusResolver` 方法来帮助我们完成自动导入 `组件的样式` 以及相应依赖的`element-plus` 相关样式,这样我们在使用组件的时候就不需要 `import` 组件，可以直接在template内书写。前提是我们需要安装并引入 `unplugin-vue-components`
```
yarn add unplugin-vue-components
```
在vite.config内引入
```js
// vite.config.ts

import { fpiELementPlusResolver } from '@ued_fpi/element-plus-expand'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver(), fpiELementPlusResolver()],
        }),
    ]
})
```
使用（组件内直接使用，无需import）：
```vue
// *.vue
<template>
    <FpiElTable
        :column="column"
        :table-data="list"
        max-height="400"
    />
</template>

<script lang="ts" setup>
const column = []
</script>
```

## 3.手动单个按需引入
```vue
// *.vue
<template>
    <FpiElTable
        :column="column"
        :table-data="list"
        max-height="400"
    />
</template>

<script lang="ts" setup>
import { FpiElTable } from '@ued_fpi/element-plus-expand'
// 引入组件样式 (内部包含element-plus相关样式)
import '@ued_fpi/element-plus-expand/es/src/fpi-el-table/style/index'
const column = []
</script>
```

## 设置组件默认值
`@ued_fpi/element-plus-expand`实例内暴露 `setTableConfig`，方法可以设置默认的tableConfig属性，为我们的项目提供更多的便利。
```js
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import ElementPlusExpend, { setTableConfig } from '@ued_fpi/element-plus-expand'
import App from './app.vue'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlusExpend)
setTableConfig({
    headerRowStyle: { background: 'red' },
    headerCellStyle: { background: 'red' },
    pageInit: {
    // 初始化页码
        pageSizes: 20,
        currentPage: 1,
        total: 0,
        pageSizesArr: [10, 20, 30, 50]
    }
})
app.use(ElementPlus)
app.mount('#app')
```

## `setTableConfig`属性
详细值含义以及组件默认值请查看 [动态table属性文档](/page/component/element-plus-expand/table/docs)
```ts
interface tableConfig {
    resExpr?: string // 表格对象在请求回传参数内的位置
    pageTotalExpr?: string // 页码数量在请求回传参数内的位置
    pageReqExpr?: { // 表格页码请求参数key值
        pageSizes: string
        currentPage: string
    }
    currentPageOffset?: number // 默认页码偏移值
    pageInit?: { // 初始化页码参数
        pageSizes: number
        currentPage: number
        total: number
        pageSizesArr: number[]
    }
    headerRowStyle?: Record<string, any> // 表头列样式
    headerCellStyle?: Record<string, any> // 表头单元格样式
    rowStyle?: Record<string, any> // 表内容列样式
    cellStyle?: Record<string, any> // 表内容单元格样式
    isShowPage?: boolean // 是否默认显示页码
}
```

