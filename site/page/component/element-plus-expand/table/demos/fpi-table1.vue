<template>
    <FpiElTable
        :column="column"
        :table-data="list"
        :page-params="pageParams"
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
const pageParams = reactive({
    currentPage: 1,
    total: list.value.length,
    pageSizes: 10,
})
</script>

