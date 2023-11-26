<!--
 * @Author: mjh
 * @Date: 2023-04-25 12:41:00
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-25 12:45:14
 * @Description:
-->
<template>
    <EchartDemo :option="lineChart" theme="dark" />
</template>

<script lang="ts" setup>
const xAxisData = ['1月', '2月', '3月', '4月', '5月', '6月']
const seriesData = [20, 30, 45, 50, 60, 80]
const lineChart = {
    grid: {
        top: 30,
        bottom: 40,
        right: 0
    },
    legend: {
        show: false,
    },
    tooltip: {
        trigger: 'axis',
        // 设置显示的文字内容
        formatter: (args: any) => {
            return `${args[0].name}：${args[0].value}万元`
        }
    },
    backgroundColor: 'rgba(23, 31, 39, 1)', // 设置echarts图背景色
    yAxis: {
        splitLine: {
            // 设置y轴分割线为虚线
            lineStyle: {
                type: 'dashed', // y轴分割线类型 虚线
                color: 'rgb(61, 76, 83)'
            }
        },
        axisLine: {
            // 不显示y轴线
            show: false
        },
        // 不显示y轴的小刻度
        axisTick: {
            // 不显示y轴小刻度线
            show: false
        },
        // 把刻度标签里面的文字颜色设置为黑色
        axisLabel: {
            // y轴文本白色
            color: 'white'
        }
    },
    xAxis: {
        data: xAxisData,
        axisLine: {
            lineStyle: {
                color: 'rgb(61, 76, 83)'
            }
        },
        // 不显示y轴的小刻度
        axisTick: {
            show: false
        },
        // 把刻度标签里面的文字颜色设置为黑色
        axisLabel: {
            color: 'white'
        }
    },
    series: {
        name: '张三',
        type: 'line',
        data: seriesData,
        lineStyle: {
            // 设置折线颜色
            color: 'rgba(12, 170, 174,1)'
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
                            color: 'rgba(12, 170, 174,0.8)' // 100% 处的颜色
                        },
                        {
                            offset: 1,
                            color: 'rgba(12, 170, 174,0)' // 0% 处的颜色
                        }
                    ],
                    globalCoord: false, // 缺省为 false
                }
            }
        }
    }
}
</script>
