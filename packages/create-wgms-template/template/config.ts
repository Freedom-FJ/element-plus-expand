/*
 * @Author: Tian
 * @Date: 2021-11-01 09:57:44
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-29 00:33:52
 * @Description:
 */
import type { ConfigTs } from '@/types/base-info'
const innerNet = import.meta.env.DEV
const domain = innerNet ? '/api' : `${location.protocol}//${location.host}`
const defaultHost = 'https://wgms-test.fpi-inc.site'
// const defaultHost = 'http://wgms.dev.fpi-inc.site'
const realHost = innerNet ? defaultHost : domain

const commonConfig: Omit<ConfigTs, 'domain' | 'bspURL' | 'realHost'> = {
    isMustLogin: true, // 跳转登陆
    gridCode: '01000000',
    defaultServer: 'wgmsService', // 请求默认服务
    cityCode: '330100',
    defaultRouteName: '/layout/page', // 默认跳转路由
    loginUrl: `${innerNet ? defaultHost : domain}/cas/login`,
    webHomePage: innerNet ? `127.0.0.1:${location.port}` : `${domain}/${import.meta.env.BASE_URL}`,
    logoutUrl: `${innerNet ? defaultHost : domain}/cas/logout`,
    userBaseURL: `${defaultHost}/simple-user-center-server`,
    innerNet
}
const { webHomePage, loginUrl, userBaseURL } = commonConfig
const webHomePageStr = encodeURIComponent(webHomePage)
// 未登录，跳转到cas登录地址
const bspURL = `${loginUrl}?service=${userBaseURL}/userCenter/auth/authUser?redirectUrl=${webHomePageStr}`

export default {
    ...commonConfig,
    domain,
    bspURL,
    realHost
} as ConfigTs

