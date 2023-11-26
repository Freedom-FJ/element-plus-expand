<template>
    <ElPopover
        :visible="pickerVisible"
        trigger="click"
        :popper-class="[popperClass]"
        :width="popperWidth"
        :style="popperStyle"
    >
        <template #reference>
            <ElInput
                v-model="inputValue"
                class="fpi-quarter-picker-input"
                :class="[inputClass]"
                :prefix-icon="Calendar"
                :clearable="clearable"
                :placeholder="placeholder"
                :style="inputStyle"
                :size="size"
                @click="onClickInput"
                @clear="onClickInputClear"
            />
        </template>
        <div
            v-click-outside="onClosePopoverOut"
            class="fpi-quarter-picker-popover-content"
        >
            <!-- 头部切换 -->
            <div class="fpi-quarter-picker-popover-content-header">
                <span
                    class="fpi-quarter-picker-popover-content-header-btn"
                    @click="onClickPrevYear"
                >
                    <ElIcon><DArrowLeft /></ElIcon>
                </span>
                <span style="user-select: none;">{{ showYear }}</span>
                <span
                    class="fpi-quarter-picker-popover-content-header-btn"
                    @click="onClickNextYear"
                >
                    <ElIcon><DArrowRight /></ElIcon>
                </span>
            </div>
            <!-- 季度列表 -->
            <div class="fpi-quarter-picker-popover-quarter-wrap">
                <div
                    v-for="item in selectValueList"
                    :key="item.key"
                    class="fpi-quarter-picker-popover-quarter-item"
                    @click="onClickQuarter(item)"
                >
                    <span
                        :class="{
                            'fpi-quarter-picker-popover-quarter-item-current': item.isCurrent,
                            'fpi-quarter-picker-popover-quarter-item-disabled':
                                item.isDisabled,
                            'fpi-quarter-picker-popover-quarter-item-selected':
                                selectValue === item.key,
                        }"
                    >
                        {{ item.text }}
                    </span>
                </div>
            </div>
        </div>
    </ElPopover>
</template>

<script lang="ts" setup>
import {
    ElIcon,
    ElInput,
    ElPopover,
    ClickOutside as vClickOutside,
} from 'element-plus'
import { Calendar, DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import dayjs from 'dayjs'
import type { CSSProperties, PropType } from 'vue'
/**
 * 定义props
 */
const props = defineProps({
    // 弹窗的className
    popperClass: {
        type: String,
        default: '',
    },
    // 弹窗的style
    popperStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => ({}),
    },
    // 弹窗的宽度
    popperWidth: {
        type: Number,
        default: 284,
    },
    // 输入框的样式
    inputClass: {
        type: String,
        default: '',
    },
    // 输入框的style
    inputStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => ({}),
    },
    // 输入框显示值的格式化
    format: {
        type: String,
        default: 'YYYY年第q季度',
    },
    // v-model绑定值
    modelValue: {
        type: [Date, String],
    },
    // 输入提示
    placeholder: {
        type: String,
        default: '请选择季度',
    },
    // 禁止选择的季度
    disabledDate: {
        type: Function,
        default: (date: {
            year: number
            startMonth: number
            endMonth: number
            q: string
            Q: string
        }) => !date,
    },
    // 是否显示清楚值
    clearable: {
        type: Boolean,
        default: true,
    },
    // 输入框尺寸大小
    size: {
        type: String as PropType<'small' | 'default' | 'large'>,
        default: 'default',
    },
    // 选择值的显示
    valueFormat: {
        type: String,
        default: '第q季度',
    },
})
/**
 * 定义emit事件
 */
const emit = defineEmits<{
    (e: 'update:modelValue', date: Date | null): void
    (e: 'change', date: Date | null, detail: any): void
}>()

/**
 * 数据
 */
const quarterConfig = [
    {
        startMonth: 0,
        endMonth: 2,
        q: '一',
        Q: '1',
    },
    {
        startMonth: 3,
        endMonth: 5,
        q: '二',
        Q: '2',
    },
    {
        startMonth: 6,
        endMonth: 8,
        q: '三',
        Q: '3',
    },
    {
        startMonth: 9,
        endMonth: 11,
        q: '四',
        Q: '4',
    },
]
const pickerVisible = ref(false)
const showYear = ref(dayjs().year())
const currenQuarterKey = computed(() => {
    const date = dayjs()
    const year = date.year()
    const month = date.month()
    const quarter = quarterConfig.find(
        c => c.endMonth >= month && c.startMonth <= month
    )
    return `${year}-${quarter?.Q}`
})
const selectValueList = computed(() => {
    const year = showYear.value
    const text1 = dayjs().set('year', year).format(props.valueFormat)
    return quarterConfig.map((item) => {
        const text = text1.replace('q', item.q).replace('Q', item.Q)
        const key = `${year}-${item.Q}`
        const isCurrent = currenQuarterKey.value === key
        const isDisabled = props.disabledDate({ year, ...item })
        return {
            year,
            ...item,
            text,
            key,
            isCurrent,
            isDisabled,
        }
    })
})
// 选择的值
const selectValue = computed(() => {
    if (props.modelValue) {
        const isValid = dayjs(props.modelValue).isValid()
        if (isValid) {
            const date = dayjs(props.modelValue)
            const year = date.year()
            const month = date.month()
            const quarter = quarterConfig.find(
                c => c.endMonth >= month && c.startMonth <= month
            )
            if (quarter) return `${year}-${quarter.Q}`
            return ''
        }
        return ''
    }
    return ''
})
// 输入框显示的值
const inputValue = computed({
    get: () => {
        if (props.modelValue) {
            const isValid = dayjs(props.modelValue).isValid()
            if (isValid) {
                const date = dayjs(props.modelValue)
                const str1 = date.format(props.format)
                const month = date.month()
                const quarter = quarterConfig.find(
                    c => c.endMonth >= month && c.startMonth <= month
                )
                if (quarter)
                    return str1.replace('q', quarter?.q).replace('Q', quarter?.Q)
                return ''
            }
            return ''
        }
        return ''
    },
    set: () => {},
})

/**
 * 事件
 */
// 点击输入框
const onClickInput = () => {
    pickerVisible.value = true
    const isValid = dayjs(props.modelValue).isValid()
    if (isValid) showYear.value = dayjs(props.modelValue).year()
}
// 点击popover的外部
const onClosePopoverOut = () => {
    pickerVisible.value = false
}
// 点击输入框的清除icon
const onClickInputClear = () => {
    emit('update:modelValue', null)
    emit('change', null, null)
}
// 点击上一年
const onClickPrevYear = () => {
    showYear.value = showYear.value - 1
}
// 点击下一年
const onClickNextYear = () => {
    showYear.value = showYear.value + 1
}
// 点击选择季度
const onClickQuarter = (item: any) => {
    const date = dayjs().set('year', item.year).set('month', item.startMonth).startOf('month').toDate()
    pickerVisible.value = false
    emit('update:modelValue', date)
    emit('change', date, transformQuarterInfoByDate(date))
}

const transformQuarterInfoByDate = (date?: Date) => {
    if (date) {
        const dayjsObj = dayjs(date)
        const isValid = dayjsObj.isValid()
        if (isValid) {
            const year = dayjsObj.year()
            const month = dayjsObj.month()
            const quarter = quarterConfig.find(
                c => c.endMonth >= month && c.startMonth <= month
            )
            if (quarter) {
                const text1 = dayjs(date).format(props.valueFormat)
                const text = text1.replace('q', quarter.q).replace('Q', quarter.Q)
                const key = `${year}-${quarter.Q}`
                return {
                    year,
                    ...quarter,
                    text,
                    key,
                }
            }
            return null
        }
        return null
    }
    return null
}

/**
 * 对外暴露的方法和属性
 */
defineExpose({
    transformQuarterInfoByDate,
})
</script>

<script lang="ts">
export default {
    name: 'FpiElQuarterPicker'
}
</script>

<style lang="scss">
@import "./style/index";
</style>
