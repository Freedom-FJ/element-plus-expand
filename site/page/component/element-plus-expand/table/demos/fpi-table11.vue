<template>
    <el-button @click="resetDateFilter">
        reset date filter
    </el-button>
    <el-button @click="clearFilter">
        reset all filters
    </el-button>
    <FpiElTable
        :ref="(el:any) => fpiElTableDom = el"
        :column="column"
        row-key="date"
        style="margin-top: 10px;"
        :table-data="tableData"
        :is-show-page="false"
    >
        <template #tag="{ scope }">
            <el-tag
                :type="scope.row.tag === 'Home' ? '' : 'success'"
                disable-transitions
            >
                {{ scope.row.tag }}
            </el-tag>
        </template>
    </FpiElTable>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'

import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

interface User {
  date: string
  name: string
  address: string
  tag: string
}

const filterHandler = (
    value: string,
    row: User,
    column: any
) => {
    const property: keyof User = column.property
    return row[property] === value
}

const formatter = (row: User, column: any) => {
    return row.address
}

const filterTag = (value: string, row: User) => {
    return row.tag === value
}

const column: any = shallowRef<tableColumnTs[]>([

    {
        prop: 'date',
        width: '180',
        label: 'Date',
        columnKey: 'date',
        filters: [
            { text: '2016-05-01', value: '2016-05-01' },
            { text: '2016-05-02', value: '2016-05-02' },
            { text: '2016-05-03', value: '2016-05-03' },
            { text: '2016-05-04', value: '2016-05-04' },
        ],
        filterMethod: filterHandler
    },

    {
        prop: 'name',
        label: 'Name',
        width: '180'
    },
    {
        prop: 'address',
        label: 'Address',
        formatter
    },
    {
        prop: 'tag',
        label: 'Tag',
        width: '100',
        filters: [
            { text: 'Home', value: 'Home' },
            { text: 'Office', value: 'Office' },
        ],
        filterMethod: filterTag,
        filterPlacement: 'bottom-end',
        isSlot: true
    },

])

const fpiElTableDom = ref<any>()

const resetDateFilter = () => {
  fpiElTableDom.value!.clearFilter(['date'])
}
// TODO: improvement typing when refactor table
const clearFilter = () => {
  fpiElTableDom.value!.clearFilter()
}

const tableData: User[] = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        tag: 'Office',
    },
]
</script>
