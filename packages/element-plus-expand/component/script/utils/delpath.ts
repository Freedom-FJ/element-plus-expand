/*
 * @Author: mjh
 * @Date: 2023-03-13 16:37:54
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-26 14:16:24
 * @Description:
 */
import fs from 'fs'
import { resolve } from 'path'
import { esPath, libPath, pkgPath } from './paths'
// 保留的文件
const stayFile = ['package.json', 'README.md']

const delPath = async (path: string) => {
    let files: string[] = []
    if (fs.existsSync(path)) {
        console.log(path, 'path')
        files = fs.readdirSync(path)

        files.forEach(async (file) => {
            const curPath = resolve(path, file)

            if (fs.statSync(curPath).isDirectory()) {
                if (file !== 'node_modules') await delPath(curPath)
            }
            else {
                // delete file
                if (!stayFile.includes(file))
                    fs.unlinkSync(curPath)
            }
        })
        if (![libPath, esPath].includes(path)) fs.rmdirSync(path)
    }
}
export default delPath
