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
            inputProps: {
                clearable: true,
                placeholder: '测试',
                oninput: () => {
                    console.log('object')
                }
            }

        },
        {
            label: '密码输入框',
            type: 'input',
            prop: 'inputPass',
            value: '5456415646768',
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
            label: '滑块',
            type: 'switch',
            prop: 'delivery',
            value: true
        },
        {
            label: '多选',
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
            label: '单选',
            type: 'radio',
            prop: 'radio',
            option: [
                { label: 'Zone one', value: 'shanghai1' },
                { label: 'Zone two', value: 'shanghai2' },
                { label: 'Zone three', value: 'shanghai3' },
            ]
        },
        {
            label: 'textarea输入框',
            type: 'input',
            prop: 'textarea1',
            inputProps: {
                placeholder: '测试',
                type: 'textarea'
            }

        }
    ] as formItemTs[],
    formData: {
        input1: '',
        inputNum: '' as string | number,
        inputPass: '其',
        select: 'shanghai',
        selId: '',
        date1: '',
        date2: '',
        delivery: '',
        checkbox1: '',
        radio: '',
        textarea1: '',
        slot1: ''
    }

})

const { formOption, formData } = toRefs(data)
</script>
