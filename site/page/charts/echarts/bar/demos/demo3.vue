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
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    color: ['#00fc83'],
    grid: {
        top: '20',
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
            data: [2018, 2019, 2020, 2021]
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
                    color: ['rgba(3,139,143,0.1)', 'rgba(255,255,255,0)']
                },
                interval: 1
            },
            axisLabel: {
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'Bebas Neue',
                fontSize: 12
            }
        }
    ],
    series: [
        {
            name: '曝光',
            type: 'bar',
            barWidth: 40,
            data: [2325, 1207, 878, 1083],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top'
                    }
                }
            }
        }
    ]
}
</script>
