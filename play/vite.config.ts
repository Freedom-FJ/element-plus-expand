/*
 * @Author: mjh
 * @Date: 2023-03-19 23:16:24
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-25 19:46:31
 * @Description:
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'
import { fpiELementPlusResolver } from '@ued_fpi/element-plus-expand'
import type { ComponentResolver, SideEffectsInfo } from 'unplugin-vue-components/types'
import { camelCase, kebabCase } from 'unplugin-vue-components'
// import { fpiELementPlusResolver  } from '@element-plus-expand/components'
// import { fpiELementPlusResolver } from '@element-plus-expand/components/resolve'

export default defineConfig({
    plugins: [
        vue(),
        // ElementPlus(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [
                ElementPlusResolver(),
                fpiELementPlusResolver()
            ],
        }),
        DefineOptions()
    ]
})
