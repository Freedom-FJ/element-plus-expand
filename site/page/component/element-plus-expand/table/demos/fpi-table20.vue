<!--
 * @Author: mjh
 * @Date: 2023-04-11 11:08:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-19 11:32:22
 * @Description:
-->
<template>
    <FpiElTable
        :column="column"
        :table-data="tableData"
        :is-show-page="false"
    >
        <template #date="{ scope }">
            {{ `${scope.row.date}##isSlot` }}
        </template>
        <template #date-header>
            日期isSlotHeader
        </template>
    </FpiElTable>
</template>

<script lang="ts" setup>
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'
import { h } from 'vue'

const column: tableColumnTs[] = [
    {
        type: 'index',
        label: '序号',
        width: '60',
    },
    {
        prop: 'date',
        label: 'Date',
        width: '180',
        isSlot: true,
        isSlotHeader: true
    },
    {
        prop: 'name',
        label: 'Name',
        width: '180',
        render: (scope, tableColumn) => {
            return h(
                'div',
                { color: 'red' },
                `${scope.row.name}-${tableColumn.label}`
            )
        }
    },
    {
        prop: 'address',
        label: 'Address',
    },
]

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
]
</script>
