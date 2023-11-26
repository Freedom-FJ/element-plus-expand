<!--
 * @Author: mjh
 * @Date: 2022-09-06 09:21:32
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-19 11:25:29
 * @Description:
-->
<template>
    <elTableNode />
</template>

<script lang="ts" setup name="ElTableNode">
import type { PropType, VNode } from 'vue'
import { ElTableColumn } from 'element-plus'
import { defineComponent, h } from 'vue'
import type { tableColumnTs } from './types'

const props = defineProps({
    /**
     * @desc 表格column列对象
     */
    columnData: {
        type: Object as PropType<tableColumnTs>,
        default: () => {
            return {} as tableColumnTs
        }
    },
    /**
     * @desc 父亲插槽
     */
    slots: {
        type: Object as PropType<Record<string, any>>,
        default: () => {
            return {} as Record<string, any>
        }
    }
})
const getRenderColumn = (columnData: tableColumnTs) => {
    return h(
        ElTableColumn, {
            ...columnData,
        },
        {
            ...getDefault(columnData),
            ...getHeader(columnData)
        }
    )
}
const getHeader = (columnData: tableColumnTs) => {
    return (props.slots[`${columnData.prop}-header`]
        ? getHeaderNode(columnData)
        : '')
}
const getDefault = (columnData: tableColumnTs) => {
    return {
        default(scope: { row: Record<string, any>; $index: number }) {
            return getReturnNode(scope, columnData)
        }
    }
}
// 优先级： render > column > isSlot > tools > expand
const getReturnNode = (scope: { row: Record<string, any>; $index: number }, columnData: tableColumnTs) => {
    const { type, isSlot, column, prop, render } = columnData
    let returnNode: VNode | VNode[] | null = null
    if (render) returnNode = render(scope, columnData)
    else if (column && column.length) returnNode = getColumnNode(columnData)
    else if (prop && isSlot && (prop in props.slots)) returnNode = getSlotNode(scope, columnData)
    else if (type === 'tools') returnNode = getToolNode(scope, columnData)
    else if (type === 'expand') returnNode = getExtendNode(scope)
    return returnNode
}
const getHeaderNode = (columnData: tableColumnTs) => {
    return {
        header(scope: { column: Record<string, any>; $index: number }) {
            return h(
                'div',
                props.slots[`${columnData.prop}-header`] ? props.slots[`${columnData.prop}-header`]({ scope, item: columnData }) : h('span', columnData.label)
            )
        }
    }
}
const getExtendNode = (scope: { row: Record<string, any>; $index: number }) => {
    return h(
        'div',
        props.slots['expand-slot'] ? props.slots['expand-slot'](scope) : ''
    )
}
const getSlotNode = (scope: { row: Record<string, any>; $index: number }, columnData: tableColumnTs) => {
    const propKey = columnData.prop || ''
    return h(
        'div',
        (props.slots as any)[propKey]({ scope, item: columnData })
    )
}

const getToolNode = (scope: { row: Record<string, any>; $index: number }, columnData: tableColumnTs) => {
    return h(
        'div',
        {
            class: 'fpi-tools-box',
            style: {
                'display': 'flex',
                'justify-content': 'space-between',
                'width': '100%',
                ...columnData.toolsStyle ? columnData.toolsStyle() : {}
            }
        },
        (columnData.toolsArr || []).map((item, index) => getToolTipsNode(item, index, scope))
    )
}

const getToolTipsNode = (item: Record<string, any>, index: number, scope: { row: Record<string, any>; $index: number }) => {
    return h(
        'div',
        {
            class: 'fpi-tools-tip',
            key: index,
            style: {
                'font-size': '14px',
                'font-weight': 'normal',
                'line-height': '22px',
                'color': '#0084ff',
                'letter-spacing': 0,
                'cursor': 'pointer',
                ...(item.style ? item.style() : {})
            },
            onClick: (e: any) => {
                e.stopPropagation()
                item.click && item.click(scope.row, scope.$index)
            }
        },
        item.label
    )
}

const getColumnNode = (columnData: tableColumnTs) => {
    return (columnData.column as tableColumnTs[]).map((column) => {
        return getRenderColumn(column)
    })
}

const elTableNode = defineComponent({
    render() {
        return getRenderColumn(props.columnData)
    }
})
</script>

