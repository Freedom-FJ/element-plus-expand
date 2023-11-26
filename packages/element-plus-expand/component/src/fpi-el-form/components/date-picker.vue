<!--
 * @Author: mjh
 * @Date: 2022-10-16 16:31:45
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-25 09:06:38
 * @Description:
-->
<template>
    <ElDatePicker
        v-bind="inputProps"
        ref="inputDom"
        v-model="currModelValue"
        :style="inputProps.style || { width: '100%' }"
    />
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { ElDatePicker } from 'element-plus'
import type { PropType } from 'vue'
import type { fromTypeTs } from '../types'

// import 'element-plus/es/components/date-picker/style/css'

const props = defineProps({
    /**
     * @desc 表单配置项
     * @abstract
     */
    inputProps: {
        type: Object as PropType<any>,
        default: () => {
            return {}
        }
    },
    /**
     * @desc 对应vModel值
     */
    modelValue: {
        type: [Number, String, Boolean, Date] as PropType<any>,
        default: ''
    },
    /**
     * @desc 对应表格type
     */
    type: {
        type: String as PropType<fromTypeTs>,
        default: ''
    }
})
/**
 * @desc form回调函数
 */
const $emit = defineEmits([
    'update:modelValue',
    'upDataRefInput'
])
const currModelValue = computed({
    set(value: any) {
        $emit('update:modelValue', value)
    },
    get() {
        return props.modelValue
    }
})
const inputDom = ref()
onMounted(() => {
    $emit('upDataRefInput', inputDom.value)
})
</script>
