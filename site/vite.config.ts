/*
 * @Author: mjh
 * @Date: 2023-03-29 11:42:42
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-21 09:43:52
 * @Description:
 */
import type { UserConfig } from 'vite'
import demoIframe from './.vitepress/script/vite-plugin-dev-demo-iframe'
const config: UserConfig = {
    server: {
        port: 3000,
        proxy: {
            '/api-wgms': {
                target: 'http://wgms.dev.fpi-inc.site',
                rewrite: path => path.replace(/^\/api-wgms/, ''),
                changeOrigin: true
            },
            '/api-aims': {
                target: 'http://aims-test.fpi-inc.site',
                rewrite: path => path.replace(/^\/api-aims/, ''),
                changeOrigin: true
            },
            '/api-bmp': {
                target: 'http://hangzhou-test.fpi-inc.site',
                rewrite: path => path.replace(/^\/api-bmp/, ''),
                changeOrigin: true
            },
            '/api-ipes': {
                // target: 'http://47.104.111.5:8808/', // 西中岛
                target: 'http://ipes-dev2.fpi-inc.site',
                rewrite: path => path.replace(/^\/api-ipes/, ''),
                changeOrigin: true
            },
        }
    },
    css: {
        postcss: {
            plugins: [
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: (atRule) => {
                            if (atRule.name === 'charset')
                                atRule.remove()
                        },
                    },
                },
            ],
        },
    },
    build: {
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
                // 解决打包时Some chunks are larger警告
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString()
                    }
                }
            }
        }
    },
    resolve: {
        alias: {
            '@site': './',
        }
    },
    plugins: [
        demoIframe(),
    ],
}
export default config
