<template>
    <div class="rolling-test">
        <FpiElRolling>
            <div class="model-box">
                <div v-for="item, index in dataList" :key="index" class="model-charts-example" />
            </div>
        </FpiElRolling>
    </div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { onMounted } from 'vue'
const dataList = [
    {
        count: 1,
        dataList: [
            { name: '以建设', value: 4, rate: '100%' },
            { name: '建设中', value: 0, rate: '0%' }
        ]
    },
    {
        count: 2,
        dataList: [
            { name: '以建设', value: 23, rate: '100%' },
            { name: '建设中', value: 0, rate: '0%' }
        ]
    },
    {
        count: 3,
        dataList: [
            { name: '以建设', value: 2, rate: '100%' },
            { name: '建设中', value: 0, rate: '0%' }
        ]
    },
    {
        count: 4,
        dataList: [
            { name: '以建设', value: 2, rate: '100%' },
            { name: '建设中', value: 0, rate: '0%' }
        ]
    },
    {
        count: 5,
        dataList: [
            { name: '以建设', value: 4, rate: '100%' },
            { name: '建设中', value: 0, rate: '0%' }
        ]
    },
    {
        count: 6,
        dataList: [
            { name: '以建设', value: 23, rate: '100%' },
            { name: '建设中', value: 0, rate: '0%' }
        ]
    },
    {
        count: 7,
        dataList: [
            { name: '以建设', value: 2, rate: '100%' },
            { name: '建设中', value: 0, rate: '0%' }
        ]
    },
    {
        count: 8,
        dataList: [
            { name: '以建设', value: 2, rate: '100%' },
            { name: '建设中', value: 0, rate: '0%' }
        ]
    }
]

const getProjectProgressOption = (pieData: { name: string; value: number; rate: string }[], count: number) => {
    const chartOption = {
        grid: {
            top: 'center',
            left: 'center',
        },
        color: ['#36F097', '#FF8000'],
        tooltip: {
            trigger: 'item',
            formatter: (params: {
                data: {
                    name: string
                    value: string
                    rate: string
                }
            }) => {
                const {
                    data: { name, value, rate }
                } = params
                return `${name}：${value}家(${rate})`
            }
        },
        graphic: [ // 设置饼图中间文字内容
            {
                type: 'text',
                left: 'center', // center不行 因为会飞到整个div的中间
                top: 'center',
                style: {
                    text: count,
                    textAlign: 'center',
                    fontWeight: 'normal',
                    fill: 'rgba(255,255,255,.85)',
                    fontSize: 24,
                    fontFamily: 'Oswald'
                }
            }
        ],
        series: [
            {
                name: '企业档案',
                type: 'pie',
                center: ['50%', '50%'],
                radius: ['63%', '90%'],
                avoidLabelOverlap: true,
                hoverAnimation: false,
                data: pieData,
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
    return chartOption
}

onMounted(() => {
    getChartData()
})

const getChartData = () => {
    const getDomList = document.getElementsByClassName('model-charts-example')
    const length = dataList.length
    dataList.forEach((item, index) => {
        const dom = getDomList[index] as HTMLElement
        const domClone = getDomList[index + length] as HTMLElement
        if (!dom || !domClone) return
        const option = getProjectProgressOption(item.dataList, item.count)
        const chartChance = echarts.init(dom)
        chartChance.setOption(option)
        // 绘制复制dom
        const chartChanceClone = echarts.init(domClone)
        chartChanceClone.setOption(option)
    })
}
</script>

<style lang="scss" scoped>
.rolling-test {
    width: 100%;
    height: 120px;

    .model-box {
        display: flex;
        height: 120px;
        padding: 10px 0;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 120px;
            height: 100%;
            margin: 0 2px;
            color: white;
            cursor: pointer;
            background-color: var(--el-color-primary-light-3);
            transition: all 0.5s;
        }

        div:hover {
            box-shadow: 0 0 10px 5px #67b3dd;
            transform: scale(1.1);
        }
    }
}
</style>
