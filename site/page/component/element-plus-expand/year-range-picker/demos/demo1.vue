<template>
    <div class="rolling-test">
        <FpiElYearRangePicker v-model="date" size="large" />
        <br>
        <h4>所选时间</h4>
        <div>{{ showData.start }}</div>
        <div>{{ showData.end }}</div>
    </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { computed, ref } from 'vue'


const date = ref([new Date(), new Date()])
const showData = computed(() => {
    return {
        start: date.value[0] ? dayjs(date.value[0]).format('YYYY') : '',
        end: date.value[1] ? dayjs(date.value[1]).format('YYYY') : ''
    }
})
</script>
