<template>
    <EchartDemo :option="option" theme="dark" />
</template>

<script lang="ts" setup>
const option = {
    title: {
        text: '',
        left: '0',
        textStyle: {
            color: 'rgba(255,255,255,0.5)',
            fontSize: 12,
            fontFamily: 'TRENDS'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    },
    grid: {
        top: 30,
        left: 40,
        right: 10,
        bottom: 30
    },
    xAxis: [
        {
            type: 'category',
            data: ['2021-10', '2021-11', '2021-12', '2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10'],
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    fontFamily: 'TRENDS',
                    fontSize: '12',
                    color: 'rgba(255,255,255,0.5)'
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            axisLabel: {
                textStyle: {
                    fontFamily: 'TRENDS',
                    fontSize: 12,
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            axisLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: { // 值分割线
                show: true,
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.2)'
                }
            },
            axisTick: {
                show: false
            }
        }
    ],
    visualMap: { // 分段显示逻辑
        top: 50,
        right: 10,
        show: false,
        seriesIndex: 0,
        pieces: [
            {
                min: 0.050000000000000044,
                max: 1,
                color: '#03A9F4'
            },
            {
                min: 1.05,
                max: 2,
                color: '#1976D2'
            },
            {
                min: 2.05,
                max: 3,
                color: '#85C940'
            },
            {
                min: 3.05,
                max: 4,
                color: '#D9CD4C'
            },
            {
                min: 4.05,
                max: 5,
                color: '#EF8E00'
            },
            {
                min: 5.05,
                max: 6,
                color: '#E12214'
            }
        ],
        outOfRange: {
            color: '#999'
        }
    },
    series: {
        name: '水质类别',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8, // 拐点大小 none 代表不显示
        connectNulls: true, // 断线连接
        showAllSymbol: true, // 显示所有拐点
        smooth: true,
        data: [null, null, null, null, 5, 3, 6, 4, 5, 4, 5, null, null],
        markLine: {
            data: [
                {
                    yAxis: 4,
                    name: '目标线',
                    symbol: 'none',
                    label: {
                        show: true,
                        formatter: '{b}',
                        position: 'end',
                        distance: -35,
                        fontSize: 12,
                        lineHeight: 15,
                        padding: [2, 6, 0, 6],
                        color: '#FFFFFF',
                        backgroundColor: '#F84439',
                        borderRadius: 8
                    },
                    lineStyle: {
                        type: 'solid',
                        color: '#F84439',
                        width: 2
                    }
                }
            ]
        }
    }
}
</script>
