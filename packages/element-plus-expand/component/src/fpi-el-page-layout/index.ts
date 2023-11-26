import type { App, Plugin } from 'vue'
import _FpiElPageLayout from './fpi-el-page-layout.vue'

type SFCWithInstall<T> = T & Plugin

const install = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        const name = (comp as any).name || (comp as any).__name
        app.component(name, comp as SFCWithInstall<T>)
    }
    return comp as SFCWithInstall<T>
}

export const FpiElPageLayout = install(_FpiElPageLayout)
export default _FpiElPageLayout
