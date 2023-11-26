import type { CSSProperties } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    showBack?: boolean | undefined;
    showTabs?: boolean | undefined;
    tab?: string | undefined;
    tabs?: {
        name: string;
        code: string;
    }[] | undefined;
    columns?: {
        slotName: string;
        defaultWidth?: number | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: CSSProperties | undefined;
        class?: string | undefined;
        hideBorder?: boolean | undefined;
        disableDrag?: boolean | undefined;
    }[] | undefined;
}>, {
    title: string;
    showBack: boolean;
    showTabs: boolean;
    tabs: () => never[];
    columns: () => never[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:tab" | "back")[], "update:tab" | "back", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    title?: string | undefined;
    showBack?: boolean | undefined;
    showTabs?: boolean | undefined;
    tab?: string | undefined;
    tabs?: {
        name: string;
        code: string;
    }[] | undefined;
    columns?: {
        slotName: string;
        defaultWidth?: number | undefined;
        maxWidth?: number | undefined;
        minWidth?: number | undefined;
        style?: CSSProperties | undefined;
        class?: string | undefined;
        hideBorder?: boolean | undefined;
        disableDrag?: boolean | undefined;
    }[] | undefined;
}>, {
    title: string;
    showBack: boolean;
    showTabs: boolean;
    tabs: () => never[];
    columns: () => never[];
}>>> & {
    "onUpdate:tab"?: ((...args: any[]) => any) | undefined;
    onBack?: ((...args: any[]) => any) | undefined;
}, {
    columns: {
        slotName: string;
        defaultWidth?: number;
        maxWidth?: number;
        minWidth?: number;
        style?: CSSProperties;
        class?: string;
        hideBorder?: boolean;
        disableDrag?: boolean;
    }[];
    title: string;
    showBack: boolean;
    showTabs: boolean;
    tabs: {
        name: string;
        code: string;
    }[];
}, {}>, Record<string, (_: {}) => any> & {
    'header-left': (_: {}) => any;
    'header-right': (_: {}) => any;
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
