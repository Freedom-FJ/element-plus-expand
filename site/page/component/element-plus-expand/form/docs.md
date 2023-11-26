
# fpi-el-form 组件属性：
## 1.基本属性
同原生element-plus [form](https://element-plus.org/zh-CN/component/form.html#form-attributes) 属性 （与官方文档相同)
## 2.扩展属性：
| 参数      | 说明         | 类型       | 默认值  |
|---------- |-------------- |---------- |-------- |  
| formOption | form配置项属性，对应每一条form-item组件，以下会详细讲解 | Array | [] |
| formBtnOption | 表单按钮配置项,对应生成表但末尾的按钮操作，以下会详细讲解 | btnOptionTs | [] |
| btnBoxStyle | 按钮盒子样式 | Object | -- |
| modelValue | 表单v-model 对象，对应整个form关联变量对象 | Object| -- |
| labelWidth | 标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。 | String | '120px' |
| isText | 是否是文本形式表单，用于切换编辑和查看模式 | true/false | false |
| isShowBtnBox ^(0.7.5) | 是否显示按钮 | true/false | true |
| trigger ^(0.7.5) | 设置整个form 的语法糖默认的校验触发时机  | `change`/`blur` | `change` |


## formBtnOption
| 参数      | 说明         | 类型       | 默认值  |
|---------- |-------------- |---------- |-------- |  
| type | 对应el-button类型 | 'primary'/'success'/'warning'/'danger'/'info'/'text' | -- |
| label | 按钮内部文字 | string | -- |
| size | 按钮大小 | 'large'/'default'/'small' | -- |
| click | 点击事件 | Function /'submit'/'cancel'| -- |

# 事件
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| submit | 表单提交默认方法 | -- |
| cancel | 表单取消默认方法 | -- |

# 方法
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| getFormData | 获取表单obj变量 | -- |
| getForm | 获取 form dom | -- |
| validate | 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。 | -- |
| validateField | 验证具体的某个字段。 | -- |
| resetFields | 重置该表单项，将其值重置为初始值，并移除校验结果。 | -- |
| scrollToField | 滚动到指定的字段 | -- |
| clearValidate | 清理某个字段的表单验证信息 | -- |
| refInput | 获取内部input dom节点，对应input节点名称为设置的key值,formRef.refInput[key] | -- |

# formOption数组内部对象可选值 属性详解
## 1.基本属性
| 参数      | 说明         | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |  
| prop | 对应v-model对象内的key值，也就是变量名称。支持多级，如：`obj.name`, `0.key` | string | -- |
| label | 输入框标题 | string | string | -- |
| labelWidth | 标签宽度，例如 '50px'。 可以使用 auto。 |  string/number| -- |
| required | 是否为必填项，如不设置，则会根据校验规则确认 | boolean | false |
| rules | 自定义规则，内部定义一些语法糖，可以方便使用，下面会详细解释 | Array/staticRulesKeyTs/Object | -- |
| error | 表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。  | string | -- |
| inlineMessage | 是否显示校验错误信息。  | boolean | true |
| showMessage | 是否在行内显示校验信息。  | boolean | false |
| size | 用于控制该表单域下组件的默认尺寸 | 'large'/'default'/'small' | 'default' |
| for | 和原生标签相同能力 | string| -- |
| validateStatus | 校验的状态 | ''/'error'/'validating'/'success' | -- |
## 2.扩展属性：
| 参数      | 说明         | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |  
| type | 按钮类型 | fromTypeTs | -- |
| value | 默认值 | any| -- |
| slot | 是否使用form插槽 true 时 此form-item 内部的输入框会可以由外部样式插入, 详细插槽见下方使用 | boolean| -- |
| labelSlot | 是否使用label插槽 true 时 此form-item 内部的label会可以由外部样式插入 | boolean| -- |
| defaultSelect | select类型 默认选中的索引 | number| -- |
| itemRules | form item单独设置的rules  这个于rules属性重复后期升级可能会用到 | Array| -- |
| option | 选择项列表 | Array| -- |
| inputWidth | 输入框盒子大小 | string| -- |
| textStyle ^(0.7.5) | 当type: 'text' 或者 form 绑定 is-text时设置样式 | Object | -- |
| inputProps | 对应直接绑定在input上的属性，详细见下 | inputPropsTs| -- |
| col |  内部嵌套 对应element的col组件 | formItemTs[] | -- |
| span |  col列内部属性 对应传的数组代表占整行的百分比 24是100% 12是50% 以此类推 | number | -- |
| gutter |  col列内部属性 对应element的row组建的间隔属性 | number | -- |
| vHtml |  col列内部属性 自定义dom内容 当key不传的时候使用 | () => string | -- |
| isLine |  是否是分割线 | boolean | -- |
| lineLabel |  分割线文字 | string | -- |
| lineLabelStyle |  分割线文字样式 | record | -- |
| lineStyle |  分割线样式 | record | -- |



## 按钮类型
```
fromTypeTs =
    | 'time-picker' // 时间选择 el-time-picker
    | 'date-picker' // 日期选择 el-date-picker
    | 'select' // 下拉选择 el-select
    | 'input' // 输入框 el-input
    | 'checkbox'// 复选 el-checkbox
    | 'radio'// 单选 el-radio
    | 'textarea'// 多行输入 el-textarea
    | 'switch'// 开关 el-switch
    | 'dom'// 自定义渲染dom
    | 'input-number'// 计数器 el-input-number
```


### rule语法糖
`trigger` form传入此属性用于设置整个form 的 语法糖默认的校验触发时机 `change`| `blur`。

```
'email' 邮箱验证 { type: 'email',required: true, message: '请输入正确的邮箱格式', trigger: 'change' },
'date' 日期验证 { required: true, message: '请选择时间', trigger: 'change' },
'select' 单选验证 { required: true, message: '请选择', trigger: 'change' },
'unNull' 不为空 { required: true, message: '不能为空', trigger: 'change' }
'number' 数字 { type: 'number', message: '请输入数字值', trigger: 'change' },
'phone' 手机号验证 { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' },
'checkbox' 复选验证 { type: 'array', required: true, message: '请至少选择一项', trigger: 'change' } ｜

--------------------------------------------

string // 以上可以任意逗号分割组合 

--------------------------------------------

{
   email: '自定义message',
   unNull: '自定义message',
   .........
}

```
# 控制和设置内部输入框
::: tip 
1. 对于内部没有二级嵌套的组件，如`input，switch，time-picker， input-number，date-picker`，其会继承全部 `inputProps`内的属性。
2. 对于有二级的组件的，比如 `select`对应有：`el-select` 和 `el-option`，则`el-select`会继承全部 `inputProps`内的属性，而每一个`el-option`对应`option`内的每个对象，其会全部继承其属性。其他还有`radio,check`，都只需要设置 `inputProps` 和 `option`属性即可。
3. 所有的内部输入框事件也都是继承在`inputProps`内，只需要在事件名称改为驼峰前加`on`即可，比如：`onChange: (val) => void 0`
4. 使用输入节点方法： 需要获取输入节点的dom,所以需要先获取`fpiElForm`实例，然后获取`refInput`属性，其包含所有的`form`内部节点的`dom`对象，相应的节点就是该节点对应的`props`的值，也就是： `fpiElForm.refInput[props]`。
5. 所有选择框都封装为`option` 内显示文字为 `label` ,值为 `value`, 选择列表单独显示文字：`selectLabel`。
6. `optionExpr` ^(0.7.6)：格式`inputProps: { optionExpr: { value?: string, label?: string, selectLabel?: string } }`。可以设置修改 `option` 内的变量在对象内的 key 名称。
:::

示例： 
```
const tableOption = [
    {
        type: 'checkbox',
        prop: 'data1',
        label: 'Checkbox',
        option: [
            {   
                value: '1'
                label: 'label'
                onClick: val => console.log('onClick')
            }
        ],
        inputProps: {
            clearable: true,
            placeholder: '测试',
            size: 'small',
            onChange: val => console.log('onChange')
        }
    }
]
```

# inputPropsTs

## 1.input
所有`inputProps`内的属性都会传递到 `input` 上。


### 1.1 input 属性
所有[el-input](https://element-plus.org/zh-CN/component/input.html#attributes)属性都继承了，以下只介绍修改或者扩展属性
| 参数      | 说明         | 类型      | 默认值  |
|---------- |-------------- |---------- |-------- |  
| inputLimit | 输入校验，方法时，如参是输入，出参为过滤后的参数，InputLimitTs为定义好的语法糖 | function/InputLimitTs | -- |
| prefix | el-input插槽 | VNode | -- |
| suffix | el-input插槽 | VNode | -- |
| prefixIcon | el-input插槽 | VNode | -- |
| suffixIcon | el-input插槽 | VNode | -- |
| prepend | el-input插槽 | VNode | -- |
| append | el-input插槽 | VNode | -- |
| isFocus | 是否默认获取焦点 | boolean | -- |

### 1.2 InputLimit
设置`inputLimit` 内的值为以下字符串可以对输入进行限制，当然也支持回调函数形式，进行自定义设置。
```
'number' // 数字
| 'int' // 整数
| 'positive-int' // 正整数
| 'negative-int' // 负数整数
| 'positive-number' // 正数
| 'negative-number' // 负数

or 

function (val) => val

```
### 1.3 事件
支持全部el-input[事件](https://element-plus.org/zh-CN/component/input.html#events)，只需要改为驼峰再其前面加上`on`, 就可以。
| 事件名 | 说明 | 类型 |
| ---- | ---- | ---- |
| onBlur | 当选择器的输入框失去焦点时触发 | `(event: FocusEvent) => void` |
| onFocus | 当选择器的输入框获得焦点时触发 | `(event: FocusEvent) => void` |
| onChange | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 | `(value: string | number) => void` |
| onInput | 在 Input 值改变时触发 | `(value: string | number) => void` |
| onClear | 在点击由 clearable 属性生成的清空按钮时触发 | `() => void` |

## 2 select
所有`inputProps`内的属性都会传递到 `el-select` 上，支持全部`el-select`属性，事件只需在原事件名称改为驼峰加 `on`即可。  
`el-option` 属性只需在 `option` 内每个对象设置相应的值就可以绑定到相应的 `el-option`上，其支持全部 `el-option` 属性。  
详情请参考 element-plus 原文档[el-select](https://element-plus.org/zh-CN/component/select.html#select-attributes)。 


## 3 Checkbox
1. 所有`inputProps`内的属性都会传递到 `checkboxGroup` 上，所有 `option`内的属性都会传递到 `Checkbox` 或者 `CheckboxButton` 上。  
2. 支持全部 Checkbox 全部事件，只需在其`option` 内对应的对象内设置事件名称的属性，前面加上on就可以。  
3. 开启`CheckboxButton`模式只需将`inputProps`内的`type`属性设置为`type: 'button'` 即可。
4. `option` 内显示文字为 `label` ,值为 `value`。  
详情请参考 element-plus 原文档 [checkbox](https://element-plus.org/zh-CN/component/checkbox.html#checkboxgroup-attributes)。  


## 4 input-number (计数器)
所有`inputProps`内的属性都会传递到 `input-number` 上，事件只需在原事件名称改为驼峰加 `on`即可。  
详情请参考 element-plus 原文档 [input-number](https://element-plus.org/zh-CN/component/input-number.html#attributes)。  

## 5 DatePicker
所有`inputProps`内的属性都会传递到 `DatePicker` 上，事件只需在原事件名称改为驼峰加 `on`即可。  
详情请参考 element-plus 原文档 [DatePicker](https://element-plus.org/zh-CN/component/date-picker.html#attributes), [datetime-picker](https://element-plus.org/zh-CN/component/datetime-picker.html#attributes)。  
## 6 radio
所有`inputProps`内的属性都会传递到 `el-radio-group` 上，支持全部`el-radio-group`属性，事件只需在原事件名称改为驼峰加 `on`即可。  
el-radio and el-radio-button 属性只需在 `option` 内每个对象设置相应的值就可以绑定到相应的 `el-radio` 或者 `el-radio-button` 上，其支持全部 `el-radio` 属性。  
开启`el-radio-button`模式只需将`inputProps`内的`type`属性设置为`type: 'button'` 即可。  
详情请参考 element-plus 原文档[el-radio](https://element-plus.org/zh-CN/component/radio.html#radiogroup-attributes)。 


## 7 switch
所有`inputProps`内的属性都会传递到 `el-switch` 上，支持全部`el-switch`属性，事件只需在原事件名称加 `on`即可。  
详情请参考 element-plus 原文档[el-switch](https://element-plus.org/zh-CN/component/switch.html#%E5%B1%9E%E6%80%A7)。 

## 8 TimePicker
所有`inputProps`内的属性都会传递到 `el-TimePicker` 上，支持全部`el-TimePicker`属性，事件只需在原事件名称改为驼峰加 `on`即可。  
详情请参考 element-plus 原文档[el-TimePicker](https://element-plus.org/zh-CN/component/time-picker.html#timepicker-%E5%B1%9E%E6%80%A7)。 





## btnOptionTs配置项（直接绑定在form上）
btnOptionTs （object[]）,内部的每一个对象代表着一个 `el-button`, 其会继承全部对象内的属性，[el-button](https://element-plus.org/zh-CN/component/button.html#button-attributes)。  
事件只需要在原事件名称改为驼峰前加一个 `on` 即可， 例如： `@click => onClick, @dblclick => ondblclick`。
默认如下：`onClick`有默认封装好 `submit` and `cancel`事件，前者会自动校验表单，成功才会回调，后者会重置表单为最初值，清除校验（如果有设置value会恢复到value值）。  
所有`onClick`事件都会默认传入两个参数，第一个是`fpiElForm`实例本身，第二个是点击时间原参数`Event`,其他方法维持原事件参数。  
```
{
    type: 'primary',
    label: '提交',
    onClick: 'submit'
},
{
    label: '取消',
    onClick: 'cancel'
}
```


## form Scoped Slot
| name | 说明 |
|------|--------|
| default ^(0.8.15) | 默认插槽，会放在按钮和option输入列表中间，占满整行 |
| `${slotLine}` ^(0.8.16) | 设置 `slotLine: 'name'` 定义的名称就是此option会为外部预留一个具名插槽，用于自定义这一整行，插槽名称就是 `slotLine`的值，记得不要和其他的`prop` 值重复哦！插槽入参为 { formItem } |
|  `${prop}` | 自定义输入框的内容,需要对应配置像设置 `slot` 参数为`true`，插槽入参为 { formItem } |
| `${prop}-label` | 自定义输入框文案的内容， 需要对应配置像设置 `labelSlot` 参数为`true`. 插槽入参为  { formItem } |  



## 贡献者：

<ContributorView name="马佳辉"></ContributorView>