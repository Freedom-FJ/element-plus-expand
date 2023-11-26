<template>
    <FpiElTable
        :column="column"
        :api="reqGetData"
        :is-show-page="false"
        :res-pretreatment="resPretreatment"
    />
</template>

<script lang="ts" setup>
import type { tableColumnTs } from '@ued_fpi/element-plus-expand/es/src/fpi-el-table/types'
import mockRequests from '../../../../../api/mockAjax'

interface ResData {
    'name': 'Mark'
    'city': 'Los Angeles'
    'detail': {
        'name': string
        'value': string
    }[]
    'Part': {
        'name': string
        'value': string
    }[]
}

// 获取数据的接口
const reqGetData = (data: Record<string, any> = {}) => {
    return mockRequests({
        url: '/tableDataMix',
        method: 'post',
        data
    })
}
const column: tableColumnTs[] = [
    {
        type: 'index',
        label: '序号',
        width: '60',
        align: 'center'
    },
    {
        prop: 'name',
        label: 'Name',
    },
    {
        prop: 'detailName',
        label: 'detailName',
    },
    {
        prop: 'detail',
        label: 'detail',
    },
    {
        prop: 'PartName',
        label: 'PartName',
    },
    {
        prop: 'Part',
        label: 'Part',
    },
]

const resPretreatment = (res: { data: ResData }) => {
    const data = res.data
    if (!data) return []
    const returnData: {
        name: string
        detail: string
        detailName: string
        Part: string
        PartName: string
    }[] = []
    data.detail.forEach((item, index) => {
        returnData.push({
            name: data.name,
            detailName: item.name,
            detail: item.value,
            PartName: data.Part[index].name,
            Part: data.Part[index].value
        })
    })
    return returnData
}
</script>
