declare const _default: import("vue").DefineComponent<Readonly<{
    ex?: any;
}>, unknown, {
    dayRule: string;
    dayRuleSup: string | number | number[];
    dateArr: number[][];
    resultList: string[];
    isShow: boolean;
}, {}, {
    expressionChange(): void;
    getIndex(arr: number[], value: number): number | undefined;
    getYearArr(rule: string, year: number): void;
    getMouthArr(rule: string): void;
    getWeekArr(rule: string): void;
    getDayArr(rule: string): void;
    getHourArr(rule: string): void;
    getMinArr(rule: string): void;
    getSecondArr(rule: string): void;
    getOrderArr(min: number, max: number): number[];
    getAssignArr(rule: string): number[];
    getAverageArr(rule: string, limit: number): number[];
    getCycleArr(rule: string, limit: number, status: boolean): number[];
    compare(value1: number, value2: number): 1 | -1;
    formatDate(value: number | Date, type?: string): string | number | undefined;
    checkDate(value: number | Date | string): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update"[], "update", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    ex?: any;
}>>> & {
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    readonly ex?: any;
}, {}>;
export default _default;
