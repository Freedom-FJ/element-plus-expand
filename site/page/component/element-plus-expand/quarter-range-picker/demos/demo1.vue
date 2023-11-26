<template>
    <div class="rolling-test">
        <FpiElQuarterRangePicker ref="refC" v-model="quarterDate" size="large" />
        <br>
        <h4>所选时间</h4>
        <div>{{ showData.start }}</div>
        <div>{{ showData.end }}</div>
        <h4>季度范围详情</h4>
        <div> {{ info }} </div>
    </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { computed, onMounted, ref, watch } from 'vue'


const quarterDate = ref([new Date(), new Date()])
const showData = computed(() => {
    return {
        start: dayjs(quarterDate.value[0]).format('YYYY-MM-DD HH:mm:ss'),
        end: dayjs(quarterDate.value[1]).format('YYYY-MM-DD HH:mm:ss')
    }
})
const info = ref('')
const refC = ref<any>(null)

watch(showData, () => {
    info.value = refC.value?.getQuarterInfoByDate(quarterDate.value)
})
onMounted(() => {
    info.value = refC.value?.getQuarterInfoByDate(quarterDate.value)
})
</script>
