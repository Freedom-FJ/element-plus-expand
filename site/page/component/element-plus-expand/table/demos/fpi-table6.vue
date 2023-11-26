<template>
    <FpiElTable
        :column="column"
        :table-data="list"
        :row-class-name="tableRowClassName"
    />
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

interface User {
  date: string
  name: string
  address: string
}

const tableRowClassName = ({
    row,
    rowIndex,
}: {
  row: User
  rowIndex: number
}) => {
    if (rowIndex === 1)
        return 'warning-row'

    else if (rowIndex === 3)
        return 'success-row'

    return ''
}

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
])
</script>

<style>
.el-table .warning-row {
    --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

.el-table .success-row {
    --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>

