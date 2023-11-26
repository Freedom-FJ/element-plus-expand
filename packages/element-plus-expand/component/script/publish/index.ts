/*
 * @Author: mjh
 * @Date: 2023-04-26 18:43:50
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-27 19:16:00
 * @Description:
 */
import { series } from 'gulp'
import run from '../utils/run'
import { pkgPath } from '../utils/paths'
export const publishComponent = async () => {
    run('release-it', pkgPath)
}
export default series(async () => publishComponent())
