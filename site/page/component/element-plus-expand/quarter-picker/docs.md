# fpi-el-quarter-picker 季度选择组件 ^(beta)

::: tip
当前组件正在 beta 测试阶段
:::

## 基础使用

通过时间设置当前选择季度
<demo src="./demos/demo1.vue"></demo>

## 属性
| 参数                      | 说明                                                     | 类型           | 可选值     | 默认值         |
| ------------------------ | -------------------------------------------------------- | ------------- | --------- | ------------- |
| v-model    | v-model绑定值          | Date, String          | Date, String          | -          | 
| popperClass      | 弹窗的style          | string          | string         | -          | 
| popperStyle     | 播放周期时间          | CSSProperties          | CSSProperties         | {}          | 
| popperWidth     | 弹窗的宽度          | Number          | number          | 284       | 
| inputClass      | 输入框的样式          | String          | String          | -          | 
| inputStyle     | 输入框的style     | CSSProperties     | CSSProperties     | {}     | 
| format     | 输入框显示值的格式化     | String     | String     | YYYY年第q季度     | 
| placeholder     | 输入提示     | String     | String     | 请选择季度     | 
| disabledDate     | 禁止选择的季度     | Function     | Function   | `(date: { year: number startMonth: number endMonth: number q: string Q: string }) => !date`     | 
| placeholder     | 输入提示     | String     | String     | 请选择季度     | 
| clearable     | 是否显示清楚值     | boolean     | true/false     | true     | 
| size     | 输入框尺寸大小     | String     | 'small'/'default'/'large'     | 'default'     | 
| valueFormat     | 选择值的显示     | String     | String    | 第q季度     | 

## 事件
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| update:modelValue | vue3配合 v-model使用的事件 | `(e: 'update:modelValue', date: Date/null): void` |
| change | 季度选择修改 | `(e: 'change', date: Date/null, detail: any): void` |


## 方法
| 方法 | 说明 | 参数 |
| ---- | ---- | ---- |
| transformQuarterInfoByDate | 更新时间 | `transformQuarterInfoByDate: (date?: Date) => ({ text: string(输入框显示字符); key: string; startMonth: number(季度开始月份); endMonth: number(季度结束月份); q: string(季度数字 1 2 3 4);  Q: string(季度中文数字 一 二 三 四);  year: number(所在年份); }),` |

```typescript
defineExpose({
    transformQuarterInfoByDate: (date?: Date) => ({
        text: string; // 输入框显示字符
        key: string;
        startMonth: number; // 季度开始月份
        endMonth: number; // 季度结束月份
        q: string; // 季度数字 1 2 3 4
        Q: string; // 季度中文数字 一 二 三 四
        year: number; // 所在年份
    }),
})
```
## 贡献者：
<ContributorView name="李国帝"></ContributorView>
