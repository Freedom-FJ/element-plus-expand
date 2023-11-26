<template>
    <FpiElTable
        :ref="(el:any) => data.fpiElTableDom = el"
        :column="column"
        style="width: 100%;
        margin-bottom: 20px;"
        :table-data="tableData"
        :page-params="pageParams"
        row-key="id"
        :is-show-page="false"
        max-height="250"
        @page-change="pageChange"
    />
    <FpiElTable
        :column="column"
        style="width: 100%;"
        :table-data="tableData1"
        :page-params="pageParams"
        row-key="id"
        max-height="250"
        :is-show-page="false"
        lazy
        :load="load"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        @page-change="pageChange"
    />
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

interface User {
    id: number
    date: string
    name: string
    hasChildren?: boolean
    children?: User[]
}

const data = reactive({
    column: [
        {
            type: 'index',
            label: '序号',
            width: '60',
        },
        {
            prop: 'date',
            label: 'date',
        },
        {
            prop: 'name',
            label: 'Name',
        }
    ] as tableColumnTs[],
    pageParams: {
        currentPage: 1,
        total: 0,
        pageSizes: 10,
    },
    // dom 节点
    fpiElTableDom: ref(),
    tableData: [
        {
            id: 1,
            date: '2016-05-02',
            name: 'wangxiaohu',
        },
        {
            id: 2,
            date: '2016-05-04',
            name: 'wangxiaohu',
        },
        {
            id: 3,
            date: '2016-05-01',
            name: 'wangxiaohu',
            children: [
                {
                    id: 31,
                    date: '2016-05-01',
                    name: 'wangxiaohu',
                },
                {
                    id: 32,
                    date: '2016-05-01',
                    name: 'wangxiaohu',
                },
            ],
        },
        {
            id: 4,
            date: '2016-05-03',
            name: 'wangxiaohu',
        }
    ],
    tableData1: [
        {
            id: 1,
            date: '2016-05-02',
            name: 'wangxiaohu',
        },
        {
            id: 2,
            date: '2016-05-04',
            name: 'wangxiaohu',
        },
        {
            id: 3,
            date: '2016-05-01',
            name: 'wangxiaohu',
            hasChildren: true,
        },
        {
            id: 4,
            date: '2016-05-03',
            name: 'wangxiaohu',
        },
    ]
})
onMounted(() => {
    // 还可以使用此方法设置展开行
    data.fpiElTableDom.toggleRowExpansion(data.tableData[2], true)
})
const load = (
    row: any,
    treeNode: unknown,
    resolve: (date: User[]) => void
) => {
    setTimeout(() => {
        resolve([
            {
                id: 31,
                date: '2016-05-01',
                name: 'wangxiaohu',
            },
            {
                id: 32,
                date: '2016-05-01',
                name: 'wangxiaohu',
            },
        ])
    }, 1000)
}
// 必须按照这三个变量名写
const pageChange = (pageObj: {
    currentPage: number
    total: number
    pageSizes: number
}) => {
    data.pageParams.pageSizes = pageObj.pageSizes
    data.pageParams.currentPage = pageObj.currentPage
    // getData()
}
const { column, pageParams, tableData, tableData1 } = toRefs(data)
</script>

