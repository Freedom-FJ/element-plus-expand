declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
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
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "page-change"[], "page-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}, {}>, {
    empty: (_: {}) => any;
    append: (_: {}) => any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
