<!--
 * @Author: mjh
 * @Date: 2023-04-13 12:19:32
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-13 12:25:11
 * @Description:
-->
<template>
    <div />
</template>

<script lang="ts" setup>
import { watch } from 'vue'
import { useElementStore } from '../../store/element'
const elementStore = useElementStore()
console.log('object')
watch(() => elementStore.getUrl, (val) => {
    console.log(val, 'vv=change')
})
</script>
