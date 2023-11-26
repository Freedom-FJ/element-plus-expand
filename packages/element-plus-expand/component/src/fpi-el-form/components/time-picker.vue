<!--
 * @Author: mjh
 * @Date: 2022-10-16 16:31:45
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-10 08:39:43
 * @Description:
-->
<template>
    <ElTimePicker
        v-bind="inputProps"
        ref="inputDom"
        v-model="currModelValue"
    />
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ElTimePicker } from 'element-plus'
import { computed, onMounted, ref } from 'vue'
import type { fromTypeTs, optionTs } from '../types'
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
        type: [Number, String, Date] as PropType<any>,
        default: ''
    },
    /**
     * @desc 对应表格type
     */
    type: {
        type: String as PropType<fromTypeTs>,
        default: ''
    },
    /**
     * @desc 表单选择配置数组
     */
    option: {
        type: Array as PropType<Array<optionTs>>,
        default: () => {
            return []
        }
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
