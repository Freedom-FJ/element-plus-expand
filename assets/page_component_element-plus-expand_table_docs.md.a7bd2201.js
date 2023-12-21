import{_ as d,J as e,o as r,c as o,N as a,V as l}from"./chunks/framework.2f197f38.js";const x=JSON.parse('{"title":"Table 属性：","description":"","frontmatter":{},"headers":[],"relativePath":"page/component/element-plus-expand/table/docs.md","filePath":"page/component/element-plus-expand/table/docs.md","lastUpdated":1703128693000}'),n={name:"page/component/element-plus-expand/table/docs.md"},c=l('<h1 id="table-属性" tabindex="-1">Table 属性： <a class="header-anchor" href="#table-属性" aria-label="Permalink to &quot;Table 属性：&quot;">​</a></h1><h2 id="_1-原生element-plus-属性-与官方文档相同" tabindex="-1">1.原生element-plus 属性 （与官方文档相同) <a class="header-anchor" href="#_1-原生element-plus-属性-与官方文档相同" aria-label="Permalink to &quot;1.原生element-plus 属性 （与官方文档相同)&quot;">​</a></h2><p>如需查看 element-plus 的 Table 属性，请参考：<a href="https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer">element-plus</a> 变动属性：<br><code>data</code> 属性变成 <code>tableData</code></p><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>tableData</td><td>显示的数据</td><td>array</td><td>—</td><td>—</td></tr><tr><td>height</td><td>Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>max-height</td><td>Table 的最大高度。合法的值为数字或者单位为 px 的高度。</td><td>string/number</td><td>—</td><td>—</td></tr><tr><td>stripe</td><td>是否为斑马纹 table</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>border</td><td>是否带有纵向边框</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>Table 的尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>fit</td><td>列的宽度是否自撑开</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-header</td><td>是否显示表头</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>highlight-current-row</td><td>是否要高亮当前行</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>current-row-key</td><td>当前行的 key，只写属性</td><td>String,Number</td><td>—</td><td>—</td></tr><tr><td>row-class-name</td><td>行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。</td><td>Function({row, rowIndex})/String</td><td>—</td><td>—</td></tr><tr><td>row-style</td><td>行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。</td><td>Function({row, rowIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>cell-class-name</td><td>单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。</td><td>Function({row, column, rowIndex, columnIndex})/String</td><td>—</td><td>—</td></tr><tr><td>cell-style</td><td>单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。</td><td>Function({row, column, rowIndex, columnIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>header-row-class-name</td><td>表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。</td><td>Function({row, rowIndex})/String</td><td>—</td><td>—</td></tr><tr><td>header-row-style</td><td>表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。</td><td>Function({row, rowIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>header-cell-class-name</td><td>表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。</td><td>Function({row, column, rowIndex, columnIndex})/String</td><td>—</td><td>—</td></tr><tr><td>header-cell-style</td><td>表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。</td><td>Function({row, column, rowIndex, columnIndex})/Object</td><td>—</td><td>—</td></tr><tr><td>row-key</td><td>行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：<code>user.info.id</code>，但不支持 <code>user.info[0].id</code>，此种情况请使用 <code>Function</code>。</td><td>Function(row)/String</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>空数据时显示的文本内容，也可以通过 <code>slot=&quot;empty&quot;</code> 设置</td><td>String</td><td>—</td><td>暂无数据</td></tr><tr><td>default-expand-all</td><td>是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>expand-row-keys</td><td>可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。</td><td>Array</td><td>—</td><td></td></tr><tr><td>default-sort</td><td>默认的排序列的 prop 和顺序。它的<code>prop</code>属性指定默认的排序的列，<code>order</code>指定默认排序的顺序</td><td>Object</td><td><code>order</code>: ascending, descending</td><td>如果只指定了<code>prop</code>, 没有指定<code>order</code>, 则默认顺序是ascending</td></tr><tr><td>tooltip-effect</td><td>tooltip <code>effect</code> 属性</td><td>String</td><td>dark/light</td><td></td></tr><tr><td>show-summary</td><td>是否在表尾显示合计行</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>sum-text</td><td>合计行第一列的文本</td><td>String</td><td>—</td><td>合计</td></tr><tr><td>summary-method</td><td>自定义的合计计算方法</td><td>Function({ columns, data })</td><td>—</td><td>—</td></tr><tr><td>span-method</td><td>合并行或列的计算方法</td><td>Function({ row, column, rowIndex, columnIndex })</td><td>—</td><td>—</td></tr><tr><td>select-on-indeterminate</td><td>在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>indent</td><td>展示树形数据时，树节点的缩进</td><td>Number</td><td>—</td><td>16</td></tr><tr><td>lazy</td><td>是否懒加载子节点数据</td><td>Boolean</td><td>—</td><td>—</td></tr><tr><td>load</td><td>加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息</td><td>Function(row, treeNode, resolve)</td><td>—</td><td>—</td></tr><tr><td>tree-props</td><td>渲染嵌套数据的配置选项</td><td>Object</td><td>—</td><td>&quot;{ hasChildren: &#39;hasChildren&#39;, children: &#39;children&#39; }&quot;</td></tr><tr><td>table-layout</td><td>设置表格单元、行和列的布局方式</td><td>string</td><td>fixed / auto</td><td>fixed</td></tr><tr><td>scrollbar-always-on</td><td>总是显示滚动条</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>flexible</td><td>确保主轴的最小尺寸</td><td>boolean</td><td>-</td><td>false</td></tr></tbody></table><h2 id="_2-table扩展属性" tabindex="-1">2.table扩展属性 <a class="header-anchor" href="#_2-table扩展属性" aria-label="Permalink to &quot;2.table扩展属性&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>column</td><td>表格配置项，数组内每个对象对应一个table-column的参数，详细见下column属性</td><td>Array</td><td>-</td><td>[]</td></tr><tr><td>api</td><td>请求方法,如果为空则不会请求,<code>传入方法要求：入口传参是请求参数，返回一个promise</code>,以下为可以搭配api自动请求可以传入的其他属性：<code>pageInit</code> 初始化页码的默认值 <code>pageReqExpr</code> 页面请求对应页码参数的名称<code>pageTotalExpr</code> 请求回传totol值对应在对象内的位置 <code>currentPageOffset</code> 当前页面偏移量 <code>resExpr</code> 请求回传对象对应的table数据在对象内的位置 <code>filterMethod</code> 对请求回传table数据进行过滤的回调函数<code>resPretreatment</code> 手动处理res回调 返回table表格数组(async) <code>reLoadTable</code> 手动请求方法<code>getTableData</code> 外层获取表格数据方法`</td><td>Function</td><td>-</td><td>-</td></tr><tr><td>isLazyRequest</td><td>在传了api属性后create时是否自动请求表格数据 <code>true</code>不自动请求 <code>false</code> 自动请求需要手动调用<code>reLoadTable</code>方法请求</td><td>Boolean</td><td>true/false</td><td>false</td></tr><tr><td>params</td><td>除了页码请求变量以外的搜索列表请求参数，需要响应式数据，每次列表请求都会解构并一起带上此对象内的参数</td><td>Object</td><td>-</td><td>{}</td></tr><tr><td>resExpr</td><td>请求回传对象对应的table数据在对象内的位置</td><td>string</td><td>-</td><td>&#39;&#39;</td></tr><tr><td>tableData</td><td>静态数据（当前页）,当api为空时不会自动请求table表格数据 此变量同el-table的data属性，以下为可以配合静态数据传入table的其他属性，<code>pageParams</code> 如果有页码需要传入页码变量，<code>pageInit</code> 初始化页码的值，<code>pageReqExpr</code> 页面请求对应页码参数的名称，<code>currentPageOffset</code> 当前页面偏移量例如第一页对应的传值为0，<code>page-change</code> 对应页码切换回调函数</td><td>Array</td><td>-</td><td>undefined</td></tr><tr><td>filterMethod</td><td>过滤数据方法,对于回传数据每条进行过滤操作 类似于js filter的回调函数</td><td>function</td><td>方法传参<code>row</code> 对应每条数据的对象，<code>index</code> 索引，<code>arr</code> 整个表格数组，返回值是<code>Boolean</code> true/返回 false/去除</td><td>undefined</td></tr><tr><td>resPretreatment</td><td>api自动请求模式res预处理方法 可异步需要传入async方法，可以用于将复杂的res回调处理成需要表格渲染的table数组，也可用于代替<code>resExpr</code>参数</td><td>Function</td><td>方法传入接口返回值，需要return table表格数组</td><td>—</td></tr></tbody></table><h2 id="_2-table-page-属性" tabindex="-1">2.table-page 属性 <a class="header-anchor" href="#_2-table-page-属性" aria-label="Permalink to &quot;2.table-page 属性&quot;">​</a></h2><p>其中原生同名属性同 el-pagination 属性</p><table><thead><tr><th>参数</th><th>说明 *******************************</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>pageBoxStyle</td><td>分页盒子样式</td><td>object</td><td>—</td><td>-</td></tr><tr><td>pageTotalExpr</td><td>总共数据条数对应在请求返回对象内位置,默认是total 也就是返回对象是 &quot;res: { total: 46, ... }&quot;, 这种形式</td><td>string</td><td>—</td><td>&#39;total&#39;</td></tr><tr><td>pageParams</td><td>静态组件时（api不传时）页码参数,组建会监听此参数，改变此变量内部组件会自动更新页面。当点击页码时可以通过page-change事件的返回跟新我们的页码参数，从而起到跟新页码的效果</td><td>object</td><td>&quot;{ pageSizes?: number currentPage?: number total?: number }&quot;</td><td>undefined</td></tr><tr><td>pageInit</td><td>初始化页码，页码的默认参数</td><td>object</td><td>&quot;{ pageSizes?: number currentPage?: number total?: number pageSizesArr: number[] }&quot;</td><td>&quot;{ pageSizes: 10, currentPage: 1, total: 0, pageSizesArr: [10, 20, 30, 50] }&quot;</td></tr><tr><td>pageReqExpr</td><td>当api不为空时需要传，用于定义请求对应页码参数的名称</td><td>object</td><td>&quot;{ pageSizes: string currentPage: string }&quot;</td><td>&quot;{ pageSizes: &#39;pageSize&#39;,currentPage: &#39;pageNum&#39; }&quot;</td></tr><tr><td>isShowPage</td><td>是否显示页码</td><td>boolean</td><td>true/false</td><td>true</td></tr><tr><td>pageLayout</td><td>分页按钮类型</td><td>String</td><td>total,sizes,prev, pager,next,jumper</td><td>&#39;total,sizes,prev, pager,next,jumper&#39;</td></tr><tr><td>currentPageOffset</td><td>当前页面偏移量 用于配合后端接口的传参的特殊情况，有些时候我们第一页后端需要传0而不是0的情况等等，比如我们后端需要传第一页是0，但是我们正常是1，则我们要传这个参数为-1，这样每一次我们请求的时候就会拿我们正常的情况去加上我们传递的值，第一页就是传0 + (-1),第二页就是1 + (-1)以此类推</td><td>Number</td><td>-</td><td>0</td></tr><tr><td>isShowPageback</td><td>是否显示页码按钮背景</td><td>Boolean</td><td>true/false</td><td>true</td></tr><tr><td>small</td><td>是否使用小型分页样式</td><td>Boolean</td><td>-</td><td>false</td></tr><tr><td>pagerCount</td><td>设置最大页码按钮数。页码按钮的数量，当总页数超过该值时会折叠</td><td>Number</td><td>-</td><td>7</td></tr></tbody></table><h2 id="_3-table-loading-属性" tabindex="-1">3.table-loading 属性 <a class="header-anchor" href="#_3-table-loading-属性" aria-label="Permalink to &quot;3.table-loading 属性&quot;">​</a></h2><p>原生同名属性同 el-loading 属性</p><table><thead><tr><th>参数</th><th>说明****************************************</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>isShowLoading</td><td>是否在表格显示加载图标</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>elementLoadingText</td><td>加载图标文字</td><td>string</td><td>—</td><td>&#39;Loading&#39;</td></tr><tr><td>elementLoadingBackground</td><td>背景遮罩的颜色</td><td>string</td><td>—</td><td>-</td></tr><tr><td>elementLoadingSvg</td><td>自定义加载图标 (与 element-loading-spinner 相同)</td><td>string</td><td>—</td><td>&#39;total&#39;</td></tr><tr><td>elementLoadingSvgViewBox</td><td>loading svg图标遮罩偏移位置 逗号分割 四个数组</td><td>string</td><td>—</td><td>-</td></tr></tbody></table><h2 id="table-events" tabindex="-1">Table Events <a class="header-anchor" href="#table-events" aria-label="Permalink to &quot;Table Events&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>select-all</td><td>当用户手动勾选全选 Checkbox 时触发的事件</td><td>selection</td></tr><tr><td>selection-change</td><td>当选择项发生变化时会触发该事件</td><td>selection</td></tr><tr><td>row-click</td><td>当某一行被点击时会触发该事件</td><td>row, column, event</td></tr><tr><td>sort-change</td><td>当表格的排序条件发生变化的时候会触发该事件</td><td>&quot;{ column, prop, order }&quot;</td></tr><tr><td>current-change</td><td>当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性</td><td>currentRow, oldCurrentRow</td></tr><tr><td>expand-change</td><td>当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）</td><td>row, (expandedRows | expanded)</td></tr><tr><td>page-change</td><td>页码点击回调</td><td>&quot;{ currentPage: number, total: number, pageSizes: number }&quot;</td></tr></tbody></table><h2 id="table-methods" tabindex="-1">Table Methods <a class="header-anchor" href="#table-methods" aria-label="Permalink to &quot;Table Methods&quot;">​</a></h2><p>同名方法同el-table方法<br> 部分变动属性：<code>toggleSelection</code>, <code>setCurrentRow</code></p><table><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>getTableData(扩展方法)</td><td>获取表格数据</td><td>types <code>undefine</code>： 不传则返回当前显示的数据内容, <code>number</code>则获取当前数据的索引数据，<code>all</code> 获取全部数据， <code>{ pageSizes: number, currentPage: number }</code> 获取对应页数据</td></tr><tr><td>reLoadTable(扩展方法)</td><td>请求数据(当传入<code>api</code>时)</td><td>—</td></tr><tr><td>setCurrentRow</td><td>设置选中行</td><td>row 选中那条数据，需要从请求回传表格数据中取，不然对象无法匹配相等；number 选中当前页数据的索引，不传则清空选中</td></tr><tr><td>toggleSelection</td><td>复选框手动调用方法</td><td><code>undefined</code>清除选中，<code>all</code> 全选获不全选会自动取反, <code>rows</code>传数组 可以是对应的对象（静态模式不可用对象）也可以是对应的index(0开始)选中对应列</td></tr><tr><td>getSelectionRows</td><td>获取复选框选中行</td><td>-</td></tr><tr><td>sort</td><td>手动对 Table 进行排序。参数<code>prop</code>属性指定排序列，<code>order</code>指定排序顺序。</td><td>prop: string, order: string</td></tr><tr><td>toggleRowExpansion</td><td>用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）</td><td>row:当前行的对象或者索引, expanded:true/false 是否展开</td></tr><tr><td>changeLoading</td><td>外部改变loading方法</td><td>true开始loading / false结束</td></tr><tr><td>clearSort</td><td>用于清空排序条件，数据会恢复成未排序的状态</td><td>-</td></tr><tr><td>clearFilter</td><td>传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器</td><td>columnKeys</td></tr><tr><td>doLayout</td><td>对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局</td><td>-</td></tr><tr><td>scrollTo</td><td>滚动到一组特定坐标</td><td>(options: ScrollToOptions</td></tr><tr><td>setScrollTop</td><td>设置垂直滚动位置</td><td>top</td></tr><tr><td>setScrollLeft</td><td>设置水平滚动位置</td><td>left</td></tr><tr><td>setPage <span class="vp-tag">0.8.16</span></td><td>手动设置页码</td><td><code>(page: { currentPage?: number, total?: number, pageSizes?: number }) =&gt; void</code></td></tr></tbody></table><h2 id="table-的-column-属性内部对象属性" tabindex="-1">Table 的 column 属性内部对象属性， <a class="header-anchor" href="#table-的-column-属性内部对象属性" aria-label="Permalink to &quot;Table 的 column 属性内部对象属性，&quot;">​</a></h2><p>对应element的<code>table-column</code>属性于el-table-column属性同名属性功能相同</p><table><thead><tr><th>参数</th><th>说明 ***************************************</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>对应列的类型。如果设置了 <code>selection</code> 则显示多选框；如果设置了 <code>index</code> 则显示该行的索引（从 1 开始计算）；如果设置了 <code>expand</code> 则显示为一个可展开的按钮,展开内容通过具名插槽<code>expand-slot</code>插入；<code>tools</code> 自定义工具栏，可以通过<code>toolsStyle</code>和<code>toolsArr</code>属性使用</td><td>string</td><td>selection/index/expand</td><td>—</td></tr><tr><td>index</td><td>如果设置了 <code>type=index</code>，可以通过传递 <code>index</code> 属性来自定义索引</td><td>number, Function(index)</td><td>-</td><td>-</td></tr><tr><td>column-key</td><td>column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>显示的标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prop</td><td>对应列内容的字段名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>对应列的宽度</td><td>string</td><td>—</td><td>—</td></tr><tr><td>min-width</td><td>对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列</td><td>string</td><td>—</td><td>—</td></tr><tr><td>fixed</td><td>列是否固定在左侧或者右侧，true 表示固定在左侧</td><td>string, boolean</td><td>true, left, right</td><td>—</td></tr><tr><td>render-header</td><td>列标题 Label 区域渲染使用的 Function</td><td>Function(h, { column, $index })</td><td>—</td><td>—</td></tr><tr><td>sortable</td><td>对应列是否可以排序，如果设置为 &#39;custom&#39;，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件</td><td>boolean, string</td><td>true, false, &#39;custom&#39;</td><td>false</td></tr><tr><td>sort-method</td><td>对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致</td><td>Function(a, b)</td><td>—</td><td>—</td></tr><tr><td>sort-by</td><td>指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推</td><td>String/Array/Function(row, index)</td><td>—</td><td>—</td></tr><tr><td>sort-orders</td><td>数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序</td><td>array</td><td>数组中的元素需为以下三者之一：<code>ascending</code> 表示升序，<code>descending</code> 表示降序，<code>null</code> 表示还原为原始顺序</td><td>[&#39;ascending&#39;, &#39;descending&#39;, null]</td></tr><tr><td>resizable</td><td>对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>formatter</td><td>用来格式化内容</td><td>Function(row, column, cellValue, index)</td><td>—</td><td>—</td></tr><tr><td>show-overflow-tooltip</td><td>当内容过长被隐藏时显示 tooltip</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>align</td><td>对齐方式</td><td>String</td><td>left/center/right</td><td>left</td></tr><tr><td>header-align</td><td>表头对齐方式，若不设置该项，则使用表格的对齐方式</td><td>String</td><td>left/center/right</td><td>—</td></tr><tr><td>class-name</td><td>列的 className</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label-class-name</td><td>当前列标题的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>selectable</td><td>仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选</td><td>Function(row, index)</td><td>—</td><td>—</td></tr><tr><td>reserve-selection</td><td>仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 <code>row-key</code>）</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>filters</td><td>数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。</td><td>Array[{ text, value }]</td><td>—</td><td>—</td></tr><tr><td>filter-placement</td><td>过滤弹出框的定位</td><td>String</td><td>与 Tooltip 的 <code>placement</code> 属性相同</td><td>—</td></tr><tr><td>filter-multiple</td><td>数据过滤的选项是否多选</td><td>Boolean</td><td>—</td><td>true</td></tr><tr><td>filter-method</td><td>数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。</td><td>Function(value, row, column)</td><td>—</td><td>—</td></tr><tr><td>filtered-value</td><td>选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。</td><td>Array</td><td>—</td><td>—</td></tr></tbody></table><table><thead><tr><th>扩展参数</th><th>说明 ***************************************</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>isSlot</td><td>是否可插槽 使用template在最外层定义 插槽名称#prop</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>isSlotHeader</td><td>是否可表头插槽 使用template 插槽名称 #prop + &#39;-header&#39;</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>toolsStyle</td><td>当type为&#39;tools&#39;时有效 设置工具button的父级的样式</td><td>function</td><td>() =&gt; Record&lt;string, string&gt;</td><td>-</td></tr><tr><td>toolsArr</td><td>定义工具列的内容,设置type: &#39;tools&#39;开启，按钮名称<code>label</code>，点击事件<code>click</code>，按钮样式<code>style</code>三个属性。</td><td>Array</td><td>Array&lt;{ label: string // btn文字， style?: () =&gt; Record&lt;string, string&gt; // 设置当前btn的样式， click?: (row: Record&lt;string, any&gt;, index: number) =&gt; any // 绑定点击事件 }&gt;</td><td>-</td></tr><tr><td>column</td><td>用与多级表头嵌套</td><td>array</td><td>内部对象同column</td><td>-</td></tr><tr><td>render <span class="vp-tag">0.8.16</span></td><td>自定义VNode</td><td>(scope: { row: Record&lt;string, any&gt;; $index: number; }, columnData: tableColumnTs) =&gt; (VNode / VNode[])</td><td>-</td><td>-</td></tr></tbody></table><h2 id="table-scoped-slot" tabindex="-1">Table Scoped Slot <a class="header-anchor" href="#table-scoped-slot" aria-label="Permalink to &quot;Table Scoped Slot&quot;">​</a></h2><table><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>append</td><td>插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。</td></tr><tr><td>empty</td><td>当数据为空时自定义的内容</td></tr><tr><td>expend-slot</td><td>展开行的内容</td></tr><tr><td><code>${prop}</code></td><td>自定义列的内容,需要对应配置像设置 <code>isSlot</code> 参数为<code>true</code>，参数为 { scope: { row, column, $index }, item: object(对应配置像对象) }</td></tr><tr><td><code>${prop}-header</code></td><td>自定义表头的内容， 需要对应配置像设置 <code>isSlotHeader</code> 参数为<code>true</code>. 参数为 { scope: { column, $index }, item: object(对应配置像对象) }</td></tr></tbody></table><h2 id="贡献者" tabindex="-1">贡献者： <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者：&quot;">​</a></h2>',24);function s(i,u,h,b,p,g){const t=e("ContributorView");return r(),o("div",null,[c,a(t,{name:"马佳辉"})])}const y=d(n,[["render",s]]);export{x as __pageData,y as default};
