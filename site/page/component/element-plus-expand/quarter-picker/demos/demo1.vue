<template>
    <div class="rolling-test">
        <FpiElQuarterPicker ref="refC" v-model="quarterDate" @change="onChange" />
        <br>
        <br>
        <FpiElQuarterPicker v-model="quarterDate" size="large" @change="onChange" />
        <br>
        <br>
        <FpiElQuarterPicker v-model="quarterDate" size="small" @change="onChange" />
        <br>
        <br>
        <h4>所选时间</h4>
        <div>{{ showData }}</div>
        <h4>季度详情</h4>
        <div> {{ info }} </div>
    </div>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs'
import { computed, onMounted, ref } from 'vue'
const quarterDate = ref(new Date())
const info = ref('')

const refC = ref<any>(null)

const showData = computed(() => {
    return dayjs(quarterDate.value).format('YYYY-MM-DD HH:mm:ss')
})
const onChange = (date: Date | null, detail: any) => {
    info.value = JSON.stringify(detail)
}
onMounted(() => {
    info.value = JSON.stringify(refC.value?.transformQuarterInfoByDate(quarterDate.value))
})
</script>
