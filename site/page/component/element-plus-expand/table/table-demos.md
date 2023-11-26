<!--
 * @Author: mjh
 * @Date: 2023-03-24 23:05:47
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-19 11:33:14
 * @Description: 
-->

# 前沿
## 组件思路
1. 普通用法:就是和原来`el-table`一样，`api`基本一致，就是把本来绑定在`el-table`的属性绑定在此组件上，把本来绑定在el-table-column上的属性通过`column`属性以数组的形式传入，数组内每个对象对应着每一列的。`el-table-column`,如果需要使用页码参数其也内置了页码组件，可以直接传参生成。
2. 表格内置 [页码](/page/component/element-plus-expand/table/docs.html#_2-table-page-属性)，[配置工具](/page/component/element-plus-expand/table/docs.html#table-的-column-属性内部对象属性)，[loading](/page/component/element-plus-expand/table/docs.html#_3-table-loading-属性) 相关配置请见文档。
3. 自动请求用法：可以通过传`api`属性，开启自动请求功能。入口是一个方法，方法参数是请求参数，返回一个promise即可被`api`属性读取，配合一些其他扩展属性可以很好的实现组件自动请求，实现一个配置项完成整个表格业务功能。
4. 其支持所有el-table属性，而且也有很强的扩展性，可以随意自定义插槽，render等，对于比较特殊的一些情况，比如插入并自定义某一整行。


# 例子

## 基础表格
<!-- [跳转到锚点](#jump) -->
基础的表格展示用法，当 `el-table` 元素中注入 data 对象数组后，在 `column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。 可以使用 `width` 属性来定义列宽。
<demo src="./demos/fpi-table1.vue" ></demo>  

## 页码使用
`is-show-page`属性可以设置是否显示页码，默认为`true`，传入 `pageParams` 可以设置当前为第几页，总共多少页，以及页面size。  
必须传入响应式对象，组件内部会动态监听此变量变更新；`page-layout` 属性设置显示的分页按钮; `page-box-style` 可以设置页面行的样式。 其他页面属性支持请点击查看 [页码属性](/page/component/element-plus-expand/table/docs.html#_2-table-page-属性)
<demo src="./demos/fpi-table18.vue" ></demo>  

## 带斑马纹表格
使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe` 可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹。
<demo src="./demos/fpi-table2.vue" iframe iframeHeight="310px"></demo>  

## 带边框表格
默认情况下，Table 组件是不具有竖直方向的边框的， 如果需要，可以使用 `border` 属性，把该属性设置为 `true` 即可启用。
<demo src="./demos/fpi-table3.vue" iframe iframeHeight="310px"></demo>  


## 固定表头
纵向内容过多时，可选择固定表头。

只要在 el-table 元素中定义了 `height` 属性，即可实现固定表头的表格，而不需要额外的代码。

<demo src="./demos/fpi-table4.vue"></demo>  

## 固定列
横向内容过多时，可选择固定列。

固定列需要在 `column`使用 `fixed` 属性，它接受 `Boolean` 值。 如果为 `true`, 列将被左侧固定. `它还接受传入字符串，left` 或 `right`，表示左边固定还是右边固定。
<demo src="./demos/fpi-table5.vue" iframe iframeHeight="270px"></demo>  

## 固定列和表头
当您有大量数据块放入表中，您可以同时固定表头和列。

固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。
<demo src="./demos/fpi-table7.vue" iframe iframeHeight="270px"></demo>  

## 流体高度
当数据量动态变化时，可以为 `Table` 设置一个最大高度。

通过设置 max-height 属性为 `fpi-el-table` 指定最大高度。 此时若表格所需的高度大于最大高度，则会显示一个滚动条
<demo src="./demos/fpi-table8.vue" ></demo>  

## 多级表头
数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

只需要将`column` 放置于`column` 的对象中，你可以实现组头。
<demo src="./demos/fpi-table9.vue" iframe></demo>  


## 单选，多选
你也可以选择多行。

单选：设置 `highlight-current-row` 属性就可以实现单选高亮；  
实现多选非常简单: 手动添加一个 `column` 内的对象，设 `type` 属性为 `selection` 即可；  
除了多选，这里还使用到了 `show-overflow-tooltip`属性。 默认情况下，如果单元格内容过长，会占用多行显示。 若需要单行显示可以使用 `show-overflow-tooltip` 属性，它接受一个 `Boolean，` 为 `true` 时多余的内容会在 `hover` 时以 `tooltip` 的形式显示出来。
<demo src="./demos/fpi-table10.vue" ></demo>  


## 排序
对表格进行排序，可快速查找或对比数据。

在列中设置 `sortable` 属性即可实现以该列为基准的排序， 接受一个 `Boolean，默认为` `false。` 可以通过 Table 的 `defaultSort` 属性设置默认的排序列和排序顺序。 可以使用 `sortMethod` 或者 `sort-by` 使用自定义的排序规则。 如果需要后端排序，需将 `sortable` 设置为 `custom，同时在` Table 上监听 `sort-change` 事件， 在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。 在本例中，我们还使用了 `formatter` 属性，它用于格式化指定列的值， 接受一个 `Function`，会传入两个参数：`row` 和 `column，` 可以根据自己的需求进行处理。  
插槽： 设置`isSlot` 为 `true` 就可以开启此列的插槽模式，插槽的名称就是 `prop` 属性的值
<demo src="./demos/fpi-table11.vue" ></demo>  

## 树形数据与懒加载
支持树类型的数据的显示。 当 `row` 中包含 `children` 字段时，被视为树形数据。 渲染嵌套数据需要 `prop` 的 `row-key`。 此外，子行数据可以异步加载。 设置 `Table` 的`lazy`属性为 `true` 与加载函数 `load` 。 通过指定 row 中的hasChildren字段来指定哪些行是包含子节点。 `children` 与`hasChildren`都可以通过 `tree-props` 配置。

<demo src="./demos/fpi-table12.vue" ></demo>  


## 表尾合计行
若表格展示的是各类数字，可以在表尾显示各列的合计。

将 `show-summary` 设置为`true`就会在表格尾部展示合计行。 默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。 当然，你也可以定义自己的合计逻辑。 使用 `summary-method` 并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中， 具体可以参考本例中的第二个表格。
<demo src="./demos/fpi-table13.vue" iframe iframeHeight="520px"></demo>  

## 合并行或列
多行或多列共用一个数据时，可以合并行或列。

通过给 `table` 传入`span-method`方法可以实现合并行或列， 方法的参数是一个对象，里面包含当前行 `row`、当前列 `column`、当前行号 `rowIndex`、当前列号 `columnIndex` 四个属性。 该函数可以返回一个包含两个元素的数组，第一个元素代表 `rowspan`，第二个元素代表 `colspan`。 也可以返回一个键名为 `rowspan` 和 `colspan` 的对象。
<demo src="./demos/fpi-table14.vue" iframe iframeHeight="500px"></demo>  

## 自定义索引
自定义 `type=index` 列的行号。

通过给 `type=index` 的列传入 `index` 属性，可以自定义索引。 该属性传入数字时，将作为索引的起始值。 也可以传入一个方法，它提供当前行的行号（从 0 开始）作为参数，返回值将作为索引展示。
<demo src="./demos/fpi-table15.vue" ></demo>  


## 配置工具
`column`内定义 `type` 为 `tools` 可以自定义工具列。

`toolsArr` 数组内每一个对象代表工具列内部的按钮，对象内 `label` 代表文字，`click` 点击事件
`toolsStyle` 可以定义整个工具类的样式
<demo src="./demos/fpi-table16.vue" ></demo>  

## 自定义整列
`arraySpanMethod` 方法可以自由自定义整列。
<demo src="./demos/fpi-table17.vue" iframe iframeHeight="260px"></demo>  

## loading的使用
<span id = "jump">标题1</span>
通过 `ref` 获取到 `table` 的节点后，可以调用 `changeLoading` 方法 通过传入 `true/false 显示/隐藏` `loading`效果, 其他效果请见 [文档loading](/page/component/element-plus-expand/table/docs.html#_3-table-loading-属性)
<demo src="./demos/fpi-table19.vue" iframe iframeHeight="300px"></demo>  

## 插槽和render的使用
`isSlot`: 设置tableColumn对象内的属性 `isSlot: true` 开启插槽`表格内容`自定义插槽，其插槽名称是对象内`prop`属性的值。  
`isSlotHeader`: 设置tableColumn对象内的属性 `isSlotHeader: true` 开启`表头`插槽自定义插槽，其插槽名称是对象内`prop`属性的值加上 `-header`也就是 `${prop}-header`。  
 ^(0.8.16) `render` : 当然也可以直接在表格内定义 `render` 函数使用 `vue` 提供的 `h` 进行返回 `VNode` 节点即可。
<demo src="./demos/fpi-table20.vue"></demo>  


<ElementIframe></ElementIframe>


## 贡献者：

<ContributorView name="马佳辉"></ContributorView>