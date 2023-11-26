import type { Plugin } from 'vue';
type SFCWithInstall<T> = T & Plugin;
export declare const FpiElQuarterPicker: SFCWithInstall<import("vue").DefineComponent<{
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    popperWidth: {
        type: NumberConstructor;
        default: number;
    };
    inputClass: {
        type: StringConstructor;
        default: string;
    };
    inputStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (DateConstructor | StringConstructor)[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabledDate: {
        type: FunctionConstructor;
        default: (date: {
            year: number;
            startMonth: number;
            endMonth: number;
            q: string;
            Q: string;
        }) => false;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "default" | "large">;
        default: string;
    };
    valueFormat: {
        type: StringConstructor;
        default: string;
    };
}, {
    transformQuarterInfoByDate: (date?: Date | undefined) => {
        text: string;
        key: string;
        startMonth: number;
        endMonth: number;
        q: string;
        Q: string;
        year: number;
    } | null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (date: Date | null) => void;
} & {
    change: (date: Date | null, detail: any) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    popperStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    popperWidth: {
        type: NumberConstructor;
        default: number;
    };
    inputClass: {
        type: StringConstructor;
        default: string;
    };
    inputStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        default: () => {};
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (DateConstructor | StringConstructor)[];
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    disabledDate: {
        type: FunctionConstructor;
        default: (date: {
            year: number;
            startMonth: number;
            endMonth: number;
            q: string;
            Q: string;
        }) => false;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<"small" | "default" | "large">;
        default: string;
    };
    valueFormat: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((date: Date | null, detail: any) => any) | undefined;
    "onUpdate:modelValue"?: ((date: Date | null) => any) | undefined;
}, {
    popperClass: string;
    popperStyle: import("vue").CSSProperties;
    size: "small" | "default" | "large";
    clearable: boolean;
    inputStyle: import("vue").CSSProperties;
    placeholder: string;
    disabledDate: Function;
    format: string;
    valueFormat: string;
    popperWidth: number;
    inputClass: string;
}, {}>>;
export default FpiElQuarterPicker;
