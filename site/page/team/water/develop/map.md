<!--
 * @Author: mjh
 * @Date: 2023-07-06 14:45:39
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-06 14:58:42
 * @Description: 
-->
# 地图开发手册

## 地图初始化线上配置
1. 配置地址：    
http://wgms.dev.fpi-inc.site/wgms-base-web/#/map-config/BaseMapConfig  
配置内容：   
`地图初始坐标点位`  `地图坐标系类型` `地图底图style`
2. 使用
请求接口：   
http://wgms.dev.fpi-inc.site/wgms-base-server/api/v1.0/config/systemConfig/006 // 006 为方案名称  
返回：  
``` js
code: '006',
data: string,
id: '28'

// data 的 string转换后
const mapConfig = JSON.parse(resp.data);

// mapConfig 格式： 
{
    "urlConfig": {
        "light": {
            ...
        },  // 亮主题
        "dark": {
            ...
        }, // 暗夜主题
        "satellite": {
            ...
        } // 卫星图
    },
    "centerConfig": {
        "crs": "EPSG:3857",
        "center": [ // 中心点 
            "39.887088",
            "119.394599",
            "2"
        ]
    },
    "coordinateSystem": "001",
    "coordinate": "003"
}
```

地图初始化：

``` js
const { centerConfig, urlConfig } = mapConfig
window.glMap = new mapboxgl.Map({
    container: 'fpiMapContainer',
    zoom: 9,
    minZoom: 7,
    maxZoom: 18,
    center: [centerConfig[1], centerConfig[0]],
    style: urlConfig.dark,
    hash: false,
    pitch: 40,
})
```



## 贡献者：
<ContributorView name="马佳辉"></ContributorView>
