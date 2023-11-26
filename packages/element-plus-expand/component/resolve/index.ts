/*
 * @Author: mjh
 * @Date: 2023-04-24 13:41:22
 * @LastEditors: mjh
 * @LastEditTime: 2023-05-01 01:03:37
 * @Description:
 */
import { camelCase, kebabCase } from '../src/utils'
// 获取到副作用
function getSideEffects(partialName: string, isSSR: boolean) {
    // 判断是不是服务端渲染
    // 服务端渲染使用 cjs 模块，反之使用 esm 模块
    const moduleType = isSSR ? 'lib' : 'es'
    // 是否加载
    if (isSSR) return
    return [`@ued_fpi/element-plus-expand/${moduleType}/src/${partialName}/style/index`]
}

export function fpiELementPlusResolver(option: { isSSR?: boolean } = {}) {
    return {
        type: 'component' as const, // 组件类型
        resolve: (name: string) => {
            const isSSR = !!option.isSSR // Boolean(process.env.SSR || process.env.SSG || process.env.VITE_SSR || process.env.VITE_SSG)
            // 服务端渲染使用 cjs 模块，反之使用 esm 模块
            const moduleType = isSSR ? 'lib' : 'es'
            const partialName = kebabCase(name)
            const CaseName = camelCase(name)
            // 判断解析的组件名称是不是当前组件库的
            if (partialName.startsWith('fpi-el')) {
                // 获取到组件名称
                return {
                    // 组件名称
                    name: CaseName,
                    // 从哪个路径导入，es/lib
                    from: `@ued_fpi/element-plus-expand/${moduleType}`,
                    // 根据组件名称获取到对应的 css 导入路径。BackTop => es/back-top/style/index
                    // sideEffects: getSideEffects(kebabName.slice(7), options),
                    sideEffects: getSideEffects(partialName, isSSR),
                }
            }
        },
    }
}

export default fpiELementPlusResolver
