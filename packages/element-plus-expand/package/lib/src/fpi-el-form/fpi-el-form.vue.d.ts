import type { FormItemProp } from 'element-plus';
import type { PropType } from 'vue';
import type { Arrayable, btnOptionTs, formItemTs } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    /**
     * @desc 表单配置项
     * @abstract
     */
    formOption: {
        type: PropType<formItemTs[]>;
        default: () => never[];
    };
    /**
     * @desc 表单按钮配置项
     * @abstract
     */
    formBtnOption: {
        type: PropType<btnOptionTs[]>;
        default: () => ({
            type: string;
            label: string;
            onClick: string;
        } | {
            label: string;
            onClick: string;
            type?: undefined;
        })[];
    };
    /**
     * @name: rule 提供的语法糖触发校验的时机（自定义数组形式的rule无效）
     * @desc:
     * @return {*}
     */
    trigger: {
        type: PropType<"blur" | "change">;
        default: string;
    };
    /**
     * @name: 是否隐藏form按钮
     * @desc:
     * @return {*}
     */
    isShowBtnBox: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @desc 按钮盒子样式
     * @abstract
     */
    btnBoxStyle: {
        type: ObjectConstructor;
        default: undefined;
    };
    /**
     * @desc 表单v-model 对象
     * @abstract
     */
    modelValue: {
        type: PropType<Record<string, any>>;
        default: () => null;
    };
    /**
     * @desc  标签的长度
     * @abstract 例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。
     */
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @desc  是否是文本形式表单
     */
    isText: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    getFormData: () => Record<string, any> | null;
    getForm: () => any;
    validate: (callback?: ((isValid: boolean, invalidFields?: any) => void) | undefined) => import("element-plus").FormValidationResult | undefined;
    validateField: (props?: Arrayable<FormItemProp>, callback?: ((isValid: boolean, invalidFields?: any) => void) | undefined) => import("element-plus").FormValidationResult | undefined;
    resetFields: (props?: Arrayable<FormItemProp>) => void;
    scrollToField: (prop: FormItemProp) => void;
    clearValidate: (props?: Arrayable<FormItemProp>) => void;
    refInput: Record<string, any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "cancel" | "update:modelValue")[], "submit" | "cancel" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @desc 表单配置项
     * @abstract
     */
    formOption: {
        type: PropType<formItemTs[]>;
        default: () => never[];
    };
    /**
     * @desc 表单按钮配置项
     * @abstract
     */
    formBtnOption: {
        type: PropType<btnOptionTs[]>;
        default: () => ({
            type: string;
            label: string;
            onClick: string;
        } | {
            label: string;
            onClick: string;
            type?: undefined;
        })[];
    };
    /**
     * @name: rule 提供的语法糖触发校验的时机（自定义数组形式的rule无效）
     * @desc:
     * @return {*}
     */
    trigger: {
        type: PropType<"blur" | "change">;
        default: string;
    };
    /**
     * @name: 是否隐藏form按钮
     * @desc:
     * @return {*}
     */
    isShowBtnBox: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @desc 按钮盒子样式
     * @abstract
     */
    btnBoxStyle: {
        type: ObjectConstructor;
        default: undefined;
    };
    /**
     * @desc 表单v-model 对象
     * @abstract
     */
    modelValue: {
        type: PropType<Record<string, any>>;
        default: () => null;
    };
    /**
     * @desc  标签的长度
     * @abstract 例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。
     */
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    /**
     * @desc  是否是文本形式表单
     */
    isText: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
}, {
    trigger: "blur" | "change";
    labelWidth: string;
    modelValue: Record<string, any>;
    isText: boolean;
    formOption: formItemTs[];
    formBtnOption: btnOptionTs[];
    isShowBtnBox: boolean;
    btnBoxStyle: Record<string, any>;
}, {}>, {
    default: (_: {}) => any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
