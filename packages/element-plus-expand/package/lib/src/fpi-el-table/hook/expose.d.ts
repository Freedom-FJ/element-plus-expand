import type { tableDataTs } from '../types';
export declare function exposeHook(data: tableDataTs, props: Record<string, any>, singleTableRef: any, fun: {
    sendRequest: (currentPage: number, pageSizes: number, isUnLoading?: boolean) => Promise<unknown>;
    filterData: () => Promise<any>;
}): {
    getTableData: (types?: 'all' | number | {
        pageSizes: number;
        currentPage: number;
    }) => Promise<any>;
    reLoadTable: () => Promise<void>;
    setCurrentRow: (row?: Record<string, any> | number) => void;
    toggleSelection: (rows?: any[] | 'all') => void;
    getSelectionRows: () => any;
    sort: (prop: string, order: string) => any;
    toggleRowExpansion: (rowOrIndex: Record<string, any> | number, expanded: boolean) => any;
    changeLoading: (type: boolean) => Promise<void>;
    clearSort: () => any;
    clearFilter: (columnKeys: string[]) => any;
    doLayout: () => any;
    scrollTo: (options: ScrollToOptions | number, yCoord?: number) => any;
    setScrollTop: (top?: number) => any;
    setScrollLeft: (top?: number) => any;
    setPage: (pageData: Partial<tableDataTs['pageParameter']>) => void;
};
