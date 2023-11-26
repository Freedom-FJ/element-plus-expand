<template>
    <div :class="`${clsRoot}-container`">
        <!-- header头部 -->
        <header :class="`${clsRoot}-header`">
            <div :class="`${clsRoot}-header-left`">
                <span class="header-text">{{ title }}</span>
                <ElButton v-if="showBack" class="reset-el-btn" style="margin-right: 10px;" :icon="ArrowLeft" @click="onBack">
                    返回
                </ElButton>
                <ElRadioGroup v-if="showTabs" v-model="innerTab" class="reset-el-radio" style="margin-right: 10px;">
                    <ElRadioButton v-for="item in tabs" :key="item.code" :label="item.code">
                        {{ item.name }}
                    </ElRadioButton>
                </ElRadioGroup>
                <slot name="header-left" />
            </div>
            <div :class="`${clsRoot}-header-right`">
                <slot name="header-right" />
            </div>
        </header>
        <div :class="`${clsRoot}-main`">
            <template v-if="hasColumns">
                <div :class="`${clsRoot}-main-columns`">
                    <template v-for="(item, index) in columns" :key="item.name">
                        <div
                            :class="{
                                [`${clsRoot}-column-item`]: true,
                                [`is-finally`]: index === columns.length - 1,
                                [`${item.class}`]: true,
                            }"
                            :style="{
                                ...item.style,
                                width: index < columns.length - 1 ? item.defaultWidth ? `${item.defaultWidth}px` : '200px' : undefined,
                            }"
                        >
                            <slot :name="item.slotName" />
                            <div
                                v-if="index < columns.length - 1 && !item.hideBorder"
                                class="drag-border" :class="{
                                    'disable-drag': item.disableDrag,
                                }"
                                @mousedown="onMouseDownBorder($event, item)"
                            />
                        </div>
                    </template>
                </div>
            </template>
            <div v-else :class="`${clsRoot}-main-default`">
                <slot name="default" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import { computed } from 'vue'
import { ArrowLeft } from '@element-plus/icons-vue'
import { ElButton, ElRadioButton, ElRadioGroup } from 'element-plus'
/**
 * props定义
 */
const props = withDefaults(defineProps<{
    title?: string
    showBack?: boolean
    showTabs?: boolean
    tab?: string
    tabs?: {
        name: string
        code: string
    }[]
    columns?: {
        slotName: string
        defaultWidth?: number // 默认200
        maxWidth?: number // 默认不设置
        minWidth?: number // 默认不设置
        style?: CSSProperties
        class?: string
        hideBorder?: boolean
        disableDrag?: boolean
    }[]
}>(), {
    title: 'test',
    showBack: false,
    showTabs: false,
    tabs: () => [],
    columns: () => []
})

/**
 * 定义事件
 */
const emit = defineEmits(['update:tab', 'back'])

const clsRoot = 'fpi-el-page-layout'

// 是否定义多列
const hasColumns = computed(() => props.columns && props.columns.length)
// 选择的tab
const innerTab = computed({
    get() {
        return props.tab
    },
    set(v) {
        emit('update:tab', v)
    }
})

/**
 * 鼠标按下边
 */
const onMouseDownBorder = (e: any, item: any) => {
    if (item.disableDrag) {
        return
    }
    const startX = e.clientX
    const ele: HTMLDivElement = e.target.offsetParent
    const eleInfo = ele.getBoundingClientRect()
    const mouseMoveHander = (e: MouseEvent) => {
        const endX = e.clientX
        const distance = endX - startX
        let width = eleInfo.width + distance
        if (item.maxWidth && width > item.maxWidth) {
            width = item.maxWidth
        }
        if (item.minWidth && width < item.minWidth) {
            width = item.minWidth
        }
        ele.style.width = `${width}px`
    }
    document.addEventListener('mousemove', mouseMoveHander)
    const mouseUpHander = (e: MouseEvent) => {
        document.removeEventListener('mousemove', mouseMoveHander)
        document.removeEventListener('mouseup', mouseUpHander)
    }
    document.addEventListener('mouseup', mouseUpHander)
}

/**
 * 点击返回
 */
const onBack = () => emit('back')
</script>

<script lang="ts">
export default {
    name: 'FpiElPageLayout'
}
</script>

<style lang="scss">
@import "./style/index";
</style>
