/*
 * @Author: mjh
 * @Date: 2023-03-13 16:37:54
 * @LastEditors: mjh
 * @LastEditTime: 2023-06-21 17:41:47
 * @Description:
 */
import { readFile } from 'fs/promises'
import { existsSync, rmdirSync } from 'fs'
import commandLineArgs from 'command-line-args'
import commandLineUsage from 'command-line-usage'
import prompts from 'prompts'
import gitClone from './utils/gitClone.js'
import { detailPackages } from './utils/replace.js'
import { helpSections, isDeleteOption, nameOption, promptsOptions } from './utils/option.js'
const pkg = JSON.parse(await readFile(new URL('./package.json', import.meta.url)))
// 配置命令参数
const optionDefinitions = [
    { name: 'version', alias: 'v', type: Boolean },
    { name: 'help', alias: 'h', type: Boolean },
    { name: 'command', defaultOption: true }
]

const options = commandLineArgs(optionDefinitions, { stopAtFirstUnknown: true })
const remoteList = [
    { name: '基础模版', git: 'https://git.fpi-inc.site/wangtian/vue3-template.git#cli' },
    { name: '大屏mapbox模版', git: 'https://git.fpi-inc.site/wangtian/vue3-screen-template.git#cli' },
    { name: '手机H5模版', git: 'https://git.fpi-inc.site/wangtian/vue3-template-h5.git#cli' },
]

const getUserInfo = async (name) => {
    const res = await prompts(name ? promptsOptions : [...nameOption, ...promptsOptions])
    res.name = name || res.name
    const path = `./${res.name}`
    const ad = existsSync(path)
    if (!ad) { getData(res) }
    else {
        const deOption = await prompts(isDeleteOption)
        if (!deOption.isDelete) return
        await rmdirSync(path, { recursive: true })
        getData(res)
    }
    // 得到 codeContent 对应的 sourceFile
    // modifyPage()
}

const getData = async (res) => {
    const gitUrl = remoteList.find(item => item.name === res.template)?.git
    if (!gitUrl) return
    await gitClone(`direct:${gitUrl}`, res.name, { clone: true })
    detailPackages(
        res,
        [`./${res.name}`, 'package.json'],
        [`./${res.name}`, 'package.json'],
        { name: res.name, description: res.description }
    )
    detailPackages(res, [`./${res.name}/src/config`, 'index.ts'], [`./${res.name}/src/config`, 'index.ts'])
    detailPackages(res, [`./${res.name}`, 'vite.config.ts'], [`./${res.name}`, 'vite.config.ts'])
}
const runOptions = () => {
    if (options.help) {
        console.log(commandLineUsage(helpSections))
        return
    }
    if (options.command === 'init') {
        const argv = options._unknown || []
        const runDefinitions = [
            { name: 'name', defaultOption: true }
        ]
        const runOptions = commandLineArgs(runDefinitions, { argv, stopAtFirstUnknown: true })
        getUserInfo(runOptions.name)
        return
    }
    if (options.command === 'list') {
        console.table(remoteList)
        return
    }

    if (options.version) {
        console.log(`v${pkg.version}`)
        return
    }
    if (options._unknown) {
        console.log('输入的命令有误！')
        console.log(commandLineUsage(helpSections))
        return
    }
    getUserInfo()
}

runOptions()

