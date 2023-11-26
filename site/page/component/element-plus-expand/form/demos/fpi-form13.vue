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
            isLine: true, // 是否是分割线
            lineLabel: '基础信息' // 分割线文字
        },
        {
            col: [
                {
                    label: '企业名称：',
                    span: 12,
                    type: 'input',
                    prop: 'input1',
                    rules: 'unNull',
                    inputProps: {
                        placeholder: '请选择企业',
                        clearable: true,

                    }
                },
                {
                    span: 12,
                    label: '企业：',
                    type: 'input',
                    value: null,
                    prop: 'inputNum',
                    rules: 'unNull,number',
                    inputProps: {
                        inputLimit: 'number',
                        clearable: true,
                        placeholder: '',
                    }
                },
            ]
        },
        {
            isLine: true, // 是否是分割线
            lineLabel: '基础信息', // 分割线文字
            lineLabelStyle: {
                color: 'red'
            }
        },
        {
            col: [
                {
                    span: 12,
                    label: '排口名称：',
                    type: 'input',
                    showPassword: true,
                    prop: 'inputPass',
                    rules: 'unNull',
                },
                {
                    span: 12,
                    label: '排口编号：',
                    type: 'input',
                    showPassword: true,
                    prop: 'inputPass',
                    rules: 'unNull',
                    inputProps: {
                        clearable: true,
                        disabled: true,
                    }
                },
            ]
        },
        {
            isLine: true, // 是否是分割线
            lineLabel: '基础信息', // 分割线文字
            lineStyle: {
                background: 'red'
            }
        },
        {
            col: [
                {
                    label: '邮箱：',
                    type: 'input',
                    prop: 'curEmails',
                    rules: 'email',
                },
            ]
        },
        {
            label: '经纬度：',
            required: true,
            gutter: 15,
            col: [
                {
                    span: 5,
                    type: 'input',
                    prop: 'log',
                    rules: 'unNull',
                    inputProps: {
                        clearable: true,
                    }
                },
                {
                    span: 5,
                    type: 'input',
                    prop: 'lat',
                    rules: 'unNull',
                    inputProps: {
                        clearable: true,

                    }
                }
            ]
        },
        {
            isLine: true, // 是否是分割线
            lineLabel: '扩展信息' // 分割线文字
        },
    ] as formItemTs[],
    formData: {
        input1: '',
        inputNum: '',
        inputPass: '',
        selId: '1',
        date1: '',
        date2: true,
        delivery: '',
        checkbox1: '',
        radio: '',
        lng: '',
        lat: '',
        curEmails: '',
        textarea1: '',
        slot1: ''
    },
})

const { formOption, formData } = toRefs(data)
</script>

<style lang="scss" scoped>
::v-deep(.el-form-item__content) {
    margin-left: 0 !important;
}
</style>

