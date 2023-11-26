<template>
    <FpiElTable
        :ref="(el:any) => fpiElTableDom = el"
        :column="column"
        :api="reqGetData"
        :is-show-page="false"
    />
</template>

<script lang="ts" setup>
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'
import { onMounted, ref } from 'vue'
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

const fpiElTableDom = ref()

onMounted(() => {
    console.log('getTableData:', fpiElTableDom.value?.getTableData('all'))
})
</script>
