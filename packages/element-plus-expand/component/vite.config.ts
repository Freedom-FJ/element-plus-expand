/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import packageJsonObj from '../../../package.json'
const { devDependencies, dependencies } = packageJsonObj
const externalList = [...Object.keys(devDependencies), ...Object.keys(dependencies)]
export default defineConfig({
    test: {
        environment: 'happy-dom'
    },
    build: {
        target: 'es2015',
        // 压缩 代码打乱混淆 默认‘esbuild’
        minify: false,
        rollupOptions: {
            external: (id: string) => {
                if (id.includes('rollup')) return false
                const newId = id.replace('.vue', '').replace('?vue', '').replace('vue&', '')
                let external = false
                if (newId.includes('index.scss'))
                    external = true
                else if (newId.includes('pc-'))
                    external = false
                else
                    external = externalList.some(item => newId.includes(item)) && !newId.includes('fpi-component')
                return external
            },
            input: ['index.ts'],
            // input: ['resolve.ts'],
            output: [
                {
                    // 打包格式
                    format: 'es',
                    // 打包后文件名
                    entryFileNames: '[name].mjs',
                    // 让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    // 配置打包根目录
                    dir: '../package/es'
                },
                {
                    // 打包格式
                    format: 'cjs',
                    // 打包后文件名
                    entryFileNames: '[name].js',
                    // 让打包目录和我们目录对应
                    preserveModules: true,
                    exports: 'named',
                    // 配置打包根目录
                    dir: '../package/lib'
                }
            ]
        },
        lib: {
            entry: './index.ts',
            name: 'element-plus-expand'
        }
    },
    resolve: {
        alias: {
            '@': '/src/',
        }
    },
    plugins: [
        vue(),
    ]
})
