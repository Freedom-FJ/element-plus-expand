<!--
 * @Author: mjh
 * @Date: 2023-08-22 16:01:55
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 09:11:57
 * @Description:
-->
<template>
    <div class="container">
        <FpiElPageLayout
            v-model:tab="tab"
            title="这是一个标题"
            :show-back="showBack"
            :show-tabs="showTabs"
            :tabs="tabs"
            @back="onBack"
        >
            <div v-show="tab === '1'" style="height: 14px;font-size: 14px;line-height: 14px;">
                内容区域1
            </div>
            <div v-show="tab === '2'" style="height: 14px;font-size: 14px;line-height: 14px;">
                内容区域2
            </div>
        </FpiElPageLayout>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const showBack = true
const onBack = () => {
    alert('back')
}
const showTabs = true
const tabs = [{ name: 'tab页面1', code: '1' }, { name: 'tab页面2', code: '2' }]
const tab = ref('1')
</script>

<style scoped>
.container {
    width: 100%;
    height: 600px;
}
</style>
