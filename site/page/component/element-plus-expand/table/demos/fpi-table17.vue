<template>
    <FpiElTable
        :column="columns"
        :table-data="tableData"
        :is-show-page="false"
        :span-method="arraySpanMethod"
        style="width: 100%;"
    >
        <template #state="props">
            <div>
                <span v-if="props.scope.row.isLineDiy">这是一个自定义的列----------------------</span>
                <span v-else>{{ props.scope.row.state }}</span>
            </div>
        </template>
    </FpiElTable>
</template>

<script lang="ts" setup>
import type { SpanMethodProps, tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

const columns: Array<tableColumnTs> = [
    {
        prop: 'state',
        label: '状态',
        width: '100',
        isSlot: true,
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
        isLineDiy: true
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
        isLineDiy: true
    },
]

// 合并行方法
const arraySpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
}: SpanMethodProps) => {
    if (row.isLineDiy) {
        if (columnIndex === 0) return [1, columns.length]
        else return [0, 0]
    }
    return [1, 1]
}
</script>
