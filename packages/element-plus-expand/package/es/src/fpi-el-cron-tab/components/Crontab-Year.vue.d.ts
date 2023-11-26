declare const _default: import("vue").DefineComponent<Readonly<{
    check?: any;
    cron?: any;
    mouth?: any;
}>, unknown, {
    fullYear: number;
    radioValue: number;
    cycle01: number;
    cycle02: number;
    average01: number;
    average02: number;
    checkboxList: never[];
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
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update"[], "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    check?: any;
    cron?: any;
    mouth?: any;
}>>> & {
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    readonly check?: any;
    readonly cron?: any;
    readonly mouth?: any;
}, {}>;
export default _default;
