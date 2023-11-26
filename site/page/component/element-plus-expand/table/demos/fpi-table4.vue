<!--
 * @Author: mjh
 * @Date: 2023-03-26 22:41:06
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-23 10:25:24
 * @Description:
-->
<template>
    <FpiElTable
        :column="column"
        :table-data="list"
        height="300"
    />
</template>

<script lang="ts" setup>
import { reactive, shallowRef } from 'vue'
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

const column: any = shallowRef<tableColumnTs[]>([

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
    {
        date: '2016-05-08',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
])
</script>
