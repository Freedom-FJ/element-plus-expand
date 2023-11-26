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
const xAxis = ['2022-08-01 03', '2022-08-01 04', '2022-08-01 05', '2022-08-01 06', '2022-08-01 07', '2022-08-01 08', '2022-08-01 09', '2022-08-01 10', '2022-08-01 11', '2022-08-01 12', '2022-08-01 13', '2022-08-01 14', '2022-08-01 15']
const seriesData = {
    temperature: [15.5, 8.5, 1.2, 8.5, 17.4, 25.8, 20.8, 25.8, 15.8, 8.5, 25.8, 14.6, 30.8],
    rain: [0.02, 0.85, 1.74, 1.55, 2.58, 0.85, 2.58, 2.08, 1.58, 0.85, 3.08, 2.58, 1.46]
}
const option = {
    grid: {
        top: 30,
        right: 32,
        bottom: 50,
        left: 30
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        },
        textStyle: {
            color: '#b9cfe2',
            fontFamily: 'PingFang SC'
        },
        formatter: (params: any[]) => {
            let str = `<div>${params[0].axisValue}</div>`
            params.forEach((item: any, index: number) => {
                let unit = ''
                if (index === 0)
                    unit = 'mm'
                else if (index === 1)
                    unit = '°C'
                str += `<div>${item.marker}${item.seriesName}：${item.value
                    ? item.value
                    : '--'}${unit}</div>`
            })
            return str
        }
    },
    legend: {
        show: true,
        bottom: 5,
        inactiveColor: 'rgba(255,255,255,0.5)',
        textStyle: {
            color: 'rgba(255,255,255,1)'
        },
        itemHeight: 2,
        itemWidth: 16,
        data: [
            {
                name: '温度',
                icon: 'rect',
            },
            {
                name: '降雨量',
                icon: 'rect',
            }
        ]
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.5)'
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontFamily: 'Bebas Neue',
                fontSize: '12',
                color: 'rgba(255,255,255,0.6)'
            },
            formatter: (value: string) => {
                return value.slice(-2)
            }
        },
        axisTick: {
            show: false
        },
        data: xAxis
    },
    yAxis: [
        {
            type: 'value',
            name: '°C',
            // nameLocation: 'start',
            nameTextStyle: {
                align: 'right',
                padding: [-110, 0, 0, 0]
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Bebas Neue',
                    fontSize: '12',
                    color: 'rgba(255,255,255,0.6)'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            },
            axisPointer: {
                snap: true
            },
            splitLine: { show: false },
            axisTick: { show: false },
            inverse: true // 折线翻转
        },
        {
            type: 'value',
            name: 'mm',
            nameTextStyle: {
                align: 'left',
                padding: [0, 0, -10, 0]
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    fontFamily: 'Bebas Neue',
                    fontSize: '12',
                    color: 'rgba(255,255,255,0.6)'
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
            },
            axisPointer: {
                snap: true
            },
            splitLine: { show: false },
            axisTick: { show: false }
        }
    ],
    series: [
        {
            name: '温度',
            type: 'line',
            showSymbol: false, // 不显示点
            yAxisIndex: 0,
            lineStyle: {
                color: 'rgba(255, 180, 67, 1)',
                opacity: 1,
                width: 0.5
            },
            areaStyle: {
                color: 'rgba(255, 180, 67, .5)'
            },
            data: seriesData.temperature
        },
        {
            name: '降雨量',
            type: 'line',
            showSymbol: false, // 不显示点
            yAxisIndex: 1,
            areaStyle: {
                color: 'rgba(0, 221, 255, .5)'
            },
            markPoint: {
                show: false,
            },
            lineStyle: {
                color: 'rgba(0, 221, 255, 1)',
                opacity: 1,
                width: 0.5
            },
            data: seriesData.rain
        }
    ]
}
</script>
