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
const xData = ['水', '煤', '电', '其他']
const yData = [6000, 2000, 1000, 1000]
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(params: any) {
            const str
                        = `<div><div>${params[0].axisValue}</div><div style='display:
                        flex;height:20px;align-items:center;'>${params[0].marker}
                        <div>${params[0].data}${params[0].seriesName}</div></div>`
            return str
        }
    },
    title: {
        text: '各类能源排放总量',
        top: 8,
        padding: [0, 0, 0, 18],
        textStyle: {
            color: 'rgba(255,255,255,1)',
            fontWeight: 700,
            fontSize: 14
        }
    },
    color: ['#03d5fb'],
    grid: {
        top: '60',
        left: '50',
        bottom: '30',
        right: '20'
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
                interval: 0
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
            name: '单位：（t）',
            nameTextStyle: {
                color: 'rgba(255,255,255,.6)',
                nameLocation: 'start',
                padding: [5, 0, 0, 0]
            },
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
                    color: ['rgba(3,139,143,0.1)', 'rgba(255,255,255,0)']
                },
                interval: 1
            },
            axisLabel: {
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'Bebas Neue',
                fontSize: 12,
                formatter: (value: number) => {
                    return `${(value / 1000).toFixed(2)}k`
                }
            }
        }
    ],
    series: [
        {
            name: 't',
            type: 'bar',
            barWidth: 40,
            data: yData,
        }
    ]
}
</script>
