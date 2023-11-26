/*
 * @Author: mjh
 * @Date: 2023-04-02 00:52:50
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-15 23:18:58
 * @Description:
 */
import { resolve } from 'path'
import { dest, parallel, series, src } from 'gulp'

// 组件库根目录
export const componentPath = resolve(__dirname, '../../')
export const pkgPath = resolve(__dirname, '../../')

export const buildSvg = () => {
    return src(`${componentPath}/public/images/layer.svg`)
        .pipe(dest(`${pkgPath}/.vitepress/dist/public/images`))
}
// 打包样式
export const buildIframeBase = () => {
    return src(`${componentPath}/iframe.html`)
        .pipe(dest(`${pkgPath}/.vitepress/dist/demo`))
}

export default series(
    parallel(
        // async () => buildSvg(),
        async () => buildIframeBase(),
    )
)
