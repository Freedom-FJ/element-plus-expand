<template>
    <div style="width: 100%;height: 10px;">
        <FpiElGridProgressBar
            :value="55.7"
            check-color="#F84439"
            background-color="rgba(0, 0, 0, 0.1)"
            :grid-width="2"
            :grid-mid="1"
        />
    </div>
</template>

<script setup lang="ts">
import { FpiElGridProgressBar } from '@element-plus-expand/components'
</script>

