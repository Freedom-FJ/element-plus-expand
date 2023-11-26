/*
 * @Author: mjh
 * @Date: 2022-11-05 22:14:28
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-19 10:51:37
 * @Description:
 */
import { toRaw } from 'vue'
import { deepClone } from '../../utils'
import type { tableDataTs } from '../types'

export function exposeHook(data: tableDataTs, props: Record<string, any>, singleTableRef: any, fun: {
    sendRequest: (currentPage: number, pageSizes: number, isUnLoading?: boolean) => Promise<unknown>
    filterData: () => Promise<any>
}) {
    /**
     * @desc 获取table数据<Expose>
     * @param types? Objcet | String
     * @param 'all' 获取全部数据 用于比如需要导出
     * @param number 获取当前页第几条数据
     * @param 不传 获取当前页
     * @param 对象 获取指定页和数量的数据
     */
    const getTableData = async (types?: 'all' | number | {
        pageSizes: number
        currentPage: number
    }) => {
        if (!types || !props.isShowPage)
            return deepClone(toRaw(data.apiTableData))
        if (types === 'all') {
            const returnData = await fun.sendRequest(1, data.pageParameter.total, true)
            return returnData
        }
        if (typeof types === 'number')
            return deepClone(data.apiTableData[types])
        if (typeof types === 'object') {
            const returnData = await fun.sendRequest(types.currentPage, types.pageSizes, true)
            return returnData
        }
    }
    /**
     * @desc 手动请求数据 <Expose>
     */
    const reLoadTable = async () => {
        // 判断是否转入api 有则请求数据
        if (props.api)
            data.apiTableData = await fun.filterData()

        else data.apiTableData = deepClone(props.tableData)
    }

    /**
     * @desc 设置选中行 <emit>
     * @param row  传的是哪一个对象就选中哪个  不传则清除选中
     */
    const setCurrentRow = (row?: Record<string, any> | number) => {
        const currTableData = props.api ? data.apiTableData : props.tableData
        if (typeof row === 'number')
            singleTableRef && singleTableRef.value?.setCurrentRow(currTableData[row])
        else singleTableRef && singleTableRef.value?.setCurrentRow(row)
    }
    /**
     * @desc 复选框手动调用方法 <Expose>
     * @param rows  undefined 清除选中  'all' 全选获不全选会自动取反
     * @abstract rows传数组 可以是对应的对象（静态模式不可用对象）也可以是对应的index(0开始)选中对应列
     */
    const toggleSelection = (rows?: any[] | 'all') => {
        const currTableData = props.api ? data.apiTableData : props.tableData
        if (rows === 'all') {
            singleTableRef.value?.toggleAllSelection()
        }
        else if (rows) {
            rows.forEach((row) => {
                if (typeof row === 'number')
                    singleTableRef.value?.toggleRowSelection(currTableData[row])
                else singleTableRef.value?.toggleRowSelection(row)
            })
        }
        else {
            singleTableRef.value?.clearSelection()
        }
    }
    /**
     * @desc 获取复选框选中行 <Expose>
     *
     */
    const getSelectionRows = () => {
        return singleTableRef.value?.getSelectionRows()
    }
    /**
     * @desc 手动排序表格。 参数 prop 属性指定排序列，order 指定排序顺序。 <Expose>
     *
     */
    const sort = (prop: string, order: string) => {
        return singleTableRef.value?.sort(prop, order)
    }

    /**
     * @desc 用于可扩展的表格或树表格，如果某行被扩展，则切换。
     * @abstract 使用第二个参数，您可以直接设置该行应该被扩展或折叠。<Expose>
     * @param row   当前行的对象或者索引
     * @param expanded // true/false 是否展开
     */
    const toggleRowExpansion = (rowOrIndex: Record<string, any> | number, expanded: boolean) => {
        const currTableData = props.api ? data.apiTableData : props.tableData
        if (typeof rowOrIndex === 'number')
            return singleTableRef.value?.toggleRowExpansion(currTableData[rowOrIndex], expanded)
        return singleTableRef.value?.toggleRowExpansion(rowOrIndex, expanded)
    }
    /**
     * @desc 请求数据 <Expose>
     * @param type  true开始loading / false结束
     */
    const changeLoading = async (type: boolean) => {
        data.loading = type
    }

    /**
     * @desc 用于清空排序条件，数据会恢复成未排序的状态 <Expose>
     *
     */
    const clearSort = () => {
        return singleTableRef.value?.clearSort()
    }

    /**
     * @desc 对 Table 进行重新布局。  <Expose>
     * 当表格可见性变化时，您可能需要调用此方法以获得正确的布局
     */
    const doLayout = () => {
        return singleTableRef.value?.doLayout()
    }

    /**
     * @desc 滚动到一组特定坐标  <Expose>
     * 当表格可见性变化时，您可能需要调用此方法以获得正确的布局
     */
    const scrollTo = (options: ScrollToOptions | number, yCoord?: number) => {
        return singleTableRef.value?.scrollTo(options, yCoord)
    }

    /**
     * @desc 设置垂直滚动位置  <Expose>
     */
    const setScrollTop = (top?: number) => {
        return singleTableRef.value?.setScrollTop(top)
    }
    /**
     * @desc 传入由columnKey 组成的数组以清除指定列的过滤条件。 <Expose>
     * 如果没有参数，清除所有过滤器
     */
    const clearFilter = (columnKeys: string[]) => {
        return singleTableRef.value?.clearFilter(columnKeys)
    }

    /**
     * @desc 设置水平滚动位置  <Expose>
     */
    const setScrollLeft = (top?: number) => {
        return singleTableRef.value?.setScrollLeft(top)
    }

    /**
     * @desc 设置分页参数并更新表格  <Expose>
     */
    const setPage = (pageData: Partial<tableDataTs['pageParameter']>) => {
        data.pageParameter = { ...data.pageParameter, ...pageData }
        reLoadTable()
    }
    return {
        // 获取表格数据
        getTableData,
        // 请求数据
        reLoadTable,
        // 设置表格选中行
        setCurrentRow,
        // 复选框手动调用方法
        toggleSelection,
        // 获取复选框选中行
        getSelectionRows,
        // 手动排序
        sort,
        // 设置展开行展开或者收缩
        toggleRowExpansion,
        // 外部改变loading方法
        changeLoading,
        // 用于清空排序条件，数据会恢复成未排序的状态
        clearSort,
        // 传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器
        clearFilter,
        // 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局
        doLayout,
        // 滚动到一组特定坐标
        scrollTo,
        // 设置垂直滚动位置
        setScrollTop,
        // 设置水平滚动位置
        setScrollLeft,
        // 设置页码参数
        setPage
    }
}

