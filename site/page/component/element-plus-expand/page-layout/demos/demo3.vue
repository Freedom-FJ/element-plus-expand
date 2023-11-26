<template>
    <div class="container">
        <FpiElPageLayout
            title="这是一个标题"
        >
            <template #header-left>
                <span style="color: #fff;">头部左侧插槽</span>
            </template>
            <template #header-right>
                <span style="color: #fff;">头部右侧插槽</span>
            </template>
            <div style="height: 14px;font-size: 14px;line-height: 14px;">
                内容区域1
            </div>
        </FpiElPageLayout>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container {
    width: 100%;
    height: 600px;
}
</style>
