import type { cascaderProps } from './props';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<cascaderProps>, {
    size: "small";
    textHolder: string;
    hasBackground: boolean;
    props: () => any;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event")[], "update:modelValue" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<cascaderProps>, {
    size: "small";
    textHolder: string;
    hasBackground: boolean;
    props: () => any;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onHandle-change-node"?: ((...args: any[]) => any) | undefined;
    "onHandle-type-change"?: ((...args: any[]) => any) | undefined;
    "onHandle-search-event"?: ((...args: any[]) => any) | undefined;
    "onHandle-input-event"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("element-plus").CascaderProps | undefined;
    size: "small" | "default" | "large";
    textHolder: string;
    hasBackground: boolean;
}, {}>;
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
