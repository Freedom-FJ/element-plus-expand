/*
 * @Author: mjh
 * @Date: 2023-03-29 12:22:57
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-04 14:20:24
 * @Description:
 */
// import { readFileSync } from 'fs'
// import { resolve } from 'path'
// import * as path from 'path'
import type { PluginOption, ViteDevServer } from 'vite'
// import queryString from 'query-string'
// import { genHtml } from './genIframe'
export default function demoIframe(): PluginOption {
    return {
        name: 'demo-iframe-dev',
        configureServer(server: ViteDevServer) {
            return () => {
                server.middlewares.use(async (req, res, next) => {
                    if (req.url?.includes('?iframeDom')) {
                        res.end(`
                        <html >
                        <head>
                            <title>Vue 3 Demo</title>
                            <link rel="icon" href="data:;base64,iVBORw0KGgo=">
                            <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
                            <link rel="stylesheet" href="//unpkg.com/element-plus/theme-chalk/dark/css-vars.css" />
                        </head>
                        <body>
                            <div id="app" style="height: 100%;width: 100%;position: relative;"></div>
                        </body>
                        <script>
                            // const { createApp } = Vue
                            // createApp({
                            //     data() {
                            //     return {
                            //         message: 'Hello Vue!'
                            //     }
                            //     }
                            // }).mount('#app')
                        </script>
                        <style>
                        td, .cell {
                            font-size: 14px;
                            color: #606266;
                        }
                        </style>
                        </html>
                    `)
                    }
                    else {
                        await next()
                    }
                })
            }
        },
    }
}

