<template>
    <div class="fpi-el-cron-tab-container">
        <div class="tab-conatoner">
            <ElTabs v-if="showTab" type="card">
                <ElTabPane v-if="shouldHide('second')" label="秒">
                    <CrontabSecond ref="cronsecond" :check="checkNumber" @update="updateContabValue" />
                </ElTabPane>

                <ElTabPane v-if="shouldHide('min')" label="分钟">
                    <CrontabMin ref="cronmin" :check="checkNumber" :cron="contabValueObj" @update="updateContabValue" />
                </ElTabPane>

                <ElTabPane v-if="shouldHide('hour')" label="小时">
                    <CrontabHour ref="cronhour" :check="checkNumber" :cron="contabValueObj" @update="updateContabValue" />
                </ElTabPane>

                <ElTabPane v-if="shouldHide('day')" label="日">
                    <CrontabDay ref="cronday" :check="checkNumber" :cron="contabValueObj" @update="updateContabValue" />
                </ElTabPane>

                <ElTabPane v-if="shouldHide('mouth')" label="月">
                    <CrontabMouth ref="cronmouth" :check="checkNumber" :cron="contabValueObj" @update="updateContabValue" />
                </ElTabPane>

                <ElTabPane v-if="shouldHide('week')" label="周">
                    <CrontabWeek ref="cronweek" :check="checkNumber" :cron="contabValueObj" @update="updateContabValue" />
                </ElTabPane>

                <ElTabPane v-if="shouldHide('year')" label="年">
                    <CrontabYear ref="cronyear" :check="checkNumber" :cron="contabValueObj" @update="updateContabValue" />
                </ElTabPane>
            </ElTabs>
        </div>
        <div v-show="showResult" class="popup-result">
            <p class="title">
                表达式
            </p>
            <table>
                <thead>
                    <th v-for="item of tabTitles" :key="item" width="40">
                        {{ item }}
                    </th>
                    <th>crontab完整表达式</th>
                </thead>
                <tbody>
                    <td>
                        <span>{{ contabValueObj.second }}</span>
                    </td>
                    <td>
                        <span>{{ contabValueObj.min }}</span>
                    </td>
                    <td>
                        <span>{{ contabValueObj.hour }}</span>
                    </td>
                    <td>
                        <span>{{ contabValueObj.day }}</span>
                    </td>
                    <td>
                        <span>{{ contabValueObj.mouth }}</span>
                    </td>
                    <td>
                        <span>{{ contabValueObj.week }}</span>
                    </td>
                    <td>
                        <span>{{ contabValueObj.year }}</span>
                    </td>
                    <td>
                        <span>{{ contabValueString }}</span>
                    </td>
                </tbody>
            </table>
        </div>
        <CrontabResult v-show="showResult" :ex="contabValueString" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElTabPane, ElTabs } from 'element-plus'
import CrontabSecond from './components/Crontab-Second.vue'
import CrontabMin from './components/Crontab-Min.vue'
import CrontabHour from './components/Crontab-Hour.vue'
import CrontabDay from './components/Crontab-Day.vue'
import CrontabMouth from './components/Crontab-Mouth.vue'
import CrontabWeek from './components/Crontab-Week.vue'
import CrontabYear from './components/Crontab-Year.vue'
import CrontabResult from './components/Crontab-Result.vue'

export default defineComponent({
    name: 'FpiElCronTab',

    components: {
        CrontabSecond,
        CrontabMin,
        CrontabHour,
        CrontabDay,
        CrontabMouth,
        CrontabWeek,
        CrontabYear,
        CrontabResult,
        ElTabs,
        ElTabPane
    },

    props: {
        modelValue: {
            type: [String, Number],
            default: '',
        },
        hideComponent: {
            type: Array,
            default: () => [],
        },
        showResult: {
            type: Boolean,
            default: true,
        },
    },
    emits: ['update:modelValue'],

    data() {
        return {
            tabTitles: ['秒', '分钟', '小时', '日', '月', '周', '年'],
            tabActive: 0,
            myindex: 0,
            showTab: false,
            contabValueObj: {
                second: '*',
                min: '*',
                hour: '*',
                day: '*',
                mouth: '*',
                week: '?',
                year: '',
            },
        }
    },

    computed: {
        contabValueString() {
            const obj = this.contabValueObj
            const str = `${obj.second} ${obj.min} ${obj.hour} ${obj.day} ${obj.mouth} ${obj.week}${obj.year === '' ? '' : ` ${obj.year}`}`
            return str
        },
    },

    watch: {
        modelValue(newV) {
            if (newV && newV !== this.contabValueString) {
                this.resolveExp()
            }
        },
        contabValueString(newV) {
            if (newV !== this.modelValue) {
                this.$emit('update:modelValue', this.contabValueString)
            }
        },
    },

    mounted() {
        this.resolveExp()
        this.showTab = true
    },

    methods: {
        shouldHide(key: any) {
            if (this.hideComponent && this.hideComponent.includes(key)) return false
            return true
        },
        resolveExp() {
            // 反解析 表达式
            if (this.modelValue) {
                // @ts-expect-error
                const arr = this.modelValue.split(' ')
                if (arr.length >= 6) {
                    // 6 位以上是合法表达式
                    const obj = {
                        second: arr[0],
                        min: arr[1],
                        hour: arr[2],
                        day: arr[3],
                        mouth: arr[4],
                        week: arr[5],
                        year: arr[6] ? arr[6] : '',
                    }
                    this.contabValueObj = {
                        ...obj,
                    }
                    for (const i in obj) {
                        // @ts-expect-error
                        if (obj[i]) this.changeRadio(i, obj[i])
                    }
                }
            }
            else {
                // 没有传入的表达式 则还原
                // this.clearCron()
            }
        },
        // tab切换值
        tabCheck(index: any) {
            this.tabActive = index
        },
        // 由子组件触发，更改表达式组成的字段值
        updateContabValue(name: any, value: any, from: any) {
            // 'updateContabValue', name, value, from
            // @ts-expect-error
            this.contabValueObj[name] = value
            if (from && from !== name) {
                // console.log(`来自组件 ${from} 改变了 ${name} ${value}`)
                this.changeRadio(name, value)
            }
        },
        // 赋值到组件

        changeRadio(name: any, value: any) {
            const arr = ['second', 'min', 'hour', 'mouth']
            const refName = `cron${name}`
            let insVlaue

            if (!this.$refs[refName]) return

            if (arr.includes(name)) {
                if (value === '*') {
                    insVlaue = 1
                }
                else if (value.includes('-')) {
                    const indexArr = value.split('-')
                    // @ts-expect-error
                    isNaN(indexArr[0]) ? (this.$refs[refName].cycle01 = 0) : (this.$refs[refName].cycle01 = indexArr[0])
                    // @ts-expect-error
                    this.$refs[refName].cycle02 = indexArr[1]
                    insVlaue = 2
                }
                else if (value.includes('/')) {
                    const indexArr = value.split('/')
                    // @ts-expect-error
                    isNaN(indexArr[0]) ? (this.$refs[refName].average01 = 0) : (this.$refs[refName].average01 = indexArr[0])
                    // @ts-expect-error
                    this.$refs[refName].average02 = indexArr[1]
                    insVlaue = 3
                }
                else {
                    insVlaue = 4
                    // @ts-expect-error
                    this.$refs[refName].checkboxList = value.split(',')
                }
            }
            else if (name === 'day') {
                if (value === '*') {
                    insVlaue = 1
                }
                else if (value === '?') {
                    insVlaue = 2
                }
                else if (value.includes('-')) {
                    const indexArr = value.split('-')
                    // @ts-expect-error
                    isNaN(indexArr[0]) ? (this.$refs[refName].cycle01 = 0) : (this.$refs[refName].cycle01 = indexArr[0])
                    // @ts-expect-error
                    this.$refs[refName].cycle02 = indexArr[1]
                    insVlaue = 3
                }
                else if (value.includes('/')) {
                    const indexArr = value.split('/')
                    // @ts-expect-error
                    isNaN(indexArr[0]) ? (this.$refs[refName].average01 = 0) : (this.$refs[refName].average01 = indexArr[0])
                    // @ts-expect-error
                    this.$refs[refName].average02 = indexArr[1]
                    insVlaue = 4
                }
                else if (value.includes('W')) {
                    const indexArr = value.split('W')
                    // @ts-expect-error
                    isNaN(indexArr[0]) ? (this.$refs[refName].workday = 0) : (this.$refs[refName].workday = indexArr[0])
                    insVlaue = 5
                }
                else if (value === 'L') {
                    insVlaue = 6
                }
                else {
                    // @ts-expect-error
                    this.$refs[refName].checkboxList = value.split(',')
                    insVlaue = 7
                }
            }
            else if (name === 'week') {
                if (value === '*') {
                    insVlaue = 1
                }
                else if (value === '?') {
                    insVlaue = 2
                }
                else if (value.includes('-')) {
                    const indexArr = value.split('-')
                    // @ts-expect-error
                    isNaN(indexArr[0]) ? (this.$refs[refName].cycle01 = 0) : (this.$refs[refName].cycle01 = indexArr[0])
                    // @ts-expect-error
                    this.$refs[refName].cycle02 = indexArr[1]
                    insVlaue = 3
                }
                else if (value.includes('#')) {
                    const indexArr = value.split('#')
                    // @ts-expect-error
                    isNaN(indexArr[0]) ? (this.$refs[refName].average01 = 1) : (this.$refs[refName].average01 = indexArr[0])
                    // @ts-expect-error
                    this.$refs[refName].average02 = indexArr[1]
                    insVlaue = 4
                }
                else if (value.includes('L')) {
                    const indexArr = value.split('L')
                    // @ts-expect-error
                    isNaN(indexArr[0]) ? (this.$refs[refName].weekday = 1) : (this.$refs[refName].weekday = indexArr[0])
                    insVlaue = 5
                }
                else {
                    // @ts-expect-error
                    this.$refs[refName].checkboxList = value.split(',')
                    insVlaue = 7
                }
            }
            else if (name === 'year') {
                if (value === '') {
                    insVlaue = 1
                }
                else if (value === '*') {
                    insVlaue = 2
                }
                else if (value.includes('-')) {
                    insVlaue = 3
                }
                else if (value.includes('/')) {
                    insVlaue = 4
                }
                else {
                    // @ts-expect-error
                    this.$refs[refName].checkboxList = value.split(',')
                    insVlaue = 5
                }
            }
            // @ts-expect-error
            this.$refs[refName].radioValue = insVlaue
        },
        // 表单选项的子组件校验数字格式（通过-props传递）
        checkNumber(value: any, minLimit: any, maxLimit: any) {
            // 检查必须为整数
            value = Math.floor(value)
            if (value < minLimit) {
                value = minLimit
            }
            else if (value > maxLimit) {
                value = maxLimit
            }
            return value
        },
    },
})
</script>

<style lang="scss">
@import "./style/index";
</style>
