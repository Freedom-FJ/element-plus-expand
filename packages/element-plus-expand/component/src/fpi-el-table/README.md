<!--
 * @Author: mjh
 * @Date: 2022-11-04 18:12:33
 * @LastEditors: mjh
 * @LastEditTime: 2023-03-14 09:01:58
 * @Description: 
-->
# 前沿
## 组件思路
1. 普通用法:就是和原来`el-table`一样，`api`基本一致，就是把本来绑定在`el-table`的属性绑定在此组件上，把本来绑定在el-table-column上的属性通过`column`属性以数组的形式传入，数组内每个对象对应着每一列的`el-table-column`,如果需要使用页码参数其也内置了页码组件，可以直接传参生成
2. 自动请求用法：可以通过传`api`属性，开启自动请求功能。入口是一个方法，方法参数是请求参数，返回一个promise即可被`api`属性读取，配合一些其他扩展属性可以很好的实现组件自动请求，实现一个配置项完成整个表格业务功能
3. 其支持所有el-table属性，而且也有很强的扩展性，可以随意自定义插槽，render等，对于比较特殊的一些情况，比如插入并自定义某一整行，在样例`22`中有，可以去参考
# Table相关
## Table 属性：
### 1.原生element-plus 属性 （与官方文档相同)
变动属性：  
`data` 属性变成 `tableData`  

| 参数      | 说明****************************************          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |  
| tableData | 显示的数据 | array | — | — |
| height | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。  | string/number | — | — |
| max-height | Table 的最大高度。合法的值为数字或者单位为 px 的高度。 | string/number | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false |
| border | 是否带有纵向边框 | boolean | — | false |
| size | Table 的尺寸 | string | medium / small / mini | — |
| fit | 列的宽度是否自撑开 | boolean | — | true |
| show-header | 是否显示表头 | boolean | — | true |
| highlight-current-row | 是否要高亮当前行 | boolean | — | false |
| current-row-key | 当前行的 key，只写属性 | String,Number | — | — |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| cell-class-name | 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| cell-style | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | Function({row, rowIndex})/String | — | — |
| header-row-style | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | Function({row, rowIndex})/Object | — | — |
| header-cell-class-name | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | — | — |
| header-cell-style | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | — | — |
| row-key | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。 | Function(row)/String | — | — |
| empty-text | 空数据时显示的文本内容，也可以通过 `slot="empty"` 设置 | String | — | 暂无数据 |
| default-expand-all | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 | Boolean | — | false |
| expand-row-keys | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。| Array | — | |
| default-sort | 默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序| Object | `order`: ascending, descending | 如果只指定了`prop`, 没有指定`order`, 则默认顺序是ascending |
| tooltip-effect | tooltip `effect` 属性 | String | dark/light | | dark |
| show-summary | 是否在表尾显示合计行 | Boolean | — | false |
| sum-text | 合计行第一列的文本 | String | — | 合计 |
| summary-method | 自定义的合计计算方法 | Function({ columns, data }) | — | — |
| span-method | 合并行或列的计算方法 | Function({ row, column, rowIndex, columnIndex }) | — | — |
| select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行 | Boolean | — | true |
| indent      | 展示树形数据时，树节点的缩进 | Number | — | 16 |
| lazy        | 是否懒加载子节点数据 | Boolean | — | — |
| load        | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 | Function(row, treeNode, resolve) | — | — |
| tree-props  | 渲染嵌套数据的配置选项 | Object | — | { hasChildren: 'hasChildren', children: 'children' } |
| table-layout  | 设置表格单元、行和列的布局方式 | string | fixed / auto | fixed |
| scrollbar-always-on  | 总是显示滚动条 | boolean | - | false |
| flexible | 确保主轴的最小尺寸 | boolean | - | false |

### 2.table扩展属性
| 参数      | 说明****************************************         | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| column  | 表格配置项，数组内每个对象对应一个table-column的参数，详细见下column属性 | Array | - | [] |
| api | 请求方法,如果为空则不会请求,`传入方法要求：入口传参是请求参数，返回一个promise`,以下为可以搭配api自动请求可以传入的其他属性：`pageInit` 初始化页码的默认值  `pageReqExpr` 页面请求对应页码参数的名称`pageTotalExpr` 请求回传totol值对应在对象内的位置 `currentPageOffset` 当前页面偏移量 `resExpr` 请求回传对象对应的table数据在对象内的位置 `filterMethod` 对请求回传table数据进行过滤的回调函数`resPretreatment` 手动处理res回调 返回table表格数组(async) `reLoadTable` 手动请求方法`getTableData` 外层获取表格数据方法` | Function | - | - |
| isLazyRequest  | 在传了api属性后create时是否自动请求表格数据 `true`不自动请求 `false` 自动请求需要手动调用`reLoadTable`方法请求 | Boolean | true/false | false |
| params  | 除了页码请求变量以外的搜索列表请求参数，需要响应式数据，每次列表请求都会解构并一起带上此对象内的参数 | Object | - | {} |
| resExpr  |  请求回传对象对应的table数据在对象内的位置 | string | - | '' |
| tableData  | 静态数据（当前页）,当api为空时不会自动请求table表格数据 此变量同el-table的data属性，以下为可以配合静态数据传入table的其他属性，`pageParams` 如果有页码需要传入页码变量，`pageInit` 初始化页码的值，`pageReqExpr` 页面请求对应页码参数的名称，`currentPageOffset` 当前页面偏移量例如第一页对应的传值为0，`page-change` 对应页码切换回调函数 | Array | - | undefined |
| filterMethod  | 过滤数据方法,对于回传数据每条进行过滤操作 类似于js filter的回调函数 | function | 方法传参`row` 对应每条数据的对象，`index` 索引，`arr` 整个表格数组，返回值是`Boolean`   true/返回  false/去除 | undefined |****
| resPretreatment | api自动请求模式res预处理方法 可异步需要传入async方法，可以用于将复杂的res回调处理成需要表格渲染的table数组，也可用于代替`resExpr`参数 | Function | 方法传入接口返回值，需要return table表格数组 | — |
### 2.table-page 属性
其中原生同名属性同 el-pagination 属性  

| 参数 | 说明****************************************   | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| pageTotalExpr | 总共数据条数对应在请求返回对象内位置,默认是total 也就是返回对象是 res: { total: 46, ... }, 这种形式  | string | — | 'total' |
| pageParams | 静态组件时（api不传时）页码参数,组建会监听此参数，改变此变量内部组件会自动更新页面。当点击页码时可以通过page-change事件的返回跟新我们的页码参数，从而起到跟新页码的效果 | object | { pageSizes?: number currentPage?: number total?: number } | undefined |
| pageInit | 初始化页码，页码的默认参数 | object | { pageSizes?: number currentPage?: number total?: number pageSizesArr: Array<number> } | { pageSizes: 10, currentPage: 1, total: 0, pageSizesArr: [10, 20, 30, 50] } |
| pageReqExpr | 当api不为空时需要传，用于定义请求对应页码参数的名称 | object | { pageSizes: string currentPage: string } | { pageSizes: 'pageSize',currentPage: 'pageNum' } |
| isShowPage | 是否显示页码 | boolean | true/false | true |
| pageLayout | 分页按钮类型 | String | total,sizes,prev, pager,next,jumper | 'total,sizes,prev, pager,next,jumper' |
| currentPageOffset | 当前页面偏移量 用于配合后端接口的传参的特殊情况，有些时候我们第一页后端需要传0而不是0的情况等等，比如我们后端需要传第一页是0，但是我们正常是1，则我们要传这个参数为-1，这样每一次我们请求的时候就会拿我们正常的情况去加上我们传递的值，第一页就是传0 + (-1),第二页就是1 + (-1)以此类推 | Number | - | 0 |
| isShowPageback | 是否显示页码按钮背景 | Boolean | true/false | true |
| small | 是否使用小型分页样式 | Boolean | - | false |
| pagerCount | 设置最大页码按钮数。页码按钮的数量，当总页数超过该值时会折叠 | Number | - | 7 |

### 3.table-loading 属性
原生同名属性同 el-loading 属性  

| 参数 | 说明****************************************   | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| isShowLoading | 是否在表格显示加载图标  | Boolean | — | true |
| elementLoadingText | 加载图标文字  | string | — | 'Loading' |
| elementLoadingBackground | 背景遮罩的颜色  | string | — | - |
| elementLoadingSvg | 自定义加载图标 (与 element-loading-spinner 相同)  | string | — | 'total' |
| elementLoadingSvgViewBox | loading svg图标遮罩偏移位置 逗号分割 四个数组  | string | — | - |


## Table Events
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| row-click | 当某一行被点击时会触发该事件 | row, column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| expand-change  | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） | row, (expandedRows \| expanded) |
| page-change  | 页码点击回调 | { currentPage: number, total: number, pageSizes: number } |

## Table Methods
同名方法同el-table方法  
部分变动属性：`toggleSelection`, `setCurrentRow`   

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getTableData(扩展方法) | 获取表格数据 | types `undefine`： 不传则返回当前显示的数据内容, `number`则获取当前数据的索引数据，`all` 获取全部数据， `{ pageSizes: number, currentPage: number }` 获取对应页数据 |
| reLoadTable(扩展方法) | 请求数据(当传入`api`时) | — |
| setCurrentRow | 设置选中行| row 选中那条数据，需要从请求回传表格数据中取，不然对象无法匹配相等；number 选中当前页数据的索引，不传则清空选中 |
| toggleSelection | 复选框手动调用方法 | `undefined`清除选中，`all` 全选获不全选会自动取反, `rows`传数组 可以是对应的对象（静态模式不可用对象）也可以是对应的index(0开始)选中对应列 |
| getSelectionRows | 获取复选框选中行 | - |
| sort | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。 | prop: string, order: string |
| toggleRowExpansion | 用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row:当前行的对象或者索引, expanded:true/false 是否展开 |
| changeLoading | 外部改变loading方法 | true开始loading / false结束 |
| clearSort | 用于清空排序条件，数据会恢复成未排序的状态 | - |
| clearFilter | 传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器 | columnKeys |
| doLayout | 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局 | - |
| scrollTo | 滚动到一组特定坐标 | (options: ScrollToOptions | number, yCoord?: number) |
| setScrollTop | 设置垂直滚动位置 | top |
| setScrollLeft | 设置水平滚动位置 | left |



## Table 的 column 属性内部对象属性，
对应element的`table-column`属性于el-table-column属性同名属性功能相同  

| 参数      | 说明 ***************************************         | 类型  | 可选值       | 默认值  |
|---------- |-------------- |---------- |----------------  |-------- |
| type | 对应列的类型。如果设置了 `selection` 则显示多选框；如果设置了 `index` 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮,展开内容通过具名插槽`expand-slot`插入；`tools` 自定义工具栏，可以通过`toolsStyle`和`toolsArr`属性使用 | string | selection/index/expand | — |
| index | 如果设置了 `type=index`，可以通过传递 `index` 属性来自定义索引 | number, Function(index) | - | - |
| column-key | column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 | string | — | — |
| label | 显示的标题 | string | — | — |
| prop | 对应列内容的字段名 | string | — | — |
| width | 对应列的宽度 | string | — | — |
| min-width | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列 | string | — | — |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string, boolean | true, left, right | — |
| render-header | 列标题 Label 区域渲染使用的 Function | Function(h, { column, $index }) | — | — |
| sortable | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件 | boolean, string | true, false, 'custom' | false |
| sort-method | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致 | Function(a, b) | — | — |
| sort-by | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 | String/Array/Function(row, index) | — | — |
| sort-orders | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序 | array | 数组中的元素需为以下三者之一：`ascending` 表示升序，`descending` 表示降序，`null` 表示还原为原始顺序 | ['ascending', 'descending', null] |
| resizable | 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真） | boolean | — | true |
| formatter | 用来格式化内容 | Function(row, column, cellValue, index) | — | — |
| show-overflow-tooltip | 当内容过长被隐藏时显示 tooltip | Boolean | — | false |
| align | 对齐方式 | String | left/center/right | left |
| header-align | 表头对齐方式，若不设置该项，则使用表格的对齐方式 | String | left/center/right | — |
| class-name | 列的 className | string | — | — |
| label-class-name | 当前列标题的自定义类名 | string | — | — |
| selectable | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | Function(row, index) | — | — |
| reserve-selection | 仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 `row-key`） | Boolean | — | false |
| filters | 数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。 | Array[{ text, value }] | — | — |
| filter-placement | 过滤弹出框的定位 | String | 与 Tooltip 的 `placement` 属性相同 | — |
| filter-multiple | 数据过滤的选项是否多选 | Boolean | — | true |
| filter-method | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。 | Function(value, row, column) | — | — |
| filtered-value | 选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。 | Array | — | — |
| *扩展参数*      | *说明*          | *类型*  | *可选值*       | *默认值*  |
| isSlot | 是否可插槽 使用template在最外层定义 插槽名称#prop  | boolean   | - | - |
| isSlotHeader | 是否可表头插槽 使用template 插槽名称 #prop + '-header' | boolean | - | - |
| toolsStyle | 当type为'tools'时有效 设置工具button的父级的样式 | function | () => Record<string, string> | - |
| toolsArr | 定义工具列的内容 | Array | Array<{ label: string // btn文字， style?: () => Record<string, string> // 设置当前btn的样式， click?: (row: Record<string, any>, index: number) => any // 绑定点击事件 }> | - |
| column | 用与多级表头嵌套 | array | 内部对象同column |  - |


### Table Scoped Slot
| name | 说明 |
|------|--------|
| append | 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。 |
| empty | 当数据为空时自定义的内容 |
| expend-slot | 展开行的内容 |
| 对应prop名称 | 自定义列的内容,需要对应配置像设置 `isSlot` 参数为`true`，参数为 { scope: { row, column, $index }, item: object(对应配置像对象) } |
| ${prop}-header | 自定义表头的内容， 需要对应配置像设置 `isSlotHeader` 参数为`true`. 参数为 { scope: { column, $index }, item: object(对应配置像对象) } |
