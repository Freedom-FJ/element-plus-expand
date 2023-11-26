/*
 * @Author: mjh
 * @Date: 2023-04-11 11:08:41
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-11 17:26:30
 * @Description:
 */
import download from 'download-git-repo'
import chalk from 'chalk'
import ora from 'ora'

export default (remote, name, option) => {
    const downSpinner = ora('正在下载模板...').start()
    return new Promise((resolve, reject) => {
        download(remote, name, option, (err) => {
            if (err) {
                downSpinner.fail()
                console.log('err', chalk.red(err))
                reject(err)
                return
            }
            downSpinner.succeed(chalk.green('模板下载成功！'))
            console.log(chalk.green(`cd ${name}\r\n`))
            console.log(chalk.blue('yarn install\r\n'))
            console.log('yarn build\r\n')
            console.log('yarn dev\r\n')
            resolve()
        })
    })
}
