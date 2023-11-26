<!--
 * @Author: mjh
 * @Date: 2023-08-18 14:04:49
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 10:58:57
 * @Description:
-->
<template>
    <div style="height: 300px;">
        <div style="width: 140px;height: 30px;">
            <fpi-el-cascader-tab-select
                ref="areaCascaderRef"
                v-model="cascaderObj.currentNode"
                v-model:current-type="cascaderObj.currentType"
                :type-list="cascaderObj.typeList"
                :options="cascaderObj.options"
                @handle-change-node="handleChangeNode"
                @handle-type-change="handleTypeChange"
                @handle-search-event="handleSearchEvent"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
const typeObj = {
    area: [
        {
            code: '330100000000',
            id: 3301,
            label: '杭州市',
            administrativeRankName: '地级',
            parentId: 33,
            children: [
                {
                    code: '330102000000',
                    id: 330102,
                    label: '上城区',
                    administrativeRankName: '县级',
                    parentId: 3301,
                    children: [
                        {
                            code: '3211',
                            id: 659037,
                            label: '小留镇',
                            parentId: 330102
                        },
                        {
                            code: '330102001000',
                            id: 659075,
                            label: '清波街道',
                            parentId: 330102,
                            administrativeRankCode: 4
                        }
                    ]
                }
            ]
        }
    ],
    valley: [
        {
            code: 'GA',
            id: 60601,
            label: '杭州水系',
            waterType: 'A',
            parentId: 6,
            children: [
                {
                    code: 'GAAK',
                    children: [
                        {
                            code: 'GAAA202',
                            children: [
                                {
                                    code: '20230606',
                                    id: 70707376,
                                    label: '20230606',
                                    waterType: 'A',
                                    parentId: 70707056
                                }
                            ],
                            id: 70707056,
                            label: '河段-2',
                            waterType: 'G',
                            parentId: 6060101
                        },
                        {
                            code: '20210518',
                            id: 70707329,
                            label: '测试20210518',
                            waterType: 'A',
                            parentId: 6060101
                        },
                    ],
                    id: 6060101,
                    label: '钱塘江',
                    waterType: 'B',
                    parentId: 60601
                }
            ]
        }
    ]
}
const cascaderObj = reactive({
    typeList: [
        { label: '区域', key: 'area' },
        { label: '流域', key: 'valley' }
    ],
    currentType: 'area',
    currentNode: 3301,
    options: typeObj.area as Array<any>
})
const handleChangeNode = (curNode: any) => {
    console.log(curNode, 'handleChangeNode')
}
const handleTypeChange = (type: string) => {
    console.log(type, 'handleTypeChange')
    cascaderObj.options = typeObj[type as keyof typeof typeObj]
}
// 搜索
const handleSearchEvent = (val: string) => {
    console.log(val, 'handleSearchEvent')
}
</script>
