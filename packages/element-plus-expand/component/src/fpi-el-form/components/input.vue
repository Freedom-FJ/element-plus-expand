<!--
 * @Author: mjh
 * @Date: 2022-10-16 16:31:45
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-25 09:06:54
 * @Description:
-->
<template>
    <ElInput
        v-bind="inputProps"
        ref="inputDom"
        v-model="currModelValue"
    >
        <template v-if="inputProps.prefix" #prefix>
            <slot name="prefix" />
        </template>
        <template v-if="inputProps.suffix" #suffix>
            <slot name="suffix" />
        </template>
        <template v-if="inputProps.prepend" #prepend>
            <slot name="prepend" />
        </template>
        <template v-if="inputProps.append" #append>
            <slot name="append" />
        </template>
    </ElInput>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ElInput } from 'element-plus'
import { computed, onMounted, ref } from 'vue'
import { inputLimitObj } from '../utils'
import type { InputLimitTs, fromTypeTs } from '../types'

// import 'element-plus/es/components/input/style/css'

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
        type: [Number, String, Boolean],
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
const inputDom = ref()
const currModelValue = computed({
    set(value: string | number | null | undefined) {
        const inputLimit = props.inputProps.inputLimit
        const fun = typeof inputLimit === 'string' ? inputLimitObj[inputLimit as InputLimitTs] : inputLimit
        fun && (value = fun(value as string | null)) as string | number | null | undefined
        $emit('update:modelValue', value)
    },
    get() {
        return props.modelValue as string | number | null | undefined
    }
})
onMounted(() => {
    if (props.inputProps.isFocus)
        inputDom.value && inputDom.value.focus()
    $emit('upDataRefInput', inputDom.value)
})
</script>

