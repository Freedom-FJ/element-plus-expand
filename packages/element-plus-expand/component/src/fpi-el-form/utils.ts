/*
 * @Author: mjh
 * @Date: 2022-12-02 15:52:39
 * @LastEditors: mjh
 * @LastEditTime: 2022-12-03 15:22:07
 * @Description:
 */

const getNumber = (value: string | null | number) => {
    let str = `${value ?? ''}`
    const char1 = str.charAt(0)
    const char2 = str.charAt(1)
    if (char1 === '.') str = ''
    if (char1 === '-' && char2 === '.') str = '-'
    str = str.toString() // replace()方法是字符串方法
        .replace(/[^\d.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace('.', '$#$')
        .replace(/\./g, '')
        .replace('$#$', '.')// 只能输入一个小数点
    value = (str[str.length - 1] === '.' || !str) ? char1 === '-' ? char1 + str : str : parseFloat(char1 === '-' ? char1 + str : str)
    return value
}
const getInit = (value: string | null | number) => {
    let str = `${value ?? ''}`
    const char = str.charAt(0)
    // 先把非数字的都替换掉
    str = str.replace(/[^\d]/g, '')
    // 如果第一位是负号，则允许添加
    if (char === '-')
        str = `-${str}`
    value = str[str.length - 1] === '-' || !str ? str : parseFloat(str)
    return value
}
const getPositiveNumber = (value: string | null | number) => {
    let str = `${value ?? ''}`
    if (str && str[0] === '.') str = ''
    str = str.toString() // replace()方法是字符串方法
        .replace(/[^\d.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace('.', '$#$')
        .replace(/\./g, '')
        .replace('$#$', '.')// 只能输入一个小数点
    value = (str[str.length - 1] === '.' || !str) ? str : parseFloat(str)
    return value
}
const getNegativeNumber = (value: string | null | number) => {
    let str = `${value || ''}`
    const char1 = str.charAt(0)
    if (char1 !== '-') str = ''
    str = str.toString() // replace()方法是字符串方法
        .replace(/[^\d.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace('.', '$#$')
        .replace(/\./g, '')
        .replace('$#$', '.')// 只能输入一个小数点
    value = (str[str.length - 1] === '.' || !str) ? char1 === '-' ? char1 + str : str : parseFloat(char1 === '-' ? char1 + str : str)
    return value
}
const getPositiveInt = (value: string | null | number) => {
    const num = parseFloat(value as string)
    if (Object.is(num, NaN))
        value = null
    else value = num
    return value
}
const getNegativeInt = (value: string | null | number) => {
    const str = `${value || ''}`
    if (str.length === 1 && str[0] === '-') {
        //
    }
    else {
        const num = parseFloat(str)
        if (Object.is(num, NaN))
            value = null
        else value = num
    }
    return value
}

export const inputLimitObj = {
    'int': getInit, // 整数
    'positive-int': getPositiveInt, // 正整数
    'negative-int': getNegativeInt, // 负数整数
    'number': getNumber, // 数字
    'positive-number': getPositiveNumber, // 正数
    'negative-number': getNegativeNumber, // 负数
}
