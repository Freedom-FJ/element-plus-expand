<!--
 * @Author: mjh
 * @Date: 2023-07-05 19:39:36
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-26 10:49:53
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
            label: 'col 时间输入',
            col: [
                {
                    span: 11,
                    type: 'date-picker',
                    prop: 'date1',
                    inputProps: {
                        type: 'date',
                        placeholder: 'Pick a date',
                    }

                },
                {
                    type: 'dom',
                    span: 2,
                    vHtml: () => {
                        return '<div style="color: #6b7280;text-align:center;width: 100%;">-</div>'
                    }
                },
                {
                    span: 11,
                    type: 'time-picker',
                    prop: 'date2',
                    inputProps: {
                        style: 'width: 100%;',
                        placeholder: 'Pick a time',
                    }
                }
            ]
        },
        {
            label: 'col 时间输入',
            gutter: 20,
            col: [
                {
                    span: 8,
                    type: 'input',
                    prop: 'input1',
                    inputProps: {
                        clearable: true,
                        placeholder: '测试',
                    }
                },
                {
                    span: 8,
                    type: 'input',
                    prop: 'radio',
                    inputProps: {
                        inputLimit: 'negative-number',
                        clearable: true,
                        placeholder: '测试',
                    }
                },
            ]
        }

    ] as formItemTs[],
    formData: {
        input1: '',
        inputNum: '' as string | number,
        radio: '',
        select: '',
        date1: '',
        date2: ''
    }

})

const { formOption, formData } = toRefs(data)
</script>
