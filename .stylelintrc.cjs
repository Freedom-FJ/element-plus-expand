/*
 * @Author: mjh
 * @Date: 2022-09-06 09:21:32
 * @LastEditors: mjh
 * @LastEditTime: 2023-07-11 15:39:39
 * @Description: 
 */
module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue/scss",
        "stylelint-config-recess-order"
    ],
    overrides: [
      // 扫描.vue/html文件中的<style>标签内的样式
      {
        files: ['**/*.{vue,html}'],
        customSyntax: 'postcss-html'
      }
    ],
    // 覆盖配置（优先级大于config-standard）
    rules: {
       //配置空格数
        indentation: 4,
        'font-family-no-missing-generic-family-keyword': null,
        'no-descending-specificity': null,
        'function-url-quotes': null,
        'selector-id-pattern': null,
        'no-empty-source': null,
        'selector-class-pattern': null,
        'no-duplicate-selectors': null,
        'property-no-vendor-prefix': null, // 防止自动去除-webkit
        'scss/operator-no-unspaced': null,
        'alpha-value-notation': 'number', // 颜色透明的使用数字
        'color-function-notation': 'legacy', // 颜色值rgb用逗号分隔
        'max-line-length': null, // 最大行
        'value-keyword-case': null,
        'unit-case': null,
        'import-notation': 'string', // 引入始终使用 string url 必须使用string
        // 兼容自定义标签名
        "selector-type-no-unknown": [true, {
            "ignoreTypes": []
        }],
        // 忽略伪类选择器 ::v-deep
        "selector-pseudo-element-no-unknown": [true, {
            "ignorePseudoElements": ["v-deep"]
        }],
        // 'selector-pseudo-class-no-unknown': null,
        // 'selector-class-pattern': null,
    }
  }
  