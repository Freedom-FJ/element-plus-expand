<template>
    <EchartDemo :option="option" theme="dark" />
</template>

<script lang="ts" setup>
const option = {
    dataZoom: [
        {
            backgroundColor: '#021e2d',
            borderColor: '#021e2d',
            dataBackground: {
                areaStyle: {
                    opacity: 0,
                },
                lineStyle: {
                    color: '#03d5fb',
                },
            },
            end: 100,
            fillerColor: 'rgba(255, 255, 255, 0.1)',
            height: 24,
            moveHandleStyle: { opacity: 0 },
            realtime: true,
            selectedDataBackground: {
                areaStyle: { opacity: 0 },
                lineStyle: { color: '#03d5fb' },
            },
            show: true,
            start: 70,
            textStyle: {
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'Bebas Neue',
            },
            top: '87%',
            type: 'slider',
            // xAxisIndex: [0, 1],
        },
    ],
    tooltip: {
        link: { xAxisIndex: 'all' },
        trigger: 'axis',
    },
    legend: {
        top: 220,
        left: 'center',
        textStyle: {
            fontSize: 14,
            color: '#ffffff'
        }
    },
    grid: {
        top: 50,
        left: 60,
        right: 32,
        bottom: 100
    },
    xAxis: {
        axisLabel: {
            show: true,
            fontFamily: 'Bebas Neue',
            fontSize: 12,
            color: 'rgba(255,255,255,.6)'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)',
            },
        },
        axisTick: { show: false },
        data: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06', '2015-07', '2015-08', '2015-09',
            '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06',
            '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03',
            '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12',
            '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09',
            '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06',
            '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02', '2020-03',
            '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12',
            '2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12', '2022-01'],
        gridIndex: 0,
        type: 'category',
    },
    yAxis: {
        name: '单位：（t）',
        nameTextStyle: {
            color: 'rgba(255,255,255,.6)',
            nameLocation: 'start',
            padding: [5, 0, 0, 0],
        },
        axisLabel: {
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'Bebas Neue',
            fontSize: 12,
            formatter: (value: number) => {
                return `${(value / 1000).toFixed(2)}k`
            },
        },
        axisLine: {
            show: false,
            lineStyle: { color: 'rgba(255,255,255,0.5)' },
        },
        axisTick: { show: false },
        gridIndex: 0,
        splitArea: { show: true, areaStyle: { color: ['rgba(3, 139, 143, 0.1)', 'rgba(0, 0, 0, 0)'] } },
        splitLine: { show: false },
        type: 'value',
    },
    color: ['#03d5fb', '#ffd902', '#00c164', '#8c2194', '#6dc8ec', '#e86452', '#479292'],
    series: [
        {
            data: [182.43, 331.93, 280.81, 306.58, 175.65, 255.62, 296.47,
                200.29, 328.7, 362.27, 262.62, 207.44, 293.15, 228.11, 255.78, 201.57,
                343.41, 501.33, 498.48, 245.99, 286.61, 376.92, 326.08, 247.09, 482.85,
                423.43, 505.87, 266.3, 403.53, 309.25, 424.08, 261.61, 272.59, 371.21,
                398.12, 396.44, 247.97, 422.56, 386.74, 301.53, 619.63, 327.24, 437.38,
                396.34, 437.26, 509.46, 480.18, 364.14, 295.89, 454.31, 446.57, 430.51,
                409.9, 307.79, 637.78, 550.48, 525.59, 741.72, 743.59, 1373.45, 705.16,
                564.36, 313.02, 520.78, 321.25, 414.22, 968.89, 988.12, 591.68, 924.52,
                298.81, 975.16, 442.93, 378.51, 450.52, 439.35, 466.52, 431.31, 568.86,
                495.26, 453.81, 320.52, 373.43, 294.15, 488.52],
            // itemStyle: {
            //     normal: {
            //         borderColor: '#03d5fb',
            //         color: '#fff',
            //         lineStyle: { color: '#03d5fb' },
            //     },
            // },
            name: '电',
            symbol: 'circle',
            symbolSize: 6,
            type: 'line',
        },
        {
            data: [182.43, 331.93, 280.81, 306.58, 175.65, 255.62, 296.47,
                200.29, 328.7, 362.27, 262.62, 207.44, 293.15, 228.11, 255.78, 201.57,
                343.41, 501.33, 498.48, 245.99, 286.61, 376.92, 326.08, 247.09, 482.85,
                423.43, 505.87, 266.3, 403.53, 309.25, 424.08, 261.61, 272.59, 371.21,
                398.12, 396.44, 247.97, 442.56, 386.74, 301.53, 161.63, 327.24, 437.38,
                396.34, 437.26, 509.46, 480.18, 364.14, 295.89, 454.31, 446.57, 430.51,
                409.9, 307.79, 637.78, 550.48, 525.59, 741.72, 743.59, 373.45, 705.16,
                564.36, 313.02, 320.78, 321.25, 414.22, 968.89, 988.12, 591.68, 924.52,
                298.81, 975.16, 442.93, 378.51, 250.52, 439.35, 466.52, 431.31, 568.86,
                495.26, 453.81, 320.52, 373.43, 294.15, 488.52],
            name: '气',
            symbol: 'circle',
            symbolSize: 6,
            type: 'line',
        },
    ]
}
</script>
