<template>
    <div>
        <FpiElTable
            :column="column"
            :table-data="tableData"
            :is-show-page="false"
            :span-method="arraySpanMethod"
            style="width: 100%;"
        />

        <FpiElTable
            :column="column"
            :is-show-page="false"
            :table-data="tableData"
            height="200"
            :span-method="objectSpanMethod"
            style="width: 100%; margin-top: 20px;"
        />
    </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'

import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

interface User {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

interface SpanMethodProps {
  row: User
  column: any
  rowIndex: number
  columnIndex: number
}

const column: any = shallowRef<tableColumnTs[]>([

    {
        prop: 'id',
        width: '150',
        label: 'ID',
        columnKey: 'date',
    },

    {
        prop: 'name',
        label: 'Name',
    },
    {
        prop: 'amount1',
        label: 'Amount 1',
        sortable: true
    },
    {
        prop: 'amount2',
        label: 'Amount 2',
        sortable: true
    },
    {
        prop: 'amount3',
        label: 'Amount 3',
        sortable: true
    },
])

const arraySpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
}: SpanMethodProps) => {
    if (rowIndex % 2 === 0) {
        if (columnIndex === 0)
            return [1, 2]

        else if (columnIndex === 1)
            return [0, 0]
    }
}

const objectSpanMethod = ({
    row,
    column,
    rowIndex,
    columnIndex,
}: SpanMethodProps) => {
    if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
            return {
                rowspan: 2,
                colspan: 1,
            }
        }
        else {
            return {
                rowspan: 0,
                colspan: 0,
            }
        }
    }
}

const tableData: User[] = [
    {
        id: '12987122',
        name: 'Tom',
        amount1: '234',
        amount2: '3.2',
        amount3: 10,
    },
    {
        id: '12987123',
        name: 'Tom',
        amount1: '165',
        amount2: '4.43',
        amount3: 12,
    },
    {
        id: '12987124',
        name: 'Tom',
        amount1: '324',
        amount2: '1.9',
        amount3: 9,
    },
    {
        id: '12987125',
        name: 'Tom',
        amount1: '621',
        amount2: '2.2',
        amount3: 17,
    },
    {
        id: '12987126',
        name: 'Tom',
        amount1: '539',
        amount2: '4.1',
        amount3: 15,
    },
]
</script>
