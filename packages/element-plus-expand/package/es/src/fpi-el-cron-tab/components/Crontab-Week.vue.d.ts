declare const _default: import("vue").DefineComponent<Readonly<{
    check?: any;
    cron?: any;
}>, unknown, {
    radioValue: number;
    weekday: number;
    cycle01: number;
    cycle02: number;
    average01: number;
    average02: number;
    checkboxList: never[];
    weekList: string[];
    checkNum: any;
}, {
    cycleTotal(): string;
    averageTotal(): string;
    weekdayCheck(): number;
    checkboxString(): string;
}, {
    radioChange(): void;
    cycleChange(): void;
    averageChange(): void;
    weekdayChange(): void;
    checkboxChange(): void;
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
