<template>
    <div v-if="form" class="fpi-el-form">
        <ElForm
            v-bind="attrs"
            ref="fpiForm"
            :model="form"
            :label-width="labelWidth"
            :rules="rulesData || {}"
        >
            <FpiFormItemNode
                v-for="(item, index) in formOption"
                :key="index" v-model="form"
                :form-item="item"
                :is-text="isText"
                :form-key="index"
                :slots="slots"
                @up-data-ref-input="upDataRefInput"
                @up-data-value="upDataValue"
            />
        </ElForm>
        <slot />
        <ElFormItem v-if="isShowBtnBox" :style="{ 'margin-left': labelWidth }">
            <div :style="btnBoxStyle">
                <ElButton
                    v-for="(item, index) in formBtnOption"
                    v-bind="getBtnAttrib(item)"
                    :key="index"
                    @click="(e:MouseEvent) => btnMethodsControl(e, item.onClick)"
                >
                    {{ item.label }}
                </ElButton>
            </div>
        </ElFormItem>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, toRefs, useAttrs, useSlots, watch } from 'vue'
import type { FormInstance, FormItemProp, FormItemRule } from 'element-plus'
import { ElButton, ElForm, ElFormItem } from 'element-plus'
import type { PropType } from 'vue'
import { DataType, deepClone, equal, getDeepObj, isObject, isString } from '../utils'
import FpiFormItemNode from './fpi-form-item-node.vue'
import type { Arrayable, btnOptionTs, formDataTs, formItemTs, staticRulesKeyTs } from './types'

const props = defineProps({
    /**
     * @desc 表单配置项
     * @abstract
     */
    formOption: {
        type: Array as PropType<Array<formItemTs>>,
        default: () => {
            return []
        }
    },
    /**
     * @desc 表单按钮配置项
     * @abstract
     */
    formBtnOption: {
        type: Array as PropType<Array<btnOptionTs>>,
        default: () => {
            return [
                {
                    type: 'primary',
                    label: '提交',
                    onClick: 'submit'
                },
                {
                    label: '取消',
                    onClick: 'cancel'
                }
            ]
        }
    },
    /**
     * @name: rule 提供的语法糖触发校验的时机（自定义数组形式的rule无效）
     * @desc:
     * @return {*}
     */
    trigger: {
        type: String as PropType<'blur' | 'change'>,
        default: 'change'
    },
    /**
     * @name: 是否隐藏form按钮
     * @desc:
     * @return {*}
     */
    isShowBtnBox: {
        type: Boolean,
        default: true
    },
    /**
     * @desc 按钮盒子样式
     * @abstract
     */
    btnBoxStyle: {
        type: Object,
        default: undefined
    },
    /**
     * @desc 表单v-model 对象
     * @abstract
     */
    modelValue: {
        type: Object as PropType<Record<string, any>>,
        default: () => {
            return null
        }
    },
    /**
     * @desc  标签的长度
     * @abstract 例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。
     */
    labelWidth: {
        type: String,
        default: '120px'
    },
    /**
     * @desc  是否是文本形式表单
     */
    isText: {
        type: Boolean,
        default: false
    },

})
const $emit = defineEmits([
    'update:modelValue',
    'submit', // 表单提交默认方法
    'cancel' // 表单取消默认方法
])
const slots = useSlots()
const attrs = useAttrs()
// 基础rules
const staticRules: Record<staticRulesKeyTs, Record<string, any>> = {
    unNull: { required: true, message: '不能为空', trigger: 'change' },
    number: { type: 'number', message: '请输入数字值', trigger: 'change' },
    phone: { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' },
    checkbox: { type: 'array', required: true, message: '请至少选择一项', trigger: 'change' },
    select: { required: true, message: '请选择', trigger: 'change' },
    date: { required: true, message: '请选择时间', trigger: 'change' },
    email: { type: 'email', required: true, message: '请输入正确的邮箱格式', trigger: 'change' },
}
const data: formDataTs = reactive({
    form: null, // form 表格对象数据
    rulesData: null, // rules对象
    timer: null, // 定时器防抖
    refInput: {} // 所有输入框dom节点
})
// form dom
const fpiForm = ref<FormInstance>()

/**
 * @desc 监听modelValue表格变化
 */
watch(
    () => props.modelValue,
    (val) => {
        if (!equal(data.form, val))
            data.form = deepClone(val)
    },
    { deep: true }
)
/**
 * @desc 监听formOption配置项变化
 * @desc
 * @returns initForm 初始化表格
 */
watch(
    () => props.formOption,
    () => {
        initForm()
        // 防止因为配置项变化导致促发表单校验
        setTimeout(() => {
            // fpiForm.value && fpiForm.value.clearValidate()
        })
    },
    { deep: true }
)

const getBtnAttrib = computed(() => (val: btnOptionTs) => {
    const attr = { ...val }
    if (attr.onClick) {
        attr.click = attr.onClick
        attr.onClick = undefined
    }
    return attr as Extract<btnOptionTs, 'onClick'>
})

/**
 * @desc  初始化表格
 * @abstract 初始化form变量以及rules对象
 * @param isFirst 是否是初始化
 */
const initForm = (isFirst?: boolean) => {
    if (!['object', 'array'].includes(DataType(data.form)) || props.isText)
        return
    const currFrom = data.form as Record<string, any>
    const { formOption } = props
    const currRules: Record<string, formItemTs['rules']> = {}
    deepDetailParam(currFrom, currRules, formOption, isFirst)
    data.rulesData = currRules as Partial<Record<string, Arrayable<FormItemRule>>>
    isFirst && $emit('update:modelValue', currFrom)
}
/**
 * @name: 递归处理参数
 * @desc:
 * @param {*} currFrom
 * @param {*} any
 * @param {*} currRules
 * @param {*} formItemTs
 * @param {*} formOption
 * @param {*} isFirst
 * @return {*}
 */
const deepDetailParam = (currFrom: Record<string, any>, currRules: Record<string, formItemTs['rules']>, formOption: formItemTs[], isFirst: boolean | undefined) => {
    formOption.forEach((item) => {
        item.col
            ? deepDetailParam(currFrom, currRules, item.col, isFirst)
            : initParams(currFrom, currRules, item, isFirst)
    })
}

const initParams = (currFrom: Record<string, any>, currRules: Record<string, formItemTs['rules']>, item: formItemTs, isFirst: boolean | undefined) => {
    if (item.type === 'text' || !item.prop) return
    // 生成v-model对象
    ('value' in item && isFirst) && (currFrom[item.prop] = item.value) // 利用浅拷贝
    if (item.type === 'select' && item.defaultSelect !== undefined && item.option && item.option.length >= item.defaultSelect + 1) {
        const value = item.option[item.defaultSelect].value
        currFrom[item.prop] = value
    }
    // rules配置
    currRules[item.prop] = currRules[item.prop] ? [...(currRules[item.prop] as any[]), ...getStaticRules(item.rules)] : getStaticRules(item.rules)
}
/**
 * @desc  获取相应的rules
 * @param rules 可以是由基础rules名称组成的字符串 如 unNull,number
 * @param rules 也可以是自己定义的rules数组
 * @param rules 也可以不传 不传则会绑定默认的不为空rules
 */
const getStaticRules = (rules: formItemTs['rules']) => {
    const returnRules: Array<Record<string, any>> = []
    if (isObject(rules)) {
        Object.keys(rules).forEach((key) => {
            if (key in staticRules && isString((rules as Record<string, any>)[key])) {
                returnRules.push({
                    ...staticRules[key],
                    message: (rules as Record<string, any>)[key],
                    trigger: props.trigger
                })
            }
        })
        return returnRules
    }
    if (isString(rules)) {
        const rulesArr: staticRulesKeyTs[] = rules.split(',')
        rulesArr.forEach((item) => {
            const currRules = staticRules[item]
            currRules && returnRules.push({
                ...currRules,
                trigger: props.trigger
            })
        })
        return returnRules
    }
    return rules || []
}
/**
 * @desc 表单按钮点击控制
 * @param clickKey string 内置方法  function 自定义方法
 */
const btnMethodsControl = (e: Event, clickKey: 'submit' | 'cancel' | ((form: FormInstance | undefined, e: Event) => any) | undefined) => {
    switch (clickKey) {
    case 'submit':
        submitForm(e)
        break
    case 'cancel':
        cancel(e)
        break
    default:
        clickKey && clickKey(fpiForm.value, e)
    }
}
/**
 * @desc  form表单对象跟新事件
 * @returns fpiFrom dom节点
 */
const upDataValue = (key: string, value: any) => {
    if (!data.form) return
    getDeepObj(data.form, key, value)
    $emit('update:modelValue', data.form)
}
/**
 * @desc  表单提交
 * @param formRef form的dom节点
 * @returns true/false   表单验证通过/表单验证失败
 */
const submitForm = (e: Event) => {
    const formRef = fpiForm.value
    formRef && formRef.validate((valid: boolean) => {
        if (valid)
            $emit('submit', formRef, e)
    })
}
/**
 * @desc  表单重置
 * @param formRef form的dom节点
 * @abstract 将表单恢复为默认值
 */
const cancel = (e: Event) => {
    const formRef = fpiForm.value
    formRef && formRef.resetFields()
    $emit('update:modelValue', data.form)
    $emit('cancel', formRef, e)
}

/**
 * @desc  跟新input node节点
 * @param key 对应配置项的prop
 * @param ref input节点
 */
const upDataRefInput = (key: string, ref: any) => {
    data.refInput[key] = ref
}
/**
 * @desc  获取表单obj变量 <Expose>
 * @returns Form Object
 */
const getFormData = () => {
    return data.form
}
/**
 * @desc  对整个表单的内容进行验证。<Expose>
 * @returns 接收一个回调函数，或返回 Promise。
 */
const validate = (callback?: (isValid: boolean, invalidFields?: any) => void) => {
    return fpiForm.value && fpiForm.value.validate(callback)
}
/**
 * @desc  验证具体的某个字段。<Expose>
 * @param props string|string[]
 * @callback
 * @returns 接收一个回调函数，或返回 Promise。
 */
const validateField = (props?: Arrayable<FormItemProp>, callback?: (isValid: boolean, invalidFields?: any) => void) => {
    return fpiForm.value && fpiForm.value.validateField(props, callback)
}
/**
 * @desc  重置该表单项，将其值重置为初始值，并移除校验结果。<Expose>
 * @param props string|string[]
 * @param props 不传则整个表格重置
 */
const resetFields = (props?: Arrayable<FormItemProp>) => {
    fpiForm.value && fpiForm.value.resetFields(props)
}
/**
 * @desc  滚动到指定的字段。<Expose>
 * @param props string|string[]
 */
const scrollToField = (prop: FormItemProp) => {
    fpiForm.value && fpiForm.value.scrollToField(prop)
}
/**
 * @desc  清理某个字段的表单验证信息。<Expose>
 * @param props string|string[]
 * @param props 不传则整个表格清理
 */
const clearValidate = (props?: Arrayable<FormItemProp>) => {
    fpiForm.value && fpiForm.value.clearValidate(props)
}
/**
 * @desc  获取表单obj变量 <Expose>
 * @returns fpiFrom dom节点
 */
const getForm = () => {
    return fpiForm.value as any
}

data.form = deepClone(props.modelValue)
initForm(true)
const { form, rulesData } = toRefs(data)

defineExpose({
    getFormData, // 获取表单obj变量
    getForm, // 获取 form dom
    validate, // 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。
    validateField, // 验证具体的某个字段。
    resetFields, // 重置该表单项，将其值重置为初始值，并移除校验结果。
    scrollToField, // 滚动到指定的字段
    clearValidate, // 清理某个字段的表单验证信息
    refInput: data.refInput // 所有input dom节点
})
</script>

<script lang="ts">
export default {
    name: 'FpiElForm'
}
</script>

<style lang="scss">
@import "./style/index";
</style>
