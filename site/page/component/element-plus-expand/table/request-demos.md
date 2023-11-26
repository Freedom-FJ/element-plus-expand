<!--
 * @Author: mjh
 * @Date: 2023-04-05 00:29:28
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-19 11:37:01
 * @Description: 
-->
# 前沿
自动请求的核心就是通过给表格传入api属性，可以实现自动请求数据并渲染的功能，彻底解放前端。另外在项目中加以封装就可以实现彻底的表格后端配置化，使用起来也是很方便请看下面的示例。

# 例子

## 传入api属性
给`FpiElTable`组件传入 `api`属性就可以实现字段请求功能。`api` 属性入口必须是一个方法，且返回值内包含表格所要显示的 `tableData`数据，方法的入口可以提供一个params参数，用于获得请求传参，配合项目中封装好的接口 `api`可以实现很好的自动请求功能。  
`params`: 代表除页码参数以外的请求参数，注意如果想传入会动态改变的请求参数那params必须是`响应式`的对象
`resExpr` 代表表格数据在请求返回值中的位置，默认是 `data`
<demo src="./api-demos/fpi-table1.vue" ></demo>  

## 默认不请求
传入 `isLazyRequest` 属性，可以让表格默认不请求接口，配合表格的 `reLoadTable` 方法，主动触发表格获取数据。  
当 `params` 改变时也可以手动触发`reLoadTable` 方法，更新表格数据。
<demo src="./api-demos/fpi-table2.vue" ></demo>  

## 页码的使用
`pageReqExpr`:可以设置相应的页码参数转化成请求中的传参的key值，默认是： `{ pageSizes: 'pageSize', currentPage: 'pageNum' }`  
`page-init`: 内可以传入需要初始化的页码数据，比如第几页，页面size，默认是：`{ pageSizes: 10, currentPage: 1, total: 0, pageSizesArr: [10, 20, 30, 50] }`  
`page-total-expr`: 参数对应的是`total`参数在返回对象中的位置，默认为 `'total'`， [页码事件看文档](/page/component/element-plus-expand/table/docs.html#table-events)
 ^(0.8.16) `setPage`:  方法可以用于手动设置组件的当前页码参数并更新，入参是 
```ts
{
    pageSizes?: number // 每页显示条数
    currentPage?: number // 当前页
    total?: number // 总共多少条数据
}
```
也可以传入 `pageParams`，组件会动态监听其变化来更新内部页码参数，但是需要主动促发`reLoadTable` 方法更新数据。
<demo src="./api-demos/fpi-table3.vue" ></demo>  

## 页码默认偏移
`current-page-offset`: 但我们请求的页码，第一页所请求需要传入的页码并不是1而是0，或者其他时就需要传入页码偏移参数，代表实际页码参数相对于我们1的偏移值。  
比如： 我们请求的第1页，需要传的参数是0，那我们就传入`:current-page-offset="-1"`。
<demo src="./api-demos/fpi-table4.vue" ></demo>  

## 过滤数据方法
`filterMethod`: 对于回传数据每条进行过滤操作 类似于js `filter`的回调函数,方法参数是：`row` 对于每条数据的对象,`index` 索引,`arr` 整个表格数组。  
方法返回一个布尔值，`true/返回`  `false/去除`。此方法可以很好的帮我们处理返回参数。
<demo src="./api-demos/fpi-table5.vue" ></demo>  

## res预处理方法
`resPretreatment`:api自动请求模式res预处理方法 可异步,需要传入async方法。  
可以用于将复杂的res回调处理成需要表格渲染的table数组,也可用于代替resExpr参数。  
方法入口是请求返回参数，方法要求返回值为table表格数组，用于显示表格。
<demo src="./api-demos/fpi-table6.vue" ></demo>  

## 获取表格数据
`getTableData`: 对于api自动请求，那我们如果要获取表格数据的话就需要调用此方法，此方法可以传入一个参数：
> `undefined` 获取当前显示的全部数据  
> `'all'` 获取全部数据，如果分页的话会主动请求接口获取 total 数量对应的数据  
> `number` 获取当前页第几条数据  
> `{ pageSizes: number, currentPage: number }` 获取对应页的，对应size条数据
<demo src="./api-demos/fpi-table7.vue" ></demo>  



## 贡献者：

<ContributorView name="马佳辉"></ContributorView>
