<!--
 * @Author: mjh
 * @Date: 2023-04-25 12:41:00
 * @LastEditors: mjh
 * @LastEditTime: 2023-04-28 00:02:30
 * @Description:
-->
<template>
    <EchartDemo :option="chartOption" theme="dark" />
</template>

<script lang="ts" setup>
const data = [
    { name: '危废单位规范化自查', value: 42, rate: '341次', unit: '' },
    { name: '环境风险自查', value: 212, rate: '15843次', unit: '' },
    { name: '辐射打卡', value: 65, rate: '58584次', unit: '' },
    { name: '治理设施自巡查', value: 764, rate: '111次', unit: '' }
]
const chartOption = {
    grid: {
        top: 0,
        left: '1%',
        bottom: '1%',
        right: '1%'
    },
    color: ['#3babff', '#00fc83', '#e8b021', '#f56c6c', '#5D7092'],
    legend: {
        type: 'scroll',
        orient: 'vertical',
        right: '8%',
        // left: '35%',
        top: 'center',
        itemWidth: 16,
        itemHeight: 16,
        icon: 'rect',
        data,
        formatter: (name: string) => {
            for (let i = 0; i < data.length; i++) {
                if (name === data[i].name) {
                    const richText
                = `{name|${name}}{num|${data[i].value}${data[i].unit
                    ? data[i].unit
                    : '家'}}{rate|${data[i].rate}}`
                    return richText
                }
            }
        },
        textStyle: {
            rich: {
                name: {
                    width: 160,
                    fontSize: 18,
                    fontWeight: 700,
                    padding: [0, 0, 0, 0],
                    color: 'rgba(255,255,255,0.6)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                },
                num: {
                    fontSize: 20,
                    fontWeight: 400,
                    padding: [0, 10, 0, 10],
                    color: '#01fe85',
                    width: 50,
                    align: 'right',
                    fontFamily: 'Bebas Neue'
                },
                rate: {
                    fontSize: 20,
                    fontWeight: 500,
                    padding: [0, 0, 0, 0],
                    align: 'right',
                    fontFamily: 'Bebas Neue',
                    color: 'rgba(255,255,255,1)'
                }
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
            const {
                data: { name, value, rate }
            } = params
            return `${name}：${value}家(${rate})`
        }
    },
    graphic: [ // 设置饼图中间文字内容
        {
            type: 'text',
            left: '17%', // center不行 因为会飞到整个div的中间
            top: 'center',
            style: {
                text: 'dd',
                textAlign: 'center',
                fill: '#f5f5f5',
                fontSize: 32,
                fontFamily: 'Bebas Neue'
            }
        }
    ],
    series: [
        {
            name: '企业档案',
            type: 'pie',
            center: ['20%', '50%'],
            radius: ['43%', '64%'],
            avoidLabelOverlap: true,
            hoverAnimation: false,
            data,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }
    ]
}
</script>
