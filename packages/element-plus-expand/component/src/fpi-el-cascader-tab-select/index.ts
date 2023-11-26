/*
 * @Author: mjh
 * @Date: 2023-08-18 14:02:32
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 10:00:11
 * @Description:
 */
import type { App, Plugin } from 'vue'
import _FpiElCascaderTabSelect from './fpi-el-cascader-tab-select.vue'

type SFCWithInstall<T> = T & Plugin

const install = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
    // 当组件是 script setup 的形式时，会自动以为文件名注册，会挂载到组件的__name 属性上
    // 所以要加上这个条件
        const name = (comp as any).name || (comp as any).__name
        // 注册组件
        app.component(name, comp as SFCWithInstall<T>)
    }
    return comp as SFCWithInstall<T>
}
export const FpiElCascaderTabSelect = install(_FpiElCascaderTabSelect)
export default _FpiElCascaderTabSelect
