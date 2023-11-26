<template>
    <FpiElTable
        :column="column"
        :table-data="list"
        stripe
        :page-params="pageParams"
        :is-show-page="false"
        @page-change="pageChange"
    />
</template>

<script lang="ts" setup>
import { reactive, shallowRef } from 'vue'
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

const column = shallowRef<tableColumnTs[]>([
    {
        prop: 'date',
        label: '日期',
    },
    {
        prop: 'name',
        label: '名称',
    },
    {
        prop: 'address',
        label: '地址',
    },
])

const pageParams = reactive({
    currentPage: 1,
    total: 0,
    pageSizes: 10,
})
const list = shallowRef([
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
])

// 必须按照这三个变量名写
const pageChange = (pageObj: {
    currentPage: number
    total: number
    pageSizes: number
}) => {
    pageParams.pageSizes = pageObj.pageSizes
    pageParams.currentPage = pageObj.currentPage
}
</script>

