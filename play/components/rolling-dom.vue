<!--
 * @Author: mjh
 * @Date: 2023-05-10 20:08:23
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-02 12:01:39
 * @Description:
-->
<template>
    <div class="text-box">
        <FpiElRolling v-model="isRollingX" action="dblclick" scroll-able direction="x">
            <div class="model-box" style="height: 100%;">
                <div v-for="item, index in list" :key="index" class="model" style="height: 100%;">
                    {{ item }}
                </div>
            </div>
        </FpiElRolling>
    </div>
    <div style="width: 200px;height: 300px;">
        <FpiElRolling v-model="isRollingY" scroll-able direction="y">
            <div style="width: 100%;">
                <div v-for="item, index in list" :key="index" class="model" style="width: 100%;">
                    {{ item }}
                </div>
            </div>
        </FpiElRolling>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// import { FpiElRolling } from '@element-plus-expand/components'
const isRollingX = ref(true)
const isRollingY = ref(true)

const list = ref([1, 2, 3, 4])
// const list = ref([1, 2, 3])
// setTimeout(() => {
//     // list.value = [1, 2, 3]
//     isRolling.value = false
// }, 3000)

// setTimeout(() => {
//     list.value = [1, 2, 3, 4]
// }, 6000)
</script>

<style scoped lang="scss">
.model-box {
    display: flex;
}

.model {
    box-sizing: border-box;
    flex: none;
    width: 100px;
    height: 100px;
    border: 1px solid red;
}

.text-box {
    width: 400px;
    height: 120px;
}
</style>
