<template>
    <FpiElTable
        border
        :column="column1"
        :table-data="tableData"
        show-summary
        :is-show-page="false"
        style="width: 100%;"
    />

    <FpiElTable
        border
        :column="column2"
        :is-show-page="false"
        :table-data="tableData"
        height="200"
        :summary-method="getSummaries"
        show-summary
        style="width: 100%; margin-top: 20px;"
    />
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

interface Product {
  id: string
  name: string
  amount1: string
  amount2: string
  amount3: number
}

interface SummaryMethodProps<T = Product> {
  columns: any[]
  data: T[]
}
const column1: any = shallowRef<tableColumnTs[]>([
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

const column2: any = shallowRef([
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
        label: 'Cost 1 ($)',
    },
    {
        prop: 'amount2',
        label: 'Cost 2 ($)',
    },
    {
        prop: 'amount3',
        label: 'Cost 3 ($)',
    },
])

const getSummaries = (param: SummaryMethodProps) => {
    const { columns, data } = param
    const sums: string[] = []
    columns.forEach((column, index) => {
        if (index === 0) {
            sums[index] = 'Total Cost'
            return
        }
        const values = data.map((item: any) => Number(item[column.property]))
        if (!values.every(value => Number.isNaN(value))) {
            sums[index] = `$ ${values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!Number.isNaN(value))
                    return prev + curr

                else
                    return prev
            }, 0)}`
        }
        else {
            sums[index] = 'N/A'
        }
    })

    return sums
}

const tableData: Product[] = [
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
