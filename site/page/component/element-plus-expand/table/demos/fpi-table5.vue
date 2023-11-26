<!--
 * @Author: mjh
 * @Date: 2023-04-11 11:08:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-22 23:37:40
 * @Description:
-->
<template>
    <FpiElTable
        :column="column"
        :table-data="list"
        :is-show-page="false"
    />
</template>

<script lang="ts" setup>
import { reactive, shallowRef } from 'vue'

import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

const column: any = shallowRef<tableColumnTs[]>([

    {
        prop: 'date',
        label: '日期',
        fixed: true,
        width: '150'
    },
    {
        prop: 'name',
        label: '名称',
        width: '120'
    },
    {
        prop: 'name',
        label: '名称',
        width: '120'
    },
    {
        prop: 'state',
        label: '状态',
        width: '120',
        fixed: 'right'
    },
    {
        prop: 'address',
        label: 'Address',
        width: '600',
    },
    {
        prop: 'city',
        label: 'City',
        width: '120',
    },
])

const list = shallowRef([
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
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
])
</script>
