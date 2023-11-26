/*
 * @Author: mjh
 * @Date: 2023-03-13 16:37:54
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-14 10:05:47
 * @Description:
 */
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { dest, parallel, series, src } from 'gulp'
import autoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat'
import sass from 'gulp-dart-sass'
import cssmin from 'gulp-cssmin'
import { rollup } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import { kebabCase } from '../../src/utils'
import { componentPath, esPath, libPath } from '../utils/paths'
import delPath from '../utils/delpath'
import run from '../utils/run'
import elementDic from '../../resolve/dic'

// 删除element-plus-expand

export const removeDist = () => {
    return delPath(`${esPath}`)
}
export const buildCssStyle = async () => {
    return src(`${componentPath}/src/**/style/**.css`)
        .pipe(dest(`${esPath}/src`))
        .pipe(dest(`${libPath}/src`))
}
// 打包样式
export const buildScssStyle = () => {
    return src(`${componentPath}/src/**/style/**.scss`)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(dest(`${esPath}/src`))
        .pipe(dest(`${libPath}/src`))
        .pipe(concat('style.css'))
        .pipe(dest(`${libPath}`))
        .pipe(dest(`${esPath}`))
}

export const buildELementStyle = async () => {
    Object.keys(elementDic).forEach((key) => {
        let libStr = 'require("./index.css");'
        let esStr = 'import \'./index.css\';'
        const currList = elementDic[key as keyof typeof elementDic] || []
        currList.forEach((name) => {
            libStr += `require("element-plus/lib/components/${name}/style/css");`
            esStr += `import 'element-plus/es/components/${name}/style/css';`
        })
        const partialName = kebabCase(key)
        const currEs = `${esPath}/src/${partialName}/style`
        const currLib = `${libPath}/src/${partialName}/style`
        if (!existsSync(currEs))
            mkdirSync(currEs, { recursive: true })

        if (!existsSync(currLib))
            mkdirSync(currLib, { recursive: true })
        writeFileSync(`${currEs}/index.mjs`, esStr)
        writeFileSync(`${currEs}/index.d.ts`, esStr)
        writeFileSync(`${currLib}/index.js`, libStr)
        writeFileSync(`${currLib}/index.d.ts`, libStr)
    })
}

export const buildFullStyle = async () => {
    return src(`${esPath}/src/**/style/**.css`)
        .pipe(concat('style.css'))
        .pipe(dest(`${libPath}`))
        .pipe(dest(`${esPath}`))
}
// 打包组件
export const buildComponent = async () => {
    await run('pnpm run build', componentPath)
    await cloneTypes()
    buildScssStyle()
    buildELementStyle()
}

// 生产类型声明文件
export const cloneTypes = async () => {
    return src(`${esPath}/**/**.d.ts`)
        .pipe(dest(`${libPath}`))
}

const buildStyleModules = async () => {
    const input = [
        // resolver
    //   path.resolve(componentPath, 'resolver.ts'),
        `${componentPath}/resolver.ts`
    ]

    const bundle = await rollup({
        input,
        plugins: [
            esbuild({
                sourceMap: true,
            }),
        ],
        external: [/./],
        treeshake: false,
    })

    await Promise.all([
        bundle.write({
            format: 'esm',
            dir: esPath,
            exports: undefined,
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
            entryFileNames: '[name].mjs',
        }),
        bundle.write({
            format: 'cjs',
            dir: libPath,
            exports: 'named',
            preserveModules: true,
            preserveModulesRoot: 'src',
            sourcemap: true,
            entryFileNames: '[name].js',
            paths: generatePaths(),
        }),
    ])
}
const generatePaths = () => {
    const paths = [
        ['lodash-es', 'lodash'],
        ['element-plus-expand/es', 'element-plus-expand/lib'],
    ]

    return (id: string) => {
        for (const [oldPath, newPath] of paths) {
            if (id.startsWith(oldPath))
                return id.replace(oldPath, newPath)
        }

        return ''
    }
}
export default series(
    async () => removeDist(),
    parallel(
        async () => buildComponent(),
        // async () => buildFullStyle()
        // async () => buildScssStyle(),
        // async () => buildCssStyle()
        // async () => testBuildScssFull()
        // async () => buildStyleModules()
        // async () => buildScssFull(),
        // async () => cloneTypes()
        // async () => generateTypes()

    )
)
