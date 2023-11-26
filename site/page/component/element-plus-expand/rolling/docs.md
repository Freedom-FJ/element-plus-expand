<!--
 * @Author: mjh
 * @Date: 2023-05-11 10:41:51
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-24 09:59:53
 * @Description: 
-->
# fpi-el-rolling 无限滚动组件 ^(0.7.2)

::: tip
当前组件在 element-plus-expand 0.7.2 版本后正式部署
:::

## 横向滚动
设置 `direction` 为 `x` 即可开启横向滚动，当然默认组件也是 `x` 可以不传。 `time` 是滚动完一个周期所需要的时间，组件内部会动态监听时间变化而刷新动画。
<demo src="./demos/rolling1.vue"></demo>

## 外部控制动画 和 设置触发条件
我们可以传入 `v-model` 外部控制动画效果， `true` 为播放 `false` 为暂停。 我们传入 `action` 可以设置改变动画状态的条件， 当设置为 `none` 时 组件内部不会自动改变动画
<demo src="./demos/rolling2.vue"></demo>

## 纵向滚动
设置 `direction` 为 `y` 即可开启纵向滚动
<demo src="./demos/rolling3.vue"></demo>

## 自动停止
组件内部会监听内部的插槽dom的变化，当内部插槽dom 相应的宽高变化时会重新刷新动画。如果内部的插槽相应的宽或者高低于容器时，会触发组件的强制停止，无限滚动动画会无法开启。
<demo src="./demos/rolling4.vue"></demo>


## 循环获取dom
由于为了实现首尾相连的效果组件内部会将我们的 `dom` 复制一份，所以如果我们需要循环操作dom的时候，请设置 `dom` 一样的 `class` 然后通过 `class` 来获取 `dom` 列表，列表内就会出现相应被复制的内容，最后记得将我们复制的 `dom` 也进行操作哦！
<demo src="./demos/rolling5.vue"></demo>

## 鼠标滚动控制动画 ^(0.7.4)
如果滚动方向为 `y`，可以设置 `scrollAble` 为 true 即可开启鼠标滚动控制动画。
<demo src="./demos/rolling6.vue"></demo>


## 鼠标拖拽控制动画 ^(0.8.11)
可以设置 `isDragControl` 为 true 即可开启鼠标拖拽控制动画。
<demo src="./demos/rolling7.vue"></demo>

## 属性
| 参数                      | 说明                                                     | 类型           | 可选值     | 默认值         |
| ------------------------ | -------------------------------------------------------- | ------------- | --------- | ------------- |
| v-model          | 控制播放， 可以不传          | boolean          | true/false          | true          | 
| direction         | 播放的方向          | string          | x/y          | x          | 
| time         | 播放周期时间          | number          | -          | 5          | 
| action         | 触发播放改变逻辑          | string          | `hover,click,dblclick,none`          | 'hover'          | 
| scrollAble ^(0.7.4)       | 鼠标滚动控制动画          | boolean          | true/false          | false          | 
| isDragControl ^(0.8.11)       | 鼠标拖拽控制动画          | boolean          | true/false          | false          | 


## 事件
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| change | 动画播放状态组件内部主动改变时触发 | boolean 播放状态 |
| domChange | 组件内部插槽dom的相应的宽或者高变化触发 | currDistance 相应的距离, MutationObserver Observer监听实例 |


## 方法

| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearAnimation | 清除动画 | — |
| controlAnimation | 刷新动画 | — |
| changeForcedStop | 手动改变组件强制停止状态（传入 `false` 时，组件将会无法开启动画） | boolean |
| startAnimation | 开始动画，如果绑定了v-model会改变modelValue为true | -- |


## 贡献者：

<ContributorView name="马佳辉,李国帝"></ContributorView>