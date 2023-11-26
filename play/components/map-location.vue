<template>
    <fpi-map-location
        v-model="form.position"
        :to-fixed-num="6"
        @get-address="getAddress"
    />
</template>

<script setup lang="ts">
import { reactive, toRefs, watch } from 'vue'
const $emit = defineEmits(['change'])
const state = reactive({
    form: {
        position: [120.172332, 30.175451], // 经度 纬度
        // position: [], // 经度 纬度
        address: ''
    }
})
/**
 * 获取点击地图的位置
 * @param address
 */
function getAddress(address: any) {
    state.form.address = address
    $emit('change', address)
}
const { form } = toRefs(state)
</script>
