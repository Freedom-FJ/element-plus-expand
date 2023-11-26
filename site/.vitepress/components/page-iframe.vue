<!--
 * @Author: mjh
 * @Date: 2023-04-17 10:20:45
 * @LastEditors: mjh
 * @LastEditTime: 2023-05-07 23:31:03
 * @Description:
-->
<template>
    <div class="iframe-box">
        <div ref="iframeDom" v-loading="iframeLoading" :style="`width: 100%; height: calc(100% - ${top}); margin: ${top} 0 0;`">
            <iframe class="iframe-center" :src="src" frameBorder="0" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
const props = defineProps({
    src: {
        type: String,
        default: ''
    },
    top: {
        type: String,
        default: '-60px'
    },
    wait: {
        type: String,
        default: '5'
    }
})

const iframeDom = ref<HTMLElement>()
const iframeLoading = ref(true)
let footer: Element[] | null = null
let home: Element[] | null = null
onMounted(() => {
    renderIframe()
    renderDomStyle()
})
onUnmounted(() => {
    (footer as Element[]).forEach((element) => {
        element.classList.remove('display-none')
    });

    (home as Element[]).forEach((element) => {
        element.classList.remove('iframe-home')
    })
})

const renderDomStyle = () => {
    const currFooter = document.getElementsByClassName('VPFooter')
    footer = [...currFooter];
    (footer as Element[]).forEach((element) => {
        element.classList.add('display-none')
    })

    const currHome = document.getElementsByClassName('VPHome')
    home = [...currHome];
    (home as Element[]).forEach((element) => {
        element.classList.add('iframe-home')
    })
}
const renderIframe = () => {
    const iframe = iframeDom.value?.querySelector('iframe')
    if (!iframe) return
    // 处理兼容行问题
    if ((iframe as any).attachEvent) {
        (iframe as any).attachEvent('onload', () => {
            iframeLoading.value = false
        })
    }
    else {
        iframe.onload = () => {
            iframeLoading.value = false
        }
    }
}
setTimeout(() => {
    iframeLoading.value = false
}, Number(props.wait) * 1000)
</script>

<style>
.display-none {
    display: none;
}

.iframe-home {
    padding-bottom: 0 !important;
}

.iframe-box {
    width: 100%;
    height: calc(100vh - var(--vp-nav-height));
    overflow: hidden;
    border: 0;
}

.iframe-center {
    width: 100%;
    height: 100%;
}
</style>
