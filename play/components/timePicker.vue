<!--
 * @Author: mjh
 * @Date: 2023-06-FpiElQuarterPicker 11:17:51
 * @LastEditors: mjh
 * @LastEditTime: 2023-06-16 14:12:53
 * @Description:
-->
<template>
    <div class="text-box">
        <FpiElQuarterPicker v-model="value" @change="onChange" />
        <br />
        <br />
        <br />
        <FpiElQuarterRangePicker v-model="value2" />
        <br />
        <br />
        <br />
        <FpiElYearRangePicker v-model="value3" />
        <br />
        <br />
        <br />
        <FpiElCronTab v-model="value4" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FpiElQuarterRangePicker, FpiElQuarterPicker, FpiElCronTab, FpiElYearRangePicker } from '@element-plus-expand/components'

const value = ref(new Date('2021-08'))
const onChange = (date: Date | null, detail: any) => {
    console.log(date, detail)
}

const value2 = ref([new Date('2021-09'), new Date('2022-12')])


const value3 = ref([new Date('2021-09'), new Date('2022-12')])

const value4 = ref('* * * * * ?') //
</script>

<style scoped>
.text-box {
    padding-left: 200px;
    margin: 20px;
}
</style>

