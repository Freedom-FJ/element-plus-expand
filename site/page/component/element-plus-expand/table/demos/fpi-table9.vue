<template>
    <FpiElTable
        :column="column"
        :table-data="tableData"
        :is-show-page="false"
    />
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

const column: any = shallowRef<tableColumnTs[]>([
    {
        prop: 'date',
        label: '日期',
        width: '150'
    },
    {
        label: 'Delivery Info',
        column: [
            {
                prop: 'name',
                label: '名称',
                width: '120'
            },
            {
                label: 'Address Info',
                column: [
                    {
                        prop: 'name',
                        label: '名称',
                        width: '120'
                    },
                    {
                        prop: 'state',
                        label: '状态',
                        width: '120',
                    },
                    {
                        prop: 'city',
                        label: 'City',
                        width: '120',
                    },
                ]
            },
        ]
    }
])

const tableData = [
    {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-08',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-06',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-07',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
]
</script>
