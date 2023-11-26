<!--
 * @Author: mjh
 * @Date: 2023-05-11 10:41:51
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-25 20:45:34
 * @Description: 
-->
# fpi-el-grid-progress-bar 分隔进度条组件 ^(0.8.1)

::: tip
当前组件在 element-plus-expand 0.8.1 版本后正式部署
:::

## 基础演示
设置 `value` 为 0～100 之间的数字就可以显示进度条组件的进度，设置选中的颜色 `check-color`, 和盒子的颜色 `default-box-back`。
<demo src="./demos/bar1.vue"></demo>

## 分隔进度
设置 `grid-mid` 可以让本来连贯的进度变成分隔开来，设置 `grid-width` 的宽度可以设置每一个小格子的宽或者高。
<demo src="./demos/bar2.vue"></demo>


## 倾斜进度条
设置 `grid-rotate` 倾斜角度可以实现斜着的分隔。
<demo src="./demos/bar3.vue"></demo>

## 竖直分隔进度条
设置 `base-line` 为 `y` 实现竖着的进度条。
<demo src="./demos/bar4.vue"></demo>

## 渐变色进度条
当设置分隔进度条时，还想实现进度条的渐变色可以设置 `linearStartColor` 和 `linearEndColor`。 只支持`16位`颜色编码，不支持 `rgb` 形式。
<demo src="./demos/bar5.vue"></demo>

## 属性
| 参数                      | 说明                                                     | 类型           | 可选值     | 默认值         |
| ------------------------ | -------------------------------------------------------- | ------------- | --------- | ------------- |
| value          | 0~100之间的数字          | number          | number          | 0          | 
| checkColor         | 选中格子的颜色          | string          | string          | -          | 
| checkBoxBack         | 选中区域的颜色          | string          | string          | -          | 
| defaultColor         | 不选中格子的颜色          | string          | string          | -          | 
| defaultBoxBack         | 未选择区域的颜色          | string          | string          | -          | 
| gridStyle         | 格子的样式          | Object          | Object          | {}          | 
| gridWidth         | 格子的宽度          | Number          | Number          | 1          | 
| gridMid         | 格子间隔          | Number          | Number          | 0          | 
| backgroundColor         | 整个背景色          | string          | string          | -          | 
| baseLine         | 表格进度条是横向的还是竖的          | 'y' / 'x'          | 'y' / 'x'          | 'x'          | 
| gridRotate         | 格子倾斜角度          | Number          | Number          | 0          | 
| linearStartColor         | 渐变开始颜色 (不支持透明度的颜色)          | string          | string          | ''          | 
| linearEndColor         | 渐变结束颜色 (不支持透明度的颜色)         | string          | string          | ''          | 



## 贡献者：

<ContributorView name="马佳辉"></ContributorView>