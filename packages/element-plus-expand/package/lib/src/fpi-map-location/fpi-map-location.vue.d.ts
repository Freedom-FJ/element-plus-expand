declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    toFixedNum: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => void;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "getAddress")[], "update:modelValue" | "getAddress", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    toFixedNum: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => void;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onGetAddress?: ((...args: any[]) => any) | undefined;
}, {
    style: Record<string, any>;
    title: string;
    modelValue: unknown[];
    toFixedNum: number;
}, {}>, {
    img: (_: {}) => any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
