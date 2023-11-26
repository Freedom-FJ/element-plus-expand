<!--
 * @Author: mjh
 * @Date: 2023-05-11 11:08:09
 * @LastEditors: mjh
 * @LastEditTime: 2023-05-25 15:11:14
 * @Description:
-->
<template>
    <div class="rolling-test">
        <FpiElRolling direction="y" :time="5">
            <div class="model-box">
                <div v-for="item, index in list" :key="index" class="model">
                    {{ item }}
                </div>
            </div>
        </FpiElRolling>
    </div>
</template>

<script lang="ts" setup>
const list = [1, 2, 3, 4, 5, 6, 7, 8]
</script>

<style lang="scss" scoped>
.rolling-test {
    width: 120px;
    height: 300px;
    margin: 0 auto;

    .model-box {
        padding: 0 10px;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100px;
            height: 100px;
            margin: 2px 0;
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
