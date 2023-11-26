import type { Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;
export declare const FpiElQuarterRangePicker: SFCWithInstall<import("vue").DefineComponent<{
    disabled: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
    popperClass: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<Date[]>;
        required: true;
    } & {
        default: () => never[];
    };
    clearable: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
    disabledDate: {
        type: import("vue").PropType<(val: {
            year: number;
            quarter: number;
            currentYear: number;
            currentQuarter: number;
        }) => boolean>;
    } & {
        default: (val: any) => boolean;
    };
    rangeSeparator: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    startPlaceholder: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    endPlaceholder: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    showFormat: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    inputWrapperClass: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    inputWrapperStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    } & {
        default: () => {};
    };
    cellFormat: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
}, {
    getQuarterInfoByDate(dates?: Date[] | undefined): {
        startYear: number;
        startQuarter: number;
        endYear: number;
        endQuarter: number;
    } | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
    popperClass: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<Date[]>;
        required: true;
    } & {
        default: () => never[];
    };
    clearable: {
        type: import("vue").PropType<boolean>;
    } & {
        default: boolean;
    };
    disabledDate: {
        type: import("vue").PropType<(val: {
            year: number;
            quarter: number;
            currentYear: number;
            currentQuarter: number;
        }) => boolean>;
    } & {
        default: (val: any) => boolean;
    };
    rangeSeparator: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    startPlaceholder: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    endPlaceholder: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    valueFormat: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    showFormat: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    inputWrapperClass: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
    inputWrapperStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
    } & {
        default: () => {};
    };
    cellFormat: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
}>> & {
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
    inputWrapperStyle: import("vue").CSSProperties;
    cellFormat: string;
}, {}>>;
export default FpiElQuarterRangePicker;
