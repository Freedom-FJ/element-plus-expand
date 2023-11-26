import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    /**
     * @desc 表格column列对象
     */
    columnData: {
        type: PropType<Partial<import("./types").TableColumnCtxPlus<any>>>;
        default: () => Partial<import("./types").TableColumnCtxPlus<any>>;
    };
    /**
     * @desc 父亲插槽
     */
    slots: {
        type: PropType<Record<string, any>>;
        default: () => Record<string, any>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @desc 表格column列对象
     */
    columnData: {
        type: PropType<Partial<import("./types").TableColumnCtxPlus<any>>>;
        default: () => Partial<import("./types").TableColumnCtxPlus<any>>;
    };
    /**
     * @desc 父亲插槽
     */
    slots: {
        type: PropType<Record<string, any>>;
        default: () => Record<string, any>;
    };
}>>, {
    columnData: Partial<import("./types").TableColumnCtxPlus<any>>;
    slots: Record<string, any>;
}, {}>;
export default _default;
