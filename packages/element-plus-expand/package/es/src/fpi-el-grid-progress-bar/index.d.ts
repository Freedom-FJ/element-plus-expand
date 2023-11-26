import type { Plugin } from 'vue';
import _FpiElGridProgressBar from './fpi-el-grid-progress-bar.vue';
type SFCWithInstall<T> = T & Plugin;
export declare const FpiElGridProgressBar: SFCWithInstall<import("vue").DefineComponent<{
    value: {
        type: NumberConstructor;
        default: number;
    };
    checkColor: {
        type: StringConstructor;
        default: string;
    };
    checkBoxBack: {
        type: StringConstructor;
        default: string;
    };
    defaultColor: {
        type: StringConstructor;
        default: string;
    };
    defaultBoxBack: {
        type: StringConstructor;
        default: string;
    };
    gridStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    gridWidth: {
        type: NumberConstructor;
        default: number;
    };
    gridMid: {
        type: NumberConstructor;
        default: number;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    baseLine: {
        type: import("vue").PropType<"x" | "y">;
        default: string;
    };
    gridRotate: {
        type: NumberConstructor;
        default: number;
    };
    linearStartColor: {
        type: StringConstructor;
        default: string;
    };
    linearEndColor: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: NumberConstructor;
        default: number;
    };
    checkColor: {
        type: StringConstructor;
        default: string;
    };
    checkBoxBack: {
        type: StringConstructor;
        default: string;
    };
    defaultColor: {
        type: StringConstructor;
        default: string;
    };
    defaultBoxBack: {
        type: StringConstructor;
        default: string;
    };
    gridStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    gridWidth: {
        type: NumberConstructor;
        default: number;
    };
    gridMid: {
        type: NumberConstructor;
        default: number;
    };
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    baseLine: {
        type: import("vue").PropType<"x" | "y">;
        default: string;
    };
    gridRotate: {
        type: NumberConstructor;
        default: number;
    };
    linearStartColor: {
        type: StringConstructor;
        default: string;
    };
    linearEndColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    value: number;
    backgroundColor: string;
    checkColor: string;
    checkBoxBack: string;
    defaultColor: string;
    defaultBoxBack: string;
    gridStyle: Record<string, any>;
    gridWidth: number;
    gridMid: number;
    baseLine: "x" | "y";
    gridRotate: number;
    linearStartColor: string;
    linearEndColor: string;
}, {}>>;
export default _FpiElGridProgressBar;
