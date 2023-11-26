/*
 * @Author: mjh
 * @Date: 2023-04-05 23:25:09
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-11 13:54:22
 * @Description:
 */
import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

const isSSR = import.meta.env.SSR

// 1利用axios对象的方法create，去创建一个axios实例
// 2request就是axios，只不过稍微配置一下
const requests = axios.create({
    // 基础路径，发请求的时候，路径带有api
    baseURL: '/mock',
    // 代表请求超时的时间5秒
    timeout: 5000,
})
// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    // 进度条开始
    !isSSR && nprogress.start()
    return config
})
// 响应拦截器
requests.interceptors.response.use(
    (res) => {
    // 成功的回调函数：服务器响应数据回来后，响应拦截器可以检测到，可以做一些事情
    // 进度条结束
        !isSSR && nprogress.done()
        return res.data
    },
    (error) => {
    // 响应失败的回调函数
        return Promise.reject(new Error(error))
    }
)

// 对外暴露
export default requests
