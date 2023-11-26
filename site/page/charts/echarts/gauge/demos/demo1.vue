<!--
 * @Author: mjh
 * @Date: 2023-04-25 12:41:00
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-28 00:07:39
 * @Description:
-->
<template>
    <EchartDemo :option="option" theme="dark" />
</template>

<script lang="ts" setup>
const data = {
    complete: 5,
    total: 15
}
const option = {
    title: {
        text: '问题整改',
        left: 40,
        top: '10%',
        textStyle: {
            color: 'white',
            fontSize: '18'
        }
    },
    tooltip: {
        formatter: `{a} {b}:  ${((data.complete / data.total) * 100).toFixed(1)}%`,
        position: 'left'
    },
    series: [
        {
            name: '问题整改完成率',
            type: 'gauge',
            center: ['50%', '60%'], // 左右 上下 仪表位置
            radius: '90%', // 仪表大小
            detail: { show: false, formatter: '{value}%' },
            data: [{ value: data.complete }],
            // startAngle: 210, // 仪表盘起始角度,默认 225。圆心正右手侧为0度，正上方为90度，正左手侧为180度。
            // endAngle: -30, // 仪表盘结束角度,默认 -45
            min: 0, // 最小的数据值,默认 0 。映射到 minAngle。
            max: data.total, // 最大的数据值,默认 100 。映射到maxAngle。
            splitNumber: 2, // 仪表盘刻度的分割段数,默认 10。
            axisLine: {
                lineStyle: {
                    width: 10, // 这个是修改宽度的属性
                    color: [
                        [data.complete / data.total, '#00E87E'],
                        [1, 'rgb(91, 107, 113)']
                    ]
                }
            },
            axisTick: {
                splitNumber: 4, // 分隔线之间分割的刻度数,默认 5。
                length: 4, // 刻度线长。支持相对半径的百分比,默认 8。
                lineStyle: {
                    // 刻度线样式。
                    color: 'rgba(255,255,255,0.6)' // 线的颜色,默认#eee。
                }
            },
            axisLabel: {
                formatter(v) {
                    return v.toFixed(0)
                }
            },
            splitLine: {
                length: 20,
                lineStyle: {
                    color: 'rgba(255,255,255,0.6)'
                }
            },
            pointer: {
                length: '60%',
                width: 4
            }
        }
    ]
}
</script>
