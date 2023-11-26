<template>
    <div style="width: 100%;height: 10px;">
        <FpiElGridProgressBar
            :value="55.7"
            check-color="#F84439"
            default-box-back="rgba(0, 0, 0, 0.1)"
            check-box-back="rgba(0, 0, 0, 0.1)"
            :grid-rotate="25"
            :grid-width="3"
            linear-start-color="#06F7A1"
            linear-end-color="#00DDFF"
            :grid-mid="2"
        />
    </div>
</template>

<script setup lang="ts">
import { FpiElGridProgressBar } from '@element-plus-expand/components'
</script>

