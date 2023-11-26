<!--
 * @Author: mjh
 * @Date: 2023-04-11 11:08:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-22 23:35:14
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
            rules: 'unNull',
            value: '88',
            inputProps: {
                placeholder: '测试',
                disabled: true,
            }
        },
        {
            label: '数字输入框',
            type: 'input',
            value: null,
            prop: 'inputNum',
            rules: 'unNull,number',
            inputProps: {
                inputLimit: 'number',
                clearable: true,
                placeholder: '测试',
            }
        },
        {
            label: 'select输入',
            type: 'select',
            prop: 'select',
            defaultSelect: 0,
            rules: 'select',
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
            label: '自定义提示',
            type: 'input',
            value: null,
            prop: 'format',
            rules: { unNull: '自定义的message' },
            inputProps: {
                inputLimit: 'number',
                clearable: true,
                placeholder: '测试',
            }
        },
        {
            label: '数组rule',
            type: 'input',
            value: null,
            prop: 'radio',
            rules: [{ required: true, message: '不能为空', trigger: 'blur' }],
            inputProps: {
                clearable: true,
                placeholder: '测试',
            }
        },
    ] as formItemTs[],
    formData: {
        input1: '',
        inputNum: '' as string | number,
        format: '',
        radio: '',
        select: ''
    }

})

const { formOption, formData } = toRefs(data)
</script>
