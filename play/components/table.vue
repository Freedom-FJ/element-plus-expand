<template>
    <FpiElTable
        :ref="(el:any) => data.fpiElTableDom = el"
        :column="column"
        border
        :table-data="tableData"
        max-height="400"
        :page-params="pageParams"
        @page-change="pageChange"
    >
        <template #empty>
            <div>12</div>
        </template>
    </FpiElTable>
    <FpiElTable
        :column="column"
        border
        :table-data="list"
        max-height="400"
        :page-params="pageParams"
        @page-change="pageChange"
    />
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
// import { FpiElTable } from '@element-plus-expand/components'
// import { FpiElTable } from '@ued_fpi/element-plus-expand'
// import '@ued_fpi/element-plus-expand/es/src/fpi-el-table/style/index'
// import { FpiElTable } from '@ued_fpi/element-plus-expand'
// import '@ued_fpi/element-plus-expand/es/src/fpi-el-table/style/index'

// 过滤数据
const data = reactive({
    column: [
        {
            type: 'index',
            label: '序号',
            width: '100',
        },
        {
            prop: 'code',
            label: '车牌',
            width: '150',
        },
        {
            prop: 'dataTimeType',
            width: '300',
            label: '联单编号',
        },
        {
            prop: 'name',
            label: '数量',
        },
        {
            prop: 'grade',
            width: '250',
            label: 'receivedQuantity数量',
        },
        {
            prop: 'dateTime',
            label: 'receivedQuantity数量',
        },

    ] as any[],
    fpiElTableDom: ref(),
    pageParams: {
        currentPage: 1,
        total: 10,
        pageSizes: 10,
    },
    list: []
})
onMounted(() => {
    getData()
})
// 请求数据
const getData = () => {
    // data.fpiElTableDom?.changeLoading(true)
    // const params = {
    //     stationCodes: 1,
    //     regionCodes: '330100000000',
    //     watershedCodes: 'GA',
    //     factorGroupCode: 'WMS_SHOWITCODE',
    //     online: -1,
    //     runState: -1,
    //     controlLevel: '001',
    //     limit: data.pageParams.pageSizes,
    //     offset: data.pageParams.currentPage - 1
    // }
    // // request.realTimeViewLoad(params, {
    // //     isIntercept: true
    // // }).then((res: any) => {
    // // data.pageParams.total = 0
    // // data.list = []
    // setTimeout(() => {
    //     data.fpiElTableDom?.changeLoading(false)
    // }, 2000)
    // })
}
// 必须按照这三个变量名写
const pageChange = (pageObj: {
    currentPage: number
    total: number
    pageSizes: number
}) => {
    data.pageParams.pageSizes = pageObj.pageSizes
    data.pageParams.currentPage = pageObj.currentPage
    getData()
}

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
]

const { column, list, pageParams } = toRefs(data)
</script>
