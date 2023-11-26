<!--
 * @Author: Tian
 * @Date: 2022-07-06 10:33:56
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 11:06:15
 * @Description:
-->
<template>
    <div class="fpi-el-cascader">
        <div :class="`cascader-title flex-start-c ${hasBackground ? 'label-bg' : ''}`" @click="changeIcon">
            <div class="text">
                {{ showComTextHolder }}
            </div>
            <div class="arrow-line tran05" :class="cascaderObj.showPanel ? 'arrow-line-ro' : ''" />
        </div>
        <transition name="el-zoom-in-top">
            <div v-show="cascaderObj.showPanel" :id="cascaderObj.id" class="cascader-popup border-1">
                <div class="el-cascader-flex-bw-c">
                    <div class="cascader-popup-type">
                        <el-radio-group v-model="cascaderObj.insetType" :size="size" @change="typeChange">
                            <el-radio-button v-for="item in typeList" :key="item.key" :label="item.key">
                                {{ item.label }}
                            </el-radio-button>
                        </el-radio-group>
                    </div>
                    <div class="cascader-popup-search">
                        <el-input v-model="cascaderObj.searchName" :size="size" placeholder="请输入" :prefix-icon="Search" @change="searchEvent" @input="inputEvent" />
                    </div>
                </div>
                <div class="cascader-panel">
                    <ElCascaderPanel
                        ref="fpiCascaderRef"
                        v-model="useModelValue"
                        :size="size"
                        :options="showOption"
                        :props="props"
                        v-bind="attrs"
                        @close="expandClose"
                        @expandChange="expandChange"
                        @change="changeNode"
                    >
                        <template #default="scoped">
                            <slot>
                                <div>{{ scoped.data[props ? props.label || 'label' : 'label'] }}</div>
                            </slot>
                        </template>
                    </ElCascaderPanel>
                </div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup name="fpi-cascader">
import { Search } from '@element-plus/icons-vue'
import { computed, nextTick, onMounted, onUnmounted, reactive, ref, useAttrs, watch } from 'vue'
import type { CascaderNodePathValue } from 'element-plus'
import { ElCascaderPanel } from 'element-plus'
import type { cascaderProps, } from './props'
import { defaultCascaderPropsData } from './props'
const currProps = withDefaults(defineProps<cascaderProps>(), defaultCascaderPropsData)
const $emit = defineEmits([
    'update:modelValue',
    'update:currentType',
    'handle-change-node',
    'handle-type-change',
    'handle-search-event',
    'handle-input-event',
    'expand-change',
    'expand-close',
    'panel-open',
    'panel-close',
])
const attrs = useAttrs()
const cascaderObj = reactive({
    searchName: '',
    showPanel: false,
    insetType: currProps.currentType,
    staticRememberType: '',
    id: `fpi-cascader${Math.random()}`,
})
const fpiCascaderRef = ref()

const showOption = computed(() => {
    return !cascaderObj.searchName ? getCurrOption.value : getTargetNodeList(getCurrOption.value, cascaderObj.searchName)
})

const useModelValue = computed({
    get() {
        return currProps.modelValue
    },
    set(val: any) {
        $emit('update:modelValue', val)
    }
})
const getCurrOption = computed(() => {
    if (cascaderObj.insetType && Array.isArray(currProps.typeList)) {
        return currProps.typeList.find(item => item.key === cascaderObj.insetType)?.options ?? (currProps.options || [])
    }
    return currProps.options || []
})

const getCurrOutOption = computed(() => {
    if (cascaderObj.insetType && Array.isArray(currProps.typeList)) {
        return currProps.typeList.find(item => item.key === currProps.currentType)?.options ?? (currProps.options || [])
    }
    return currProps.options || []
})

watch(() => cascaderObj.showPanel, (val) => {
    if (val) {
        $emit('panel-open')
        cascaderObj.insetType = currProps.currentType
    }
    else {
        $emit('panel-close')
        nextTick(() => {
            cascaderObj.insetType = currProps.currentType
        })
    }
})
watch(() => currProps.currentType, (val) => {
    cascaderObj.insetType = val
})
watch([() => currProps.options, () => currProps.typeList], () => cascaderObj.searchName = '')

const showComTextHolder = computed(() => {
    if (currProps.textHolder) return currProps.textHolder
    const getCurrNode = getDeepTreeCurrNode(useModelValue.value, currProps.props?.value || 'value', getCurrOutOption.value)
    return `${currProps.typeList.find(item => item.key === currProps.currentType)?.label}：${getCurrNode ? getCurrNode[currProps.props?.label || 'label'] : ''}`
})

const changeNode = () => {
    if (cascaderObj.insetType !== currProps.currentType) $emit('update:currentType', cascaderObj.insetType)
    const curNodeInfo = fpiCascaderRef.value.getCheckedNodes()[0]
    // change事件
    $emit('handle-change-node', { ...curNodeInfo })
    // 弹框消失
    cascaderObj.showPanel = !cascaderObj.showPanel
}
let listener: any

onMounted(() => {
    listener = document.addEventListener('mouseup', (e) => {
        const pop = document.getElementById(cascaderObj.id)
        if (cascaderObj.showPanel && pop) {
            if (!pop.contains(e.target as Node)) {
                setTimeout(() => {
                    cascaderObj.showPanel = false
                    typeChange(cascaderObj.staticRememberType)
                })
            }
        }
    })
})
onUnmounted(() => {
    listener && listener.removeEventListener()
})

const getDeepTreeCurrNode: any = (value: string | number, key: string, option: Array<any> = []) => {
    if (!value) return
    let returnNode: undefined | Record<string, any>
    for (const item of option) {
        if (item[key] === value) {
            returnNode = item
        }
        const children = item[currProps.props?.children || 'children']
        if (Array.isArray(children) && !returnNode) {
            returnNode = getDeepTreeCurrNode(value, key, children)
        }
    }
    return returnNode
}
/**
 * 获取匹配的树节点
 * list 树结构
 */
const getTargetNodeList = (list: Array<Record<string, any>> | undefined, name: string | number) => {
    if (!list) return
    const result: any = []
    const getTargetList = (arr: Array<Record<string, any>>, name: string | number) => {
        arr.forEach((item: any) => {
            if (item.label.includes(name))
                result.push(item)

            else if (item.children && item.children.length)
                getTargetList(item.children, name)
        })
    }
    getTargetList(list, name)
    return result
}

const typeChange = (type: any) => {
    cascaderObj.searchName = ''
    $emit('handle-type-change', type)
}
const changeIcon = () => {
    cascaderObj.showPanel = !cascaderObj.showPanel
    if (cascaderObj.showPanel) {
        cascaderObj.staticRememberType = currProps.currentType
    }
}

const expandChange = (value: CascaderNodePathValue) => {
    $emit('expand-change', value)
}
const expandClose = () => {
    console.log('object')
    $emit('expand-close')
}

const searchEvent = (val: string) => {
    $emit('handle-search-event', val)
}
const inputEvent = (val: string) => {
    $emit('handle-search-event', val)
}

// 获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 false
const getCheckedNodes = (leafOnly: boolean) => {
    return fpiCascaderRef.value?.getCheckedNodes(leafOnly)
}

// 清空选中的节点
const clearCheckedNodes = () => {
    return fpiCascaderRef.value?.clearCheckedNodes()
}
// 获取当前显示的列表
const getOptionList = () => {
    return showOption.value
}

defineExpose({
    getCheckedNodes,
    clearCheckedNodes,
    getOptionList
})
</script>

<style lang="scss">
.fpi-el-cascader {
    position: relative;
    height: 100%;
    font-size: 14px;

    .cascader-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        cursor: pointer;

        .text {
            margin-right: 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    .el-cascader-flex-bw-c {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .label-bg {
        height: 100%;
        padding-right: 12px;
        padding-left: 8px;
        background: var(--el-bg-color-overlay);
        border: 1px solid var(--el-border-color-light);
        border-radius: var(--el-border-radius-base);
    }

    .arrow-line {
        width: 6px;
        height: 6px;
        margin-left: 4px;
        border-right: 1px solid var(--el-text-color-secondary);
        border-bottom: 1px solid var(--el-text-color-secondary);
        transform: rotate(45deg) translateY(-50%) scale(1);
        transform-origin: center;
    }

    .arrow-line-ro {
        transform: rotate(225deg) !important;
    }

    .cascader-popup {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 100;
        min-width: 448px;
        padding: 8px;
        margin-top: 5px;
        background: var(--el-bg-color-overlay);
        border: 1px solid var(--el-border-color-light);
        border-radius: 10px;

        .cascader-panel {
            margin-top: 8px;
        }

        .cascader-popup-search {
            width: 200px;
        }
    }
}
</style>
