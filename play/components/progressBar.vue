<!--
 * @Author: mjh
 * @Date: 2023-06-FpiElQuarterPicker 11:17:51
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-25 20:13:37
 * @Description:
-->
<template>
    <div style="width: 400px;height: 100px;">
        <FpiElGridProgressBar :value="55.7" check-color="#F84439" default-box-back="rgba(255, 255, 255, 0.1)" base-line="x" :grid-width="2" :grid-mid="1" />
    </div>
</template>

<script setup lang="ts">
import { FpiElGridProgressBar } from '@element-plus-expand/components'
</script>

<style scoped>
.text-box {
    padding-left: 200px;
    margin: 20px;
}
</style>

