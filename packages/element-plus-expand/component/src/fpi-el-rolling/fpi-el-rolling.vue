<!--
 * @Author: mjh
 * @Date: 2023-05-10 20:05:26
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-24 10:29:41
 * @Description:
-->
<template>
    <div ref="rollingBoxBody" class="fpi-el-rolling-box">
        <div
            :id="animationName"
            ref="rollingBody"
            class="fpi-el-rolling"
            :class="{ 'fpi-el-rolling-flex': direction === 'x' }"
            :style="{
                animation: `${animationName} ${time}s linear infinite`,
                animationPlayState: isRolling ? 'running' : 'paused',
                height: direction === 'x' ? '100%' : undefined,
                width: direction === 'y' ? '100%' : undefined,
            }"
            @mouseenter="mouseenter"
            @mousedown="onMouseDownBorder"
            @mouseleave="mouseleave"
            @dblclick="handleDblclick"
            @click="handleClick"
            @mousewheel="mousewheel"
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
    // 触发播放改变逻辑
    action: {
        type: String as PropType<'hover' | 'click' | 'dblclick' | 'none'>,
        default: 'hover'
    },
    // 是否可以鼠标滚动触发
    scrollAble: {
        type: Boolean,
        default: false
    },
    // 是否可以鼠标拖拽控制动画
    isDragControl: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(['update:modelValue', 'domChange', 'change'])
const rollingBody = ref()
const rollingBoxBody = ref()
const staticModelValue = ref(true)
const forcedStop = ref(false) // 是否强制无需滚动(当内容没有占满轮播显示空间时)
const animationName = `rollingsAnnualTasks${Math.floor(Math.random() * 100000)}` // 动画名称
let distance = 0 // 滚的距离
let hasAnimation = false // 当前是否含有动画
let observer: null | MutationObserver = null // dom 监听

const isRolling = computed({
    get() {
        return props.modelValue === undefined ? staticModelValue.value : props.modelValue
    },
    set(val) {
        props.modelValue === undefined ? staticModelValue.value = val : emits('update:modelValue', val)
    }
})
watch(() => isRolling.value, (val) => {
    !hasAnimation && val && controlAnimation()
})

watch(() => props.time, () => {
    isRolling.value && controlAnimation()
})

onMounted(() => {
    checkDistance()
    observer = new MutationObserver((MutationObserver) => {
        checkDistance(MutationObserver)
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

const checkDistance = (MutationObserver?: MutationRecord[]) => {
    const { fatherDistance, currDistance } = getDistance()
    if (currDistance === distance) return
    distance = currDistance
    MutationObserver && emits('domChange', currDistance, MutationObserver)
    if (!isRolling.value) return
    changeForcedStop(fatherDistance > currDistance)
}
const startAnimation = () => {
    isRolling.value = true
    controlAnimation()
}

const getDistance = () => {
    const dom = rollingBody.value
    const domFather = rollingBoxBody.value
    const currDistance = (props.direction === 'x' ? dom.offsetWidth : dom.offsetHeight) / (forcedStop.value ? 1 : 2)
    const fatherDistance = (props.direction === 'x' ? domFather.offsetWidth : domFather.offsetHeight)
    return { fatherDistance, currDistance }
}
const controlAnimation = () => {
    const dom = rollingBody.value
    if (!dom) return
    const { currDistance } = getDistance()
    distance = currDistance
    const style = clearAnimation()
    if (!isRolling.value || !style) return
    // dom.setAttribute('style', `animation: ${animationName} ${props.time}s linear  infinite; `)
    dom.style.animationPlayState = '' // 继续动画
    style.insertRule(`@keyframes ${animationName} {0%{ transform: translateX(0%);}100%{transform: translate${props.direction === 'x' ? 'X' : 'Y'}(-${distance}px);}}`, 0)
    hasAnimation = true
}
const clearAnimation = () => {
    const style = document.styleSheets[0]
    if (!style) return
    const styleArray: any[] = [].slice.call(style.cssRules) // 将伪数组变成数组
    const index = styleArray.findIndex(item => item.name === animationName)
    if (index !== -1) style.deleteRule(index) // 如果有此动画就先删除
    hasAnimation = false
    return style
}

const mousewheel = (e: any) => {
    if (!props.scrollAble || forcedStop.value) return
    e.preventDefault()
    let offset = props.direction === 'y' ? e.wheelDeltaY : e.wheelDeltaX
    const { fatherDistance } = getDistance()
    const currMaxDis = fatherDistance / 5 * 2
    offset = offset > currMaxDis ? currMaxDis : offset < -currMaxDis ? -currMaxDis : offset
    const element = document.getElementById(animationName)
    if (!element) return
    const animation = element.getAnimations()
    animation.forEach((item) => {
        const currTime = ((item.currentTime as number) || 0) - offset * 10
        item.currentTime = currTime < 0 ? props.time * 1000 + currTime : currTime
    })
}
const mouseenter = () => {
    if (forcedStop.value) return
    if (props.action === 'hover') {
        isRolling.value = false
        emits('change', false)
    }
}

const mouseleave = () => {
    if (forcedStop.value) return
    if (props.action === 'hover') {
        isRolling.value = true
        emits('change', true)
    }
}
const handleClick = () => {
    if (forcedStop.value) return
    if (props.action === 'click') {
        emits('change', !isRolling.value)
        isRolling.value = !isRolling.value
    }
}
const handleDblclick = () => {
    if (forcedStop.value) return
    if (props.action === 'dblclick') {
        emits('change', !isRolling.value)
        isRolling.value = !isRolling.value
    }
}

const changeForcedStop = (val: boolean) => {
    forcedStop.value = val
    if (forcedStop.value)
        clearAnimation()
    else controlAnimation()
    return forcedStop
}

/**
 * 鼠标按下边
 */
const onMouseDownBorder = (e: MouseEvent) => {
    if (!props.isDragControl || forcedStop.value) return
    const element = document.getElementById(animationName)
    if (!element) return
    const animation = element.getAnimations()
    const startDis = props.direction === 'y' ? e.clientY : e.clientX
    const { currDistance } = getDistance()
    const speed = currDistance / (props.time * 1000)
    let rememberDis: number | undefined
    const mouseMoveHander = (e: MouseEvent) => {
        const endDis = props.direction === 'y' ? e.clientY : e.clientX
        const distance = endDis - startDis
        animation.forEach((item) => {
            if (!rememberDis) rememberDis = (item.currentTime as number) || 0
            const currTime = rememberDis - (distance / speed)
            item.currentTime = currTime < 0 ? props.time * 1000 + currTime : currTime
        })
    }
    document.addEventListener('mousemove', mouseMoveHander)
    const mouseUpHander = (e: MouseEvent) => {
        document.removeEventListener('mousemove', mouseMoveHander)
        document.removeEventListener('mouseup', mouseUpHander)
    }
    document.addEventListener('mouseup', mouseUpHander)
}

defineExpose({
    clearAnimation,
    controlAnimation,
    changeForcedStop,
    startAnimation,
    animationName,
    isRolling,
    forcedStop
})
</script>

<script lang="ts">
export default {
    name: 'FpiElRolling'
}
</script>

<style lang="scss">
@import "./style/index";
</style>
