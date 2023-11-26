/*
 * @Author: mjh
 * @Date: 2022-11-26 11:45:29
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-19 11:25:14
 * @Description:
 */
import type { TableColumnCtx } from 'element-plus'
import type { VNode } from 'vue'

export interface SpanMethodProps {
    row: Record<string, any>
    column: TableColumnCtx<Record<string, any>>
    rowIndex: number
    columnIndex: number
}
export type sortOrderTs = 'ascending' | 'descending' | null

export interface TableColumnCtxPlus<T> extends TableColumnCtx<T> {
    type: 'selection' | 'index' | 'expand' | 'tools' | string // 复选/索引列/展开行/自定义的工具类
    fixed: 'right' | 'left' | boolean | string
    align: 'left' | 'center' | 'right' | string // 对齐方式
    headerAlign: 'left' | 'center' | 'right' | string // 对齐方式
    // ********** 新加入column属性 **********
    // *************************************
    isSlot: boolean // 是否可插槽 使用template在最外层定义 插槽名称#prop
    isSlotHeader: boolean // 是否可表头插槽 使用template 插槽名称 #prop + '-header'
    // 当type为'tools'时有效 设置工具botton的父级的样式
    toolsStyle: () => Record<string, string>
    toolsArr: Array<{
        label: string // btn文字
        style?: () => Record<string, string> // 设置当前btn的样式
        click?: (row: Record<string, any>, index: number) => any // 绑定点击事件
    }>
    column: tableColumnTs[] // 多级表头子列
    render: (scope: { row: Record<string, any>; $index: number }, columnData: tableColumnTs) => (VNode | VNode[]) // 自定义render
}

export type tableColumnTs<T = any> = Partial<TableColumnCtxPlus<T>>

export interface tableDataTs {
    apiTableData: Record<string, any>[] // 当前表格数据
    pageParameter: {
        pageSizes: number // 每页显示条数
        currentPage: number // 当前页
        total: number // 总共多少条数据
    }
    loading: boolean // 是否显示loading加载图标
}

export type PageKeyTs = keyof tableDataTs['pageParameter']

export interface StyleChangeTs {
    row: Record<string, any> // 数据对象
    column: {
        property: string // 当前prop
    }
    rowIndex: number
    columnIndex: number
}

export interface tableConfig {
    resExpr?: string // 对于请求回传对象对应的table数据在对象内的位置
    pageTotalExpr?: string // 总共数据条数对于的请求返回对象内位置
    pageReqExpr?: { // 页面请求对应参数的名称
        pageSizes: string
        currentPage: string
    }
    currentPageOffset?: number // 当前页面偏移量 用于配合后端特殊的要求
    pageInit?: { // 初始化页码
        pageSizes?: number
        currentPage?: number
        total?: number
        pageSizesArr?: number[]
    }
    headerRowStyle?: Record<string, any>
    headerCellStyle?: Record<string, any>
    rowStyle?: Record<string, any>
    cellStyle?: Record<string, any>
    isShowPage?: boolean
}
