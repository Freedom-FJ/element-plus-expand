<template>
    <div class="rolling-test">
        <FpiElRolling direction="x" :time="10">
            <div class="model-box">
                <div v-for="item, index in list" :key="index" class="model">
                    {{ item }}
                </div>
            </div>
        </FpiElRolling>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const list = [1, 2, 3, 4, 5, 6, 7, 8]
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
