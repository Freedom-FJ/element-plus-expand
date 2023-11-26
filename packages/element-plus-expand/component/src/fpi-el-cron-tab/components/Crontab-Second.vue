<template>
    <ElForm>
        <ElFormItem>
            <ElRadio v-model="radioValue" :label="1">
                秒，允许的通配符[, - * /]
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="2">
                周期从
                <ElInputNumber v-model="cycle01" :min="0" :max="60" /> - <ElInputNumber v-model="cycle02" :min="0" :max="60" /> 秒
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="3">
                从
                <ElInputNumber v-model="average01" :min="0" :max="60" /> 秒开始，每 <ElInputNumber v-model="average02" :min="0" :max="60" /> 秒执行一次
            </ElRadio>
        </ElFormItem>

        <ElFormItem>
            <ElRadio v-model="radioValue" :label="4">
                指定
                <ElSelect v-model="checkboxList" clearable placeholder="可多选" multiple style="width: 100%;">
                    <ElOption v-for="item in 60" :key="item" :value="item - 1">
                        {{ item - 1 }}
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
    name: 'CrontabSecond',

    components: {
        ElForm,
        ElFormItem,
        ElRadio,
        ElInputNumber,
        ElSelect,
        ElOption
    },

    props: ['check', 'radioParent'],
    emits: ['update'],
    data() {
        return {
            radioValue: 1,
            cycle01: 1,
            cycle02: 2,
            average01: 0,
            average02: 1,
            checkboxList: [] as string[],
            checkNum: this.$props.check,
        }
    },

    computed: {
        // 计算两个周期值
        cycleTotal() {
            this.cycle01 = this.checkNum(this.cycle01, 0, 59)
            this.cycle02 = this.checkNum(this.cycle02, 0, 59)
            return `${this.cycle01}-${this.cycle02}`
        },
        // 计算平均用到的值
        averageTotal() {
            this.average01 = this.checkNum(this.average01, 0, 59)
            this.average02 = this.checkNum(this.average02, 1, 59)
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
        radioParent() {
            this.radioValue = this.radioParent
        },
    },

    methods: {
        // 单选按钮值变化时
        radioChange() {
            switch (this.radioValue) {
            case 1:
                this.$emit('update', 'second', '*', 'second')
                this.$emit('update', 'min', '*', 'second')
                break
            case 2:
                this.$emit('update', 'second', `${this.cycle01}-${this.cycle02}`)
                break
            case 3:
                this.$emit('update', 'second', `${this.average01}/${this.average02}`)
                break
            case 4:
                this.$emit('update', 'second', this.checkboxString)
                break
            }
        },
        // 周期两个值变化时
        cycleChange() {
            if (this.radioValue === 2) {
                this.$emit('update', 'second', this.cycleTotal)
            }
        },
        // 平均两个值变化时
        averageChange() {
            if (this.radioValue === 3) {
                this.$emit('update', 'second', this.averageTotal)
            }
        },
        // checkbox值变化时
        checkboxChange() {
            if (this.radioValue === 4) {
                this.$emit('update', 'second', this.checkboxString)
            }
        },
        othChange() {
            // 反解析
            const ins: string = this.cron.second('反解析 second', ins)
            if (ins === '*') {
                this.radioValue = 1
            }
            else if (ins.includes('-')) {
                this.radioValue = 2
            }
            else if (ins.includes('/')) {
                this.radioValue = 3
            }
            else {
                this.radioValue = 4
                this.checkboxList = ins.split(',')
            }
        },
    },
})
// @ts-check
</script>
