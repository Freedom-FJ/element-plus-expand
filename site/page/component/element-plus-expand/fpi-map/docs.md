# fpi-map 地图

::: tip

- 当前组件在 element-plus-expand
- 需要引入 mapbox-gl-v22.css
  - `<link rel="stylesheet" href="static/mapbox-gl-v22.css">`
- 需要引入 mapbox-gl-v22.js
  - `<script src="static/mapbox-gl-v22.js" type="text/javascript"></script>`
:::

<demo src="./demos/demo1.vue"></demo>

## 属性

| 参数           | 说明               | 类型     | 可选值 | 默认值                                 |
| -------------- | ------------------ | -------- | ------ | -------------------------------------- |
| isLook         | 是否仅是查看       | boolean  | -      | false                                  |
| isShowSearch   | 是否显示搜索       | boolean  | -      | true                                   |
| zoom           | 地图 zoom          | number   | -      | 12.5                                   |
| centerPosition | 经纬度的值用于回显 | number[] | -      | [120.193938105986, 30.190082529340692] |
| height         | 经纬度的值用于回显 | string   | -      | 320px                                  |
| width          | 经纬度的值用于回显 | string   | -      | 100%                                   |
| toFixedNum     | 经纬度的值修约     | number   | -      | 6                                      |

## 事件

| 事件名      | 说明           | 参数                 |
| ----------- | -------------- |--------------------|
| selectedMap | 选择地图点位。 | 当前选则的位置包括经纬度，地址，区号 |
