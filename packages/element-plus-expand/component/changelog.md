<!--
 * @Author: mjh
 * @Date: 2023-04-10 20:36:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-10-08 11:14:21
 * @Description:
-->

# 更新日志 

<code>@ued_fpi/element-plus-expand</code> 严格遵循 [Semantic Versioning 2.0.0](https://semver.org/lang/zh-CN/) 语义化版本规范。


## 发布周期

- 修订版本号：每周末会进行日常 bugfix 更新。（如果有紧急的 bugfix，则任何时候都可发布）
- 次版本号：每月发布一个带有新特性的向下兼容的版本。
- 主版本号：含有破坏性更新和新特性，不在发布周期内。
- 🌟 feat； 🐞 fix； 🎉 正式版发布 或 新组件发布；

## 版本记录

## 0.8.23

<code>2023-10-07</code>
- 🌟 修改地图经纬度选择组件 `fpi-map-location` 修复传值为空点击确定显示空的bug


## 0.8.16

<code>2023-9-19</code>
- 🌟 增加 `fpi-el-form` 自定义插槽整行 `slotLine` 功能
- 🌟 增加 `fpi-el-table` 自定义插入VNode `render` 属性, `setPage` 手动设置组件内部页码属性方法。

## 0.8.15

<code>2023-9-7</code>
- 🌟 增加 `fpi-el-form` 默认插槽功能

## 0.8.14

<code>2023-9-05</code>
- 🐞 CronTab表达式的样式引入问题修复

## 0.8.13

<code>2023-8-31</code>
- 🐞 CronTab表达式的问题修复

## 0.8.12

<code>2023-8-24</code>
- 🐞 FpiMapLocation 搜索框未显示的bug

## 0.8.11

<code>2023-8-24</code>

- 🌟 FpiElRolling 组件增加属性`isDragControl` 拖拽控制动画功能
- 🐞 FpiElRolling 修复鼠标滚动控制动画强制停止时事件默认行为被阻止，外部无法获取滚动事件问题


## 0.8.10

<code>2023-8-23</code>

- 🎉 FpiElPageLayout 组件发布
- 🎉 FpiElCascaderTabSelect 组件发布

## 0.8.8

<code>2023-8-22</code>

- 🌟 修改地图经纬度选择组件 `fpi-map-location` 输入框限制只允许输入数字
- 🌟 修改地图经纬度选择组件 `fpi-map-location` 输入框手动输入经纬度未双向绑定的bug

## 0.8.7

<code>2023-8-17</code>

- 🌟 修改地图经纬度选择组件 `fpi-map-location` 地图组件默认传空修改
- 🌟 修改 `FpiElQuarterRangePicker`, `FpiElYearRangePicker`, `FpiElCronTab`, `FpiMap` 组件自动导入element-plus组件样式

## 0.8.6

<code>2023-8-8</code>

- 🌟 修改地图经纬度选择组件 `fpi-map-location` 引入element-plus样式

## 0.8.5

<code>2023-8-2</code>

- 🎉 发布时间运算组件 `fpi-el-cron-tab` 
- 🎉 发布年份周期选择组件 `fpi-el-year-range-picker` 

## 0.8.4

<code>2023-8-1</code>

- 🌟 优化 `fpi-map-location` 组件代码
- 🐞 修复 `fpi-map` 地图回显问题

## 0.8.3

<code>2023-7-31</code>

- 🐞 增加 `fpi-el-grid-progress-bar` 单独暴露名称。
- 🐞 修复 `fpi-el-form` 所有警告。


## 0.8.1

<code>2023-7-25</code>

- 🎉 新增 `fpi-el-grid-progress-bar` 分隔进度组件。

## 0.8.0

<code>2023-7-19</code>

- 🎉 新增 `fpi-map-location` 地图坐标选择组件, `fpi-map` 地图组件
- 🐞 修复 `fpi-el-form`  单独设置type: 'text' 时无法匹配数组value情况
- 🐞 修复 `fpi-el-quarter-picker`  方法 getQuarterInfoByDate 入参

## 0.7.28

<code>2023-7-18</code>

- 🐞 修复 `fpiTableConfig` 方法放在默认导入内，导致按需引入无效问题

## 0.7.17

<code>2023-7-2</code>

- 🐞 修复 `fpi-el-rolling` 适配宽度和高度百分百问题
- 🌟 修改 全局 scss 引入为 string 模式

## 0.7.16

<code>2023-7-2</code>

- 🐞 修复 `fpi-el-rolling` 滚动丝滑问题，适配window

## 0.7.15

<code>2023-6-26</code>

- 🐞 修复 `fpi-el-rolling` 修改无限滚动组件默认不判断容器大小问题
- 🐞 修复 `fpi-el-table` 修改表格组件默认pageExpr无数据时显示NaN问题

## 0.7.12

<code>2023-6-20</code>

- 🎉 组件搭建，构建 `fpi-el-quarter-picker`, 季度选择组件
- 🐞 修复 fpi-el-rolling 修改无限滚动组件最大滚动速度，适配 windows 鼠标滚动事件

## 0.7.11

<code>2023-6-9</code>

- 🐞 修复 fpi-el-form 文本模式 显示 select 多选时回显文字问题

## 0.7.8

<code>2023-6-7</code>

- 🐞 修复 fpi-el-form optionExpr 属性问题

## 0.7.7

<code>2023-6-5</code>

- 🌟 修改 package.json 增加 sideEffects 副作用配置

## 0.7.6

<code>2023-6-1</code>

- 🌟 修改 fpi-el-form 组件 增加 inputProps 内的 `optionExpr` 属性，可以用于设置回穿值列表对应变量

## 0.7.5

<code>2023-6-1</code>

- 🌟 修改 fpi-el-form 组件 增加 `isShowBtnBox` ，`trigger` 属性，扩展 `text` 模式的样式修改能力，修复重复 prop 值后者把前者 rules 覆盖问题

## 0.7.4

<code>2023-5-22</code>

- 🐞 修复 fpi-el-rolling 组件 属性 `scrollAble`属性 鼠标滚动控制动画

## 0.7.3

<code>2023-5-20</code>

- 🐞 修复 fpi-el-table 组件 静态数据页码 total 显示总是 0 问题

## 0.7.2

<code>2023-5-18</code>

- 🎉 增加 rolling 无限滚动组件
- 🌟 删除多余组件 icon button

## 0.7.1

<code>2023-4-27</code>

- 🌟 修改各组件自动引入策略

## 0.7.0

<code>2023-4-27</code>

- 🌟 增加 `fpiELementPlusResolver` 组件按需引入插件
- 🌟 重构组件 style 打包策略，手动生成 element-plus 样式依赖文件

## 0.6.9

<code>2023-4-27</code>

- 🐞 修复 `fpi-el-table` 组件 复选单选问题
- 🌟 剔除多余组件 `button` 和 `icon`

## 0.6.8

<code>2023-4-27</code>

- 🎉 组件搭建，构建 `fpi-el-table`, `fpi-el-form` 组件
