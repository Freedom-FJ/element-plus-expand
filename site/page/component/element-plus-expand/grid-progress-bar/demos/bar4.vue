<template>
    <div style="width: 20px;height: 200px;margin: 0 auto;">
        <FpiElGridProgressBar
            :value="75.7"
            :grid-width="2"
            :grid-rotate="25"
            :grid-mid="1"
            base-line="y"
            check-color="#F84439"
        />
    </div>
</template>

<script setup lang="ts">
import { FpiElGridProgressBar } from '@element-plus-expand/components'
</script>

