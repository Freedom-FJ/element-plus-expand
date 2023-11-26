### 一、使用说明
* 1. 需要引入mapbox-gl-v22.css
    ```
    <link rel="stylesheet" href="static/mapbox-gl-v22.css">```
* 2. 需要引入mapbox-gl-v22.js
  ```js
    <script src="static/mapbox-gl-v22.js" type="text/javascript"></script>
  ```

### 二、props参数
* centerPosition：地图中心点经纬度 例如：[120.193938105986, 30.190082529340692]
* isShowSearch： 是否显示关键字搜索输入， 默认true
* isLook： 是否是查看地图，只是展示用不能随意定位点 默认false
* zoom：默认12.5
* height：地图高度 默认320px
* width: 地图宽度 默认 100%


### 三、向外发送的事件
* selectedMap：选择地图点位后，向外发送的事件。参数为当前位置地址经纬度等

### 四、使用例子
```vue
<FpiMap
    width="100%"
    :center-position="centerPosition"
    @selected-map="selectedMap"
/>
