/*
 * @Author: mjh
 * @Date: 2023-04-27 08:37:51
 * @LastEditors: mjh
 * @LastEditTime: 2023-06-16 14:27:36
 * @Description:
 */
import water from './team/water/sidebar.json'
import elementPlusExpand from './components/element-plus-expand.json'
import waterTemplate from './template/water.json'
import publicTemplate from './template/public.json'
import echarts from './charts/echarts.json'
import screenCom from './components/screen.json'
import PublicTeam from './team/public/sidebar.json'
const sidebar = {
    ...water,
    ...PublicTeam,
    ...elementPlusExpand,
    ...screenCom,
    ...publicTemplate,
    ...waterTemplate,
    ...echarts
}
export default sidebar

