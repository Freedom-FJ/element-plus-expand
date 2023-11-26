<!--
 * @Author: mjh
 * @Date: 2023-04-25 12:41:00
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-25 12:45:42
 * @Description:
-->
<template>
    <EchartDemo :option="option" theme="dark" />
</template>

<script lang="ts" setup>
const xData = ['五常', '仁和', '良渚', '闲林', '仓前', '余杭', '百丈']
const yData = [7.66, 6, 2.44, 8, 5, 8.66, 7]
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(params: any) {
            const str = `<div><div>${params[0].axisValue}</div><div
            style='display:
            flex;height:20px;align-items:center;'>${params[0].marker}
            <div>${params[0].data}${params[0].seriesName}</div></div>`
            return str
        }
    },
    color: ['#03d5fb'],
    grid: {
        top: '16',
        left: '30',
        bottom: '30',
        right: '10'
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
                // x轴竖线
                lineStyle: {
                    color: 'rgba(255,255,255,.2)'
                    // type: 'dashed',
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
            name: 'mm',
            type: 'line',
            smooth: true, // 折线平滑
            connectNulls: true, // 断线连接
            barWidth: 13,
            data: yData,
            symbolSize: 'none', // 设定拐点的大小
            itemStyle: {
                show: false
            },
            lineStyle: {
                // 设置折线颜色
                color: '#00DDFF'
            },
            areaStyle: {
                // 阴影颜色渐变
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0, 221, 255, 0.7)' // 100% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(0, 221, 255, 0)' // 0% 处的颜色
                            }
                        ],
                        globalCoord: false, // 缺省为 false
                    }
                }
            },
            markLine: {
                symbol: 'none', // 去掉箭头
                data: [
                    {
                        yAxis: 5.66,
                        name: '5.66m',
                        label: {
                            show: true,
                            formatter: '{b}',
                            position: 'insideEndBottom',
                            // distance: -35,
                            fontSize: 12,
                            lineHeight: 15,
                            fontFamily: 'Furore',
                            // padding: [40, 0, 0, 0],
                            color: 'rgba(255, 153, 2, 1)',
                            // borderRadius: 8
                        },
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(255, 153, 2, 1)',
                            width: 2
                        }
                    },
                    {
                        yAxis: 6.66,
                        name: '6.66m',
                        label: {
                            show: true,
                            formatter: '{b}',
                            position: 'insideEndTop',
                            fontSize: 12,
                            lineHeight: 15,
                            color: 'rgba(248, 68, 57, 1)',
                            fontFamily: 'Furore'
                        },
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(248, 68, 57, 1)',
                            width: 2
                        }
                    },
                    {
                        yAxis: 2,
                        name: '2m',
                        label: {
                            show: false,
                        },
                        lineStyle: {
                            type: 'dashed',
                            color: 'white',
                            width: 2
                        }
                    }
                ]
            }
        }
    ]
}
</script>
