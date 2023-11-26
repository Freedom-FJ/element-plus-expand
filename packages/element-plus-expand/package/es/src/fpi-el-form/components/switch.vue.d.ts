import type { PropType } from 'vue';
import type { fromTypeTs, inputPropsTs, optionTs } from '../types';
declare const _default: import("vue").DefineComponent<{
    /**
     * @desc 表单配置项
     * @abstract
     */
    inputProps: {
        type: PropType<inputPropsTs>;
        default: () => {};
    };
    /**
     * @desc 对应vModel值
     */
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * @desc 对应表格type
     */
    type: {
        type: PropType<fromTypeTs>;
        default: string;
    };
    /**
     * @desc 表单选择配置数组
     */
    option: {
        type: PropType<optionTs[]>;
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @desc 表单配置项
     * @abstract
     */
    inputProps: {
        type: PropType<inputPropsTs>;
        default: () => {};
    };
    /**
     * @desc 对应vModel值
     */
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    /**
     * @desc 对应表格type
     */
    type: {
        type: PropType<fromTypeTs>;
        default: string;
    };
    /**
     * @desc 表单选择配置数组
     */
    option: {
        type: PropType<optionTs[]>;
        default: () => never[];
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onUpDataRefInput?: ((...args: any[]) => any) | undefined;
}, {
    type: fromTypeTs;
    option: optionTs[];
    inputProps: inputPropsTs;
    modelValue: string | number | boolean;
}, {}>;
export default _default;
