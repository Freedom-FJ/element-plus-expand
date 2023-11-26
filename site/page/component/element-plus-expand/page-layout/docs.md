# fpi-el-page-layout PC端管理系统通用的布局组件

## 基础使用
> 内容传送到了内置了default插槽
<demo src="./demos/demo1.vue"></demo>

## 内置返回&Tabs
<demo src="./demos/demo2.vue"></demo>

## 内置插槽
<demo src="./demos/demo3.vue"></demo>

## 自定义内容区多列
> 如果定义了columns, 则内置的default插槽无法使用
<demo src="./demos/demo4.vue"></demo>

## 属性
| 参数                      | 说明                                                     | 类型           | 可选值     | 默认值         |
| ------------------------ | -------------------------------------------------------- | ------------- | --------- | ------------- |
| title          | 标题          | string          |   可选       |          | 
| showBack         | 是否显示返回按钮          | boolean          | 可选         | false          | 
| showTabs         | 是否展示tabs组件          | boolean       |    可选     | false         | 
| tab / v-model:tab         | 选择的tab         | string          |     可选      |          | 
| tabs       | 定义头部tabs内的数据          | {name: string; code: string;}[]          |   可选       | []          | 
| columns       | 主内容区定义分割布局          | ColumnsItem[]          |    可选      | []          | 

### ColumnsItem
| 名称                      | 说明                                                     | 类型           | 可选值     | 默认值         |
| ------------------------ | -------------------------------------------------------- | ------------- | --------- | ------------- |
| slotName          | 插槽名称          | string          |    必填      |          | 
| defaultWidth         | 默认宽度  (最后一列时无效)        | number          | 可选         | 200          | 
| maxWidth         | 最大宽度   (最后一列时无效)       | number       |    可选       |          | 
| minWidth         | 最小宽度  (最后一列时无效)       | number          |     可选      |          | 
| style       | 样式          | CSSProperties          |    可选      |           | 
| class       | 类名          | string          |          |           | 
| hideBorder       | 是否隐藏边 (最后一列时无效)      | boolean          |      可选    |   false        | 
| disableDrag       | 是否禁止拖动 (最后一列时无效)         | boolean          |     可选     |    false       | 


## 事件
| 名称                      | 说明                                                     | 类型           |
| ------------------------ | -------------------------------------------------------- | ------------- |
| update:tab       | 修改tab值         | (tab: string) => void          |
| back      | 点击返回按钮         | () => void          |

## 插槽
| 名称                      | 说明                                                     |
| ------------------------ | -------------------------------------------------------- |
| header-left       | 头部标题左侧         |
| header-right       | 头部右侧         |
| default       | 默认插槽（无columns数据时有效）         |
| 动态插槽 columns -> slotName       | 可以插入定义的内容区        |
## 贡献者：
<ContributorView name="李国帝"></ContributorView>
