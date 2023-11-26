<template>
    <fpi-map
        :to-fixed-num="8"
        @selected-map="getAddress"
    />
    <div>
        经纬度：{{ location }}
    </div>
    <div style="text-indent: 16px;">
        地址：{{ address }}
    </div>
    <div style="text-indent: 16px;">
        区号：{{ adcode }}
    </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
const state = reactive({
    position: [], // 经度 纬度
    address: '', // 地址
    adcode: '', // 区号
    location: '', // 经纬度
})
/**
 * 获取点击地图的位置
 * @param data
 */
function getAddress(data: { adcode: string; address: string; location: string }) {
    state.address = data.address
    state.adcode = data.adcode
    state.location = data.location
}
const { position, address, adcode, location } = toRefs(state)
</script>
