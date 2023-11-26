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
const xData = ['2022-09-21 00:00', '2022-09-21 01:00', '2022-09-21 02:00', '2022-09-21 03:00', '2022-09-21 04:00', '2022-09-21 05:00', '2022-09-21 06:00', '2022-09-21 07:00', '2022-09-21 08:00', '2022-09-21 09:00', '2022-09-21 10:00', '2022-09-21 11:00', '2022-09-21 12:00', '2022-09-21 13:00', '2022-09-21 14:00', '2022-09-21 15:00', '2022-09-21 16:00', '2022-09-21 17:00', '2022-09-21 18:00', '2022-09-21 19:00', '2022-09-21 20:00', '2022-09-21 21:00', '2022-09-21 22:00', '2022-09-21 23:00', '2022-09-22 00:00', '2022-09-22 01:00', '2022-09-22 02:00', '2022-09-22 03:00', '2022-09-22 04:00', '2022-09-22 05:00', '2022-09-22 06:00', '2022-09-22 07:00', '2022-09-22 08:00', '2022-09-22 09:00', '2022-09-22 10:00', '2022-09-22 11:00', '2022-09-23 00:00', '2022-09-23 01:00', '2022-09-23 02:00', '2022-09-23 03:00', '2022-09-23 04:00', '2022-09-23 05:00', '2022-09-24 00:00', '2022-09-24 01:00', '2022-09-24 02:00', '2022-09-24 03:00', '2022-09-24 04:00', '2022-09-24 05:00', '2022-09-25 00:00', '2022-09-25 01:00', '2022-09-25 02:00', '2022-09-25 03:00', '2022-09-25 04:00', '2022-09-25 05:00', '2022-09-26 00:00', '2022-09-26 01:00', '2022-09-26 02:00', '2022-09-26 03:00', '2022-09-26 04:00', '2022-09-26 05:00']
const data = ['2', '1', '15', '4', '13', '8', '3', '2', '1', '7', '5', '24', '5', '0', '5', '0', '36', '18', '7', '9', '5', '8', '37', '3', '2', '1', '15', '4', '13', '8', '7', '9', '5', '8', '37', '3', '3', '2', '1', '7', '5', '24', '5', '0', '5', '0', '36', '18', '7', '9', '5', '8', '37', '3', '5', '0', '5', '0', '36', '18']
const option = {
    title: {
        show: true,
        text: 'N/P(100%)',
        textAlign: 'left',
        left: 10,
        top: 10,
        textStyle: {
            color: 'rgba(255,255,255,0.6)',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'line', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    legend: {
        show: false
    },
    grid: {
        top: 70,
        left: '6%',
        right: '14%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: xData,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,1)',
                },
            },
            axisLabel: {
                // interval: 0,
                textStyle: {
                    fontFamily: 'Bebas Neue',
                    fontSize: '16',
                    fontWeight: 'normal',
                    color: 'rgba(255,255,255,1)',
                },
                formatter: (params: string) => {
                    return params.substr(5, 5)
                },
            },
            axisTick: {
                show: false,
                interval: 24,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '%',
            nameTextStyle: {
                color: 'rgba(255,255,255,1)',
                align: 'center',
                padding: [0, 25, 0, 0],
                fontSize: 16
            },
            axisLabel: {
                textStyle: {
                    fontFamily: 'Bebas Neue',
                    fontSize: 16,
                    fontWeight: 'normal',
                    color: 'rgba(255,255,255,0.6)',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,1)',
                },
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgba(3, 139, 143, 0.1)', 'transparent'],
                },
            },
            splitLine: { show: false },
            axisTick: { show: false },
        },
    ],
    series: [
        {
            name: '趋势',
            type: 'line',
            data,
            markLine: {
                symbol: 'none',
                data: [
                    {
                        silent: false,
                        lineStyle: {
                            type: 'solid',
                            color: '#f54455'
                        },
                        label: {
                            position: 'end',
                            formatter: 'P限制限值',
                            backgroundColor: '#f54455',
                            color: '#fff',
                            borderRadius: 20,
                            padding: [3, 7]
                        },
                        yAxis: 9
                    },
                    {
                        silent: false,
                        lineStyle: {
                            type: 'solid',
                            color: '#f54455'
                        },
                        label: {
                            position: 'end',
                            formatter: () => {
                                return 'N限制限值'
                            },
                            backgroundColor: '#f54455',
                            color: '#fff',
                            borderRadius: 20,
                            padding: [3, 7]
                        },
                        yAxis: 22.6
                    },
                ]
            },
            axisLabel: {
                textStyle: {
                    fontFamily: 'Bebas Neue',
                    fontSize: '16',
                    fontWeight: 'normal',
                },
            },
            lineStyle: {
                color: '#00e87e',
            },
            itemStyle: {
                color: '#00e87e',
            },
            splitLine: { show: false },
            axisTick: { show: false },
        }
    ]
}
</script>
