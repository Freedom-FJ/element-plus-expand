<!--
 * @Author: mjh
 * @Date: 2023-07-06 10:10:46
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-04 12:44:26
 * @Description: 
-->

<!-- <DvAimsAirQualityCalendar></DvAimsAirQualityCalendar>
<script setup >
import { DvAimsAirQualityCalendar } from '@ued_fpi/data-visual/aims'
</script>
<style>
@import "@ued_fpi/data-visual/style/style-aims.css";
</style> -->
# 快速开始（模块联邦）

## 1.添加模块联邦支持

- 添加`@originjs/vite-plugin-federation`插件
::: code-group

```js[yarn]
yarn add @originjs/vite-plugin-federation -D
```

```js[pnpm]
pnpm install @originjs/vite-plugin-federation -D
```
:::

- 修改`vite.config.ts`配置文件

``` ts
// 引入 vite-plugin-federation
import federation from '@originjs/vite-plugin-federation';

// 修改plugins配置
export default defineConfig({
    plugins: [
        federation({
            name: 'data-visual-host',
            // 远程仓库地址，需要根据项目实际情况调整
            remotes: {
                'dataVisual': 'http://ued.fpi-inc.site/data-visual/assets/remoteEntry.js'
            },
            // 共享依赖声明 用到哪个组件可以共享哪个依赖，没用到对应依赖的组件可以不共享
            shared: ['vue', 'dayjs', 'echarts', 'lodash-es', 'axios'],
        }),
        ...
    ],
    server: {
        host: true, // 开启本地host
        ....
    },
    build: {
        target: 'esnext',
        ...
    },
})
```
::: warning 
> 1. build 一定要设置为 `esnext` 不然会打包失败！  
> 2. 本地调试需要使用localhost访问，不然无法获取到shared资源。  
> 3. [chunk分包需知](#_6-chunk分包需知) 。  
:::

## 2.使用组件

1. 全局引入

main.ts
``` ts
import setDomain from 'dataVisual/setDomain'
import wgms from 'dataVisual/wgms' // 水产品组件
import bmp from 'dataVisual/bmp' // 中台组件
import { createApp } from 'vue'
import App from './App.vue'
import DvTheme from 'dataVisual/theme' // 引入主题变量

import.meta.env.DEV && setDomain('/api') // 设置本地代理

const app = createApp(App)

app.use(bmp)
app.use(DvTheme)
app.use(wgms)
app.mount('#app')
```

1. 按需引入

**.vue
``` Vue
<template>
    <EnvironmentalAnalysis></EnvironmentalAnalysis>
</template>
<script setup lang="ts">
import { EnvironmentalAnalysis } from 'dataVisual/wgms'
</script>
```

## 3.配置本地代理
第一个参数：本地代理前缀  
第二个参数：代理业务线，不传则全部替换
```ts
setDomain(string, 'wgms'|'bmp'|'ipes'|'aims'|undefined)
```

例如：
``` ts
import setDomain from 'dataVisual/setDomain'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
....
import.meta.env.DEV && setDomain('/api') // 设置本地代理
// import.meta.env.DEV && setDomain('/api', 'wgms')
....
app.mount('#app')
```


## 4.主题设置

### 1）引入：
main.ts

```ts
import DvTheme from 'dataVisual/theme'

app.use(DvTheme)
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

## 5.ts类型问题
由于模块联邦暂时不支持ts功能，所以需要进行类型声明  

**.d.ts

``` ts
declare module 'dataVisual/wgms'
declare module 'dataVisual/bmp'
declare module 'dataVisual/aims'
declare module 'dataVisual/ipes'


declare module 'dataVisual/setDomain'
declare module 'dataVisual/theme'
```

## 6.chunk分包需知

由于`vite-plugin-federation`内置了shared资源引入方法,并会干预vite打包，所以我们的 `shared` 相关资源并不会在我们干预chunk中出现，并且其产物始终会在 资源根目录下，打包后的组件引入 `shared` 资源路径始终会以 `./shared资源.js` 此方式引入，比如如下情况：
``` js
build: {
    target: 'esnext',
    // 生成静态资源的存放路径
    assetsDir: 'static/',
    ...
    rollupOptions: {
        output: {
            chunkFileNames: 'static/js/[name]-[hash].js',
            entryFileNames: 'static/js/[name]-[hash].js',
            assetFileNames: 'static/[ext]/[name].[ext]',
        }
    }
},
``` 
如下我们将vite的资源的 `chunkFile` 和 `entryFile` 都存放在 `static/js/` 文件夹下，但是这会导致相关模块联邦组件也会打包在此，比如我们 shared 了 vue 资源 则最终产物 `__federation_shared_vue.js` 始终会在 `static/` 文件夹下，但是我们组件引入该资源的路径始终会是 `./__federation_shared_vue.js`，所以会无法找到 `shared` 资源，所以我们在自定义配置分包策略的时候需要将我们的 组件 `chunk` 始终分配在资源根目录下。例如： 

``` js
build: {
    target: 'esnext',
    // 生成静态资源的存放路径
    assetsDir: 'static/',
    ...
    rollupOptions: {
        output: {
            assetFileNames: 'static/[ext]/[name].[ext]',
            // 解决打包时Some chunks are larger警告
            manualChunks(id) {
                if (id.includes('node_modules')) {
                    return id
                        .toString()
                        .split('node_modules/')[1]
                        .split('/')[0]
                        .toString()
                }
            }
        }
    }
},
``` 


## 文档贡献

<ContributorView name="马佳辉"></ContributorView>