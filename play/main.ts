/*
 * @Author: mjh
 * @Date: 2023-03-13 16:37:54
 * @LastEditors: mjh
 * @LastEditTime: 2023-09-13 10:50:37
 * @Description:
 */
import { createApp } from 'vue'
// import elementPlusExpand from '@ued_fpi/element-plus-expand'
import elementPlusExpand from '@element-plus-expand/components'
import ElementPlus from 'element-plus'
import locale from 'element-plus/es/locale/lang/zh-cn'
// import DvWgmsWaterQualitySituation from '@ued_fpi/data-visual/dist/es/wgms/index' // 引入单个大气组件
import App from './app.vue'
// import { directive } from './directive'

// import 'element-plus/dist/index.css'
import '@ued_fpi/element-plus-expand/style'

const app = createApp(App)
// directive(app)

// element-plus-expand.setTableConfig({
//     headerRowStyle: { background: 'red' },
//     headerCellStyle: { background: 'red' },
//     pageInit: { // 初始化页码
//         pageSizes: 20,
//         currentPage: 1,
//         total: 0,
//         pageSizesArr: [10, 20, 30, 50]
//     }
// })
app.use(ElementPlus, { locale })
app.use(elementPlusExpand)
// app.use(DvWgmsWaterQualitySituation)

app.mount('#app')
