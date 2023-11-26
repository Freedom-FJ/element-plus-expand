<template>
    <FpiElTable
        :column="column"
        :table-data="tableData"
        :is-show-page="false"
        style="width: 100%;"
    />
</template>

<script lang="ts" setup>
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

const column: tableColumnTs[] = [
    {
        type: 'index',
        label: '序号',
        width: '60',
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
        label: '操作',
        align: 'center',
        type: 'tools',
        toolsStyle: () => {
            return {
                width: '70%',
                margin: '0 auto'
            }
        },
        toolsArr: [
            {
                label: '查看',
                click: (row: Record<string, any>, index: number) => {
                    console.log(row, index, '查看')
                }
            },
            {
                label: '编辑',
                click: (row: Record<string, any>, index: number) => {
                    console.log(row, index, '编辑')
                }
            },
            {
                label: '删除',
                style: () => {
                    return {
                        color: '#FF0200'
                    }
                },
                click: (row: Record<string, any>, index: number) => {
                    console.log(row, index, '删除')
                }
            }
        ]
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
