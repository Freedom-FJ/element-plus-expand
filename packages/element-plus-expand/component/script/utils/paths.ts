/*
 * @Author: mjh
 * @Date: 2023-04-26 18:43:50
 * @LastEditors: mjh
 * @LastEditTime: 2023-06-21 17:28:18
 * @Description:
 */
import { resolve } from 'path'

// 组件库根目录
export const componentPath = resolve(__dirname, '../../')

// pkg根目录
export const pkgPath = resolve(__dirname, '../../../package')

// es 目录
export const esPath = `${pkgPath}/es`
// lib 目录
export const libPath = `${pkgPath}/lib`
