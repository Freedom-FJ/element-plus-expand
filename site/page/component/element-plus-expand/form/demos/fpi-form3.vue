<!--
 * @Author: mjh
 * @Date: 2023-04-11 11:08:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-22 23:35:30
 * @Description:
-->
<template>
    <FpiElForm
        v-model="formData"
        :form-option="formOption"
    />
</template>

<script lang="ts" setup>
import type { formItemTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'

import { reactive, toRefs } from 'vue'

const data = reactive({
    formOption: [
        {
            label: '输入框',
            type: 'input',
            size: 'small',
            prop: 'input1',
            value: '88',
            inputProps: {
                placeholder: '测试',
                disabled: true,
            }
        },
        {
            label: '数字输入框',
            type: 'input',
            prop: 'inputNum',
            inputProps: {
                inputLimit: 'number',
                clearable: true,
                isFocus: true,
                placeholder: '测试',
            }
        },
        {
            label: '负数输入框',
            type: 'input',
            prop: 'radio',
            inputProps: {
                inputLimit: 'negative-number',
                clearable: true,
                placeholder: '测试',
            }
        },
    ] as formItemTs[],
    formData: {
        input1: '',
        inputNum: '' as string | number,
        radio: '',
        select: ''
    }

})

const { formOption, formData } = toRefs(data)
</script>
