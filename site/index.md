---
layout: home

hero:
  name: element-plus-expand
  text: 信息化前端开发者平台
  tagline: 我们有element-plus， element-ui，uview，vant扩展组件库，vue3多端模版，前端脚手架，地图样例，echarts样例等等，带你走近信息化的前端技术栈
  image:
    src: /images/layer.svg
  #   alt: VitePress
  actions:
    - theme: brand
      text: 园区
      link: /page/team/park/index
    - theme: brand
      text: 大气
      link: /page/team/gas/index
    - theme: brand
      text: 水产品
      link: /page/team/water/specifications/name
    - theme: brand
      text: 组件库
      link: /page/component/element-plus-expand/quickstart
    - theme: brand
      text: 模版
      link: /page/template/public/cli
    - theme: alt
      text: 在GitLab上查看
      link: https://git.fpi-inc.site/product/ued-products/element-plus-expand
features:
  - icon: ⚡️
    title: vite+TypeScript+Vite
    details: vite加持,超快开发体验，TS代码保证，pc通用模版，
  - icon: 📦
    title: element-plus扩展组件
    details: 扩展可配置化动态组件，提高开发效率，一切配置化
  - icon: 🖖
    title: vant扩展组件
    details: 提升手机端前端组件功能较少的短板，弥补业务需求，更多组件体验
  - icon: 🛠️
    title: 前端模版脚手架
    details: pc通用，mapbox地图，H5三端稳定模版快速构建前端框架
  - icon: 💡
    title: 微前端框架模版
    details: 解决多团队开发需求，并支持vite，vue3，避免风险
  - icon: ➕
    title: Monorepo 方式管理
    details: Monorepo 方式管理组件库生态，统一打包部署，更新，高效。
---

<script setup>
import gptTools from './.vitepress/components/gpt-tools.vue'
import { onMounted, createApp } from 'vue'
 onMounted(() => {
    const hasGpt = !!document.getElementById('gpt-dom')
    if(hasGpt) return
    const divDom = document.createElement('div');
    divDom.setAttribute('id', 'gpt-dom')
    document.body.appendChild(divDom);
    const dom = createApp(gptTools)
    dom.mount('#gpt-dom').$el
 })
</script>