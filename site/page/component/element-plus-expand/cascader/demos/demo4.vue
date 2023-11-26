<!--
 * @Author: mjh
 * @Date: 2023-08-18 14:04:49
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 10:58:55
 * @Description:
-->
<template>
    <div style="height: 300px;">
        <div style="width: 140px;height: 30px;">
            <fpi-el-cascader-tab-select
                ref="areaCascaderRef"
                v-model="cascaderObj.currentNode"
                v-model:current-type="cascaderObj.currentType"
                :text-holder="cascaderObj.textHolder"
                :type-list="cascaderObj.typeList"
                @handle-change-node="handleChangeNode"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const cascaderObj = reactive({
    typeList: [
        {
            label: '区域',
            key: 'area',
            options: [
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
            ]
        },
        {
            label: '流域',
            key: 'valley',
            options: [
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
    ],
    textHolder: '123',
    currentType: 'area',
    currentNode: 3301,
    copyList: [] as any
})
const handleChangeNode = (curNode: any) => {
    console.log(curNode, 'handleChangeNode')
    cascaderObj.textHolder = curNode.label
}
</script>
