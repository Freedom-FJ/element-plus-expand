import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    /**
     * 0~100之间的数字
     */
    value: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 选中格子的颜色
     */
    checkColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 选中区域的颜色
     */
    checkBoxBack: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 不选中格子的颜色
     */
    defaultColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 未选择区域的颜色
     */
    defaultBoxBack: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 格子的样式
     */
    gridStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * 格子的宽度
     */
    gridWidth: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 格子间隔
     */
    gridMid: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 整个背景色
     */
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 表格进度条是横向的还是竖的
     */
    baseLine: {
        type: PropType<"x" | "y">;
        default: string;
    };
    /**
     * 格子倾斜角度
     */
    gridRotate: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 渐变开始颜色 (不支持透明度的颜色)
     */
    linearStartColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 渐变结束颜色 (不支持透明度的颜色)
     */
    linearEndColor: {
        type: StringConstructor;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * 0~100之间的数字
     */
    value: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 选中格子的颜色
     */
    checkColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 选中区域的颜色
     */
    checkBoxBack: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 不选中格子的颜色
     */
    defaultColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 未选择区域的颜色
     */
    defaultBoxBack: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 格子的样式
     */
    gridStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    /**
     * 格子的宽度
     */
    gridWidth: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 格子间隔
     */
    gridMid: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 整个背景色
     */
    backgroundColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 表格进度条是横向的还是竖的
     */
    baseLine: {
        type: PropType<"x" | "y">;
        default: string;
    };
    /**
     * 格子倾斜角度
     */
    gridRotate: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * 渐变开始颜色 (不支持透明度的颜色)
     */
    linearStartColor: {
        type: StringConstructor;
        default: string;
    };
    /**
     * 渐变结束颜色 (不支持透明度的颜色)
     */
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
}, {}>;
export default _default;
