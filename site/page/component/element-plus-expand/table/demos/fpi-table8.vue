<!--
 * @Author: mjh
 * @Date: 2023-04-11 11:08:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-22 23:38:41
 * @Description:
-->
<template>
    <FpiElTable
        :column="column"
        :table-data="tableData"
        max-height="320"
        :is-show-page="false"
    />
    <el-button class="mt-4" style="width: 100%;" @click="onAddItem">
        Add Item
    </el-button>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

const tableData = ref([
    {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
])

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
    {
        prop: 'name',
        label: '操作',
        align: 'center',
        type: 'tools',
        toolsStyle: () => {
            return {
                width: '30%',
                margin: '0 auto'
            }
        },
        toolsArr: [
            {
                label: '删除',
                click: (row: Record<string, any>, index: number) => {
                    tableData.value.splice(index, 1)
                }
            }
        ]
    }
])

const onAddItem = () => {
    tableData.value.push({
        date: '2020-10-10',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    })
}
</script>
