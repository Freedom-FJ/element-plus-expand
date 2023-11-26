import type { PropType } from 'vue';
import type { formItemTs, record } from './types';
declare const _default: import("vue").DefineComponent<{
    /**
     * @desc 表单配置项
     * @abstract
     */
    formItem: {
        type: PropType<formItemTs>;
        default: () => never[];
    };
    /**
     * @desc 是否是文本表单
     */
    isText: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @desc 父亲插槽
     */
    slots: {
        type: PropType<record>;
        default: () => record;
    };
    formKey: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @desc 对应vModel值
     */
    modelValue: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput" | "upDataValue")[], "update:modelValue" | "upDataRefInput" | "upDataValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @desc 表单配置项
     * @abstract
     */
    formItem: {
        type: PropType<formItemTs>;
        default: () => never[];
    };
    /**
     * @desc 是否是文本表单
     */
    isText: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * @desc 父亲插槽
     */
    slots: {
        type: PropType<record>;
        default: () => record;
    };
    formKey: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * @desc 对应vModel值
     */
    modelValue: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onUpDataRefInput?: ((...args: any[]) => any) | undefined;
    onUpDataValue?: ((...args: any[]) => any) | undefined;
}, {
    slots: record;
    modelValue: Record<string, any>;
    formItem: formItemTs;
    isText: boolean;
    formKey: number;
}, {}>;
export default _default;
