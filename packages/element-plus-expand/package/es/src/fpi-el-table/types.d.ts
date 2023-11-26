import type { TableColumnCtx } from 'element-plus';
import type { VNode } from 'vue';
export interface SpanMethodProps {
    row: Record<string, any>;
    column: TableColumnCtx<Record<string, any>>;
    rowIndex: number;
    columnIndex: number;
}
export type sortOrderTs = 'ascending' | 'descending' | null;
export interface TableColumnCtxPlus<T> extends TableColumnCtx<T> {
    type: 'selection' | 'index' | 'expand' | 'tools' | string;
    fixed: 'right' | 'left' | boolean | string;
    align: 'left' | 'center' | 'right' | string;
    headerAlign: 'left' | 'center' | 'right' | string;
    isSlot: boolean;
    isSlotHeader: boolean;
    toolsStyle: () => Record<string, string>;
    toolsArr: Array<{
        label: string;
        style?: () => Record<string, string>;
        click?: (row: Record<string, any>, index: number) => any;
    }>;
    column: tableColumnTs[];
    render: (scope: {
        row: Record<string, any>;
        $index: number;
    }, columnData: tableColumnTs) => (VNode | VNode[]);
}
export type tableColumnTs<T = any> = Partial<TableColumnCtxPlus<T>>;
export interface tableDataTs {
    apiTableData: Record<string, any>[];
    pageParameter: {
        pageSizes: number;
        currentPage: number;
        total: number;
    };
    loading: boolean;
}
export type PageKeyTs = keyof tableDataTs['pageParameter'];
export interface StyleChangeTs {
    row: Record<string, any>;
    column: {
        property: string;
    };
    rowIndex: number;
    columnIndex: number;
}
export interface tableConfig {
    resExpr?: string;
    pageTotalExpr?: string;
    pageReqExpr?: {
        pageSizes: string;
        currentPage: string;
    };
    currentPageOffset?: number;
    pageInit?: {
        pageSizes?: number;
        currentPage?: number;
        total?: number;
        pageSizesArr?: number[];
    };
    headerRowStyle?: Record<string, any>;
    headerCellStyle?: Record<string, any>;
    rowStyle?: Record<string, any>;
    cellStyle?: Record<string, any>;
    isShowPage?: boolean;
}
