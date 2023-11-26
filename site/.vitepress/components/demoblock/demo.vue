<template>
    <div class="demo">
        <div v-if="author" class="author-box">
            <span>贡献者：</span>
            <span :class="authorLink ? 'author-link' : ''" @click="checkAuthor(authorLink)">{{ author }}</span>
        </div>
        <!-- 组件展示 -->
        <div class="demo-slot">
            <div v-if="iframe" ref="slotWrapper" v-loading="iframeLoading">
                <iframe src="/fpi-component/demo/iframe.html?iframeDom" frameBorder="0" :height="iframeHeight" :width="iframeWidth" />
            </div>
            <slot v-else-if="hasSlot" />
            <component :is="demoSlot" v-else-if="codePath" />
            <div v-else v-html="decodedCodeStr" />
        </div>
        <!-- 代码展示 -->
        <div :class="isExpanded ? 'show-code-box' : '' " class="demo-show">
            <!-- 描述 -->
            <div v-show="decodedDesc" class="demo-show_desc" v-html="decodedDesc" />
            <!-- 复制 -->
            <div class="demo-show-copy" @click.stop="onCopy" />
            <!-- 代码 -->
            <div
                class="demo-show-code" :class="[`language-${language}`]"
                v-html="decodedHtmlStr"
            />
        </div>

        <!-- 按钮控制 -->
        <div :class="`demo-control ${isExpanded ? 'hide-code-btn' : ''}` " @click="onClickControl">
            <i class="demo-control-icon" :class="[isExpanded ? 'demo-control-icon_up' : 'demo-control-icon_down']" />
            <span class="demo-control-tip">{{
                isExpanded ? "隐藏代码" : "显示代码"
            }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, createApp, defineAsyncComponent, markRaw, nextTick, onMounted, ref, shallowRef, useSlots, watch } from 'vue'
import elementPlusExpand from '@element-plus-expand/components'
import ElementPlus from 'element-plus'
import { useData } from 'vitepress'
import { copyFun } from './utils'
const props = defineProps({
    codeStr: String,
    htmlStr: String,
    description: String,
    iframe: Boolean,
    src: String,
    iframeHeight: {
        type: String,
        default: '370px'
    },
    iframeWidth: {
        type: String,
        default: '100%'
    },
    codePath: String,
    language: { default: 'vue', type: String },
    author: { default: '', type: String },
    authorLink: { default: '', type: String },
},)
// @ts-expect-error: Unreachable code error
const modules = import.meta.glob('../../../**/*.vue')
const newModel = Object.keys(modules).reduce((pre, cur) => {
    pre[cur.replace('../../../', '')] = modules[cur]
    return pre
}, {})

const { isDark } = useData()

watch(() => isDark.value, () => {
    checkDark()
})

const slotWrapper = ref<HTMLElement>()
const { codePath, codeStr, htmlStr, description, iframe } = props
const slots = useSlots()
const hasSlot = computed(() => (!!slots?.default))
const decodedCodeStr = computed(() => decodeURIComponent(codeStr ?? ''))
const decodedHtmlStr = computed(() => decodeURIComponent(htmlStr ?? ''))
const decodedDesc = computed(() => decodeURIComponent(description ?? ''))
const currCodePath = codePath?.replace('../../../', '').replace('../../', '')
const iframeLoading = ref(true)
let htmlDom: HTMLHtmlElement | null = null
const renderIframe = () => {
    if (!iframe || !demoSlot.value) return
    const iframeDom = slotWrapper.value?.querySelector('iframe')
    if (!iframeDom) return
    const dom = createApp(demoSlot.value).use(ElementPlus as any).use(elementPlusExpand as any)
    if ((iframeDom as any).attachEvent) {
        (iframeDom as any).attachEvent('onload', () => {
            initFrameDom(iframeDom, dom)
        })
    }
    else {
        iframeDom.onload = () => {
            initFrameDom(iframeDom, dom)
        }
    }
}

const checkDark = () => {
    if (!htmlDom) return
    if (isDark.value) {
        htmlDom.classList.add('dark')
    }
    else {
        htmlDom.classList.remove('dark')
        htmlDom.classList.add('auto')
    }
}

const initFrameDom = (iframeDom, dom) => {
    const frameDocument = iframeDom.contentWindow?.document
    if (!frameDocument) return
    htmlDom = frameDocument.querySelector('html')
    checkDark()
    const app = frameDocument.getElementById('app')
    if (!app) return
    dom.mount(app).$el
    iframeLoading.value = false
}
// 注册演示组件
const demoSlot
            = shallowRef()
onMounted(() => {
    demoSlot.value = currCodePath && newModel[currCodePath] ? markRaw(defineAsyncComponent(newModel[currCodePath])) : null
    nextTick(() => {
        renderIframe()
    })
})
// 展开or收起代码
const isExpanded = ref(false)
const onClickControl = () => {
    isExpanded.value = !isExpanded.value
}
// 复制代码
const onCopy = async (e) => {
    copyFun(decodedCodeStr.value, e)
}

const checkAuthor = (authorLink: string) => {
    authorLink && window.open(authorLink)
}
</script>

<style scoped lang="scss">
.demo {
    margin: 10px 0;
    border: solid 1px var(--vp-c-divider-light);
    border-radius: 3px;
    transition: 0.2s;

    &:hover {
        box-shadow: var(--vp-shadow-2);

        .demo-control {
            color: var(--vp-c-brand);
            background-color: var(--vp-c-bg);
        }

        .demo-control-icon {
            transform: translateX(-40px);
        }

        .bg-c {
            background-color: var(--vp-c-bg);
        }

        .demo-control-tip {
            opacity: 1;
            transform: translateX(-30px);
        }
    }
}

.demo-slot {
    box-sizing: border-box;
    padding: 24px;
    overflow: auto;
    transition: 0.2s;
}

.demo-flex {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    align-items: center;
}

.demo-show {
    position: relative;
    max-height: 0;
    overflow: hidden;
    background-color: var(--vp-code-block-bg);
    border-top: solid 1px var(--vp-c-divider-light);
    transition: all 0.5s;
}

.demo-show_desc {
    box-sizing: border-box;
    padding: 20px;
    margin: 10px 10px 6px;
    line-height: 26px;
    color: var(--vp-c-text-2);
    word-break: break-word;
    background-color: var(--vp-c-bg-soft);
    border: solid 1px var(--vp-c-divider-light);
    border-radius: 3px;
}

.demo-show-code {
    margin-bottom: 0 !important;
}

.demo-show-copy {
    position: absolute;
    right: 8px;
    z-index: 2;
    display: block;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: var(--vp-code-block-bg);
    background-image: var(--vp-icon-copy);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 20px;
    border-radius: 4px;
    transition: opacity 0.25s;
}

.demo-show-copied {
    background-color: var(--vp-code-copy-code-hover-bg);
    background-image: var(--vp-icon-copied);
    border-radius: 0 4px 4px 0;
}

.demo-show-copied::before {
    position: relative;
    left: -65px;
    display: block;
    width: 64px;
    height: 40px;
    padding-top: 8px;
    font-size: 12px;
    font-weight: 500;
    color: var(--vp-code-copy-code-active-text);
    text-align: center;
    white-space: nowrap;
    content: "Copied";
    background-color: var(--vp-code-copy-code-hover-bg);
    border-radius: 4px 0 0 4px;
}

.demo-show pre {
    padding: 1.25rem 1.5rem;
    margin: 0;
    background-color: inherit !important;
}

.demo-control {
    position: relative;
    box-sizing: border-box;
    height: 44px;
    color: var(--vp-c-gray-light-2);
    text-align: center;
    cursor: pointer;
    border-top: 1px solid var(--vp-c-divider-light);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
}

.demo-control-icon {
    position: absolute;
    top: 50%;
    display: inline-block;
    font-size: 16px;
    transition: 0.3s;
}

.demo-control-icon_up::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    margin-top: -8.5px;
    margin-left: -6px;
    content: "";
    border: 6px solid transparent;
    border-bottom: 7px solid;
}

.demo-control-icon_down::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    margin-top: -2px;
    margin-left: -6px;
    content: "";
    border: 6px solid transparent;
    border-top: 7.5px solid;
}

.demo-control-tip {
    position: absolute;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    line-height: 44px;
    opacity: 0;
    transition: all 0.3s;
    transform: translateX(10px);
}

.hide-code-btn {
    position: sticky;
    bottom: 0;
    z-index: 10;
}

.show-code-box {
    max-height: 4000px;
    overflow: none;
}

.author-box {
    padding: 18px 25px 0 0;
    margin-bottom: -2px;
    font-size: 16px;
    font-weight: bold;
    line-height: 4px;
    color: var(--vp-c-text-2);
    text-align: right;
}

.author-link {
    color: #007fff;
    cursor: pointer;
}
</style>
