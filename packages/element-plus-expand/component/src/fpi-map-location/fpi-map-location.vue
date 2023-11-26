<!-- 位置经纬度 -->
<template>
    <div class="fpi-map-location">
        <ElForm :model="form">
            <div class="fpi-location-form">
                <ElFormItem
                    prop="longitude"
                    class="mr8"
                >
                    <ElInput v-model="form.longitude" placeholder="请输入经度" @change="onChangeLongitude" />
                </ElFormItem>
                <ElFormItem prop="latitude">
                    <ElInput v-model="form.latitude" placeholder="请输入纬度" @change="onChangeLatitudee" />
                </ElFormItem>

                <!--   点位图标   -->
                <ElFormItem>
                    <slot name="img">
                        <img class="fpi-map-icon" :src="Icon" alt="" @click="onClickIcon">
                    </slot>
                </ElFormItem>
            </div>
        </ElForm>
        <!--   地图弹框   -->
        <div>
            <ElDialog
                v-model="isShowDialog"
                class="fpi-map-dialog"
                width="810px"
                draggable
                append-to-body
                :modal-append-to-body="true"
                style="height: 550px;font-size: 14px; border-radius: 8px;"
                :style="props.style"
                :title="props.title"
            >
                <div style="width: 750px;">
                    <FpiMap
                        v-if="isShowDialog"
                        width="100%"
                        :to-fixed-num="props.toFixedNum"
                        :center-position="centerPosition"
                        @selected-map="selectedMap"
                    />
                </div>
                <template #footer>
                    <div class="dialog-footer" style="text-align: center;">
                        <ElButton @click="isShowDialog = false">
                            取消
                        </ElButton>
                        <ElButton type="primary" @click="onConfirm">
                            确定
                        </ElButton>
                    </div>
                </template>
            </ElDialog>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, watch } from 'vue'
import { ElButton, ElDialog, ElForm, ElFormItem, ElInput } from 'element-plus'
import FpiMap from '../fpi-map'
import Icon from './images/location.png'
const props = defineProps({
    toFixedNum: {
        type: Number,
        default: 6
    },
    modelValue: {
        type: Array,
        default: () => []
    },
    title: {
        type: String,
        default: '请在地图上单击选择坐标点'
    },
    style: {
        type: Object,
        default: () => {}
    },
})

const $emit = defineEmits(['getAddress', 'update:modelValue'])
const state = reactive({
    isShowDialog: false, // 是否显示弹框
    centerPosition: [120.193938105986, 30.190082529340692] as number[],
    mapInfo: {} as any, // 地图信息
    address: '', // 当前经纬度的地址
    form: {
        longitude: '', // 经度 0 - 180
        latitude: '', // 纬度 0 - 90
    }
})

watch(() => props.modelValue, (location) => {
    const longitude = location[0] || '' // 经度
    const latitude = location[1] || '' // 纬度
    state.form.longitude = longitude as string
    state.form.latitude = latitude as string
    if (!location?.length) {
        return
    }
    state.centerPosition = location as number[]
}, { deep: true, immediate: true })

/**
 * 点击icon 打开或关闭弹框
 */
const onClickIcon = () => {
    state.isShowDialog = !state.isShowDialog
}
/**
 * @msg: 选择地图
 */
const selectedMap = (val: any) => {
    state.mapInfo = val
}

/**
 * 输入经度
 * @param value
 */
const onChangeLongitude = (value: string) => {
    $emit('update:modelValue', [value, state.form.latitude])
}

/**
 * 监听经度
 */
watch(() => state.form.longitude, (value, oldValue) => {
    if (value === '') {
        return
    }
    const regExp = new RegExp(`^(\\-)?(((\\d|[1-9]\\d|1[0-7]\\d|0{1,3})(\\.[0-9]{0,${props.toFixedNum}})?)|180)$`, 'g')
    const isRight = regExp.test(value)
    if (!isRight) {
        state.form.longitude = oldValue
    }
})

/**
 * 监听纬度
 */
watch(() => state.form.latitude, (value, oldValue) => {
    if (value === '') {
        return
    }
    const regExp = new RegExp(`^(\\-)?(((\\d|[1-8]\\d|0)(\\.[0-9]{0,${props.toFixedNum}})?)|90)$`, 'g')
    const isRight = regExp.test(value)
    if (!isRight) {
        state.form.latitude = oldValue
    }
})
/**
 * 输入纬度
 * @param value
 */
const onChangeLatitudee = (value: string) => {
    $emit('update:modelValue', [state.form.longitude, value])
}

/**
 * 点击确定
 */
const onConfirm = () => {
    const info = state.mapInfo
    state.address = info?.address
    const location = info?.location || '120.193938105986, 30.190082529340692'
    const longitude = location.split(',')[0]
    const latitude = location.split(',')[1]
    state.form.longitude = longitude ? Number(longitude).toFixed(props.toFixedNum) : ''
    state.form.latitude = latitude ? Number(latitude).toFixed(props.toFixedNum) : ''
    state.isShowDialog = false
    $emit('getAddress', state.address)
    $emit('update:modelValue', [state.form.longitude, state.form.latitude])
}
const {
    isShowDialog,
    centerPosition,
    form,
} = toRefs(state)
</script>

<style lang="scss">
@import "style/index";
</style>
