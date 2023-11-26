/*
 * @Author: mjh
 * @Date: 2023-04-05 23:26:23
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-07 19:29:49
 * @Description:
 */
// 先引入mockjs模块
import Mock from 'mockjs'
// 把JSON数据格式引入进来
// [JSON数据格式根本没有对外暴露，但是可以引入]，因为 webpack默认对外暴露的：图片、JSON数据格式
import tableDataMid from './table-data-mid.json'
import tableDataMin from './table-data-min.json'
import tableDataMix from './table-data-mix.json'

Mock.mock('/mock/tableDataMidOffset', 'post', (option) => {
    const body = option.body ? JSON.parse(option.body) : null
    const { pageNum, pageSize } = body
    return {
        code: 200,
        data: tableDataMid.slice(pageNum * pageSize, (pageNum + 1) * pageSize),
        total: tableDataMid.length
    }
})

// 模拟首页大轮播图的数据
// mock数据:第一个参数：请求地址   第二个参数：请求数据（200代表请求成功，data代表数据）
Mock.mock('/mock/tableDataMid', 'post', (option) => {
    const body = option.body ? JSON.parse(option.body) : null
    const { pageNum, pageSize } = body
    return {
        code: 200,
        data: tableDataMid.slice((pageNum - 1) * pageSize, pageNum * pageSize),
        total: tableDataMid.length
    }
})

Mock.mock('/mock/tableDataMix', {
    code: 200,
    data: tableDataMix,
})

Mock.mock('/mock/tableDataMin', {
    code: 200,
    data: tableDataMin,
})

Mock.mock('/mock/tableDataMin?stationCodes=1&regionCodes=3301', {
    code: 200,
    data: tableDataMin,
})
