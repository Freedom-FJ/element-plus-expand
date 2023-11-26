<!--
 * @Author: mjh
 * @Date: 2023-04-26 18:43:50
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-19 11:42:47
 * @Description:
-->
<template>
    <el-button @click="initPage()">
        恢复到第一页
    </el-button>
    <FpiElTable
        :ref="(el:any) => fpiElTableDom = el"
        :column="column"
        :api="reqGetData"
        :params="params"
        page-total-expr="total"
        :page-init="{
            pageSizes: 5,
            currentPage: 1,
            total: 0,
            pageSizesArr: [5, 10, 20],
        }"
    />
</template>

<script lang="ts" setup>
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'
import { ref } from 'vue'
import mockRequests from '../../../../../api/mockAjax'

// 获取数据的接口
const reqGetData = (data: Record<string, any> = {}) => {
    return mockRequests({
        url: '/tableDataMid',
        method: 'post',
        data
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

const initPage = () => {
    fpiElTableDom.value?.setPage({
        currentPage: 1
    })
}
</script>
