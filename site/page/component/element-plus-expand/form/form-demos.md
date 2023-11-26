<!--
 * @Author: mjh
 * @Date: 2023-04-07 23:09:49
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-11 11:11:06
 * @Description: 
-->
# 组件思路
1. 用法:就是和原来`el-form`一样，`api`基本一致，就是把本来绑定在`el-form`的属性绑定在此组件上，把本来绑定在`el-form-item`上的属性通过`formOption`属性以数组的形式传入，数组内每个对象对应着每一列的`el-form-item`，上手较快。  
2. 当然也内置了一些按钮配置项，输入校验配置项，自定义切换输入模式和查看你模式等等。

# 例子

## 基本使用
`formOption` 属性就是我们form的配置项，数组内的每一个对象代表着一个form输入节点，所有对象内的属性都会传递到`el-form-item`上，所以与原element-plus属性全部相同。    
`type`: 这个属性代表输入框的类型，其参考[按钮类型](/page/component/element-plus-expand/form/docs.html#按钮类型)。  
`inputProps`：每一个对象上的按钮绑定属性，都在每一个对象上的这个对象内，其内部属性会全部传递到你的输入框上。  
`option`: 所有的选择列表数据都放在`formOption`的`option`属性内,并且都已经转为：`label`: 代表显示的文字，`value`：代表值。   
`value`: 当配置项对象内传入此值时，就是代表覆盖值，则其会直接覆盖原`prop` 对应传入象内的值。  
`defaultSelect`: 当`type: 'select'`，也就是单选框的时候，`defaultSelect`可以传入索引，代表默认选择的列。  
<demo src="./demos/fpi-form1.vue" ></demo>  

## 表单按钮
表单的按钮默认会有一个提交和取消按钮，分别对应`submit`和 `cancel`方法，前者会自动进行表单校验，后者会字段重置表单。如果有设置`value`则会自动恢复到其对应的值。  
所有方法的入参都是组件本身的实例。  
`formBtnOption`: 通过传入此项可以进行自定义的设置表格事件。  
`isShowBtnBox`: 可以设置 是否显示按钮。
<demo src="./demos/fpi-form12.vue" ></demo>  

## 表格校验
`rules`: `formOption`每个对象内传入`rules`就可以产生多种校验规则。  
组件内部内置了一些rule的语法糖，内部含有`email, date, select, unNull, number, phone, checkbox, `，只需要转入对应字符串，或者`,`分隔组合字符串，或者以此作为`key`，值为 `string` 类型来替换其默认的错误提示 `message`。详情请查看 [rule语法糖](/page/component/element-plus-expand/form/docs.html#rule%E8%AF%AD%E6%B3%95%E7%B3%96)。  
当然也可以自定义传入规则，或者在`FpiElForm` 上传入`rules`规则。  
`trigger` form传入此属性用于设置整个form 的 语法糖默认的校验触发时机 `change`| `blur`。
<demo src="./demos/fpi-form2.vue" ></demo>  

## 输入框的使用
`isFocus`: 该属性可以让默认获取焦点。  
`inputLimit`: 输入限制属性是一个语法糖，可以帮我们方便的完成输入的限制功能，当然也支持`回调函数形式`，进行自定义设置。详情[输入限制](/page/component/element-plus-expand/form/docs.html#_1-2-inputlimit)。  

<demo src="./demos/fpi-form3.vue" ></demo>  


## col的使用
`col`: 属性可以让我们自定义一行内多个按钮的大小以及间隔，`span`就代表这个按钮在这一行占的大小，沾满是`24`。  
`gutter`: 代表间隔，默认是 `0`。  
`vHtml`: 当设置 `type: 'dom'` 时，此行就可以使用此属性传入一个html的字符串实现自定义中间间隔内容。
::: warning 
注意：`col`内的input最好不要设置 label 属性不然会出现 input的空间被 label占去大半的情况, 如果想设置多个请看下一个例子。
:::
<demo src="./demos/fpi-form4.vue" ></demo>  

## col一行多个label
::: tip 
此项需要配合样式设置 `el-form-item__content`的样式为 `margin-left: 0 ` 才能实现，不然左边会有很多的空隙。
:::
<demo src="./demos/fpi-form8.vue" ></demo>  



## 自定义rules
这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。  

本例还使用status-icon属性为输入框添加了表示校验结果的反馈图标。
<demo src="./demos/fpi-form5.vue" ></demo>  

## 添加/删除表单项
除了一次通过表单组件上的所有验证规则外. 您也可以动态地通过验证规则或删除单个表单字段的规则。  
`prop`: 此属性可以以字符串的形式通过`.`分割获取到对象内各种位置的属性，所以不用担心对象多级嵌套的情况。
<demo src="./demos/fpi-form6.vue" ></demo>  


## 尺寸控制和对齐方式
根据你们的设计情况，来选择最佳的标签对齐方式。  
通过设置 label-position 属性可以改变表单域标签的位置，可选值为 top、left， 当设为 top 时标签会置于表单域的顶部。  
表单中的所有子组件都继承了该表单的 `size` 属性。 同样，`formOption` 也有一个 `size` 属性。
如果希望某个表单项或某个表单组件的尺寸不同于 `Form` 上的 `size` 属性，直接为这个表单项或表单组件设置自己的 `size` 属性即可。
<demo src="./demos/fpi-form7.vue" ></demo>  


## 插槽使用
`slot`：设置此属性可以开启自定义插槽`input`， 插槽名称就是此项对应的`prop`值。  
`labelSlot`：设置此属性可以开启自定义插槽`label`，插槽名称就是此项对应的`${prop}-label`。
<demo src="./demos/fpi-form9.vue" ></demo>  


## 一键切换文字显示
`is-text`：设置此属性可以开启文字显示模式，所有input输入框都会转化成文字，配合设置`:form-btn-option="[]"`隐藏按钮，用于查看模式。  
表单配置项内的`value`属性会失效，不会替换掉显示的值。（当然也可以单独设置某一个option内的 `{ type: 'text' }`，设置为文本格式。）  
样式：修改样式可以 使用 `textStyle` 或者 `inputProps: { style: { ... } }` 也可以 样式穿透 class `fpi-el-form-text` 自定义文本样式
<demo src="./demos/fpi-form10.vue" ></demo>  

## input前后缀
当`type: 'input'`时，其支持`prepend,append,empty,suffixIcon,suffix,prefixIcon,prefix`插槽，内部可以传入`vue组件`，或者`h函数`创建的dom节点等等。
<demo src="./demos/fpi-form11.vue" ></demo>  

## 表单分割线
设置`isLine: true`开启，可以设置 `lineLabel` 设置分割线文字，当然也可以使用 `lineLabelStyle`, `lineStyle` 来分别设置分割线的文字和分割线样式。
<demo src="./demos/fpi-form13.vue" ></demo>  

## 获取输入节点实例
需要先获取`fpiElForm`实例，然后获取`refInput`属性，其包含所有的`form`内部节点的`dom`对象，相应的节点就是该节点对应的`props`的值，也就是： `fpiElForm.refInput[props]`。
<demo src="./demos/fpi-form14.vue" ></demo>  


## 贡献者：

<ContributorView name="马佳辉"></ContributorView>