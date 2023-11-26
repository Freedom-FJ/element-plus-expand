<template>
    <elFromItemNode />
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { ElCol, ElFormItem, ElRow } from 'element-plus'
import { computed, defineComponent, h, ref } from 'vue'
import { getVal } from '../utils'
import FpiInputNode from './components'
import type { formItemTs, fromTypeTs, record } from './types'

interface currFormItem extends formItemTs { col: formItemTs[] }
interface currFormItem extends formItemTs { option: any[] }
interface currFormItem extends formItemTs { type: fromTypeTs }

const props = defineProps({
    /**
     * @desc 表单配置项
     * @abstract
     */
    formItem: {
        type: Object as PropType<formItemTs>,
        default: () => {
            return []
        }
    },
    /**
     * @desc 是否是文本表单
     */
    isText: {
        type: Boolean,
        default: false
    },
    /**
     * @desc 父亲插槽
     */
    slots: {
        type: Object as PropType<record>,
        default: () => {
            return {} as record
        }
    },
    formKey: {
        type: Number,
        default: 0
    },
    /**
     * @desc 对应vModel值
     */
    modelValue: {
        type: Object as PropType<Record<string, any>>,
        default: () => {
            return {}
        }
    }
})
/**
 * @desc form回调函数
 */
const $emit = defineEmits([
    'update:modelValue',
    'upDataValue',
    'upDataRefInput'
])
type ExFormType = Exclude<fromTypeTs, 'dom' | 'text'>
const currInputType = computed(() => (type: ExFormType) => {
    return FpiInputNode[type]
})
const formItemRef = ref<any>()

const getRenderFormItem: any = (formItem: formItemTs) => {
    return h(
        ElFormItem, {
            ...formItem,
            ref: (e: any) => formItemRef.value = e,
            rules: formItem.itemRules,
        },
        {
            ...getDefault(formItem),
            ...getLabel(formItem)
        }
    )
}
const getDefault = (formItem: formItemTs) => {
    return {
        default() {
            return getDefaultReturnNode(formItem)
        },
    }
}
const getDefaultReturnNode = (formItem: formItemTs) => {
    return [formItem.slot
        ? getSlotNode(formItem as currFormItem)
        : formItem.col
            ? getRowColNode(formItem as currFormItem)
            : formItem.type === 'dom'
                ? getDomNode(formItem as currFormItem)
                : formItem.type === 'text' || props.isText
                    ? getTextNode(formItem as currFormItem)
                    : formItem.type
                        ? getInputNode(formItem as currFormItem)
                        : '']
}
const getLabel = (formItem: formItemTs) => {
    return props.slots[`${formItem.prop}-label`]
        ? getLabelNode(formItem as currFormItem)
        : {}
}
const getTextNode = (formItem: currFormItem) => {
    const value = getVal(props.modelValue, formItem.prop)
    return h(
        'div',
        {
            class: 'fpi-el-form-text',
            style: formItem.textStyle,
            ...(formItem.inputProps || {})
        },
        getOptionValue(value, formItem as currFormItem)
    )
}
const getOptionValue = (value: any, formItem: currFormItem) => {
    const optionExpr = formItem.inputProps?.optionExpr
    const valueExpr = optionExpr?.value ?? 'value'
    const labelExpr = optionExpr?.label ?? 'label'
    if (!formItem.option) return value
    if (Array.isArray(value))
        return value.map(item => formItem.option.find(fd => fd[valueExpr] === item)?.[labelExpr] ?? item).join('、')
    return formItem.option.find(item => item[valueExpr] === value)?.[labelExpr]
}
const getRowColNode = (formItem: currFormItem) => {
    return h(
        ElRow,
        {
            gutter: formItem.gutter || 0,
            style: 'width: 100%;'
        },
        {
            default: () => formItem.col.map((colItem, colIndex) => {
                return h(
                    ElCol,
                    {
                        key: colIndex,
                        span: colItem.span,
                    },
                    {
                        default: () => [getRenderFormItem(colItem)]
                    }
                )
            })
        }
    )
}

const getDomNode = (formItem: currFormItem) => {
    return h(
        'div',
        formItem.render
            ? {
                class: 'html-dom',
                style: 'width: 100%;',
            }
            : {
                class: 'html-dom',
                style: 'width: 100%;',
                innerHTML: formItem.vHtml && formItem.vHtml(props.formKey),
            },
        [formItem.render && formItem.render(props.formKey)]
    )
}
const getInputNode = (formItem: currFormItem) => {
    return h(
        currInputType.value(formItem.type as ExFormType),
        {
            'inputProps': formItem.inputProps,
            'type': formItem.type,
            'option': formItem.option,
            'modelValue': getVal(props.modelValue, formItem.prop),
            'onUpDataRefInput': (ref: any) => $emit('upDataRefInput', formItem.prop, ref),
            'onUpdate:modelValue': (value: string) => $emit('upDataValue', formItem.prop, value)
        },
        {
            prefix() {
                return formItem.inputProps?.prefix
            },
            suffix() {
                return formItem.inputProps?.suffix
            },
            prepend() {
                return formItem.inputProps?.prepend
            },
            append() {
                return formItem.inputProps?.append
            },
            empty() {
                return formItem.inputProps?.empty
            },
        }
    )
}

const getLabelNode = (formItem: currFormItem) => {
    return {
        label() {
            return h(
                'div',
                props.slots[`${formItem.prop}-label`](formItem)
            )
        }
    }
}
const getSlotNode = (formItem: currFormItem) => {
    return h(
        'div',
        { style: 'width: 100%;' },
        props.slots[formItem.prop] ? props.slots[formItem.prop](formItem) : ''
    )
}

const getLineSlot = (formItem: formItemTs) => {
    return h(
        'div',
        {
            class: 'line-slot',
            style: {
                width: '100%',
            }
        },
        props.slots[formItem.slotLine as string] ? props.slots[formItem.slotLine as string](formItem) : ''
    )
}

const getLineNode = (formItem: formItemTs) => {
    return h(
        'div',
        {
            class: 'line-box',
            style: {
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'space-between',
                'width': '100%',
                'margin-bottom': '12px',
            }
        },
        [
            getLineLabelNode(formItem),
            getLineBodyNode(formItem)
        ]
    )
}

const getLineBodyNode = (formItem: formItemTs) => {
    const { lineStyle = {} } = formItem
    return h(
        'div',
        {
            class: 'line-body',
            style: {
                width: '90%',
                height: '1px',
                background: '#0084ff',
                ...lineStyle
            }
        }
    )
}
const getLineLabelNode = (formItem: formItemTs) => {
    const { lineLabelStyle = {}, lineLabel } = formItem
    return h(
        'div',
        {
            class: 'line-title',
            style: {
                'font-family': 'PingFangSC',
                'font-size': '14px',
                'font-weight': 500,
                'line-height': '22px',
                'color': '#0084ff',
                'letter-spacing': 0,
                ...lineLabelStyle
            }
        },
        lineLabel
    )
}
const elFromItemNode = defineComponent({
    render() {
        return props.formItem.slotLine
            ? getLineSlot(props.formItem)
            : props.formItem.isLine
                ? getLineNode(props.formItem)
                : getRenderFormItem(props.formItem)
    }
})
</script>
