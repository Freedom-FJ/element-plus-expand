import type { Plugin } from 'vue';
import _FpiElTable from './fpi-el-table.vue';
type SFCWithInstall<T> = T & Plugin;
export declare const FpiElTable: SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            small?: boolean | undefined;
            column?: Partial<import("./types").TableColumnCtxPlus<any>>[] | undefined;
            filterMethod?: ((row: Record<string, any>, index: number, arr: any[]) => boolean) | undefined;
            isShowPage?: boolean | undefined;
            api?: Function | undefined;
            tableData?: Record<string, any>[] | undefined;
            isShowLoading?: boolean | undefined;
            elementLoadingText?: string | undefined;
            elementLoadingBackground?: string | undefined;
            elementLoadingSvg?: string | undefined;
            elementLoadingSvgViewBox?: string | undefined;
            pageTotalExpr?: string | undefined;
            pageParams?: {
                pageSizes?: number | undefined;
                currentPage?: number | undefined;
                total?: number | undefined;
            } | undefined;
            pageInit?: {
                pageSizes?: number | undefined;
                currentPage?: number | undefined;
                total?: number | undefined;
                pageSizesArr: number[];
            } | undefined;
            pageReqExpr?: {
                pageSizes: string;
                currentPage: string;
            } | undefined;
            pageLayout?: string | undefined;
            currentPageOffset?: number | undefined;
            isShowPageback?: boolean | undefined;
            pagerCount?: number | undefined;
            pageBoxStyle?: Record<string, any> | undefined;
            isLazyRequest?: boolean | undefined;
            params?: Record<string, any> | undefined;
            resExpr?: string | undefined;
            resPretreatment?: ((res: Record<string, any>) => Record<string, any>[] | Promise<any>) | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            style?: unknown;
            "onPage-change"?: ((...args: any[]) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "page-change", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            isShowLoading: {
                type: BooleanConstructor;
                default: boolean;
            };
            elementLoadingText: {
                type: StringConstructor;
                default: string;
            };
            elementLoadingBackground: {
                type: StringConstructor;
                default: undefined;
            };
            elementLoadingSvg: {
                type: StringConstructor;
                default: undefined;
            };
            elementLoadingSvgViewBox: {
                type: StringConstructor;
                default: undefined;
            };
            pageTotalExpr: {
                type: StringConstructor;
                default: string;
            };
            pageParams: {
                type: import("vue").PropType<{
                    pageSizes?: number | undefined;
                    currentPage?: number | undefined;
                    total?: number | undefined;
                }>;
                default: undefined;
            };
            pageInit: {
                type: import("vue").PropType<{
                    pageSizes?: number | undefined;
                    currentPage?: number | undefined;
                    total?: number | undefined;
                    pageSizesArr: number[];
                }>;
                default: () => {
                    pageSizes?: number | undefined;
                    currentPage?: number | undefined;
                    total?: number | undefined;
                    pageSizesArr?: number[] | undefined;
                };
            };
            pageReqExpr: {
                type: import("vue").PropType<{
                    pageSizes: string;
                    currentPage: string;
                }>;
                default: () => {
                    pageSizes: string;
                    currentPage: string;
                };
            };
            isShowPage: {
                type: BooleanConstructor;
                default: boolean;
            };
            pageLayout: {
                type: StringConstructor;
                default: string;
            };
            currentPageOffset: {
                type: NumberConstructor;
                default: number;
            };
            isShowPageback: {
                type: BooleanConstructor;
                default: boolean;
            };
            small: {
                type: BooleanConstructor;
                default: boolean;
            };
            pagerCount: {
                type: NumberConstructor;
                default: number;
            };
            pageBoxStyle: {
                type: ObjectConstructor;
                default: () => {};
            };
            column: {
                type: import("vue").PropType<Partial<import("./types").TableColumnCtxPlus<any>>[]>;
                default: () => Partial<import("./types").TableColumnCtxPlus<any>>[];
            };
            api: {
                type: FunctionConstructor;
                default: undefined;
            };
            isLazyRequest: {
                type: BooleanConstructor;
                default: boolean;
            };
            params: {
                type: import("vue").PropType<Record<string, any>>;
                default: () => {};
            };
            resExpr: {
                type: StringConstructor;
                default: string;
            };
            tableData: {
                type: import("vue").PropType<Record<string, any>[]>;
                default: undefined;
            };
            filterMethod: {
                type: import("vue").PropType<(row: Record<string, any>, index: number, arr: any[]) => boolean>;
                default: undefined;
            };
            resPretreatment: {
                type: import("vue").PropType<(res: Record<string, any>) => Record<string, any>[] | Promise<any>>;
                default: undefined;
            };
        }>> & {
            "onPage-change"?: ((...args: any[]) => any) | undefined;
        }, {
            getTableData: (types?: number | {
                pageSizes: number;
                currentPage: number;
            } | "all" | undefined) => Promise<any>;
            reLoadTable: () => Promise<void>;
            setCurrentRow: (row?: number | Record<string, any> | undefined) => void;
            toggleSelection: (rows?: any[] | "all" | undefined) => void;
            getSelectionRows: () => any;
            sort: (prop: string, order: string) => any;
            toggleRowExpansion: (rowOrIndex: number | Record<string, any>, expanded: boolean) => any;
            changeLoading: (type: boolean) => Promise<void>;
            clearSort: () => any;
            clearFilter: (columnKeys: string[]) => any;
            doLayout: () => any;
            scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => any;
            setScrollTop: (top?: number | undefined) => any;
            setScrollLeft: (top?: number | undefined) => any;
            setPage: (pageData: Partial<{
                pageSizes: number;
                currentPage: number;
                total: number;
            }>) => void;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "page-change"[], string, {
            small: boolean;
            column: Partial<import("./types").TableColumnCtxPlus<any>>[];
            filterMethod: (row: Record<string, any>, index: number, arr: any[]) => boolean;
            isShowPage: boolean;
            api: Function;
            tableData: Record<string, any>[];
            isShowLoading: boolean;
            elementLoadingText: string;
            elementLoadingBackground: string;
            elementLoadingSvg: string;
            elementLoadingSvgViewBox: string;
            pageTotalExpr: string;
            pageParams: {
                pageSizes?: number | undefined;
                currentPage?: number | undefined;
                total?: number | undefined;
            };
            pageInit: {
                pageSizes?: number | undefined;
                currentPage?: number | undefined;
                total?: number | undefined;
                pageSizesArr: number[];
            };
            pageReqExpr: {
                pageSizes: string;
                currentPage: string;
            };
            pageLayout: string;
            currentPageOffset: number;
            isShowPageback: boolean;
            pagerCount: number;
            pageBoxStyle: Record<string, any>;
            isLazyRequest: boolean;
            params: Record<string, any>;
            resExpr: string;
            resPretreatment: (res: Record<string, any>) => Record<string, any>[] | Promise<any>;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        isShowLoading: {
            type: BooleanConstructor;
            default: boolean;
        };
        elementLoadingText: {
            type: StringConstructor;
            default: string;
        };
        elementLoadingBackground: {
            type: StringConstructor;
            default: undefined;
        };
        elementLoadingSvg: {
            type: StringConstructor;
            default: undefined;
        };
        elementLoadingSvgViewBox: {
            type: StringConstructor;
            default: undefined;
        };
        pageTotalExpr: {
            type: StringConstructor;
            default: string;
        };
        pageParams: {
            type: import("vue").PropType<{
                pageSizes?: number | undefined;
                currentPage?: number | undefined;
                total?: number | undefined;
            }>;
            default: undefined;
        };
        pageInit: {
            type: import("vue").PropType<{
                pageSizes?: number | undefined;
                currentPage?: number | undefined;
                total?: number | undefined;
                pageSizesArr: number[];
            }>;
            default: () => {
                pageSizes?: number | undefined;
                currentPage?: number | undefined;
                total?: number | undefined;
                pageSizesArr?: number[] | undefined;
            };
        };
        pageReqExpr: {
            type: import("vue").PropType<{
                pageSizes: string;
                currentPage: string;
            }>;
            default: () => {
                pageSizes: string;
                currentPage: string;
            };
        };
        isShowPage: {
            type: BooleanConstructor;
            default: boolean;
        };
        pageLayout: {
            type: StringConstructor;
            default: string;
        };
        currentPageOffset: {
            type: NumberConstructor;
            default: number;
        };
        isShowPageback: {
            type: BooleanConstructor;
            default: boolean;
        };
        small: {
            type: BooleanConstructor;
            default: boolean;
        };
        pagerCount: {
            type: NumberConstructor;
            default: number;
        };
        pageBoxStyle: {
            type: ObjectConstructor;
            default: () => {};
        };
        column: {
            type: import("vue").PropType<Partial<import("./types").TableColumnCtxPlus<any>>[]>;
            default: () => Partial<import("./types").TableColumnCtxPlus<any>>[];
        };
        api: {
            type: FunctionConstructor;
            default: undefined;
        };
        isLazyRequest: {
            type: BooleanConstructor;
            default: boolean;
        };
        params: {
            type: import("vue").PropType<Record<string, any>>;
            default: () => {};
        };
        resExpr: {
            type: StringConstructor;
            default: string;
        };
        tableData: {
            type: import("vue").PropType<Record<string, any>[]>;
            default: undefined;
        };
        filterMethod: {
            type: import("vue").PropType<(row: Record<string, any>, index: number, arr: any[]) => boolean>;
            default: undefined;
        };
        resPretreatment: {
            type: import("vue").PropType<(res: Record<string, any>) => Record<string, any>[] | Promise<any>>;
            default: undefined;
        };
    }>> & {
        "onPage-change"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        getTableData: (types?: number | {
            pageSizes: number;
            currentPage: number;
        } | "all" | undefined) => Promise<any>;
        reLoadTable: () => Promise<void>;
        setCurrentRow: (row?: number | Record<string, any> | undefined) => void;
        toggleSelection: (rows?: any[] | "all" | undefined) => void;
        getSelectionRows: () => any;
        sort: (prop: string, order: string) => any;
        toggleRowExpansion: (rowOrIndex: number | Record<string, any>, expanded: boolean) => any;
        changeLoading: (type: boolean) => Promise<void>;
        clearSort: () => any;
        clearFilter: (columnKeys: string[]) => any;
        doLayout: () => any;
        scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => any;
        setScrollTop: (top?: number | undefined) => any;
        setScrollLeft: (top?: number | undefined) => any;
        setPage: (pageData: Partial<{
            pageSizes: number;
            currentPage: number;
            total: number;
        }>) => void;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    isShowLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    elementLoadingText: {
        type: StringConstructor;
        default: string;
    };
    elementLoadingBackground: {
        type: StringConstructor;
        default: undefined;
    };
    elementLoadingSvg: {
        type: StringConstructor;
        default: undefined;
    };
    elementLoadingSvgViewBox: {
        type: StringConstructor;
        default: undefined;
    };
    pageTotalExpr: {
        type: StringConstructor;
        default: string;
    };
    pageParams: {
        type: import("vue").PropType<{
            pageSizes?: number | undefined;
            currentPage?: number | undefined;
            total?: number | undefined;
        }>;
        default: undefined;
    };
    pageInit: {
        type: import("vue").PropType<{
            pageSizes?: number | undefined;
            currentPage?: number | undefined;
            total?: number | undefined;
            pageSizesArr: number[];
        }>;
        default: () => {
            pageSizes?: number | undefined;
            currentPage?: number | undefined;
            total?: number | undefined;
            pageSizesArr?: number[] | undefined;
        };
    };
    pageReqExpr: {
        type: import("vue").PropType<{
            pageSizes: string;
            currentPage: string;
        }>;
        default: () => {
            pageSizes: string;
            currentPage: string;
        };
    };
    isShowPage: {
        type: BooleanConstructor;
        default: boolean;
    };
    pageLayout: {
        type: StringConstructor;
        default: string;
    };
    currentPageOffset: {
        type: NumberConstructor;
        default: number;
    };
    isShowPageback: {
        type: BooleanConstructor;
        default: boolean;
    };
    small: {
        type: BooleanConstructor;
        default: boolean;
    };
    pagerCount: {
        type: NumberConstructor;
        default: number;
    };
    pageBoxStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    column: {
        type: import("vue").PropType<Partial<import("./types").TableColumnCtxPlus<any>>[]>;
        default: () => Partial<import("./types").TableColumnCtxPlus<any>>[];
    };
    api: {
        type: FunctionConstructor;
        default: undefined;
    };
    isLazyRequest: {
        type: BooleanConstructor;
        default: boolean;
    };
    params: {
        type: import("vue").PropType<Record<string, any>>;
        default: () => {};
    };
    resExpr: {
        type: StringConstructor;
        default: string;
    };
    tableData: {
        type: import("vue").PropType<Record<string, any>[]>;
        default: undefined;
    };
    filterMethod: {
        type: import("vue").PropType<(row: Record<string, any>, index: number, arr: any[]) => boolean>;
        default: undefined;
    };
    resPretreatment: {
        type: import("vue").PropType<(res: Record<string, any>) => Record<string, any>[] | Promise<any>>;
        default: undefined;
    };
}>> & {
    "onPage-change"?: ((...args: any[]) => any) | undefined;
}, {
    getTableData: (types?: number | {
        pageSizes: number;
        currentPage: number;
    } | "all" | undefined) => Promise<any>;
    reLoadTable: () => Promise<void>;
    setCurrentRow: (row?: number | Record<string, any> | undefined) => void;
    toggleSelection: (rows?: any[] | "all" | undefined) => void;
    getSelectionRows: () => any;
    sort: (prop: string, order: string) => any;
    toggleRowExpansion: (rowOrIndex: number | Record<string, any>, expanded: boolean) => any;
    changeLoading: (type: boolean) => Promise<void>;
    clearSort: () => any;
    clearFilter: (columnKeys: string[]) => any;
    doLayout: () => any;
    scrollTo: (options: number | ScrollToOptions, yCoord?: number | undefined) => any;
    setScrollTop: (top?: number | undefined) => any;
    setScrollLeft: (top?: number | undefined) => any;
    setPage: (pageData: Partial<{
        pageSizes: number;
        currentPage: number;
        total: number;
    }>) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "page-change"[], "page-change", {
    small: boolean;
    column: Partial<import("./types").TableColumnCtxPlus<any>>[];
    filterMethod: (row: Record<string, any>, index: number, arr: any[]) => boolean;
    isShowPage: boolean;
    api: Function;
    tableData: Record<string, any>[];
    isShowLoading: boolean;
    elementLoadingText: string;
    elementLoadingBackground: string;
    elementLoadingSvg: string;
    elementLoadingSvgViewBox: string;
    pageTotalExpr: string;
    pageParams: {
        pageSizes?: number | undefined;
        currentPage?: number | undefined;
        total?: number | undefined;
    };
    pageInit: {
        pageSizes?: number | undefined;
        currentPage?: number | undefined;
        total?: number | undefined;
        pageSizesArr: number[];
    };
    pageReqExpr: {
        pageSizes: string;
        currentPage: string;
    };
    pageLayout: string;
    currentPageOffset: number;
    isShowPageback: boolean;
    pagerCount: number;
    pageBoxStyle: Record<string, any>;
    isLazyRequest: boolean;
    params: Record<string, any>;
    resExpr: string;
    resPretreatment: (res: Record<string, any>) => Record<string, any>[] | Promise<any>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        empty: (_: {}) => any;
        append: (_: {}) => any;
    };
})>;
export default _FpiElTable;
