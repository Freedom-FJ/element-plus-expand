declare const _default: import("vue").DefineComponent<{
    centerPosition: {
        type: ArrayConstructor;
        default: () => number[];
    };
    isShowSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLook: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    toFixedNum: {
        type: NumberConstructor;
        default: number;
    };
}, {
    render: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "selectedMap"[], "selectedMap", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    centerPosition: {
        type: ArrayConstructor;
        default: () => number[];
    };
    isShowSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    isLook: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoom: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    toFixedNum: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onSelectedMap?: ((...args: any[]) => any) | undefined;
}, {
    width: string;
    height: string;
    centerPosition: unknown[];
    isShowSearch: boolean;
    isLook: boolean;
    zoom: number;
    toFixedNum: number;
}, {}>;
export default _default;
