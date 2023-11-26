<!--
 * @Author: mjh
 * @Date: 2023-04-25 12:12:09
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-25 12:36:30
 * @Description:
-->
<template>
    <div ref="echartDom" :class="`echart-dom ${theme}`" :style="`height: ${height}; }`" />
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'
const props = defineProps({
    option: {
        type: Array,
        default: () => []
    },
    theme: {
        type: String as PropType<'dark' | 'light'>,
        default: 'light'
    },
    height: {
        type: String,
        default: ''
    }
})
const echartDom = ref()
let chartChance: any = null
onMounted(() => {
    chartChance = echarts.init(echartDom.value)
    chartChance.setOption(props.option as any)
})
onUnmounted(() => {
    chartChance && chartChance.dispose()
    chartChance = null
})
</script>

<style scoped>
.echart-dom {
    width: 100%;
    height: 300px;
}

.dark {
    background: rgb(19, 35, 44);
}
</style>
