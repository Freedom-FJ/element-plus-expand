<template>
    <div class="form-box">
        <div>
            <el-radio-group v-model="labelPosition" label="label position">
                <el-radio-button label="left">
                    Left
                </el-radio-button><el-radio-button label="right">
                    Right
                </el-radio-button><el-radio-button label="top">
                    Top
                </el-radio-button>
            </el-radio-group>
        </div>
        <br>
        <div>
            <el-radio-group v-model="inline" label="是否inline">
                <el-radio-button :label="true">
                    inline
                </el-radio-button><el-radio-button :label="false">
                    not-inline
                </el-radio-button>
            </el-radio-group>
        </div>
        <br>
        <div>
            <el-radio-group v-model="size" label="尺寸">
                <el-radio-button label="large">
                    large
                </el-radio-button><el-radio-button label="default">
                    default
                </el-radio-button><el-radio-button label="small">
                    small
                </el-radio-button>
            </el-radio-group>
        </div>
        <br>
        <FpiElForm
            v-model="formData"
            :form-option="formOption"
            :inline="inline"
            :label-position="labelPosition"
            :size="size"
        />
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue'
import type { formItemTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'

const data = reactive({
    formOption: [
        {
            label: '输入框',
            type: 'input',
            size: 'small',
            prop: 'input1',
            inputProps: {
                placeholder: '测试',
                disabled: true,
            },
            value: '15',
            rules: 'unNull'
        },
        {
            label: '数字输入框',
            type: 'input',
            value: null,
            inputProps: {
                inputLimit: 'number',
                clearable: true,
                placeholder: '测试',
            },
            prop: 'inputNum',
            rules: 'unNull,number'
        },
        {
            label: '密码输入框',
            type: 'input',
            inputProps: {
                showPassword: true,
                type: 'password',
                clearable: true,
                placeholder: '测试',
            },
            prop: 'inputPass',
            rules: 'unNull'
        },
        {
            label: 'select输入',
            type: 'select',
            prop: 'selId',
            inputProps: {
                clearable: true,

            },
            defaultSelect: 0,
            option: [
                { label: 'Zone one', value: 'shanghai' },
                { label: 'Zone two', value: 'beijing' },
                { label: 'Zone three', value: 'hangzhou' },
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
        inputNum: '',
        inputPass: '',
        selId: '',
        textarea1: '',
    },
    labelPosition: 'left' as const,
    inline: false,
    size: 'default' as const

})

const { formOption, formData, labelPosition, inline, size } = toRefs(data)
</script>
