<!--
 * @Author: mjh
 * @Date: 2023-05-06 13:44:14
 * @LastEditors: mjh
 * @LastEditTime: 2023-06-07 11:18:00
 * @Description: 
-->
# 问题汇总

## mapbox 多个图层叠加点击触发多个问题
[CSDN连接](https://blog.csdn.net/zyj12138/article/details/108095257?spm=1001.2101.3001.6650.5&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-108095257-blog-121480785.pc_relevant_3mothn_strategy_recovery&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-5-108095257-blog-121480785.pc_relevant_3mothn_strategy_recovery&utm_relevant_index=6)

## 获取地图图层的id
配置以下点击事件，并点击你需要知道的图层，就可以在控制台打印出该图层的id，用于方便查找图层。
```js
window.glMap.on('click', (val) => {
    const features = window.glMap.queryRenderedFeatures(val.point)
    const clickedLayerId = []
    // 查找第一个具有图层 ID 的要素
    for (let i = 0; i < features.length; i++) {
        if (features[i] && features[i].layer && features[i].layer.id)
            clickedLayerId.push(features[i].layer.id)

    }
    console.log('点击的图层ID: ', clickedLayerId.join(','))
})
```

## 移动地图图层

```js
// 将此图层移动到最顶部
window.glMap.moveLayer(layerId)
```

```js
// id：要移动的层id。
// beforeId: 插入新层的现有层的ID。当查看地图时，id层将出现在beforeId层的下面。如果beforeId被省略，该层将被添加到layers数组的末尾，并出现在地图上的所有其他层之上
window.glMap.moveLayer(id, beforeId)
```
