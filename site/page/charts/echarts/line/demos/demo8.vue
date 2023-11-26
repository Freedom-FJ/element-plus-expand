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
const goodData = [100, 100, 99, 98, 95]
const targetDate = [100, 100, 100, 100, 100]
const option = {
    grid: {
        top: '90',
        left: '50',
        bottom: '30',
        right: '40'
    },
    title: {
        text: 'title',
        left: 90,
        top: 20,
        textStyle: {
            fontSize: 20,
            color: '#FFFFFF'
        }
    },
    tooltip: {
        trigger: 'axis',
        formatter: (arg: any) => {
            return `${arg[0].seriesName}  ${arg[0].value}%`
        }
    },
    xAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        data: [2017, 2018, 2019, 2020, 2021],
        axisLabel: {
            color: 'rgba(255, 255, 255, 0.6)',
            fontFamily: 'Microsoft YaHei',
            fontSize: 14,
            fontWeight: 'bold'
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.2)'
            }
        }
    },
    yAxis: {
        name: '%',
        nameTextStyle: {
            fontFamily: 'Bebas Neue',
            fontSize: 14,
            color: 'rgba(255, 255, 255, 0.6)',
            padding: [0, 25, 0, 0] // 设置位置
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
        splitArea: { // 背景斑马纹
            show: true,
            areaStyle: {
                color: ['rgba(255,255,255,0)',
                    'rgba(3,139,143,0.1)']
            },
            interval: 1
        },
        axisLabel: {
            show: true,
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'Bebas Neue',
            fontSize: 14
        }
    },
    series: [
        {
            name: '达标率',
            type: 'line',
            data: goodData,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: (arg: any) => {
                            if (arg.data < targetDate[arg.dataIndex]) return ''
                            return arg.data
                        },
                        textStyle: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#00e87e'
                        }
                    }
                }
            }
        },
        {
            name: '达标率',
            type: 'line',
            symbol: 'circle',
            symbolSize: 6,
            data: goodData,
            lineStyle: {
                normal: {
                    color: '#ffffff', // 折线的颜色
                    width: '2' // 折线粗细
                }
            },
            itemStyle: {
                normal: {
                    color: (arg: any) => {
                        if (arg.data < targetDate[arg.dataIndex]) return '#E12234'
                        else return '#00e87e'
                    },
                    label: {
                        show: true,
                        formatter: (arg: any) => {
                            if (arg.data >= targetDate[arg.dataIndex]) return ''
                            return arg.data
                        },
                        textStyle: {
                            fontSize: 18,
                            color: 'red',
                            fontWeight: 'bold'
                        }
                    }
                }
            }
        }
    ]
}
</script>
