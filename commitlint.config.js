/*
 * @Author: mjh
 * @Date: 2022-11-10 11:24:35
 * @LastEditors: mjh
 * @LastEditTime: 2023-06-28 13:43:14
 * @Description:
 */
module.exports = {
    // 继承的规则
    extends: ['@commitlint/config-conventional'],
    // 定义规则类型
    rules: {
        'body-leading-blank': [2, 'always'],
        'footer-leading-blank': [1, 'always'],
        'header-max-length': [2, 'always', 108],
        'subject-empty': [2, 'never'],
        'type-empty': [2, 'never'],
        // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
        'type-enum': [
            2,
            'always',
            [
                'feat', // 新功能 feature
                'fix', // 修复 bug
                'docs', // 文档注释
                'style', // 代码格式(不影响代码运行的变动)
                'refactor', // 重构(既不增加新功能，也不是修复bug)
                'perf', // 性能优化
                'test', // 增加测试
                'chore', // 构建过程或辅助工具的变动
                'revert', // 回退
                'build', // 打包
                'ci', // 修改ci
            ]
        ],
        // subject 大小写不做校验
        'subject-case': [0]
    }
}
