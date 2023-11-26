<!--
 * @Author: mjh
 * @Date: 2023-04-03 22:05:09
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-03 22:22:29
 * @Description:
-->
<template>
    <FpiElTable
        :ref="(el:any) => fpiElTableDom = el"
        :column="column"
        :table-data="tableData"
        :is-show-page="false"
        highlight-current-row
        @current-change="handleCurrentChange"
        @selection-change="handleSelectionChange"
    />
    <div style="margin-top: 20px;">
        <el-button size="small" @click="setCurrent(1)">
            单选选中第二行
        </el-button>
        <el-button size="small" @click="setCurrent()">
            清除单选
        </el-button>
        <el-button size="small" @click="toggleSelection([1, 2])">
            复选选中第二三行
        </el-button>
        <el-button size="small" @click="toggleSelection()">
            清除复选
        </el-button>
        <el-button size="small" @click="toggleSelection('all')">
            复选全选或全不选
        </el-button>
    </div>
</template>

<script lang="ts" setup>
import { ref, shallowRef } from 'vue'

import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'

const column: any = shallowRef<tableColumnTs[]>([

    {
        type: 'selection',
        width: '55',
    },
    {
        prop: 'date',
        width: '120',
        label: 'Date',
    },
    {
        prop: 'date',
        width: '120',
        label: 'Date',
    },
    {
        prop: 'name',
        label: 'Name',
        width: '120'
    },
    {
        prop: 'address',
        label: 'Address',
        showOverflowTooltip: true
    },

])

interface User {
  date: string
  name: string
  address: string
}

const fpiElTableDom = ref<any>()

// 单选设置点击选中
// 静态数据模式时只支持number
const setCurrent = (row?: any | number) => {
    fpiElTableDom.value && fpiElTableDom.value.setCurrentRow(row)
}

/**
 * @desc 复选框手动调用方法
 * @param rows  undefined 清除选中  'all' 全选获不全选会自动取反
 * rows传数组 可以是对应的对象（静态模式不可用对象）也可以是对应的index(0开始)选中对应列
 */
const toggleSelection = (rows?: any[] | 'all') => {
    fpiElTableDom.value && fpiElTableDom.value.toggleSelection(rows)
}

// 单选点击回调
const handleCurrentChange = (val: any | undefined, old: any) => {
    console.log('此次单选选中：', val, '上次单选选中：', old, '单选')
}
// 多选点击回调
const handleSelectionChange = (val: any[]) => {
    console.log(val, '复选')
}

const tableData: User[] = [
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
]
</script>
