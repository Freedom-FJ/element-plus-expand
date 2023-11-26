/*
 * @Author: mjh
 * @Date: 2023-03-13 16:37:54
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-18 16:05:14
 * @Description:
 */
import type { App } from 'vue'
import type { tableConfig } from './src/fpi-el-table/types'
import { fpiTableConfig } from './src/fpi-el-table/config'
import * as components from './src/index'

export * from './src/index'
export { fpiELementPlusResolver } from './resolve'
export const setTableConfig = (option: tableConfig) => {
    fpiTableConfig.value = { ...fpiTableConfig.value, ...option }
}
export default {
    install: (app: App) => {
        for (const c in components)
            app.use((components as any)[c])
    },
    setTableConfig
}

