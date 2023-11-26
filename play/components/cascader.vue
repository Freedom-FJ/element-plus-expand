<!--
 * @Author: mjh
 * @Date: 2023-08-18 14:04:49
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 11:17:20
 * @Description:
-->
<template>
    <div style="width: 140px;height: 30px;">
        <FpiElCascaderTabSelect
            ref="areaCascaderRef"
            v-model="cascaderObj.currentNode"
            has-background
            :options="cascaderObj.options"
            :current-type="cascaderObj.currentType"
            :type-list="cascaderObj.typeList"
            :text-holder="cascaderObj.textHolder"
            @handle-change-node="handleChangeNode"
            @handle-type-change="handleTypeChange"
            @handle-search-event="handleSearchEvent"
        />
    </div>
</template>

<script lang="ts" setup>
import { FpiElCascaderTabSelect } from '@element-plus-expand/components'
import { reactive } from 'vue'
import areaJSon from './area.json'
import valleyJSon from './valley.json'
const obj = {
    area: [areaJSon],
    valley: valleyJSon,
}
const cascaderObj = reactive({
    typeList: [
        { label: '区域', key: 'area' },
        { label: '流域', key: 'valley' }
    ],
    currentType: '',
    currentNode: 3301,
    options: [areaJSon] as Array<any>,
    textHolder: '',
    copyList: [] as any
})
cascaderObj.currentType = '区域'
const handleChangeNode = (curNode: any) => {
    console.log(curNode, 'handleChangeNode')
    // cascaderObj.currentNode = curNode.code
    // 更新文本
    // cascaderObj.textHolder = `${cascaderObj.currentType}：${curNode.label}`
}
const handleTypeChange = (type: string) => {
    console.log(type, 'handleTypeChange')
    cascaderObj.currentType = type
    const code = type === '区域' ? 'area' : 'valley'
    cascaderObj.options = obj[code]
}
// 搜索
const handleSearchEvent = (val: string) => {
    console.log(val, 'handleSearchEvent')
}
</script>
