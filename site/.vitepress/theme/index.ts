/*
 * @Author: mjh
 * @Date: 2023-03-24 22:36:25
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-22 17:16:18
 * @Description:
 */
import DefaultTheme from 'vitepress/theme' // 引入默认主题
import ElementPlus from 'element-plus'
// import elementPlusExpand from '@ued_fpi/element-plus-expand'
import elementPlusExpand from '@element-plus-expand/components'
import Cookies from 'js-cookie'
import { createPinia } from 'pinia'
import { setDomain } from '@ued_fpi/data-visual'
import locale from 'element-plus/es/locale/lang/zh-cn'
import demo from '../components/demoblock/demo.vue'
import elementIframe from '../components/element-iframe.vue'
import pageIframe from '../components/page-iframe.vue'
import echartDemo from '../components/echart-demo.vue'
import contributorView from '../components/contributor-view.vue'
import FetchDocs from '../components/fetch-docs.vue'
import '../../public/css/custom-style.css'
import '../../public/css/reset-element-plus.css'
import '../../public/map/mapbox-gl-v22'
import '../../public/map/mapbox-gl-v22.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import '@ued_fpi/element-plus-expand/style'
// 引入mockserver.js---mock数据
import '../../mock/mockServe'
const pinia = createPinia()

// 导出vitepress配置
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        const isSSR = import.meta.env.SSR
        if (!isSSR) {
            Cookies.set('token', '123456')
            setDomain('/api-wgms', 'wgms')
            setDomain('/api-ipes', 'ipes')
            setDomain('/api-bmp', 'bmp')
            setDomain('/api-aims', 'aims')
        }
        app.component('Demo', demo)
        app.component('ElementIframe', elementIframe)
        app.component('PageIframe', pageIframe)
        app.component('FetchDocs', FetchDocs)
        app.component('EchartDemo', echartDemo)
        app.component('EchartDemo', echartDemo)
        app.component('ContributorView', contributorView)

        app.use(ElementPlus, { locale })
        app.use(pinia)
        app.use(elementPlusExpand)
    }
}
