declare const _default: import("vue").DefineComponent<Readonly<{
    check?: any;
    cron?: any;
}>, unknown, {
    radioValue: number;
    workday: number;
    cycle01: number;
    cycle02: number;
    average01: number;
    average02: number;
    checkboxList: never[];
    checkNum: any;
}, {
    cycleTotal(): string;
    averageTotal(): string;
    workdayCheck(): number;
    checkboxString(): string;
}, {
    radioChange(): void;
    cycleChange(): void;
    averageChange(): void;
    workdayChange(): void;
    checkboxChange(): void;
    weekChange(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update"[], "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    check?: any;
    cron?: any;
}>>> & {
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    readonly check?: any;
    readonly cron?: any;
}, {}>;
export default _default;
