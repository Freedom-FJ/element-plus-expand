/*
 * @Author: mjh
 * @Date: 2022-08-21 19:14:13
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-22 00:23:34
 * @Description:
 */
// 在src 目录下util新建   directive.js 文件 用于输出指令
import type { App } from 'vue'
import { vLoading } from 'element-plus'

export const directive = (app: App<Element>) => {
    app.directive('focus', {
        mounted(el, binding, vnode) {
            // 解决element组件获取到的不是真实input dom
            const input = el.querySelector('.el-input__inner') || el.querySelector('.el-textarea__inner') || el
            binding.value && input.focus()
        }
    })
    // 判断值是否有效 无效则显示--
    app.directive('valid', (el, binding, vNode, prevNode) => {
        const { value } = binding
        const innerHTML = (`${value ?? ''}`).replace('%', '')
        el.innerHTML = ['', 'NaN', 'undefined', 'null'].includes(innerHTML) || Object.is(innerHTML, NaN) ? '--' : value
    })
    app.directive('loading', vLoading)
    app.directive('pos-int', (el, binding, vnode) => {
        const input = el.querySelector('.el-input__inner') || el.querySelector('.el-textarea__inner') || el
        // 这将被作为 `mounted` 和 `updated` 调用
        console.log(binding, 'binding')
        input.onkeyup = () => {
            let { value } = input
            value = value.replace(/^0(0+)|[^\d]+/g, '')
            value = value && Number(value)
            input.value = value
            input.dispatchEvent(new Event('input'))
        }
    })
}
