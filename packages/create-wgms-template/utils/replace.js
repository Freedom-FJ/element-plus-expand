/*
 * @Author: mjh
 * @Date: 2023-04-29 01:07:16
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-29 15:11:32
 * @Description:
 */
import path from 'path'
import { readFileSync, writeFileSync } from 'fs'
import handlebars from 'handlebars'

export const detailPackages = (res, interPath, outPath, pack) => {
    const interResPath = path.resolve(...interPath)
    const outResPath = path.resolve(...outPath)
    const content = readFileSync(interResPath, 'utf-8')
    if (pack) {
        const packObj = JSON.parse(content)
        const writeJson = {
            ...packObj,
            ...pack
        }
        writeFileSync(outResPath, JSON.stringify(writeJson, null, '\t'))
        return
    }
    const template = handlebars.compile(content)
    const fileContent = template({
        projectName: res.name,
        componentTitle: res.componentTitle,
        url: res.url
    })
    // 将处理之后的结果重新写入文件
    writeFileSync(outResPath, fileContent)
}
