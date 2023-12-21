/*
 * @Author: mjh
 * @Date: 2023-03-24 22:36:25
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-07 19:36:34
 * @Description:
 */
import sidebar from '../config/sidebar'
import nav from '../config/nav'
import demoblock from './components/demoblock'
export default {
    // srcDir: './',
    // outDir: './docs',
    base: '/element-plus-expand',
    lang: 'zh-CN',
    title: 'element-plus-expand', // 标题
    description: 'ued前端开发最新技术集网站', // 描述
    lastUpdated: true, // 上次更新时间
    markdown: {
        headers: {
            level: [0, 0]
        },
        config: (md) => {
            md.use(demoblock)
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', href: '/fpi-component/images/layer.ico', type: 'image/x-icon' }],
        ['script', { src: 'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/lottie-web/5.8.1/lottie_svg.js' }],
        ['script', { src: 'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/highcharts/9.3.3/highcharts.min.js' }],
        ['script', { src: 'https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/highcharts/9.3.3/highcharts-3d.min.js' }],
        ['script', { src: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/echarts/5.3.0/echarts.min.js' }],
    ],
    themeConfig: {
        // 顶部导航
        nav,
        sidebar,
        logo: '/images/layer.ico',
        search: {
            provider: 'local'
        },
        // 社交信息栏
        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/1006008051/vitepress-demoblock' }
        // ],
        // 底部信息栏
        footer: {
            message: 'element-plus-expand',
            copyright: '文档搭建 © 2023-present 马佳辉'
        },
        // 广告栏
        // carbonAds: {
        //     code: 'CEBDT27Y',
        //     placement: 'vuejsorg'
        // }
    }
}
