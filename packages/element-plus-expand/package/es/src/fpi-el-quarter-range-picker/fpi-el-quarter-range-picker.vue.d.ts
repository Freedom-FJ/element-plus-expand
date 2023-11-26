import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    showFormat?: string | undefined;
    modelValue: Date[];
    disabled?: boolean | undefined;
    startPlaceholder?: string | undefined;
    endPlaceholder?: string | undefined;
    valueFormat?: string | undefined;
    clearable?: boolean | undefined;
    disabledDate?: ((val: {
        year: number;
        quarter: number;
        currentYear: number;
        currentQuarter: number;
    }) => boolean) | undefined;
    popperClass?: string | undefined;
    rangeSeparator?: string | undefined;
    inputWrapperClass?: string | undefined;
    inputWrapperStyle?: CSSProperties | undefined;
    cellFormat?: string | undefined;
}>, {
    showFormat: string;
    modelValue: () => never[];
    disabled: boolean;
    startPlaceholder: string;
    endPlaceholder: string;
    valueFormat: string;
    clearable: boolean;
    disabledDate: (val: any) => boolean;
    popperClass: string;
    rangeSeparator: string;
    inputWrapperClass: string;
    inputWrapperStyle: () => {};
    cellFormat: string;
}>, {
    getQuarterInfoByDate(dates?: Date[]): {
        startYear: number;
        startQuarter: number;
        endYear: number;
        endQuarter: number;
    } | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    showFormat?: string | undefined;
    modelValue: Date[];
    disabled?: boolean | undefined;
    startPlaceholder?: string | undefined;
    endPlaceholder?: string | undefined;
    valueFormat?: string | undefined;
    clearable?: boolean | undefined;
    disabledDate?: ((val: {
        year: number;
        quarter: number;
        currentYear: number;
        currentQuarter: number;
    }) => boolean) | undefined;
    popperClass?: string | undefined;
    rangeSeparator?: string | undefined;
    inputWrapperClass?: string | undefined;
    inputWrapperStyle?: CSSProperties | undefined;
    cellFormat?: string | undefined;
}>, {
    showFormat: string;
    modelValue: () => never[];
    disabled: boolean;
    startPlaceholder: string;
    endPlaceholder: string;
    valueFormat: string;
    clearable: boolean;
    disabledDate: (val: any) => boolean;
    popperClass: string;
    rangeSeparator: string;
    inputWrapperClass: string;
    inputWrapperStyle: () => {};
    cellFormat: string;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    popperClass: string;
    modelValue: Date[];
    clearable: boolean;
    disabledDate: (val: {
        year: number;
        quarter: number;
        currentYear: number;
        currentQuarter: number;
    }) => boolean;
    rangeSeparator: string;
    startPlaceholder: string;
    endPlaceholder: string;
    valueFormat: string;
    showFormat: string;
    inputWrapperClass: string;
    inputWrapperStyle: CSSProperties;
    cellFormat: string;
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
