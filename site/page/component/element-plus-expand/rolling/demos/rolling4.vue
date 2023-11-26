<!--
 * @Author: mjh
 * @Date: 2023-05-11 11:22:40
 * @LastEditors: mjh
 * @LastEditTime: 2023-05-17 10:28:10
 * @Description:
-->
<template>
    <div class="rolling-test">
        <FpiElRolling ref="rollingDom">
            <div class="model-box">
                <div v-for="item, index in list" :key="index" class="model">
                    {{ item }}
                </div>
            </div>
        </FpiElRolling>
    </div>
    <ElButton @click="updateList()">
        点击改变列表
    </ElButton>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
const rollingDom = ref()
const updateList = () => {
    list.value = list.value.length === 3 ? [1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3]
}
</script>

<style lang="scss" scoped>
.rolling-test {
    width: 100%;
    height: 120px;

    .model-box {
        display: flex;
        height: 120px;
        padding: 10px 0;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 100%;
            margin: 0 2px;
            color: white;
            cursor: pointer;
            background-color: var(--el-color-primary-light-3);
            transition: all 0.5s;
        }

        div:hover {
            box-shadow: 0 0 10px 5px #67b3dd;
            transform: scale(1.1);
        }
    }
}
</style>
