/*
 * @Author: mjh
 * @Date: 2023-04-29 13:35:48
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-29 15:05:01
 * @Description:
 */
// 帮助命令
export const helpSections = [
    {
        header: 'create-vite-template',
        content: '一个快速生成水产品vite+typescript+vue模版的脚手架',
        raw: true
    },
    {
        header: '开启交互创建工程',
        content: 'wgms-cli'
    },
    {
        header: '直接创建工程',
        content: 'wgms-cli init <projectName>'
    },
    {
        header: '查看仓库列表',
        content: 'wgms-cli list'
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'version',
                alias: 'v',
                typeLabel: '{underline boolean}',
                description: '版本号'
            },
            {
                name: 'help',
                alias: 'h',
                typeLabel: '{underline boolean}',
                description: '帮助'
            }
        ]
    }
]

export const nameOption = [
    {
        type: 'text',
        name: 'name',
        message: '请输入项目名称',
        validate: val => !!val
    }
]
// 交互页面
export const promptsOptions = [
    {
        type: 'text',
        name: 'description',
        message: '请输入项目描述'
    },
    {
        type: 'text',
        name: 'url',
        message: '请输入项目本地代理地址',
        initial: 'http://wgms.dev.fpi-inc.site'
    },
    {
        type: 'select', // 单选
        name: 'template',
        message: '请选择一个模板',
        choices: [
            { title: '基础模版', value: '基础模版' },
            { title: '大屏mapbox模版', value: '大屏mapbox模版' },
            { title: '手机H5模版', value: '手机H5模版' },
        ]
    }
]

export const isDeleteOption = [
    {
        type: 'select', // 单选
        name: 'isDelete',
        message: '当前目录名称已经存在，是否删除次文件夹？',
        choices: [
            { title: '是', value: true },
            { title: '否', value: false },
        ]
    }
]
