/*
 * @Author: mjh
 * @Date: 2023-04-15 00:10:23
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-15 00:38:04
 * @Description:
 */
const timeoutIdMap = new Map()
export const copyFun = (text: string, e: any) => {
    try {
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text)
            const el = e.target
            el.classList.add('demo-show-copied')
            clearTimeout(timeoutIdMap.get(el))
            const timeoutId = setTimeout(() => {
                el.classList.remove('demo-show-copied')
                el.blur()
                timeoutIdMap.delete(el)
            }, 2000)
            timeoutIdMap.set(el, timeoutId)
            console.log('复制代码成功')
        }
        else {
            const inputDom = document.createElement('textarea') // 创建一个input元素
            inputDom.setAttribute('readonly', 'readonly') // 防止手机上弹出软键盘
            inputDom.value = text // 给input元素赋值
            document.body.appendChild(inputDom) // 添加到body
            inputDom.select() // 选中input元素的内容
            document.execCommand('Copy') // 执行浏览器复制命令
            inputDom.style.display = 'none'
            inputDom.remove() // 移除input元素
            const el = e.target
            el.classList.add('demo-show-copied')
            clearTimeout(timeoutIdMap.get(el))
            const timeoutId = setTimeout(() => {
                el.classList.remove('demo-show-copied')
                el.blur()
                timeoutIdMap.delete(el)
            }, 2000)
            timeoutIdMap.set(el, timeoutId)
            console.log('复制代码成功')
        }
    }
    catch (error) {
        console.log(error, '复制失败！')
    }
}
