<template>
    <FpiElForm
        v-model="formData"
        :form-option="formOption"
        :form-btn-option="formBtnOption"
        @submit="submit"
        @cancel="cancel"
    />
</template>

<script lang="ts" setup>
import type { btnOptionTs, formItemTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'
import { onMounted, reactive, toRefs } from 'vue'

const data = reactive({
    formOption: [
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
                onInput: (e) => {
                    console.log(e)
                }
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
                onVisibleChange: (e) => {
                    console.log(e, 'e')
                },
                clearable: true,
            }
        },
        {
            label: '自定义',
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
        inputNum: '' as string | number,
        radio: '',
        select: ''
    },
    formBtnOption: [
        {
            type: 'primary',
            label: '提交',
            onClick: 'submit'
        },
        {
            label: '取消',
            onClick: 'cancel'
        }
    ] as btnOptionTs[]

})

onMounted(() => {
    data.formBtnOption = [
        {
            type: 'primary',
            label: '提交',
            onClick: 'submit',
            onDblclick: () => {
                console.log('ondblclick')
            }
        },
        {
            type: 'success',
            label: '自定义取消按钮',
            onClick: customMethods
        },
        {
            label: '取消',
            onClick: 'cancel'
        }
    ]
    data.formOption[0].label = '改变的label'
})
const submit = (formRef: any, e: Event) => {
    console.log('表单提交回调', formRef, e)
}
const cancel = (formRef: any, e: Event) => {
    console.log('表单取消回调', formRef, e)
}
const customMethods = (formRef: any, e: Event) => {
    formRef && formRef.resetFields()
    console.log('自定义按钮回调：', formRef, e)
}
const { formOption, formData, formBtnOption } = toRefs(data)
</script>
