<template>
    <fpi-map-location
        v-model="form.position"
        :to-fixed-num="8"
        @get-address="getAddress"
    />
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
const state = reactive({
    form: {
        // position: [120.172332, 30.175451], // 纬度 经度
        position: [], // 纬度 经度
        address: ''
    }
})
/**
 * 获取点击地图的位置
 * @param address
 */
function getAddress(address: any) {
    state.form.address = address
}
const { form } = toRefs(state)
</script>
