<!--
 * @Author: mjh
 * @Date: 2023-04-25 12:41:00
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-25 12:46:48
 * @Description:
-->
<template>
    <EchartDemo :option="option" theme="dark" />
</template>

<script lang="ts" setup>
const xData = ['国控', '省控', '市控', '县控']
const yData = [
    { value: 120, done: 120, unDone: 0 },
    { value: 110, done: 70, unDone: 40 },
    { value: 80, done: 50, unDone: 30 },
    { value: 75, done: 50, unDone: 25 },
]
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(params: any) {
            console.log(params, 'params')
            const str = `<div><div>${params[0].axisValue}</div>
        <div style='display: flex;height:20px;align-items:center;'>
        <span>
        总共${params[0].data}${params[0].seriesName}：
        </span>
        </div>
        <div style='display: flex;height:20px;align-items:center;'>
        ${params[1].marker}
        <span>
        已处置：${params[1].data}${params[0].seriesName}
        </span>
        </div>
        <div style='display: flex;height:20px;align-items:center;'>
        ${params[0].marker}
        <span>
        未处置：${params[0].data
        - params[1].data}${params[0].seriesName}
        </span>
        </div>`
            return str
        }
    },
    color: ['#F84439', '#36F097'],
    grid: {
        top: '40',
        left: '35',
        bottom: '35',
        right: '15'
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#ffffff',
                fontSize: 14,
                interval: 0,
                fontFamily: 'TRENDS'
            },
            axisLine: {
                lineStyle: {
                    color: '#038b8f'
                }
            },
            data: xData
        }
    ],
    yAxis: [
        {
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['transparent', 'rgba(255, 255, 255, 0.05)'],
                },
            },
            axisLabel: {
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'TRENDS',
                fontSize: 12,
            }
        }
    ],
    series: [
        {
            name: '个',
            type: 'bar',
            barWidth: 25,
            data: yData.map(item => item.value),
            itemStyle: {
                color: '#F84439',
                normal: {
                }
            },
            label: {
                show: true,
                position: 'top',
                color: 'white',
                fontFamily: 'Furore',
                fontSize: 14,
                formatter: (val: any) => {
                    const index = val.dataIndex
                    const currData = yData[index]
                    return `${Math.round(currData.done / currData.value * 1000) / 10}%`
                }
            },
            z: '-1', // 改变这根柱子的层级使这根柱子在下面
        },
        {
            name: '个',
            type: 'bar',
            barWidth: 25,
            data: yData.map(item => item.done),
            itemStyle: {
                color: '#36F097'
            },
            barGap: '-100%', // 移动第二个柱子的位置实现重叠
        }
    ]
}
</script>
