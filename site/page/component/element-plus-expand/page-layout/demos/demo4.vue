<!--
 * @Author: mjh
 * @Date: 2023-08-22 17:13:55
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 09:12:03
 * @Description:
-->
<template>
    <div class="container">
        <FpiElPageLayout title="这是一个标题" :columns="columns">
            <template #columnOne>
                <div style="height: 14px;font-size: 14px;line-height: 14px;">
                    内容区域1
                </div>
            </template>
            <template #columnTwo>
                <div style="height: 14px;font-size: 14px;line-height: 14px;">
                    内容区域2
                </div>
            </template>
            <template #columnThree>
                <div style="height: 14px;font-size: 14px;line-height: 14px;">
                    内容区域3
                </div>
            </template>
        </FpiElPageLayout>
    </div>
</template>

<script lang="ts" setup>
const columns = [
    {
        slotName: 'columnOne',
        defaultWidth: 100, // 可选 默认宽度200, 但是如果为数组的最后一列不生效
        maxWidth: 150, // 可选 默认不设置 但是如果为数组的最后一列不生效
        minWidth: 80, // 可选 默认不设置 但是如果为数组的最后一列不生效
        style: {}, // 可选 默认不设置
        class: '', // 可选 默认不设置
        hideBorder: false, // 可选 默认false 但是如果为数组的最后一列不生效
        disableDrag: false, // 可选 默认false 但是如果为数组的最后一列不生效
    },
    {
        slotName: 'columnTwo',
        defaultWidth: 200,
        minWidth: 150
    },
    {
        slotName: 'columnThree',
    }
]
</script>

<style scoped>
.container {
    width: 100%;
    height: 600px;
}
</style>
