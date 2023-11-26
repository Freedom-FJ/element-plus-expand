<template>
    <div class="fpi-el-table">
        <ElTable
            ref="singleTableRef"
            v-loading="loading"
            style="width: 100%;"
            :header-row-style="fpiTableConfig.headerRowStyle"
            :header-cell-style="fpiTableConfig.headerCellStyle"
            :row-style="fpiTableConfig.rowStyle"
            :cell-style="fpiTableConfig.cellStyle"
            v-bind="attrs"
            :element-loading-text="elementLoadingText"
            :element-loading-background="elementLoadingBackground"
            :element-loading-svg-view-box="elementLoadingSvgViewBox"
            :element-loading-svg="elementLoadingSvg"
            :data="currTableData"
        >
            <template #empty>
                <slot name="empty" />
            </template>
            <template #append>
                <slot name="append" />
            </template>
            <ElTableNode
                v-for="(item, index) of column"
                :key="index"
                :column-data="item"
                :slots="slots"
            />
        </ElTable>
        <div v-if="isShowPage" class="fpi-el-table-list-page" :style="pageBoxStyle">
            <div style="width: fit-content;">
                <ElPagination
                    v-model:page-size="pageParameter.pageSizes"
                    :layout="pageLayout"
                    popper-class="transformPage"
                    :background="isShowPageback"
                    :page-sizes="pageInit.pageSizesArr || [10, 20, 30, 50]"
                    :total="pageParameter.total"
                    :pager-count="pagerCount"
                    :small="small"
                    :current-page="pageParameter.currentPage"
                    @current-change="currentChange"
                    @size-change="currentSizeChange"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, toRefs, useAttrs, useSlots, watch } from 'vue'
import { ElPagination, ElTable, vLoading } from 'element-plus'
import { DataType, getVal } from '../utils'
import ElTableNode from './el-table-node.vue'
import { exposeHook } from './hook/expose'
import { fpiTableProps, loadingProps, pageProps } from './props'
import type { PageKeyTs, tableDataTs } from './types'
import { fpiTableConfig } from './config'

// import './style/index.scss'
// import './style/element.css'
// import 'element-plus/es/components/table/style/css'
// import 'element-plus/es/components/table-column/style/css'
// import 'element-plus/es/components/loading/style/css'
// import 'element-plus/es/components/scrollbar/style/css'
// import 'element-plus/es/components/pagination/style/css'

const props = defineProps({
    // ******** fpitable特殊属性 ***********
    ...fpiTableProps,
    // ******** 页码参数 ***********
    ...pageProps,
    // ******** loading参数 ***********
    ...loadingProps
})
/**
 * @desc table回调函数
 */
const $emit = defineEmits([
    'page-change'
])

const attrs: any = useAttrs()
const slots = useSlots()
const data: tableDataTs = reactive({
    apiTableData: [], // 当前表格数据
    pageParameter: {
        pageSizes: 10, // 每页显示条数
        currentPage: 1, // 当前页
        total: 0 // 总共多少条数据
    },
    loading: false, // 是否显示loading加载图标
})

const currTableData = computed(() => {
    return props.api ? data.apiTableData : props.tableData
})
/**
 * @desc  table dom
 */
const singleTableRef = ref<InstanceType<typeof ElTable>>()

/**
 * @desc  静态表格时监听页码变化
 */
watch(
    () => props.pageParams,
    () => {
        detailParamsPage()
    },
    { deep: true }
)

/**
 * @name: 处理动态页码参数
 * @desc:
 * @return {*}
 */
const detailParamsPage = () => {
    props.pageParams && Object.keys(props.pageParams).forEach((item: string) => {
        data.pageParameter[item as PageKeyTs] = (props.pageParams as any)[item as PageKeyTs] || 0
    })
}
/**
 * @desc  页码组件的回调函数 页码修改
 * @param page  当前页
 * @emits page-change emit回传对象 当前的页码参数
 *   @param currentPage 当前页
 *   @param pageSizes 每页显示条数
 *   @param total 总共条数
 */
const currentChange = (page: number) => {
    data.pageParameter.currentPage = page
    if (props.api) { exposeFun.reLoadTable() }
    else {
        $emit('page-change', {
            currentPage: data.pageParameter.currentPage,
            total: data.pageParameter.total,
            pageSizes: data.pageParameter.pageSizes,
        })
    }
}
/**
 * @desc  页码size修改
 * @emits page-change emit回传对象 当前的页码参数
 *   @param currentPage 当前页
 *   @param pageSizes 每页显示条数
 *   @param total 总共条数
 */
const currentSizeChange = () => {
    if (data.pageParameter.total <= ((data.pageParameter.currentPage - 1) * data.pageParameter.pageSizes)) return
    if (props.api) { exposeFun.reLoadTable() }
    else {
        $emit('page-change', {
            currentPage: data.pageParameter.currentPage,
            total: data.pageParameter.total,
            pageSizes: data.pageParameter.pageSizes,
        })
    }
}
/**
 * @desc  初始化表格 @async
 * @abstract 会初始化页码参数 对应 @pageInit 传参
 * @abstract 判断 @api 是否为空 为空则获取 @tableData 数据
 * @abstract @isLazyRequest 是否默认请求
 */
const initTable = async () => {
    // 初始化页码
    const { pageInit } = props
    Object.keys(pageInit).forEach((item: string) => {
        (data as any).pageParameter[item] = (pageInit as any)[item]
    })
    detailParamsPage()
    // 判断是否转入api 且部署lazy模式
    if (props.api && !props.isLazyRequest)
        data.apiTableData = await filterData()
}
/**
 * @desc  判断是否传入过滤数据方法 @filterMethod 并返回
 */
const filterData = async () => {
    let currData = await sendRequest(data.pageParameter.currentPage, data.pageParameter.pageSizes) as any || []
    if (props.filterMethod)
        currData = currData.filter(props.filterMethod)
    return currData
}
/**
 * @desc 请求数据方法Promise
 * @param currentPage  当前页
 * @param pageSizes  页面数据数量
 * @param isUnLoading  是否需要显示加载图标
 */
const sendRequest = async (currentPage: number, pageSizes: number, isUnLoading?: boolean) => {
    // 获取转入的筛选数据
    return new Promise((resolve) => {
        if (props.isShowLoading && !isUnLoading)
            data.loading = true
        const { params } = props
        const reqParams: Record<string, any> = {
            ...params,
        }
        // 如果显示页码则加入页码变量
        if (props.isShowPage) {
            reqParams[props.pageReqExpr.currentPage] = currentPage + props.currentPageOffset
            reqParams[props.pageReqExpr.pageSizes] = pageSizes
        }
        props.api && props.api(reqParams).then(async (res: any) => {
            data.loading = false
            props.isShowPage && (data.pageParameter.total = props.pageTotalExpr ? Number(getVal(res, props.pageTotalExpr) || 0) : 0)
            if (props.resPretreatment)
                res = DataType(props.resPretreatment, 'asyncfunction') ? await props.resPretreatment(res) : props.resPretreatment(res)

            resolve(getVal(res, props.resPretreatment ? '' : props.resExpr))
        })
    })
}

const exposeFun = exposeHook(data, props, singleTableRef, { sendRequest, filterData })

initTable()

const { loading, pageParameter } = toRefs(data)
defineExpose(exposeFun)
</script>

<script lang="ts">
export default {
    name: 'FpiElTable'
}
</script>

<style lang="scss">
@import "./style/index";
</style>
