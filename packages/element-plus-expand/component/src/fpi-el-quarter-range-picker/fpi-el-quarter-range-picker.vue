<template>
    <ElPopover :visible="pickerVisible" trigger="click" width="500">
        <!-- 输入框 -->
        <template #reference>
            <div
                :class="{
                    [`${clsfix}-input-container`]: true,
                    [inputWrapperClass]: Boolean(inputWrapperClass),
                    [`${clsfix}-input-is-focus`]: pickerVisible,
                    [`${clsfix}-disabled-input-conatiner`]: disabled,
                }"
                :style="{ ...inputWrapperStyle }"
                @mouseenter="!disabled && (inHover = true)"
                @mouseleave="!disabled && (inHover = false)"
            >
                <!-- 第一个输入框 -->
                <ElInput
                    v-model="displayLeftValue"
                    :class="`${clsfix}-first-input`"
                    :prefix-icon="Calendar"
                    :placeholder="startPlaceholder"
                    :clearable="false"
                    :readonly="true"
                    :disabled="disabled"
                    @click="handleOpenPopper"
                />
                <!-- 分隔符 -->
                <span :class="`${clsfix}-range-separator`">{{ rangeSeparator }}</span>
                <!-- 第二个输入框 -->
                <ElInput
                    v-model="displayRightValue"
                    :class="`${clsfix}-two-input`"
                    :clearable="false"
                    :readonly="true"
                    :placeholder="endPlaceholder"
                    :disabled="disabled"
                    @click="handleOpenPopper"
                />
                <!-- 清除按钮 -->
                <span
                    v-if="clearable"
                    v-show="isShowClearBtn"
                    :class="`${clsfix}-clear`"
                >
                    <ElIcon style="margin-right: 8px;" @click="handleClearTime">
                        <CircleClose />
                    </ElIcon>
                </span>
            </div>
        </template>
        <!-- 弹出层 -->
        <div v-click-outside="handleClickPopperOut" class="quarter-popper" :class="{ [popperClass]: Boolean(popperClass) }">
            <!-- 左侧面板 -->
            <div class="quarter-popper-left">
                <div class="quarter-popper-header">
                    <ElIcon
                        style="position: absolute; top: 2px; left: 0; cursor: pointer;"
                        @click="handleClickPopperLeftYear"
                    >
                        <DArrowLeft />
                    </ElIcon>
                    <span class="quarter-popper-header-title">{{ popperLeftYear }}</span>
                </div>
                <div class="quarter-popper-cell-container">
                    <div
                        v-for="item in popperQuarterLeftList" :key="item.key" class="quarter-popper-cell" :class="{
                            'current-quarter': currentQuarterKey === item.key,
                            'select-bg': showBg && item.key >= selectStartKey && item.key <= selectEndKey,
                            'select-bg-end': showBg && item.key === selectEndKey,
                            'select-bg-start': showBg && item.key === selectStartKey,
                            'disabled': item.disabled,
                        }" @click="handleClickTime(item)"
                    >
                        <span
                            :class="{
                                select: selectStartKey === item.key || selectEndKey === item.key,
                            }" class="quarter-popper-cell-text"
                        >{{ item.text }}</span>
                    </div>
                </div>
            </div>
            <!-- 右侧面板 -->
            <div class="quarter-popper-right">
                <div class="quarter-popper-header">
                    <span class="quarter-popper-header-title"> {{ popperRightYear }}</span>
                    <ElIcon
                        style="position: absolute; top: 2px; right: 0; cursor: pointer;"
                        @click="handleClickPopperRightYear"
                    >
                        <DArrowRight />
                    </ElIcon>
                </div>
                <div class="quarter-popper-cell-container">
                    <div
                        v-for="item in popperQuarterRightList" :key="item.key" class="quarter-popper-cell" :class="{
                            'current-quarter': currentQuarterKey === item.key,
                            'select-bg': showBg && item.key >= selectStartKey && item.key <= selectEndKey,
                            'select-bg-end': showBg && item.key === selectEndKey,
                            'select-bg-start': showBg && item.key === selectStartKey,
                            'disabled': item.disabled,
                        }" @click="handleClickTime(item)"
                    >
                        <span
                            class="quarter-popper-cell-text" :class="{
                                select: selectStartKey === item.key || selectEndKey === item.key,
                            }"
                        >{{ item.text }}</span>
                    </div>
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
import { computed, ref, shallowRef } from 'vue'
import dayjs from 'dayjs'
import { Calendar, CircleClose, DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
import type { CSSProperties } from 'vue'

/**
 * 1-3为1季度
 * 4-6为2季度
 * 7-9为3季度
 * 10-12为4季度
 * 如果你的季度与本组件不同，需要自己在获取当前选择的季度信息和年度信息进行二次处理
 * */
/**
 * 定义props
 */
const props = withDefaults(
    defineProps<{
        showFormat?: string // 用于显示的格式化
        modelValue: Date[] // 值
        disabled?: boolean // 是否禁用
        startPlaceholder?: string // 开始提示
        endPlaceholder?: string // 结束提示
        valueFormat?: string // 格式化日期
        clearable?: boolean // 是否可清除
        disabledDate?: (val: {
            year: number
            quarter: number
            currentYear: number
            currentQuarter: number
        }) => boolean
        popperClass?: string // 弹出层的样式
        rangeSeparator?: string // 分隔符
        inputWrapperClass?: string // 输入框包裹容器的样式
        inputWrapperStyle?: CSSProperties // 包裹容器的样式
        cellFormat?: string // 弹出面板的季度显示 q 和 Q
    }>(),
    {
        showFormat: 'YYYY年第q季度', // Q表示阿拉伯数字 q中文数字
        modelValue: () => [],
        disabled: false,
        startPlaceholder: '请选择开始季度',
        endPlaceholder: '请选择结束季度',
        valueFormat: '',
        clearable: true,
        disabledDate: (val: any) => {
            return Number(`${val.year}${val.quarter}`) > Number(`${val.currentYear}${val.currentQuarter}`)
        },
        popperClass: '',
        rangeSeparator: '至',
        inputWrapperClass: '',
        inputWrapperStyle: () => ({}),
        cellFormat: '第q季度',
    },
)
/**
 * 定义emits
 */
const emits = defineEmits(['update:modelValue'])
const clsfix = 'fpi-el-quarter-range-picker'
/**
 * 定义常量和方法
 */
// 季度中文
const quarterText = ['一', '二', '三', '四']
// 处理值为输入框需要显示的类型
const formatDateToQuarter = function (date: Date, format: string) {
    if (!date) return ''
    const quarter = Math.ceil((date.getMonth() + 1) / 3)
    let formatData = dayjs(date).format(format)
    formatData = formatData.replace(/Q/, `${quarter}`).replace(/q/, quarterText[quarter - 1])
    return formatData
}
// 根据季度数据处理得到cell上展示的信息
const formatQuarterToText = (quarter: number) => {
    return props.cellFormat.replace(/Q/, `${quarter}`).replace(/q/, quarterText[quarter - 1])
}
// 将日期转化为季度key
const formatDateToKey = (date: Date) => {
    const year = dayjs(date).year()
    const quarter = Math.ceil((dayjs(date).month() + 1) / 3)
    return Number(`${year}${quarter}`)
}
const getQuarterStartDate = (year: number, quarter: number) => {
    const month = (quarter - 1) * 3 + 1
    return dayjs(`${year}-${month}`).startOf('month').toDate()
}
const getQuarterEndDate = (year: number, quarter: number) => {
    const month = (quarter - 1) * 3 + 3
    return dayjs(`${year}-${month}`).endOf('month').toDate()
}

/**
 * 交互逻辑编写
 */
// 弹出层的显示隐藏
const pickerVisible = shallowRef(false)
// 面板选择的开始时间
const selectStart = shallowRef<Date | null>()
const selectStartKey = computed(() => {
    if (selectStart.value)
        return formatDateToKey(selectStart.value)

    return 0
})
// 面板选择的结束时间
const selectEnd = shallowRef<Date | null>()
const selectEndKey = computed(() => {
    if (selectEnd.value)
        return formatDateToKey(selectEnd.value)

    return 0
})
// 暂存点击的信息
let tempDateInfo: any = null
// 是否显示选择背景
const showBg = computed(() => {
    if (selectEndKey.value && selectStart.value)
        return true

    return false
})
// 当前季度key
const currentYear = dayjs().year()
const currentQuarter = Math.ceil((dayjs().month() + 1) / 3)
const currentQuarterKey = ref(Number(`${currentYear}${currentQuarter}`))
// 左侧输入框显示的值
const displayLeftValue = computed({
    get: () => {
        if (!props.modelValue)
            return null

        if (!props.modelValue[0])
            return null

        return formatDateToQuarter(dayjs(props.modelValue[0]).toDate(), props.showFormat)
    },
    set: () => { },
})
// 右侧输入框显示的值
const displayRightValue = computed({
    get: () => {
        if (!props.modelValue)
            return null

        if (!props.modelValue[1])
            return null

        return formatDateToQuarter(dayjs(props.modelValue[1]).toDate(), props.showFormat)
    },
    set: () => { },
})
// 是否显示清除按钮
const inHover = shallowRef(false)
const isShowClearBtn = computed(() => {
    return Boolean(displayRightValue.value) && Boolean(displayLeftValue.value) && (inHover.value || pickerVisible.value)
})
// 弹出层左侧年份
const popperLeftYear = shallowRef<number | null>(null)
// 左侧面板的弹出季度列表
const popperQuarterLeftList = computed(() => {
    if (popperLeftYear.value) {
        return [1, 2, 3, 4].map((item) => {
            const disabled = props.disabledDate({
                currentYear,
                currentQuarter,
                quarter: item,
                year: popperLeftYear.value!,
            })
            return {
                text: formatQuarterToText(item),
                year: popperLeftYear.value,
                quarter: item,
                key: Number(`${popperLeftYear.value}${item}`),
                quarterStart: getQuarterStartDate(popperLeftYear.value!, item),
                quarterEnd: getQuarterEndDate(popperLeftYear.value!, item),
                disabled,
            }
        })
    }
    return []
})
// 弹出层右侧年份
const popperRightYear = shallowRef<number | null>(null)
// 右侧面板的弹出季度列表
const popperQuarterRightList = computed(() => {
    if (popperRightYear.value) {
        return [1, 2, 3, 4].map((item) => {
            const disabled = props.disabledDate({
                currentYear,
                currentQuarter,
                quarter: item,
                year: popperRightYear.value!,
            })
            return {
                text: formatQuarterToText(item),
                year: popperRightYear.value,
                quarter: item,
                key: Number(`${popperRightYear.value}${item}`),
                quarterStart: getQuarterStartDate(popperRightYear.value!, item),
                quarterEnd: getQuarterEndDate(popperRightYear.value!, item),
                disabled,
            }
        })
    }
    return []
})
// 点击弹窗层左侧切换年按钮
const handleClickPopperLeftYear = () => {
    if (popperLeftYear.value && popperRightYear.value) {
        popperLeftYear.value--
        popperRightYear.value--
    }
}
// 点击弹窗层右侧切换年按钮
const handleClickPopperRightYear = () => {
    if (popperLeftYear.value && popperRightYear.value) {
        popperLeftYear.value++
        popperRightYear.value++
    }
}
// 打开时间选择
const handleOpenPopper = () => {
    tempDateInfo = null
    pickerVisible.value = true
    if (props.modelValue[0])
        selectStart.value = dayjs(props.modelValue[0]).toDate()

    if (props.modelValue[1]) {
        selectEnd.value = dayjs(props.modelValue[1]).toDate()
        popperRightYear.value = dayjs(props.modelValue[1]).year()
    }
    else {
        popperRightYear.value = dayjs().year() + 1
    }
    popperLeftYear.value = popperRightYear.value - 1
}
// 弹窗关闭
const handleClickPopperOut = () => {
    pickerVisible.value = false
    popperLeftYear.value = null
    popperRightYear.value = null
}
// 点击时间选择
const handleClickTime = (item: any) => {
    if (item.disabled)
        return

    // 如果存在start和end则重新选择值
    if ((selectStart.value && selectEnd.value) || (!selectStart.value && !selectEnd.value)) {
        tempDateInfo = item
        selectStart.value = item.quarterStart
        selectEnd.value = null
    }
    else if (selectStart.value && tempDateInfo) {
        if (item.key >= tempDateInfo.key) {
            selectEnd.value = item.quarterEnd
        }
        else {
            selectEnd.value = tempDateInfo.quarterEnd
            selectStart.value = item.quarterStart
        }
        const date = [selectStart.value, selectEnd.value]
        emits('update:modelValue', date)
        setTimeout(() => {
            selectEnd.value = null
            selectStart.value = null
            pickerVisible.value = false
        }, 300)
    }
}
// 清除时间
const handleClearTime = () => {
    emits('update:modelValue', [])
    tempDateInfo = null
    setTimeout(() => {
        selectStart.value = null
        selectEnd.value = null
        pickerVisible.value = false
    })
}

/**
 * 定义expose
 */
defineExpose({
    // 获取季度数据
    getQuarterInfoByDate(dates?: Date[]) {
        if (dates && dates.length) {
            const startDate = dates[0]
            const endDate = dates[1]
            return {
                startYear: dayjs(startDate).year(),
                startQuarter: Math.ceil((dayjs(startDate).month() + 1) / 3),
                endYear: dayjs(endDate).year(),
                endQuarter: Math.ceil((dayjs(endDate).month() + 1) / 3),
            }
        }
        return null
    },
})
</script>

<script lang="ts">
export default {
    name: 'FpiElQuarterRangePicker'
}
</script>

<style lang="scss">
@import "./style/index";
</style>
