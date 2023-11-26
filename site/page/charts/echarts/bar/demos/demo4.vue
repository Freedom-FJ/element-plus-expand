<!--
 * @Author: mjh
 * @Date: 2023-04-25 12:41:00
 * @LastEditors: mjh
 * @LastEditTime: 2023-08-23 13:40:35
 * @Description:
-->
<template>
    <EchartDemo :option="option" theme="dark" />
</template>

<script lang="ts" setup>
const xData = ['乌鲁木齐市', '哈密市', '吐鲁番市', '昌吉州', '博州', '新市']
const goodList = [72, 86, 48, 63, 40, 50]
const badList = [30, 23, 18, 13, 10, 19]
const option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    color: ['#00fc83', '#ff4d4f'],
    grid: {
        top: '40',
        left: '35',
        bottom: '45',
        right: '15'
    },
    legend: {
        show: true,
        bottom: 0,
        left: 'center',
        icon: 'circle',
        // itemWidth: 14,
        // itemHeight: 14,
        textStyle: {
            fontSize: '12',
            color: '#fff'
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                fontSize: '12px',
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(68, 136, 208, 0.25)'
                }
            },
            data: xData
        }
    ],
    yAxis: [
        {
            name: '%',
            nameTextStyle: {
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
                padding: [0, 20, 0, 0]
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: { // 值分割线
                show: true,
                lineStyle: {
                    color: 'rgba(68, 136, 208, 0.25)'
                }
            },
            axisLabel: {
                color: 'rgba(255, 255, 255, 0.6)',
                fontSize: '12px',
            }
        }
    ],
    series: [
        {
            name: '优良比例',
            type: 'bar',
            barWidth: 15,
            data: goodList,
            itemStyle: {
                color: '#00fc83'
            },
        },
        {
            name: '劣V比例',
            type: 'bar',
            barWidth: 15,
            itemStyle: {
                color: '#ff4d4f'
            },
            data: badList
        }
    ]
}
</script>
