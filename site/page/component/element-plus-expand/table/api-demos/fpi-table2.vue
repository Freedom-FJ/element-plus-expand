<template>
    <FpiElTable
        :ref="(el:any) => fpiElTableDom = el"
        :column="column"
        :api="reqGetData"
        style="margin-bottom: 10px;"
        :is-show-page="false"
        is-lazy-request
        :params="params"
    />
    <ElButton @click="checkSend()">
        点击请求
    </ElButton>
</template>

<script lang="ts" setup>
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'
import { ref } from 'vue'
import mockRequests from '../../../../../api/mockAjax'

// 获取数据的接口
const reqGetData = (params: Record<string, any> = {}) => {
    return mockRequests({
        url: '/tableDataMin',
        method: 'get',
        params
    })
}

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
    }
]

const fpiElTableDom = ref()
const checkSend = () => {
    fpiElTableDom.value?.reLoadTable()
}
</script>
