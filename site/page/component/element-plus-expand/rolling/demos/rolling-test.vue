<!--
 * @Author: mjh
 * @Date: 2023-05-10 20:05:26
 * @LastEditors: mjh
 * @LastEditTime: 2023-05-16 14:15:13
 * @Description:
-->
<template>
    <div ref="rollingBoxBody" class="fpi-el-rolling-box" @mouseenter="mouseenter" @mouseleave="mouseleave" @mouseup="mouseup" @mousedown="mousedown" @dblclick="handleDblclick" @click="handleClick" @mousemove="mousemove">
        <div
            ref="rollingBody"
            class="fpi-el-rolling"
            :class="{ 'fpi-el-rolling-flex': direction === 'x' }"
            :style="{ animation: `${animationName} ${time}s linear infinite`, animationPlayState: isRolling ? 'running' : 'paused' }"
        >
            <slot />
            <slot v-if="!forcedStop" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

const props = defineProps({
    // 播放的方向
    direction: {
        type: String as PropType<'x' | 'y'>,
        default: 'x'
    },
    // 播放的开始和暂停
    modelValue: {
        type: Boolean,
        default: undefined
    },
    // 播放周期时间
    time: {
        type: Number,
        default: 10
    },
    // 开启拖拽控制动画
    dragControl: {
        type: Boolean,
        default: false
    },
    // 触发播放改变逻辑
    action: {
        type: String as PropType<'hover' | 'click' | 'dblclick' | 'none'>,
        default: 'hover'
    }
})

const emits = defineEmits(['update:modelValue', 'domChange', 'change'])
const rollingBody = ref()
const rollingBoxBody = ref()
const staticModelValue = ref(true)
let forcedStop = false // 是否强制无需滚动(当内容没有占满轮播显示空间时)
const animationName = `rollingsAnnualTasks${Math.floor(Math.random() * 10000)}` // 动画名称
let distance = 0 // 滚的距离
let hasAnimation = false // 当前是否含有动画
let observer: null | MutationObserver = null // dom 监听
let isStartDrag = false
let startPosition = 0

const isRolling = computed({
    get() {
        return props.modelValue === undefined ? staticModelValue.value : props.modelValue
    },
    set(val) {
        props.modelValue === undefined ? staticModelValue.value = val : emits('update:modelValue', val)
    }
})
watch(() => isRolling.value, (val) => {
    !hasAnimation && isRolling.value && controlAnimation()
    // rollingBody.value.style.animationPlayState = val ? 'running' : 'paused'
})

watch(() => props.time, () => {
    isRolling.value && controlAnimation()
})

onMounted(() => {
    controlAnimation()
    observer = new MutationObserver((MutationObserver) => {
        const dom = rollingBody.value
        const currDistance = (props.direction === 'x' ? dom.offsetWidth : dom.offsetHeight) / 2
        if (currDistance === distance) return
        emits('domChange', currDistance, MutationObserver)
        controlAnimation()
    })
    nextTick(() => {
        rollingBody.value && (observer as MutationObserver).observe(rollingBody.value, {
            attributes: true,
            childList: true,
            // attributeFilter: ['height'],
            characterData: true,
            subtree: true
        })
    })
})

onUnmounted(() => {
    clearAnimation()
    observer && observer.disconnect()
})

const controlAnimation = () => {
    const dom = rollingBody.value
    const domFather = rollingBoxBody.value
    if (!dom) return
    distance = (props.direction === 'x' ? dom.offsetWidth : dom.offsetHeight) / 2
    const fatherDistance = (props.direction === 'x' ? domFather.offsetWidth : domFather.offsetHeight)
    const style = clearAnimation()
    changeForcedStop(fatherDistance > distance)
    if (!isRolling.value) return
    if (forcedStop) {
        isRolling.value = false
        return
    }
    // dom.setAttribute('style', `animation: ${animationName} ${props.time}s linear  infinite; `)
    dom.style.animationPlayState = '' // 继续动画
    console.log(distance, 'distance')
    style.insertRule(`@keyframes ${animationName} {0%{ transform: translateX(0%);}100%{transform: translate${props.direction === 'x' ? 'X' : 'Y'}(-${distance}px);}}`, 0)
    hasAnimation = true
}
const clearAnimation = () => {
    const style = document.styleSheets[0]
    const styleArray: any[] = [].slice.call(style.cssRules) // 将伪数组变成数组
    const index = styleArray.findIndex(item => item.name === animationName)
    if (index !== -1) style.deleteRule(index) // 如果有此动画就先删除
    hasAnimation = false
    return style
}

const mouseenter = () => {
    if (forcedStop) return
    if (props.action === 'hover') {
        isRolling.value = false
        emits('change', false)
    }
}

const mouseleave = () => {
    // if (isStartDrag) {
    //     isStartDrag = false
    //     const dom = rollingBody.value
    //     dom.style.animationDirection = 'normal'
    //     dom.style.animationDuration = `${props.time}s`
    // }
    if (forcedStop) return
    if (props.action === 'hover') {
        isRolling.value = true
        emits('change', true)
    }
}
const handleClick = () => {
    if (props.action === 'click') {
        emits('change', !isRolling.value)
        isRolling.value = !isRolling.value
    }
}
const handleDblclick = () => {
    if (forcedStop) return
    if (props.action === 'dblclick') {
        emits('change', !isRolling.value)
        isRolling.value = !isRolling.value
    }
}

const mouseup = () => {
    // if (!isStartDrag) return
    // isStartDrag = false
    // const dom = rollingBody.value
    // dom.style.animationDirection = 'normal'
    // dom.style.animationDuration = `${props.time}s`
}

const mousedown = (e: MouseEvent) => {
    if (!forcedStop && props.dragControl) {
        isStartDrag = true
        startPosition = props.direction === 'x' ? e.clientX : e.clientY
    }
}
const mousemove = (e: MouseEvent) => {
    if (!isStartDrag) return
    const currPosition = props.direction === 'x' ? e.clientX : e.clientY
    const offset = currPosition - startPosition
    console.log(offset, 'ee')
    const dom = rollingBody.value
    dom.style.transform = `translateX(${offset}px)`
    dom.style.animationPlayState = '' // 继续动画
    if (offset > 0) {
        dom.style.animationDirection = 'reverse'
        dom.style.animationDuration = `${props.time / 2}s`
    }
    else {
        dom.style.animationDirection = 'normal'
        dom.style.animationDuration = `${props.time / 2}s`
    }
}
const changeForcedStop = (val: boolean) => {
    forcedStop = val
}
defineExpose({
    clearAnimation,
    controlAnimation,
    changeForcedStop
})
</script>

<script lang="ts">
export default {
    name: 'FpiElRolling'
}
</script>

<style lang="scss">
// @import url("./style/index.scss");
</style>
