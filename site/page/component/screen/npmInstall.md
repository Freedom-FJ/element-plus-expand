<!--
 * @Author: mjh
 * @Date: 2023-08-08 11:10:01
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-13 10:51:34
 * @Description: 
-->
# @ued_fpi/data-visual （npm）

<br>

<img style="display:inline" src="https://img.shields.io/npm/v/@ued_fpi/data-visual" />
<img style="display:inline;margin-left:10px" src="https://img.shields.io/npm/dt/@ued_fpi/data-visual" />

## 1.安装
::: code-group

```js[yarn]
yarn add @ued_fpi/data-visual -D
```

```js[pnpm]
pnpm install @ued_fpi/data-visual -D
```
:::

## 2.引入

### 1）全局全量引入

main.ts
```ts{3,5,9}
import { createApp } from 'vue'
import App from './App.vue'
import dataVisual from '@ued_fpi/data-visual'

import '@ued_fpi/data-visual/style' // 引入组件样式

const app = createApp(App)

app.use(dataVisual)
app.mount('#root') 

```

### 2）单模块全量引入
组件库支持只引入部分业务线组件。
main.ts
```ts{3,5,6,10}
import { createApp } from 'vue'
import App from './App.vue'
import dataVisualAims from '@ued_fpi/data-visual/dist/es/aims/index'

import '@ued_fpi/data-visual/style/base.css' // 引入组件库变量
import '@ued_fpi/data-visual/style/style-aims.css' // 引入大气组件样式

const app = createApp(App)

app.use(dataVisualAims)
app.mount('#root') 
```

### 3）按需单个组件引入
当然组件也同样支持引入单个组件，但是需要
**.vue
```vue
<template>
<DvWgmsWaterQualitySituation></DvWgmsWaterQualitySituation>
</template>
<script setup lang="ts">
import { DvWgmsWaterQualitySituation } from '@ued_fpi/data-visual/dist/es/wgms/src/index'
</script>
<style >
@import "@ued_fpi/data-visual/style/style-bmp.css";
</style>
```


## 3.主题设置

### 1）引入：
注意需要引入相印的组件变量文件
main.ts

```ts
import '@ued_fpi/data-visual/style/base.css' // 引入组件库变量
// 或者
import '@ued_fpi/data-visual/style' // 引入组件样式
```
### 2）手动暗黑模式
设置 html 上 class 为 `dark` 即可强制开启黑暗模式，由于组件内嵌了`element-plus`组件,所以记得引入其暗黑模式样式文件

```html{2}
<!DOCTYPE html>
<html class="dark" lang="zh-CN">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="#"/>
</head>
<body>
<div id="root"></div>
<script type="module" src="/src/main.ts"></script>
</body>
</html>
```

引入`element-plus`暗黑模式样式文件:

App.vue
```vue
<style lang="scss">
@import "element-plus/theme-chalk/dark/css-vars.css";
</style>
```

### 3）动态设置主题：
```vue
<template>
    <el-switch v-model="isLight" @click="toggle()" />
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { useToggle } from '@vueuse/shared'

const isDark = useDark({
    // 存储到localStorage/sessionStorage中的Key 根据自己的需求更改
    storageKey: 'useDarkKEY',
    // 暗黑class名字
    valueDark: 'dark',
    // 高亮class名字
    valueLight: 'light',
})
const isLight = ref(!isDark.value)
const toggle = useToggle(isDark)
</script>
```

## 文档贡献

<ContributorView name="马佳辉"></ContributorView>
