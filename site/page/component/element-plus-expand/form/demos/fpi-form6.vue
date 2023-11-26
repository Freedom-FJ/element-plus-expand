<template>
    <div class="control-btn">
        <ElButton type="primary" @click="addDomain()">
            增加表单
        </ElButton>
        <ElButton @click="removeDomain()">
            删除末尾
        </ElButton>
    </div>
    <div class="form-box">
        <FpiElForm v-model="formData" :form-option="itemList" />
    </div>
</template>

<script lang="ts" setup>
import type { formItemTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-form/types'

import { h, reactive, toRefs } from 'vue'
import { ElButton } from 'element-plus'
const data = reactive({
    itemList: [
        {
            label: '输入框',
            type: 'input',
            prop: 'email',
            inputProps: {
                placeholder: '测试',
            },
            rules: [
                {
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur',
                },
                {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change'],
                }
            ]
        },
        {
            label: '动态输入框',
            gutter: 20,
            col: [
                {
                    span: 12,
                    type: 'input',
                    prop: 'domains.0.value',
                    inputProps: {
                        placeholder: '测试',
                    },
                    rules: 'unNull'
                },
                {
                    span: 4,
                    type: 'dom',
                    render: (index: number) => {
                        return h(
                            ElButton,
                            {
                                type: 'danger',
                                onClick: () => removeDomain(index)
                            },
                            { default: () => '删除' }
                        )
                    }
                }
            ]
        }
    ] as formItemTs[],
    formData: {
        email: '',
        domains: [
            {
                prop: 1,
                value: '',
            }
        ] as Array<any | null>
    }

})

const removeDomain = (index?: number) => {
    if (!data.formData.domains.length) return
    if (typeof index !== 'number') {
        data.itemList.pop()
        data.formData.domains.pop()
        return
    }
    data.itemList.splice(index, 1)
    data.itemList.forEach((item, index) => {
        item.col && (item.col[0].prop = `domains.${index - 1}.value`)
    })
    data.formData.domains.splice(index - 1, 1)
}

const addDomain = () => {
    data.formData.domains.push({
        prop: Date.now(),
        value: '123',
    })
    data.itemList.push({
        label: '动态输入框',
        gutter: 20,
        col: [
            {
                span: 12,
                type: 'input',
                prop: `domains.${data.formData.domains.length - 1}.value`,
                inputProps: {
                    placeholder: '测试',
                },
                rules: 'unNull'
            },
            {
                span: 4,
                type: 'dom',
                render: (index: number) => {
                    return h(
                        ElButton,
                        {
                            type: 'danger',
                            onClick: () => removeDomain(index)
                        },
                        { default: () => '删除' }
                    )
                }
            }
        ]
    } as formItemTs)
}

const { itemList, formData } = toRefs(data)
</script>

<style lang="scss" scoped>
.control-btn {
    width: fit-content;
    margin: 0 auto 15px;
}
</style>
