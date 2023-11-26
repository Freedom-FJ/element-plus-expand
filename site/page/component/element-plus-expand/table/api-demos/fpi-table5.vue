<template>
    <FpiElTable
        :column="column"
        :api="reqGetData"
        :is-show-page="false"
        :filter-method="filterMethod"
    />
</template>

<script lang="ts" setup>
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'
import mockRequests from '../../../../../api/mockAjax'

// 获取数据的接口
const reqGetData = (data: Record<string, any> = {}) => {
    return mockRequests({
        url: '/tableDataMin',
        method: 'post',
        data
    })
}
const column: tableColumnTs[] = [
    {
        type: 'index',
        label: '序号',
        width: '60',
        align: 'center'
    },
    {
        prop: 'date',
        label: 'Date',
        width: '180'
    },
    {
        prop: 'name',
        label: 'Name',
        width: '180'
    },
    {
        prop: 'address',
        label: 'Address',
    }
]
const filterMethod = (row: Record<string, any>, index: number, arr: Array<Record<string, any>>) => {
    if (row.name === 'Tom') return true
    return false
}
</script>
