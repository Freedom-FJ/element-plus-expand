<!--
 * @Author: mjh
 * @Date: 2022-11-28 10:50:47
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-08 15:12:28
 * @Description:
-->
<template>
    <el-select v-model="select" placeholder="Select" style="width: 115px;">
        <el-option label="Restaurant" value="1" />
        <el-option label="Order No." value="2" />
        <el-option label="Tel" value="3" />
    </el-select>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const select = ref('')
</script>
