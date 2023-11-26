<!--
 * @Author: mjh
 * @Date: 2022-08-19 09:31:37
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-11 11:21:58
 * @Description:
-->
<template>
    <FpiElForm
        ref="ruleFormRef"
        v-model="formData"
        :form-option="itemList"
        status-icon
    />
</template>

<script lang="ts" setup name="FpiForm">
import type { formItemTs, fpiFormTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'
import { reactive, ref, toRefs } from 'vue'

const ruleFormRef: any = ref<fpiFormTs>()
const checkAge = (rule: any, value: any, callback: any) => {
    if (!value)
        return callback(new Error('Please input the age'))

    setTimeout(() => {
        if (!Number.isInteger(value))
            callback(new Error('Please input digits'))

        else if (value < 18)
            callback(new Error('Age must be greater than 18'))

        else
            callback()
    }, 1000)
}
const validatePass = (rule: any, value: any, callback: any) => {
    if (!ruleFormRef.value) return
    if (value === '') {
        callback(new Error('Please input the password'))
    }
    else {
        if (data.formData.checkPass !== '')
            ruleFormRef.value.validateField('checkPass', () => null)

        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (!ruleFormRef.value) return
    if (value === '')
        callback(new Error('Please input the password again'))

    else if (value !== data.formData.pass)
        callback(new Error('Two inputs don\'t match!'))

    else
        callback()
}
const data = reactive({
    itemList: [
        {
            label: '第一次输入密码',
            type: 'input',
            prop: 'pass',
            rules: [{ validator: validatePass, trigger: 'blur' }] as const,
            inputProps: {
                type: 'password',
                autocomplete: 'off'
            }
        },
        {
            label: '第二次输入密码',
            type: 'input' as const,
            prop: 'checkPass',
            rules: [{ validator: validatePass2, trigger: 'blur' }],
            inputProps: {
                type: 'password',
                autocomplete: 'off'
            }
        },
        {
            label: 'age年龄',
            type: 'input' as const,
            prop: 'age',
            inputProps: {
                inputLimit: 'number'
            },
            rules: [{ validator: checkAge, trigger: 'blur' }],
        }
    ] as formItemTs[],
    formData: {
        pass: '',
        checkPass: '',
        age: ''
    }
})

const { itemList, formData } = toRefs(data)
</script>

