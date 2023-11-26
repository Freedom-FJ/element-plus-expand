import type { PropType } from 'vue';
import type { fromTypeTs } from '../types';
declare const _default: import("vue").DefineComponent<{
    /**
     * @desc 表单配置项
     * @abstract
     */
    inputProps: {
        type: PropType<any>;
        default: () => {};
    };
    /**
     * @desc 对应vModel值
     */
    modelValue: {
        type: PropType<any>;
        default: string;
    };
    /**
     * @desc 对应表格type
     */
    type: {
        type: PropType<fromTypeTs>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @desc 表单配置项
     * @abstract
     */
    inputProps: {
        type: PropType<any>;
        default: () => {};
    };
    /**
     * @desc 对应vModel值
     */
    modelValue: {
        type: PropType<any>;
        default: string;
    };
    /**
     * @desc 对应表格type
     */
    type: {
        type: PropType<fromTypeTs>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onUpDataRefInput?: ((...args: any[]) => any) | undefined;
}, {
    type: fromTypeTs;
    inputProps: any;
    modelValue: any;
}, {}>;
export default _default;
