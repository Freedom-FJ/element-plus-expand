# DvWgmsEnvironmentalAnalysis  

> 重点因子、月份、区域、时段

## Usage

```vue
<DvWgmsEnvironmentalAnalysis type="month"  />
```

```vue
<DvWgmsEnvironmentalAnalysis type="factor" :begin-time="1514736000000" :end-time="1704038399999" />
```

```vue
<DvWgmsEnvironmentalAnalysis type="area" limit-type="bottom" :begin-time="1514736000000" :end-time="1704038399999" />
```



## Attributes

| Name | Type   | Description | Default |
| --- |--------|-------------|-------------|
| beginTime | number | 开始时间| dayjs().startOf('year').valueOf() |
| endTime | number | 结束时间| dayjs().endOf('year').valueOf() |
| factorGroupId | number/string | 因子id| 8 |
| treeId | number/string | 区域id| 3301 |
| treeType | number | 类型 1 区域 0 流域| 1 |
| title | string | 标题| '断面达标率后三名' |
| type | 'month'/'factor'/'area' |  组件类型分别对应 月度， 因子，区域 | 'factor' |
| limitType | 'top'/'bottom' |  取接口的前几位，还是后几位 | 'top' |
| limitNum | number |  取接口前几位 | 3 |
| selectList | array |  选择统计唯独列表 | array |
| url | string |  自定义接口,传了则不走默认接口 | - |


## Events

| Name | Type | Description |
| --- | --- |-------------|
| selectChange | (item:{ value: string label: string selectLabel?: string },  index: number) => void | 统计维度切换      |

## Methods

| Name | Type | Description |
| --- | --- |-------------|
| selectChange | (index: number) => void | 统计维度切换      |


## 贡献者：

```vue
<ContributorView name="马佳辉"></ContributorView>
```