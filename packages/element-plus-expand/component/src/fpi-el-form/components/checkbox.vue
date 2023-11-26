<!--
 * @Author: mjh
 * @Date: 2022-10-16 16:31:45
 * @LastEditors: mjh
 * @LastEditTime: 2023-06-01 19:30:52
 * @Description:
-->
<template>
    <ElCheckboxGroup
        v-bind="inputProps"
        ref="inputDom"
        v-model="currModelValue"
    >
        <template v-if="inputProps.type === 'button'">
            <ElCheckboxButton
                v-for="selItem, ind in option || []"
                v-bind="selItem"
                :key="ind"
                :label="showExpr(selItem, 'value')"
            >
                {{ showExpr(selItem, 'label') }}
            </ElCheckboxButton>
        </template>
        <template v-else>
            <ElCheckbox
                v-for="selItem, ind in option || []"
                v-bind="selItem"
                :key="ind"
                :label="showExpr(selItem, 'value')"
            >
                {{ showExpr(selItem, 'label') }}
            </ElCheckbox>
        </template>
    </ElCheckboxGroup>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from 'element-plus'
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
        type: Array as PropType<Array<any>>,
        default: () => {
            return []
        }
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
    set(value: (string | number)[] | undefined) {
        $emit('update:modelValue', value)
    },
    get() {
        return props.modelValue as (string | number)[] | undefined
    }
})
const showExpr = computed(() => (item: record, name: string) => {
    const optionExpr = props.inputProps.optionExpr
    if (!optionExpr) return item[name]
    return item[(optionExpr as record)[name] || name]
})
const inputDom = ref()
onMounted(() => {
    $emit('upDataRefInput', inputDom.value)
})
</script>
