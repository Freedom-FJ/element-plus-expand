/*
 * @Author: mjh
 * @Date: 2023-03-24 22:57:28
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-09 22:30:26
 * @Description:
 */
import gas from './team/gas/nav.json'
import water from './team/water/nav.json'
import park from './team/park/nav.json'
import gis from './team/gis/nav.json'
import publicTeam from './team/public/nav.json'
const nav = [
    {
        text: '项目组专题',
        items: [park, gas, water, publicTeam, gis],
    },
    {
        text: 'PC组件',
        items: [
            {
                text: 'vue3',
                items: [
                    { text: 'data-visual 大屏组件', link: '/page/component/screen/quickstart' },
                    { text: 'element-plus-expand', link: '/page/component/element-plus-expand/quickstart' },
                    { text: 'element-plus', link: '/page/component/element-plus/el-iframe' },
                ]
            },
            {
                text: 'vue2',
                items: [
                    { text: '@ued-fpi/element-ui', link: '/page/component/element-ui/ued' },
                ]
            },
        ]
    },
    {
        text: 'mobile组件',
        items: [
            {
                text: 'vue3',
                items: [
                    { text: 'vant-expand', link: '/page/component/vant/quickstart' },
                    { text: 'vant4', link: '/page/component/vant/vant4' },
                ]
            },
            {
                text: 'vue2',
                items: [
                    { text: '@ued-fpi/uview', link: '/page/component/ued-uview/iframe' },
                    { text: 'vant2', link: '/page/component/vant/vant2' },
                ]
            },
        ]
    },
    {
        text: '模板cli',
        items: [
            { text: '公共', link: '/page/template/public/cli' },
            { text: '水产品', link: '/page/template/water/cli' },
        ]
    },
    // { text: 'echarts', link: '/page/charts/echarts/iframe' },
    {
        text: 'echarts',
        items: [
            { text: 'echarts(旧)', link: '/page/charts/echarts/line/' },
            { text: 'echarts(新)', link: '/page/charts/echarts/iframe' },
        ]
    },
    // {
    //     text: 'charts',
    //     items: [
    //         { text: 'echarts', link: '/page/charts/echarts/line/' },
    //         { text: 'highcharts', link: '/page/charts/highcharts/' },
    //     ]
    // },
    {
        text: '地图',
        items: [
            { text: 'mapbox 示例', link: '/page/map/mapbox' },
            { text: 'maptalks代码示例', link: 'https://maptalks.org/' },
            { text: 'maptalks-gl代码示例', link: 'https://maptalks.com/' },
            { text: 'dc-sdk', link: 'http://ued.fpi-inc.site/dc-home/#/index' },
        ]
    },
]
export default nav

