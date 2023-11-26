<template>
    <FpiElForm
        ref="dom"
        v-model="formData"
        :form-option="formOption"
    />
</template>

<script lang="ts" setup>
import type { formItemTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'

import { onMounted, reactive, ref, toRefs } from 'vue'
// 当然你可以直接通过设置type = 'text' 设置单项的类型为文本
const data = reactive({
    dom: ref(),
    formOption: [
        {
            label: '数字输入框',
            type: 'input',
            prop: 'inputNum',
            value: null,
            rules: 'unNull,number',
            inputProps: {
                clearable: true,
                placeholder: '测试',
            }
        },
        {
            label: '密码输入框',
            type: 'input',
            labelSlot: true,
            prop: 'inputPass',
            rules: 'unNull',
            inputProps: {
                showPassword: true,
                type: 'password',
                clearable: true,
                placeholder: '测试',
            }
        },
        {
            label: 'select输入',
            type: 'select',
            prop: 'selId',
            defaultSelect: 0,
            option: [],
            inputProps: {
                clearable: true,
            }
        },
    ] as formItemTs[],
    formData: {
        inputNum: 12314141,
        inputPass: '1241213',
        selId: 'shanghai',
    }
})
onMounted(() => {
    console.log('这是所有的input dom节点：', data.dom.refInput)
    console.log('对应的input的dom名称是prop的值：', data.dom.refInput.inputPass, 'dom')
    data.dom.refInput.inputPass.clear()
})
const { formOption, formData, dom } = toRefs(data)
</script>
