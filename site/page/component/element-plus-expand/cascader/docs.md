<!--
 * @Author: mjh
 * @Date: 2023-08-23 09:22:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 11:17:49
 * @Description: 
-->
# fpi-el-cascader-tab-select  ^(0.8.10)

> 级联树面板选择组件

::: tip
当前组件在 element-plus-expand 0.8.10 版本后正式部署
:::


## tab基础使用
> 设置 `typeList` 可以设置选择面板的tab页，比如如下可以用于切换 流域 和 区域, 设置 `v-model:current-type` 可以绑定当前选择的tab
<demo src="./demos/demo1.vue"></demo>


## 手动设置options
> 我们也可以在 `typeList` 不放入 `options` 属性，当组件识别到内部无options属性时会单独获取传入 `options` 属性。
> 当然也可以不传入  `typeList`  属性，直接传入`options` 属性当单独的级联面板使用。
<demo src="./demos/demo2.vue"></demo>

## 搜索的使用
> 组件内部有搜索组件，会自动模糊搜索 对应的 label 值，对应有 `handleSearchEvent` 搜索输入事件
<demo src="./demos/demo3.vue"></demo>

## 自定义选择框文案
> 当然组件传入 `textHolder` 时，组件内的选择框显示的文案就会使用此变量。
<demo src="./demos/demo4.vue"></demo>


## 属性
| 参数      | 说明         | 类型       | 默认值  |
|---------- |-------------- |---------- |-------- |  
| model-value / v-model | 选中项绑定值 | string/number/object | - |
| current-type / v-model | 选中的tab的key | string/number | - |
| options | 选项的数据源， `value` 和 `label` 可以通过 `CascaderProps` 自定义. | `Record<string, unknown>[]` | - |
| props | 配置选项, 请参阅下面 `CascaderProps` 表。 | `CascaderProps` | -- |
| textHolder | 自定义显示选择框文案 | string | - |
| hasBackground | 是否显示选择框的背景 | boolean | true |
| size | 组件size | 'large'/'default'/'small' | 'small' |
| typeList | 组件tab页的列表 | { label: string; key: string; options?: any[] }[] | - |

## 事件
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| handle-change-node | 当选中节点变化时触发 | `(value: CascaderValue) => void` |
| handle-type-change | tab选择 | `(key:string) => void` |
| handle-search-event | 搜索触发 | `(str:string) => void` |
| handle-input-event | 搜索输入 | `(str:string) => void` |
| expand-change | 当展开节点发生变化时触发 | `(value: CascaderNodePathValue) => void` |
| close | 面板的关闭事件，提供给 Cascader 以便做更好的判断。 | `() => void` |
| panel-open | 面板打开 | `() => void` |
| panel-close | 面板关闭 | `() => void` |



## 方法
| 方法 | 说明 | 参数 |
| ---- | ---- | ---- |
| getCheckedNodes | 获取一个当前选中节点的数组。(仅仅是传单) 是否只返回叶选中的节点，默认是 false | `(leafOnly: boolean)=> CascaderNode[] / undefined` |
| clearCheckedNodes | 清空选中的节点 | `() => void `|
| get-option-list | 获取当前显示的列表 | `any[]` |

## 插槽
| 名称 | 说明 | 类型 |
| ---- | ---- | ---- |
| default | 下级节点的自定义内容，它们分别是当前节点对象和节点数据。 | `{ node: any, data: any }` |



## 贡献者：
<ContributorView name="马佳辉,王田"></ContributorView>
