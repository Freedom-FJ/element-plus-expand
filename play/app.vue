<!--
 * @Author: mjh
 * @Date: 2022-08-19 09:31:37
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-13 10:51:59
 * @Description:
-->
<template>
    <cascader />
    <progressBar />
    <tableDom />
    <formDom />
    <rollingDom />
    <timePicker />
    <map-location />
</template>

<script lang="ts" setup>
// import { DvWgmsWaterQualitySituation } from '@ued_fpi/data-visual/dist/es/wgms/src/index' // 引入单个大气组件
// import { DvWgmsWaterQualitySituation } from '@ued_fpi/data-visual' // 引入单个大气组件
import '@ued_fpi/data-visual/style/style-wgms.css'
import cascader from './components/cascader.vue'
import mapLocation from './components/map-location.vue'
import rollingDom from './components/rolling-dom.vue'
// import formDom from './components/form-test.vue'
import formDom from './components/form.vue'
// import '@ued_fpi/element-plus-expand/es/src/fpi-el-table/style'
// import { FpiEaButton } from '@ued_fpi/element-plus-expand'
import tableDom from './components/table.vue'
// import { FpiElTable } from '@ued_fpi/element-plus-expand'
import timePicker from './components/timePicker.vue'
import progressBar from './components/progressBar.vue'
</script>
