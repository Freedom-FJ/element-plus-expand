<!--
 * @Author: mjh
 * @Date: 2022-10-16 16:31:45
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-26 10:47:06
 * @Description:
-->
<template>
    <ElSelect
        v-bind="inputProps"
        ref="inputDom"
        v-model="currModelValue"
    >
        <ElOption
            v-for="selItem, ind in option || []"
            :key="ind"
            v-bind="selItem"
            :value="showExpr(selItem, 'value')"
            :label="showExpr(selItem, 'label')"
        >
            {{ showExpr(selItem, 'selectLabel') || showExpr(selItem, 'label') }}
        </ElOption>
        <template v-if="inputProps.prefix" #prefix>
            <slot name="prefix" />
        </template>
        <template v-if="inputProps.empty" #empty>
            <slot name="empty" />
        </template>
    </ElSelect>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ElOption, ElSelect } from 'element-plus'
import { computed, onMounted, ref } from 'vue'
import type { fromTypeTs, inputPropsTs, optionTs, record } from '../types'

const props = defineProps({
    /**
     * @desc 表单配置项
     * @abstract
     */
    inputProps: {
        type: Object as PropType<inputPropsTs>,
        default: () => {
            return {}
        }
    },
    /**
     * @desc 对应vModel值
     */
    modelValue: {
        type: [Number, String, Boolean, Array] as PropType<string | number | boolean | unknown[] | Record<string, any> | undefined>,
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
    set(value: string | number | boolean | unknown[] | Record<string, any> | undefined) {
        $emit('update:modelValue', value)
    },
    get() {
        return props.modelValue
    }
})

const inputDom = ref()
const showExpr = computed(() => (item: record, name: string) => {
    const optionExpr = props.inputProps.optionExpr
    if (!optionExpr) return item[name]
    return item[(optionExpr as record)[name] || name]
})
onMounted(() => {
    $emit('upDataRefInput', inputDom.value)
})
</script>
