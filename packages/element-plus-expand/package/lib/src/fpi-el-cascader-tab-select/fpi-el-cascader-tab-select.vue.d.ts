import type { cascaderProps } from './props';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<cascaderProps>, {
    size: "small";
    textHolder: string;
    hasBackground: boolean;
    props: () => any;
}>, {
    getCheckedNodes: (leafOnly: boolean) => any;
    clearCheckedNodes: () => any;
    getOptionList: () => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("expand-change" | "update:modelValue" | "update:currentType" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event" | "expand-close" | "panel-open" | "panel-close")[], "expand-change" | "update:modelValue" | "update:currentType" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event" | "expand-close" | "panel-open" | "panel-close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<cascaderProps>, {
    size: "small";
    textHolder: string;
    hasBackground: boolean;
    props: () => any;
}>>> & {
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:currentType"?: ((...args: any[]) => any) | undefined;
    "onHandle-change-node"?: ((...args: any[]) => any) | undefined;
    "onHandle-type-change"?: ((...args: any[]) => any) | undefined;
    "onHandle-search-event"?: ((...args: any[]) => any) | undefined;
    "onHandle-input-event"?: ((...args: any[]) => any) | undefined;
    "onExpand-close"?: ((...args: any[]) => any) | undefined;
    "onPanel-open"?: ((...args: any[]) => any) | undefined;
    "onPanel-close"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("element-plus").CascaderProps | undefined;
    size: "small" | "default" | "large";
    textHolder: string;
    hasBackground: boolean;
}, {}>, {
    default: (_: {}) => any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? P[K] & {
        default: D[K];
    } : P[K];
};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
