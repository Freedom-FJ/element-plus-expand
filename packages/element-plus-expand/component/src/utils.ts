import type { App, Plugin } from 'vue'

/**
 * @dec 替换{{}}变量
 * @param {*} vm 变量对象
 * @param {*} expr 变量在对象内的位置  如server.base
 */
export const getVal = (vm: any, expr: string) => {
    if (!expr)
        return vm
    const value = expr.split('.').reduce((data: any, current: any) => {
        return typeof data === 'object' ? data[current] : undefined
    }, vm)
    return value
}
/**
 * 获取类型方法 返回 参数类型 或者 true/false
 * @param {*} tgt 需要判断类型的变量
 * @param {*} type? 可传可不传， 不传的话方法返回变量类型，传的话返回参数类型是否一致true/false
 * 可确定的类型：undefined、null、string、number、boolean、array、object、symbol、
 * date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap
 */
export function DataType(tgt: any): string
export function DataType(tgt: any, type: string): boolean
export function DataType(tgt: any, type?: string) {
    const dataType = Object.prototype.toString
        .call(tgt)
        .replace(/\[object (\w+)\]/, '$1')
        .toLowerCase()
    return (type ? dataType === type : dataType)
}
export function pickKey<T extends Record<string, any>, K extends keyof T>(obj: T, keyArr: K[]) {
    return keyArr.reduce((pre: Record<string, any>, cur: K) => {
        (pre as T)[cur] = obj[cur]
        return pre
    }, {})
}

export const deepClone = (obj: any, cache = new WeakMap()) => {
    if (obj === null || typeof obj !== 'object') return obj
    if (obj instanceof Date) return new Date(obj)
    if (obj instanceof RegExp) return new RegExp(obj)

    if (cache.has(obj)) return cache.get(obj) // 如果出现循环引用，则返回缓存的对象，防止递归进入死循环
    const cloneObj = new obj.constructor() // 使用对象所属的构造函数创建一个新对象
    cache.set(obj, cloneObj) // 缓存对象，用于循环引用的情况

    for (const key in obj) {
        if (key in obj)
            cloneObj[key] = deepClone(obj[key], cache) // 递归拷贝
    }
    return cloneObj
}

export const equal = (a: any, b: any) => {
    if (a === b) return true

    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false

        let length, i
        if (Array.isArray(a)) {
            length = a.length
            if (length !== b.length) return false
            for (i = length; i-- !== 0;)
                if (!equal(a[i], b[i])) return false
            return true
        }

        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf()
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString()

        const keys = Object.keys(a)
        length = keys.length
        if (length !== Object.keys(b).length) return false

        for (i = length; i-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false

        for (i = length; i-- !== 0;) {
            const key = keys[i]

            if (!equal(a[key], b[key])) return false
        }

        return true
    }

    // true if both NaN, false otherwise
    // eslint-disable-next-line no-self-compare
    return a !== a && b !== b
}

/**
 * @dec 赋值对象
 * @param {*} obj 变量对象
 * @param {*} key 变量在对象内的位置  如server.base
 * @param {*} val 变量的值
 */
export const getDeepObj = (obj: Record<string, any>, key: string, val: string | number) => {
    const keyArr = key.split('.')
    keyArr.reduce((data: any, current: any, arr) => {
        if (arr === keyArr.length - 1)
            data[current] = val
        return data[current]
    }, obj)
}

export const isString = (val: any): val is string => {
    return typeof val === 'string'
}

export const isArray = (val: string | object | Array<any> | undefined): val is Array<any> => {
    return DataType(val, 'array')
}

export const isObject = (val: string | object | Array<any> | undefined): val is object => {
    return DataType(val, 'object')
}

export function camelCase(str: string) {
    return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}
export function kebabCase(key: string) {
    const result = key.replace(/([A-Z])/g, ' $1').trim()
    return result.split(' ').join('-').toLowerCase()
}

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
