declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    hideComponent: {
        type: ArrayConstructor;
        default: () => never[];
    };
    showResult: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, {
    tabTitles: string[];
    tabActive: number;
    myindex: number;
    showTab: boolean;
    contabValueObj: {
        second: string;
        min: string;
        hour: string;
        day: string;
        mouth: string;
        week: string;
        year: string;
    };
}, {
    contabValueString(): string;
}, {
    shouldHide(key: any): boolean;
    resolveExp(): void;
    tabCheck(index: any): void;
    updateContabValue(name: any, value: any, from: any): void;
    changeRadio(name: any, value: any): void;
    checkNumber(value: any, minLimit: any, maxLimit: any): any;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    hideComponent: {
        type: ArrayConstructor;
        default: () => never[];
    };
    showResult: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number;
    hideComponent: unknown[];
    showResult: boolean;
}, {}>;
export default _default;
