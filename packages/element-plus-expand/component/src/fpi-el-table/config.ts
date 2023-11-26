/*
 * @Author: mjh
 * @Date: 2023-03-20 12:21:32
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-11 12:34:06
 * @Description:
 */
import { shallowRef } from 'vue'
import type { tableConfig } from './types'
// table组件自动请求配置项
export const fpiTableConfig = shallowRef<tableConfig>({
    resExpr: 'data', // 对于请求回传对象对应的table数据在对象内的位置
    pageTotalExpr: 'total', // 总共数据条数对于的请求返回对象内位置
    pageReqExpr: { // 页面请求对应参数的名称
        pageSizes: 'pageSize',
        currentPage: 'pageNum'
    },
    currentPageOffset: 0, // 当前页面偏移量 用于配合后端特殊的要求
    pageInit: { // 初始化页码
        pageSizes: 10,
        currentPage: 1,
        total: 0,
        pageSizesArr: [10, 20, 30, 50]
    },
    headerRowStyle: undefined,
    headerCellStyle: undefined,
    rowStyle: undefined,
    cellStyle: undefined,
    isShowPage: undefined
})
