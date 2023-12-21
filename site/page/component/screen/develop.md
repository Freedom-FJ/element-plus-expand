# DataVisual

# 开发须知
## 工具和安装

工具及其版本  
node: v16+  
pnpm

安装
`pnpm install`


## vscode插件

`Eslint` `styleLint` `volar`

## 目录结构

```
├─ packages
│  ├─ components                   // 组件库
│  │  ├─ amis                      // 大气
│  │  │  ├─ src                    // src
│  │  │  │  ├─ AirQualityCalendar  // 空气质量大屏组件
│  │  │  │  ├─ ...                 // 其他文件
│  │  │  │  ├─ index.ts            // 组件汇总
│  │  │  ├─ index.ts               // 入口文件
│  │  │  ├─ package.json           // package.json
│  │  │  ├─ vite.config.ts         // vite.config.ts
│  │  ├─ bmp                       // 中台
│  │  ├─ ipes                      // 园区
│  │  ├─ wgms                      // 水
│  ├─ host                         // host端
│  ├─ remote                       // remote端
├─ play                            // 测试工程
```

::: tip 第一阶段
<span id="tow-MD"></span>
所有组件开发人员只需要关注 `packages/components` 下对应的业务线组件代码即可，在里面开发组件，并运行 pnpm play 进行组件功能的测试，其他工程不需要关注。
:::
  
::: tip 第二阶段
当组内组件基本开发完成后,由 `组长` 运行 `pnpm build:remote`, 然后运行 `pnpm remote` 启动远端服务，再运行 `pnpm host` 启动本地测试服务，进行组内组件的模块联邦测试工作，并将问题提交给组内对应作者进行修改，详细内容请看下[`host端测试须知`](#host端测试须知)。
:::

注意：host 端 和 remote端代码修改不要提交！！ 

## 组件库规范

1. 组件命名: 
> 组件文件夹需要大驼峰的风格  
> 组件子文件 遵循小驼峰或非驼峰形式，不同文件分类需要放入对应的文件夹内：  
> 组件入口文件为 index.ts 用于暴露组件  
> 组件主体为 index.vue 例如：  
```
├─ AirQualityCalendar  // 空气质量大屏组件
│ ├─ images          // 组件图片
│ │  ├─ air.png
│ ├─ style           // 组件样式
│ │  ├─ index.scss
│ ├─ components      // 组件子组件
│ │  ├─ test.vue     
│ ├─ api             // 组件子请求
│ │  ├─ index.ts     
│ ├─ index.vue       // 组件主体
│ ├─ index.ts        // 组件暴露
``` 
> 组件入口文件 index.ts,具名导出组件时需要加上 `dv-[ipes/wgms/aims/bmp]-` 前缀,并转换为大驼峰，为了防止组件名称重复情况！！

``` ts{5}
import { install } from '../../utils/tools'
import _DrinkingWaterComplianceRate from './index.vue'

// export const DrinkingWaterComplianceRate = install(_DrinkingWaterComplianceRate)
export const DvWgmsDrinkingWaterComplianceRate = install(_DrinkingWaterComplianceRate)
export default _DrinkingWaterComplianceRate

```

1. 在`packages/components`下分为`ipes`、 `aims`、 `wgms`、 `bmp`、 `commons`，分别对应开发一组、开发二组、开发三组、平台二组和公共。  
2. 组件最外层dom class：`dv-[ipes/wgms/aims/bmp]-{componentName}` ， 例如：
``` html
<dv-wgms-data-picker>
    <dv-wgms-data-picker-top>
        头部
    </dv-wgms-data-picker-top>
    <dv-wgms-data-picker-bottom>
        底部
    </dv-wgms-data-picker-bottom>
</dv-wgms-data-picker>
```
1. 所有style必须以外链 string 的形式引入  例如：

``` vue
<style lang="scss">
@import "../../styles/mixins";
@import "./style/index";
</style>
```

5. 开发完成的组件应在`packages/components/xxx/src/index.ts`中导出，如下（因为批量导出会失去类型所以辛苦各位每个组件都手写导出一下）

``` js
// index.ts
export * from './FactorRealTimeRank'

```

## 组件库使用

在各组的组件库`packages/components/xxx`内开发组件,并在`packages/components/xxx/src/index.ts`中导入并暴露  

在项目根目录中使用`pnpm play`命令启动项目，可在`/play/src/App.vue`中导入组件查看效果

项目使用pnpm workspace + lerna, 可使用软链在`play`中导入组件库中的组件，例如：

``` js
import { AirQualityCalendar } from '@data-visual/aims'
// @data-visual/aims 为组件库的package.json.name
```

## 提交规范
所有commit提交必须规范，请以如下格式提交，前缀类型请参考 `commitlint.config.js` 文件

```
// 格式: {type}({wgms/bmp/aims/ipes}): ** `{ componentName }` **  
feat(wgms): 制作`EnvironmentalAnalysis` 空气质量组件
fix(bmp): 修复`TestCom` 数据过多换行问题
docs(aims): 书写 `FactorRealTimeRank` 文档
```
`: ` 是英文，中文会无法提交

## host端测试须知
以下内容全权由组长阅读，启动相关请看上部[第二阶段](#tow-MD)。

1. 由于链接地址导致在host端无法正确获取到png,svg 等资源，并且打包也会失去相关资源，我们暂时统一采用base64方式引入，所以项目中不可以出现 `new URL` 方式引入图片, 所有涉及到动态引入图片资源的请使用import引入。例如：
``` vue
<template>
    <img :src="wind_direction" alt="">
</template>
<script setup lang="ts">
import wind_direction from './images/wind_direction.svg'
</script>
```

2. 当运行host端时，注意使用localhost访问，而不是 127.0.0.1，不然会获取不到shared资源。

涉及到相关其他问题请反馈 `马佳辉` `王腾` 。


## readme书写

每一个组件都必须书写readme，才算完整完成，readme包括

> 1. 例子,请用 ` ```vue ` 和 ` ``` ` 包裹会在远端显示对应组件。
> 2. 属性，方法，事件，插槽等。
> 3. 作者,请使用 ` ContributorView ` 组件， 同样也需要使用 ` ```vue ` 包裹。

[点击查看readme示例文件](http://ued.fpi-inc.site/element-plus-expand/sreenDemo.md)

## 文档贡献

<ContributorView name="马佳辉,王腾"></ContributorView>

