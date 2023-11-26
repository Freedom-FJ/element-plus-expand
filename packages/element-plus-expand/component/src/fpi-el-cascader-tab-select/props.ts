/*
 * @Author: Tian
 * @Date: 2022-07-06 10:38:47
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 10:58:35
 * @Description:
 */
import type { ElCascaderPanel } from 'element-plus'
import type { CascaderOption, CascaderProps, TypeList } from './types'

type ElCascaderPanelProp = InstanceType<typeof ElCascaderPanel>['$props']

export interface cascaderProps extends /* @vue-ignore */ ElCascaderPanelProp {
    textHolder: string
    typeList: TypeList[]
    searchName: string
    currentType: string
    hasBackground: boolean
    size: 'large' | 'default' | 'small'
    modelValue: ElCascaderPanelProp['modelValue']
    options: ElCascaderPanelProp['options']
    props: ElCascaderPanelProp['props']
}

export const defaultCascaderPropsData = {
    size: 'small' as const,
    textHolder: '',
    hasBackground: true,
    props: () => {
        return {
            // 次级菜单的展开方式
            expandTrigger: 'hover',
            // 是否多选
            multiple: false,
            // 是否严格的遵守父子节点不互相关联
            checkStrictly: true,
            // 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
            emitPath: false,
            // 是否动态加载子节点，需与 lazyLoad 方法结合使用
            lazy: false,
            // 加载动态数据的方法，仅在 lazy 为 true 时有效
            // lazyLoad: '',
            // 指定选项的值为选项对象的某个属性值
            value: 'id',
            // 指定选项标签为选项对象的某个属性值
            label: 'label',
            // 指定选项的子选项为选项对象的某个属性值
            children: 'children',
            // 指定选项的禁用为选项对象的某个属性值
            disabled: 'disabled',
            // 指定选项的叶子节点的标志位为选项对象的某个属性值
            leaf: 'leaf'
        } as any
    }
}

// export const cascaderProps = {
//     modelValue: {
//         type: [String, Number],
//         default: ''
//     },
//     /**
//      * @desc 当前选中的文本
//      */
//     textHolder: {
//         type: String,
//         default: ''
//     },
//     /**
//      * @desc 大小
//      */
//     size: {
//         type: String as PropType<'large' | 'default' | 'small'>,
//         default: 'small'
//     },
//     /**
//      * @desc 类型选择
//      */
//     typeList: {
//         type: Array as PropType<TypeList[]>,
//         default: () => []
//     },
//     searchName: {
//         type: String,
//         default: ''
//     },
//     /**
//      * @desc 默认选中的类型
//      */
//     currentType: {
//         type: String,
//         default: ''
//     },
//     /**
//      * @desc 选中项绑定值
//      */
//     currentNode: {
//         type: String,
//         default: ''
//     },
//     /**
//      * @desc 可选项数据源，键名可通过 Props 属性配置
//      */
//     options: {
//         type: Array as PropType<CascaderOption[]>,
//         default: () => []
//     },
//     hasBackground: {
//         type: Boolean,
//         default: false
//     },
//     /**
//      * @desc 配置选项
//      */
//     props: {
//         type: Object as PropType<CascaderProps>,
//         default: () => {
//             return {
//                 // 次级菜单的展开方式
//                 expandTrigger: 'hover',
//                 // 是否多选
//                 multiple: false,
//                 // 是否严格的遵守父子节点不互相关联
//                 checkStrictly: true,
//                 // 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值
//                 emitPath: false,
//                 // 是否动态加载子节点，需与 lazyLoad 方法结合使用
//                 lazy: false,
//                 // 加载动态数据的方法，仅在 lazy 为 true 时有效
//                 lazyLoad: '',
//                 // 指定选项的值为选项对象的某个属性值
//                 value: 'id',
//                 // 指定选项标签为选项对象的某个属性值
//                 label: 'label',
//                 // 指定选项的子选项为选项对象的某个属性值
//                 children: 'children',
//                 // 指定选项的禁用为选项对象的某个属性值
//                 disabled: 'disabled',
//                 // 指定选项的叶子节点的标志位为选项对象的某个属性值
//                 leaf: 'leaf'

//             }
//         }
//     },

// }
