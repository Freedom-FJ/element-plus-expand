<!--
 * @Author: mjh
 * @Date: 2022-11-28 09:47:53
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-26 10:53:52
 * @Description:
-->
<template>
    <FpiElForm
        v-model="formData"
        :form-option="formOption"
    />
</template>

<script lang="ts" setup>
import { h, markRaw, reactive, toRefs } from 'vue'
import type { formItemTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'
import { Calendar } from '@element-plus/icons-vue'
import FpiFrom11Com from './fpi-form11-com.vue'
// 当然你可以直接通过设置type = 'text' 设置单项的类型为文本
const data = reactive({
    formOption: [
        {
            label: '数字输入框',
            type: 'input',
            prop: 'inputNum',
            value: null,
            rules: 'unNull,number',
            inputProps: {
                append: h(
                    'div',
                    123
                ),
                suffixIcon: markRaw(Calendar),
                suffix: h(
                    markRaw(FpiFrom11Com),
                ),
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
                prefixIcon: markRaw(Calendar),
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
                prefixIcon: h(
                    'div',
                    123
                ),
                empty: h(
                    'div',
                    '无数据111'
                ),
                clearable: true,
            }
        },
    ] as formItemTs[],
    formData: {
        input1: '1241213',
        inputNum: 12314141,
        inputPass: '1241213',
        selId: 'shanghai',
        radio: 'shanghai3',
        slot1: '父亲额',
        checkbox1: ['shanghai1', 'shanghai3']
    }

})

const { formOption, formData } = toRefs(data)
</script>

