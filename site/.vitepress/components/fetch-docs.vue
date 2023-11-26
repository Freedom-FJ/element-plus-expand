<!--
 * @Author: mjh
 * @Date: 2023-07-10 12:31:57
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-13 10:28:07
 * @Description:
-->
<template>
    <div class="fetch-docs">
        <div class="screen" :class="{ dark: isDark }" v-html="docs" />
    </div>
</template>

<script setup  lang="ts">
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import { createApp, defineProps, nextTick, onMounted, ref } from 'vue'
import { useData } from 'vitepress'
import ContributorView from './contributor-view.vue'
import { copyFun } from './demoblock/utils'
const props = defineProps({
    src: {
        type: String
    }
})
let propList = {
    ContributorView,
}
// 创建 MarkdownIt 实例
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight(str, lang) {
        // 得到经过highlight.js之后的html代码
        const code = hljs.highlight(lang === 'vue' ? 'html' : lang, str, true).value
        return code
    },
})
const { isDark } = useData()

replaceContributorView(md)
let domList: any[] = []
const docs = ref('')
onMounted(async () => {
    props.src && fetch(props.src)
        .then(response => response.text())
        .then(async (text) => {
            domList = []
            const components = await import('@ued_fpi/data-visual')
            propList = { ...propList, ...components }
            docs.value = md.render(text)
            nextTick(() => renderDom())
        })
})
// 定义插件函数
function replaceContributorView(md) {
    // 获取原始的 render 方法
    const defaultRender = md.renderer.rules.fence || ((tokens, idx, options, env, self) => {
        return self.renderToken(tokens, idx, options)
    })

    // 重写 render 方法以替换 ContributorView
    md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const content = token.content.trim()
        const domObj = parseComponentString(content)
        const dom = domObj ? propList[domObj.name] : undefined
        if (domObj && dom) {
            const id = domObj.name + Math.floor(Math.random() * 10000)
            domList.push({
                id,
                dom,
                content,
                ...domObj
            })
            const htmlCodeStr = domObj?.name !== 'ContributorView' ? defaultRender(tokens, idx, options, env, self) : '' // demo的html字符串
            const endIndex = htmlCodeStr ? htmlCodeStr.indexOf('</code></pre>') : 0
            return `<div id="${id}"></div> ${htmlCodeStr.slice(0, endIndex)}${htmlCodeStr ? `<div class="demo-show-copy" id="${id}-copy"></div>` : ''}${htmlCodeStr.slice(endIndex)}`
        }
        // 调用默认的 render 方法
        return defaultRender(tokens, idx, options, env, self)
    }
}

function parseComponentString(componentString) {
    const regex = /<(\w+)([^>]*)\/?>/
    const match = componentString.match(regex)

    if (match && match.length === 3) {
        const componentName = match[1]
        const attributeString = match[2].trim().replaceAll('\n', '').replace(/\s*/g, '')
        const attributes = {}
        if (attributeString.length > 0) {
            // const attributeRegex = /(\w+)\s*=\s*(?:"([^"]*)"|'([^']*)')/g
            const attributeRegex = /([^=\s]+)="([^"]+)"/g
            let attrMatch

            while ((attrMatch = attributeRegex.exec(attributeString))) {
                const [, name, value] = attrMatch
                attributes[name.replace(':', '').replace('""', '')] = name.startsWith(':') ? convertValue(value) : value
            }
        }
        return {
            name: componentName,
            prop: attributes
        }
    }

    return null
}

const renderDom = () => {
    domList.forEach((item) => {
        try {
            const { name, dom, id, prop, content } = item
            const app = createApp(dom, prop)
            const container = document.getElementById(id)
            if (!container) return
            if (name !== 'ContributorView' && dom) {
                dom.name = name
                // container.style.backgroundColor = '#05213d'
                container.style.width = 'fit-content'
                container.style.padding = '10px'
                container.style.borderRadius = '4px'
                if (name.includes('Aims')) container.style.minWidth = '400px'
                if (name.includes('Ipes')) {
                    container.style.minWidth = '400px'
                    container.classList.add('ipes-pane')
                }
            }
            app.mount(container)
            document.querySelector(`#${id}-copy`)?.addEventListener('click', (e) => {
                copyFun(content, e)
            })
        }
        catch (error) {
            console.error(error)
        }
    })
}

// 辅助函数，将字符串值转换为对应的类型
function convertValue(value) {
    // 尝试解析为布尔值
    if (value.toLowerCase() === 'true')
        return true
    else if (value.toLowerCase() === 'false')
        return false
    // 尝试解析为数组
    if (value.startsWith('[') || value.startsWith('{')) {
        try {
            const correctedJsonString = value.replace(/(['"])?([a-z0-9A-Z_]+)(['"])?:/g, '"$2": ').replaceAll(',}', '}').replaceAll(',]', ']')
            const validJsonString = correctedJsonString.replace(/'/g, '"')
            return JSON.parse(validJsonString)
        }
        catch (error) {
            console.log(error, 'error')
            // 解析失败，返回原始字符串
            return value
        }
    }

    // 默认返回字符串类型
    return Number(value)
}
</script>

<style lang="scss">
@import "/font/font.css";
@import "@ued_fpi/data-visual/style/base.css";

.fetch-docs {
    /* stylelint-disable-next-line no-invalid-position-at-import-rule */
    @import "@ued_fpi/data-visual/style";

    img,
    video {
        max-width: none;
        height: auto;
    }

    // 自动移滚动条样式
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    // 滑块部分
    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-radius: 1em;
    }

    // 辊道部分
    ::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 1em;
    }

    pre {
        position: relative;
    }

    pre:hover {
        .demo-show-copy {
            display: block;
        }
    }

    .language-vue {
        display: inline-block;
        width: 100%;
        padding: 10px;
        overflow-x: auto;
        background: black;
        border-radius: 4px;

        .hljs-tag {
            color: #7ee787;
        }

        .demo-show-copy {
            position: absolute;
            top: 0;
            right: 8px;
            z-index: 2;
            display: none;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            cursor: pointer;
            content: "";
            background-color: var(--vp-code-block-bg);
            background-image: var(--vp-icon-copy);
            background-repeat: no-repeat;
            background-position: 50%;
            background-size: 20px;
            border-radius: 4px;
            transition: opacity 0.25s;
            transform: scale(0.8);
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
    }

    .dark {
        color-scheme: dark;

        --el-bg-color-overlay: #051a39;
        --el-fill-color-light: #000b1a;
        --el-color-primary: #3387ff;
        --el-border-color: #0049b2;
        --el-input-bg-color: var(--dv-color-primary-20);
        --el-border-color-light: var(--dv-color-primary-50);
        --el-border-color-hover: var(--dv-color-primary-50);
    }
}
</style>
