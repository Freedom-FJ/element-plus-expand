<template>
    <div>
        <FpiElCronTab v-model="value" />
        <br>
        <h4>值</h4>
        <div>{{ value }}</div>
        <hr />
        <hr />
        <hr />
        <FpiElCronTab v-model="value2" :hideComponent="hideComponent" :showResult="showResult" />
        <br>
        <h4>值</h4>
        <div>{{ value }}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('* * * * * ?') // 内部默认为此值, 无值时设置为此值

const hideComponent = ['second', 'min']
const showResult = false
const value2 = ref('* * * * * ?') // 内部默认为此值，无值时设置为此值
</script>
