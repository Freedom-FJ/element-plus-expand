<template>
    <el-popover :visible="pickerVisible" trigger="click" width="400">
        <!-- 输入框 -->
        <template #reference>
            <div
                class="fpi-el-year-range-picker" :class="{
                    [inputWrapperClass]: Boolean(inputWrapperClass),
                    'is-focus': pickerVisible,
                }" :style="{ ...inputWrapperStyle }" @mouseenter="inHover = true" @mouseleave="inHover = false"
            >
                <span class="year-input-icon"><el-icon>
                    <Calendar />
                </el-icon></span>
                <el-input
                    v-model="displayLeftValue" :placeholder="startPlaceholder" :disabled="disabled"
                    @click="handleOpenPopper"
                />
                <span class="year-input-range">{{ rangeSeparator }}</span>
                <el-input
                    v-model="displayRightValue" :placeholder="endPlaceholder" :disabled="disabled"
                    @click="handleOpenPopper"
                />
                <span v-if="clearable" v-show="isShowClearBtn" class="year-input-clear">
                    <el-icon style="margin-right: 8px;" @click="handleClearTime">
                        <CircleClose />
                    </el-icon>
                </span>
            </div>
        </template>
        <!-- 弹出层 -->
        <div v-click-outside="handleClickPopperOut" class="fpi-el-year-range-popper" :class="{ [popperClass]: Boolean(popperClass) }">
            <div class="year-popper-header">
                <el-icon style="position: absolute; top: 2px; left: 0; cursor: pointer;" @click="handleClickPopperLeftYear">
                    <DArrowLeft />
                </el-icon>
                <span class="year-popper-header-title">{{ showPopperTitle }}</span>
                <el-icon
                    style="position: absolute; top: 2px; right: 0; cursor: pointer;"
                    @click="handleClickPopperRightYear"
                >
                    <DArrowRight />
                </el-icon>
            </div>
            <div class="year-popper-cell-container">
                <div
                    v-for="item in popperYearList" :key="item.year" class="year-popper-cell" :class="{
                        'current-year': currentYear === item.year,
                        'select-bg':
                            showBg && item.year >= selectStartKey && item.year <= selectEndKey,
                        'select-bg-end': showBg && item.year === selectEndKey,
                        'select-bg-start': showBg && item.year === selectStartKey,
                        'disabled': item.disabled,
                    }" @click="handleClickTime(item)"
                >
                    <span
                        :class="{
                            select: selectStartKey === item.year || selectEndKey === item.year,
                        }" class="year-popper-cell-text"
                    >{{ item.text }}</span>
                </div>
            </div>
        </div>
    </el-popover>
</template>

<script lang="ts" setup>
import { type CSSProperties, computed, shallowRef } from 'vue'
import dayjs from 'dayjs'
import { ClickOutside as vClickOutside } from 'element-plus'
import { Calendar, CircleClose, DArrowLeft, DArrowRight } from '@element-plus/icons-vue'
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
        disabledDate?: (val: { year: number; currentYear: number }) => boolean
        popperClass?: string // 弹出层的样式
        rangeSeparator?: string // 分隔符
        inputWrapperClass?: string // 输入框包裹容器的样式
        inputWrapperStyle?: CSSProperties // 包裹容器的样式
        cellFormat?: string
    }>(),
    {
        showFormat: 'YYYY年',
        modelValue: () => [],
        disabled: false,
        startPlaceholder: '请选择开始年度',
        endPlaceholder: '请选择结束年度',
        valueFormat: '',
        clearable: true,
        disabledDate: (val: any) => val.year > val.currentYear,
        popperClass: '',
        rangeSeparator: '至',
        inputWrapperClass: '',
        inputWrapperStyle: () => ({}),
        cellFormat: 'YYYY',
    },
)

/**
 * 定义emits
 */
const emits = defineEmits(['update:modelValue'])

/**
 * 交互逻辑编写
 */
const showYearNum = 12
// 弹出层的显示隐藏
const pickerVisible = shallowRef(false)
// 面板选择的开始时间
const selectStart = shallowRef<Date | null>()
const selectStartKey = computed(() => {
    if (selectStart.value) {
        return dayjs(selectStart.value).year()
    }
    return 0
})
// 面板选择的结束时间
const selectEnd = shallowRef<Date | null>()
const selectEndKey = computed(() => {
    if (selectEnd.value) {
        return dayjs(selectEnd.value).year()
    }
    return 0
})
// 暂存点击的信息
let tempDateInfo: any = null
// 是否显示选择背景
const showBg = computed(() => {
    if (selectEndKey.value && selectStart.value) {
        return true
    }
    return false
})
// 当前年
const currentYear = dayjs().year()
// 左侧输入框显示的值
const displayLeftValue = computed({
    get: () => {
        if (!props.modelValue) {
            return null
        }
        if (!props.modelValue[0]) {
            return null
        }
        return dayjs(props.modelValue[0]).format(props.showFormat)
    },
    set: () => { },
})
// 右侧输入框显示的值
const displayRightValue = computed({
    get: () => {
        if (!props.modelValue) {
            return null
        }
        if (!props.modelValue[1]) {
            return null
        }
        return dayjs(props.modelValue[1]).format(props.showFormat)
    },
    set: () => { },
})
// 是否划过输入框
const inHover = shallowRef(false)
// 是否显示清除按钮
const isShowClearBtn = computed(() => {
    return Boolean(displayRightValue.value) && Boolean(displayLeftValue.value) && inHover.value
})
// 弹出层的显示的结束年份
const popperEndYear = shallowRef<number>(currentYear)
// 显示的标题年
const showPopperTitle = computed(() => {
    return `${popperEndYear.value - showYearNum + 1} ~ ${popperEndYear.value}`
})
// 面板的弹出年度列表
const popperYearList = computed(() => {
    const list = []
    if (popperEndYear.value) {
        for (let index = showYearNum - 1; index >= 0; index--) {
            const year = popperEndYear.value - index
            const disabled = props.disabledDate({
                currentYear,
                year,
            })
            list.push({
                text: dayjs(`${year}`).format(props.cellFormat),
                year,
                yearStart: dayjs(`${year}`).startOf('year').toDate(),
                yearEnd: dayjs(`${year}`).endOf('year').toDate(),
                disabled,
            })
        }
    }
    return list
})
// 点击弹窗层左侧切换年按钮
const handleClickPopperLeftYear = () => {
    popperEndYear.value = popperEndYear.value - showYearNum
}
// 点击弹窗层右侧切换年按钮
const handleClickPopperRightYear = () => {
    popperEndYear.value = popperEndYear.value + showYearNum
}
// 打开时间选择
const handleOpenPopper = () => {
    tempDateInfo = null
    pickerVisible.value = true
    if (props.modelValue[0]) {
        selectStart.value = dayjs(props.modelValue[0]).toDate()
    }
    if (props.modelValue[1]) {
        selectEnd.value = dayjs(props.modelValue[1]).toDate()
        popperEndYear.value = dayjs(props.modelValue[1]).year()
    }
    else {
        popperEndYear.value = currentYear
    }
}
// 弹窗关闭
const handleClickPopperOut = () => {
    pickerVisible.value = false
}
// 点击时间选择
const handleClickTime = (item: any) => {
    if (item.disabled) {
        return
    }
    // 如果存在start和end则重新选择值
    if ((selectStart.value && selectEnd.value) || (!selectStart.value && !selectEnd.value)) {
        tempDateInfo = item
        selectStart.value = item.yearStart
        selectEnd.value = null
    }
    else if (selectStart.value && tempDateInfo) {
        if (item.year >= tempDateInfo.year) {
            selectEnd.value = item.yearEnd
        }
        else {
            selectEnd.value = tempDateInfo.yearEnd
            selectStart.value = item.yearStart
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
// defineExpose({})
</script>

<script lang="ts">
export default {
    name: 'FpiElYearRangePicker'
}
</script>

<style lang="scss">
@import "./style/index";
</style>
