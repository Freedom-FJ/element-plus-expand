<template>
    <EchartDemo :option="option" theme="dark" />
</template>

<script lang="ts" setup>
const xData = ['09.26 10:00', '09.26 10:20', '09.26 10:40', '09.26 11:00', '09.26 11:20', '09.26 11:40', '09.26 12:40', '09.26 13:00', '09.26 13:20', '09.26 13:40', '09.26 14:00', '09.26 14:20', '09.26 14:40', '09.26 15:00', '09.26 15:20', '09.26 15:40', '09.26 16:00', '09.26 16:20', '09.26 16:40', '09.26 17:00', '09.26 17:20', '09.26 12:00', '09.26 12:20']
const yData = [0.02, 0.04, 0.12, 0.1, 0.1, 0.09, 0.12, 0.15, 0.25, 0.3, 0.46, 0.2, 0.3, 0.5, 0.8, 0.6, 0.8, 0.5, 0.5, 0.8, 2, 2, 2.1]
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(params: any) {
            const str = `<div><div>${params[0].seriesName}</div><div
            style='display:
            flex;height:20px;align-items:center;'>${params[0].marker}
            <div>${params[0].axisValue}：${params[0].data}mm</div></div>`
            return str
        }
    },
    title: {
        text: '化学需氧量 过去24小时趋势变化',
        left: 'center',
        textStyle: {
            color: 'white',
            fontFamily: 'TRENDS',
            fontSize: 12
        }
    },
    color: ['#00DDFF'],
    grid: {
        top: '50',
        left: '30',
        bottom: '35',
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
                fontSize: 12,
                // interval: 0, // 强制显示所有x轴标签
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
            name: 'mm',
            nameTextStyle: {
                fontFamily: 'TRENDS',
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                align: 'center'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                // x轴竖线
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.15)'
                    // type: 'dashed',
                },
            },
            axisLabel: {
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'TRENDS',
                fontSize: 12,
            }
        }
    ],
    series: [
        {
            name: '化学需氧量',
            type: 'line',
            // smooth: true, // 折线平滑
            data: yData,
            symbolSize: 'none', // 设定拐点的大小
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
                        yAxis: 0.5,
                        name: '标准值',
                        symbol: 'none',
                        label: {
                            show: true,
                            formatter: '{b}',
                            position: 'middle',
                            distance: -8,
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
                    },
                ]
            }
        }
    ]
}
</script>
