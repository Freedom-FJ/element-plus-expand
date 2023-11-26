<template>
    <div class="form-box-test">
        <FpiElForm
            ref="ruleFormRef"
            v-model="formData"
            :form-option="formOption"
            label-width="160px"
        />
    </div>
</template>

<script lang="ts" setup>
// ************使用col时 底部的样式设置很重要哦 ************
import { reactive, toRefs } from 'vue'
import type { formItemTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'

const data = reactive({
    formOption: [
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
                    label: '企业生产状态：',
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
                    prop: 'long',
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
            col: [
                {
                    label: '是否参与有效率计算：',
                    type: 'radio',
                    prop: 'delivery',
                    value: true,
                    option: [
                        { label: '是', value: true },
                        { label: '否', value: false },
                    ]
                }
            ]
        },
    ] as formItemTs[],
    formData: {
        input1: '',
        inputNum: '',
        inputPass: '',
        delivery: '',
        curEmails: '',
        lat: '',
        long: ''
    },
})

const { formOption, formData } = toRefs(data)
</script>

<style lang="scss" scoped>
.form-box-test {
    ::v-deep(.el-form-item__content) {
        margin-left: 0 !important;
    }
}
</style>

