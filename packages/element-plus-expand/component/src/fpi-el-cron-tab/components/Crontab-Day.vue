<template>
    <ElForm>
        <ElFormItem>
            <ElRadio v-model="radioValue" :label="1">
                日，允许的通配符[, - * / L M]
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="2">
                不指定
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="3">
                周期从
                <ElInputNumber v-model="cycle01" :min="0" :max="31" /> - <ElInputNumber v-model="cycle02" :min="0" :max="31" /> 日
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="4">
                从
                <ElInputNumber v-model="average01" :min="0" :max="31" /> 号开始，每 <ElInputNumber v-model="average02" :min="0" :max="31" /> 日执行一次
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="5">
                每月
                <ElInputNumber v-model="workday" :min="0" :max="31" /> 号最近的那个工作日
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="6">
                本月最后一天
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="7">
                指定
                <ElSelect v-model="checkboxList" clearable placeholder="可多选" multiple style="width: 100%;">
                    <ElOption v-for="item in 31" :key="item" :value="item">
                        {{ item }}
                    </ElOption>
                </ElSelect>
            </ElRadio>
        </ElFormItem>
    </ElForm>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent } from 'vue'
import { ElForm, ElFormItem, ElInputNumber, ElOption, ElRadio, ElSelect } from 'element-plus'

export default defineComponent({
    name: 'CrontabDay',

    components: {
        ElForm,
        ElFormItem,
        ElRadio,
        ElInputNumber,
        ElSelect,
        ElOption
    },

    props: ['check', 'cron'],

    emits: ['update'],
    data() {
        return {
            radioValue: 1,
            workday: 1,
            cycle01: 1,
            cycle02: 2,
            average01: 1,
            average02: 1,
            checkboxList: [],
            checkNum: this.$props.check,
        }
    },

    computed: {
        // 计算两个周期值
        cycleTotal() {
            this.cycle01 = this.checkNum(this.cycle01, 1, 31)
            this.cycle02 = this.checkNum(this.cycle02, 1, 31)
            return `${this.cycle01}-${this.cycle02}`
        },
        // 计算平均用到的值
        averageTotal() {
            this.average01 = this.checkNum(this.average01, 1, 31)
            this.average02 = this.checkNum(this.average02, 1, 31)
            return `${this.average01}/${this.average02}`
        },
        // 计算工作日格式
        workdayCheck() {
            this.workday = this.checkNum(this.workday, 1, 31)
            return this.workday
        },
        // 计算勾选的checkbox值合集
        checkboxString() {
            const str = this.checkboxList.join()
            return str === '' ? '*' : str
        },
    },

    watch: {
        radioValue: 'radioChange',
        cycleTotal: 'cycleChange',
        averageTotal: 'averageChange',
        workdayCheck: 'workdayChange',
        checkboxString: 'checkboxChange',
    },

    methods: {
        // 单选按钮值变化时
        radioChange() {
            ('day rachange')
            if (this.radioValue === 1) {
                this.$emit('update', 'day', '*', 'day')
                this.$emit('update', 'week', '?', 'day')
                this.$emit('update', 'mouth', '*', 'day')
            }
            else {
                if (this.cron.hour === '*') {
                    this.$emit('update', 'hour', '0', 'day')
                }
                if (this.cron.min === '*') {
                    this.$emit('update', 'min', '0', 'day')
                }
                if (this.cron.second === '*') {
                    this.$emit('update', 'second', '0', 'day')
                }
            }

            switch (this.radioValue) {
            case 2:
                this.$emit('update', 'day', '?')
                break
            case 3:
                this.$emit('update', 'day', `${this.cycle01}-${this.cycle02}`)
                break
            case 4:
                this.$emit('update', 'day', `${this.average01}/${this.average02}`)
                break
            case 5:
                this.$emit('update', 'day', `${this.workday}W`)
                break
            case 6:
                this.$emit('update', 'day', 'L')
                break
            case 7:
                this.$emit('update', 'day', this.checkboxString)
                break
            }
            ('day rachange end')
        },
        // 周期两个值变化时
        cycleChange() {
            if (this.radioValue === 3) {
                this.$emit('update', 'day', this.cycleTotal)
            }
        },
        // 平均两个值变化时
        averageChange() {
            if (this.radioValue === 4) {
                this.$emit('update', 'day', this.averageTotal)
            }
        },
        // 最近工作日值变化时
        workdayChange() {
            if (this.radioValue === 5) {
                this.$emit('update', 'day', `${this.workday}W`)
            }
        },
        // checkbox值变化时
        checkboxChange() {
            if (this.radioValue === 7) {
                this.$emit('update', 'day', this.checkboxString)
            }
        },
        // 父组件传递的week发生变化触发
        weekChange() {
            // 判断week值与day不能同时为“?”
            if (this.cron.week === '?' && Number(this.radioValue) === 2) {
                this.radioValue = 1
            }
            else if (this.cron.week !== '?' && Number(this.radioValue) !== 2) {
                this.radioValue = 2
            }
        },
    },
})
// @ts-check
</script>
