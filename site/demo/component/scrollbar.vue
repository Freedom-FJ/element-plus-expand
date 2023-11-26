<!--
 * @Author: mjh
 * @Date: 2023-03-24 22:36:25
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-01 22:25:34
 * @Description:
-->
<template>
    <ElScrollbar ref="scrollbarRef" height="400px" always @scroll="scroll">
        <div ref="innerRef">
            <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
                {{ item }}
            </p>
        </div>
    </ElScrollbar>

    <el-slider
        v-model="value"
        :max="max"
        :format-tooltip="formatTooltip"
        @input="inputSlider"
    />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { ElScrollbar } from 'element-plus'

const max = ref(0)
const value = ref(0)
const innerRef = ref<HTMLDivElement>()
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

onMounted(() => {
    max.value = innerRef.value!.clientHeight - 380
})

const inputSlider = (value: number) => {
  scrollbarRef.value!.setScrollTop(value)
}
const scroll = ({ scrollTop }: any) => {
    value.value = scrollTop
}
const formatTooltip = (value: number) => {
    return `${value} px`
}
</script>

<style scoped>
.scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    color: var(--el-color-primary);
    text-align: center;
    background: var(--el-color-primary-light-9);
    border-radius: 4px;
}

.el-slider {
    margin-top: 20px;
}
</style>
