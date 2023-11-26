declare const _default: import("vue").DefineComponent<Readonly<{
    check?: any;
    radioParent?: any;
}>, unknown, {
    radioValue: number;
    cycle01: number;
    cycle02: number;
    average01: number;
    average02: number;
    checkboxList: string[];
    checkNum: any;
}, {
    cycleTotal(): string;
    averageTotal(): string;
    checkboxString(): string;
}, {
    radioChange(): void;
    cycleChange(): void;
    averageChange(): void;
    checkboxChange(): void;
    othChange(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update"[], "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    check?: any;
    radioParent?: any;
}>>> & {
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    readonly check?: any;
    readonly radioParent?: any;
}, {}>;
export default _default;
