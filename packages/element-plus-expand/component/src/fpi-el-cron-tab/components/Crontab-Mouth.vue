<template>
    <ElForm>
        <ElFormItem>
            <ElRadio v-model="radioValue" :label="1">
                月，允许的通配符[, - * /]
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="2">
                周期从
                <ElInputNumber v-model="cycle01" :min="1" :max="12" /> - <ElInputNumber
                    v-model="cycle02" :min="1"
                    :max="12"
                /> 月
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="3">
                从
                <ElInputNumber v-model="average01" :min="1" :max="12" /> 月开始，每 <ElInputNumber
                    v-model="average02"
                    :min="1" :max="12"
                /> 月月执行一次
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="4">
                指定
                <ElSelect v-model="checkboxList" clearable placeholder="可多选" multiple style="width: 100%;">
                    <ElOption v-for="item in 12" :key="item" :value="item">
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
    name: 'CrontabMouth',

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
            cycle01: 1,
            cycle02: 2,
            average01: 1,
            average02: 1,
            checkboxList: [],
            checkNum: this.check,
        }
    },

    computed: {
        // 计算两个周期值
        cycleTotal() {
            this.cycle01 = this.checkNum(this.cycle01, 1, 12)
            this.cycle02 = this.checkNum(this.cycle02, 1, 12)
            return `${this.cycle01}-${this.cycle02}`
        },
        // 计算平均用到的值
        averageTotal() {
            this.average01 = this.checkNum(this.average01, 1, 12)
            this.average02 = this.checkNum(this.average02, 1, 12)
            return `${this.average01}/${this.average02}`
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
        checkboxString: 'checkboxChange',
    },

    methods: {
        // 单选按钮值变化时
        radioChange() {
            if (this.radioValue === 1) {
                this.$emit('update', 'mouth', '*')
                this.$emit('update', 'year', '*')
            }
            else {
                if (this.cron.day === '*') {
                    this.$emit('update', 'day', '0', 'mouth')
                }
                if (this.cron.hour === '*') {
                    this.$emit('update', 'hour', '0', 'mouth')
                }
                if (this.cron.min === '*') {
                    this.$emit('update', 'min', '0', 'mouth')
                }
                if (this.cron.second === '*') {
                    this.$emit('update', 'second', '0', 'mouth')
                }
            }
            switch (this.radioValue) {
            case 2:
                this.$emit('update', 'mouth', `${this.cycle01}-${this.cycle02}`)
                break
            case 3:
                this.$emit('update', 'mouth', `${this.average01}/${this.average02}`)
                break
            case 4:
                this.$emit('update', 'mouth', this.checkboxString)
                break
            }
        },
        // 周期两个值变化时
        cycleChange() {
            if (this.radioValue === 2) {
                this.$emit('update', 'mouth', this.cycleTotal)
            }
        },
        // 平均两个值变化时
        averageChange() {
            if (this.radioValue === 3) {
                this.$emit('update', 'mouth', this.averageTotal)
            }
        },
        // checkbox值变化时
        checkboxChange() {
            if (this.radioValue === 4) {
                this.$emit('update', 'mouth', this.checkboxString)
            }
        },
    },
})
// @ts-check
</script>
