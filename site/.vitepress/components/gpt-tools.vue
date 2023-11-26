<template>
    <div class="right-gpt" :class="showDetail ? 'none-size' : ''">
        <ElTooltip content="问一问 GPT 吧 ！" placement="left" @click="checkShowDetail()">
            <img class="gpt-logo" src="/images/gpt.png" alt="" @click="checkShowDetail()">
        </ElTooltip>
    </div>

    <div :id="id" :class="showDetail ? 'iframe-box' : 'hidden-iframe none-size iframe-box'">
        <div ref="iframeDom" v-loading="iframeLoading" :class="isShortChart ? 'short-box' : 'hidden-box'">
            <!-- <iframe class="iframe-center" :src="iframeUrl" frameBorder="0" /> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElTooltip, vLoading } from 'element-plus'
import { onMounted, onUnmounted, ref } from 'vue'
const isShortChart = document.body.clientWidth < 1000
const iframeUrl = ref()
let listenerList: any[] = []
const id = ref(`optionList${Math.floor(Math.random() * 100000)}`)
onMounted(() => {
    iframeUrl.value = isShortChart ? 'http://43.135.46.7/gpt/index.html#/MobileChat' : 'http://43.135.46.7/gpt/#/ChatHome'
    const clickListener = document.addEventListener('click', (e) => {
        const pop = document.getElementById(id.value)
        if (showDetail.value && pop && !iframeLoading.value) {
            if (!pop.contains(e.target as Node)) {
                setTimeout(() => {
                    showDetail.value = false
                    iframeLoading.value = true
                    loading()
                })
            }
        }
    })
    const keyupListener = document.addEventListener('keyup', (e) => {
        if (e.key === 'Escape' || e.key === 'Esc') {
            showDetail.value = false
            loading()
        }
    })
    listenerList.push(keyupListener)
    listenerList.push(clickListener)
})
onUnmounted(() => {
    listenerList.forEach(listener => listener && listener.removeEventListener())
    listenerList = []
})

const showDetail = ref(false)
const checkShowDetail = () => {
    window.open('https://saas.open.fpi-inc.site/saas-open-control-web/#/ai/Dialog')
    // showDetail.value = true
    // loading()
}
const loading = () => {
    iframeLoading.value = true
    setTimeout(() => {
        iframeLoading.value = false
    }, 500)
}
const iframeDom = ref<HTMLElement>()
const iframeLoading = ref(false)
</script>

<style scoped lang="scss">
.right-gpt {
    position: fixed;
    top: 50%;
    right: 0;
    z-index: 200;
    width: 45px;
    height: 45px;
    overflow: hidden;
    border-radius: 50%;
    transition: 0.3s all;
    transform: translate(50%, -50%);

    .gpt-logo {
        cursor: pointer;
    }
}

.right-gpt:hover {
    transform: translate(0%, -50%);
}

.none-size {
    left: 100% !important;
    width: 0 !important;
    height: 0 !important;
    overflow: hidden;
}

.iframe-box {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 200;
    width: 80vw;
    height: 80vh;
    overflow: hidden;
    background: #272a37;
    border-radius: 10px;
    transition: all 0.5s;
    transform: translate(-50%, -50%);

    .hidden-box {
        width: 110%;
        height: 110%;
        transform: translate(-5%, -5%);
    }

    .short-box {
        width: 100%;
        height: 100%;
    }

    .iframe-center {
        width: 100%;
        height: 100%;
    }
}
</style>
