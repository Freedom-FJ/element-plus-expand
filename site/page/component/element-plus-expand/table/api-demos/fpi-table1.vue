<template>
    <FpiElTable
        :column="column"
        :api="reqGetData"
        :is-show-page="false"
        res-expr="data"
        :params="params"
    />
</template>

<script lang="ts" setup>
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'
import mockRequests from '../../../../../api/mockAjax'

// 获取数据的接口
const reqGetData = (params: Record<string, any> = {}) =>
    mockRequests({
        url: '/tableDataMin',
        method: 'get',
        params
    })
const params = {
    stationCodes: 1,
    regionCodes: '3301',
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
    },
]
</script>
