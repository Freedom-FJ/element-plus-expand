<!--
 * @Author: mjh
 * @Date: 2023-04-08 10:10:19
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-08 15:08:52
 * @Description:
-->
<template>
    <FpiElForm
        v-model="formData"
        :form-option="formOption"
        is-text
        :form-btn-option="[]"
    />
</template>

<script lang="ts" setup>
import type { formItemTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'

import { reactive, toRefs } from 'vue'

const data = reactive({
    formOption: [
        {
            label: '输入框:',
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
            label: '数字输入框:',
            type: 'input',
            value: 1234,
            prop: 'inputNum',
            inputProps: {
                clearable: true,
                placeholder: '测试',
            }

        },
        {
            label: 'select输入:',
            type: 'select',
            prop: 'select',
            defaultSelect: 0,
            option: [
                { label: 'Zone one', value: 'shanghai' },
                { label: 'Zone two', value: 'beijing' },
                { label: 'Zone three', value: 'hangzhou' },
            ],
            inputProps: {
                clearable: true,
            }
        },
        {
            label: '多选:',
            type: 'checkbox',
            prop: 'checkbox1',
            value: [],
            option: [
                { label: 'Zone one', value: 'shanghai1' },
                { label: 'Zone two', value: 'shanghai2' },
                { label: 'Zone three', value: 'shanghai3' },
            ]
        },
        {
            label: '单选:',
            type: 'radio',
            prop: 'radio',
            option: [
                { label: 'Zone one', value: 'shanghai1' },
                { label: 'Zone two', value: 'shanghai2' },
                { label: 'Zone three', value: 'shanghai3' },
            ]
        },
        {
            label: 'textarea输入框:',
            type: 'input',
            prop: 'textarea1',
            inputProps: {
                placeholder: '测试',
                type: 'textarea'
            }

        }
    ] as formItemTs[],
    formData: {
        input1: 'test',
        inputNum: '123' as string | number,
        select: 'shanghai',
        checkbox1: ['shanghai1', 'shanghai2'],
        radio: 'shanghai1',
        textarea1: '测试文字测试文字测试文字测试文字测试文字测试文字测试文字',
    }

})

const { formOption, formData } = toRefs(data)
</script>
