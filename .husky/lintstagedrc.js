/*
 * @Author: mjh
 * @Date: 2022-11-10 11:29:08
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-18 17:15:01
 * @Description: 
 */
module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ["npm run lint"],
  '*.{html,vue,css,scss,sass,less,styl}': ["stylelint --fix --allow-empty-input"],
}