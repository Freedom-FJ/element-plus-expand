<!--
 * @Author: mjh
 * @Date: 2023-04-25 12:41:00
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-25 12:46:48
 * @Description:
-->
<template>
    <EchartDemo :option="option" height="400px" />
</template>

<script lang="ts" setup>
const option = {
    tooltip: {
        trigger: 'axis',
        formatter: (param: any) => {
            return [`${param[0].axisValueLabel}-${param[0].seriesName}:`, `平均值: ${param[0].value[3]
                ? param[0].value[3]
                : '--'}`, `最大值: ${
                param[0].value[5]
                    ? param[0].value[5]
                    : '--'}`, `最小值: ${param[0].value[1]
                ? param[0].value[1]
                : '--'}`].join('<br/>')
        }
    },
    title: {
        text: '站点趋势变化图',
        left: 'center',
        textStyle: {
            fontFamily: 'PingFangSC',
            fontSize: '14',
            color: '#303133',
            fontWeight: 'normal'
        }
    },
    grid: {
        left: 15,
        right: '0',
        top: 60,
        bottom: 45,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(220, 223, 230, 1)'
            }
        },
        axisLabel: {
            fontFamily: 'PingFangSC',
            fontSize: '12',
            color: (val: string) => {
                if (val === '浦沿东冠站') return 'rgba(64, 158, 255, 1)'
                return '#303133'
            },
            fontWeight: 'normal',
            interval: 0
        },
        data: ['上塘河（保障桥）', '和睦港',
            '六塘文洋桥', '浦沿东冠站', '上城藻类应急', '拱墅藻类应急',
            '西湖藻类应急', '余杭藻类应急']
    },
    yAxis: {
        min: 0,
        type: 'value',
        name: 'mg/L',
        nameTextStyle: {
            color: 'rgba(96, 98, 102, 1)'
        },
        splitArea: {
            show: true,
            color: ['rgba(242, 246, 252, 1)', 'transparent']
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(220, 223, 230, 1)'
            }
        },
        axisLabel: {
            fontFamily: 'Oswald',
            fontSize: '12',
            color: '#303133',
            fontWeight: 'normal'
        }
    },
    series: [
        {
            name: '水质类别',
            type: 'boxplot',
            data: [
                [3, 4, 4, 4, 5, 4, 2, '氨氮(NH3-N)、总磷(以 P 计）'],
                [null, null, null, null, null, null, 3, '', []],
                [2, 4, 4, 4, 5, 4, 3, '氨氮(NH3-N)'],
                [null, null, null, null, null, null, 2, '', []],
                [3, 3, 3, 3, 5, 3, 3, ''],
                [null, null, null, null, null, null, 3, '', []],
                [3, 3, 3, 3, 5, 3, 3, ''],
                [null, null, null, null, null, null, 3, '', []],
                [3, 3, 3, 3, 5, 3, 3, ''],
                [3, 5, 5, 5, 5, 5, 3, '总磷(以 P 计）、氨氮(NH3-N)'],
                [3, 4, 4, 4, 5, 4, 3, '氨氮(NH3-N)'],
                [4, 5, 5, 5, 5, 5, 2, '总磷(以 P 计）、氨氮(NH3-N)、溶解氧'],
                [null, null, null, null, null, null, 3, '', []],
                [null, null, null, null, null, null, 3, '', []],
                [3, 3, 3, 3, 5, 3, 3, ''],
                [3, 4, 4, 4, 5, 4, 3, '氨氮(NH3-N)'],
                [null, null, null, null, null, null, 3, '', []],
                [null, null, null, null, null, null, 3, '', []],
                [null, null, null, null, null, null, 3, '', []],
                [null, null, null, null, null, null, 3, '', []],
            ],
            itemStyle: {
                color: 'rgba(255, 153, 2, 1)',
                borderColor: 'rgba(255, 153, 2, 1)'
            }
        },
        {
            name: '水质类别',
            type: 'line',
            lineStyle: {
                color: 'rgba(64, 158, 255, 1)'
            },
            data: [4, null, 4, 3, 3, 3, 5, 4, 5, null, null, 3, 4, null, null, null, null, null, null],
            smooth: true,
            tooltip: {
                show: false
            },
            connectNulls: true // 无数的点连接在一起
        }
    ]
}
</script>
