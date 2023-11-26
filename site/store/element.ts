/*
 * @Author: mjh
 * @Date: 2023-02-06 10:33:27
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-13 12:18:33
 * @Description:
 */
import { defineStore } from 'pinia'
export const useElementStore = defineStore({
    id: 'element',
    state: () => ({
        url: '', // 当前窗口高度
    }),
    getters: {
        getUrl: state => state.url
    },
    actions: {
        setUrl(url: string) {
            this.url = url
        }
    }
})
