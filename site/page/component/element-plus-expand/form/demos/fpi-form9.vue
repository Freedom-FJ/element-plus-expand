<!--
 * @Author: mjh
 * @Date: 2023-04-11 11:08:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-11 11:22:07
 * @Description:
-->
<template>
    <FpiElForm v-model="formData" :form-option="formOption">
        <template #slot1="scoped">
            <el-input v-model="(formData as any)[scoped.prop]" />
        </template>
        <template #inputPass-label>
            <span>插入label</span>
        </template>
        <template #slot2>
            <el-input v-model="formData.slot2" />
        </template>
        <template #input1>
            <el-input v-model="formData.input1" />
        </template>
    </FpiElForm>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import type { formItemTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'

const data = reactive({
    formOption: [
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
            label: '插槽输入',
            type: 'input',
            prop: 'slot1',
            slot: true,
            rules: 'unNull',
        },
        {
            col: [
                {
                    span: 12,
                    label: '插槽输入',
                    type: 'input',
                    prop: 'slot2',
                    slot: true,
                    rules: 'unNull',
                },
                {
                    span: 12,
                    label: '插槽输入2',
                    type: 'input',
                    prop: 'input1',
                    slot: true,
                    rules: 'unNull',
                }
            ]
        },
    ] as formItemTs[],
    formData: {
        inputPass: '',
        input1: '',
        slot1: '',
        slot2: ''
    }

})

const { formOption, formData } = toRefs(data)
</script>

<style lang="scss" scoped>
::v-deep(.el-form-item__content) {
    margin-left: 0 !important;
}
</style>
