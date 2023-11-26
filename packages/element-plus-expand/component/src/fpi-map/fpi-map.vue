<template>
    <div class="fpi-map" :style="{ '--height': props.height, '--width': props.width }">
        <div id="fpiMapContainer" class="map" style="width: 100%; min-height: 300px;" />
        <div class="map-search">
            <ElAutocomplete
                v-if="props.isShowSearch"
                v-model="searchText"
                :fetch-suggestions="searchKey"
                placeholder="请输入关键词搜索"
                :clearable="true"
                @select="handleSelect"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { nextTick, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { ElAutocomplete } from 'element-plus'
import styleJson from './static/style.json'
import Icon from './images/location.png'
const props = defineProps({
    centerPosition: {
        type: Array,
        default: () => {
            return [120.193938105986, 30.190082529340692]
        }
    },
    isShowSearch: {
        type: Boolean,
        default: true
    },
    // 是否是查看地图 不跳转
    isLook: {
        type: Boolean,
        default: false
    },
    zoom: {
        type: Number,
        default: 12.5
    },
    height: {
        type: String,
        default: '320px'
    },
    width: {
        type: String,
        default: '100%'
    },
    toFixedNum: {
        type: Number,
        default: 6
    },
})
/**
 * @desc form回调函数
 */
const $emit = defineEmits([
    'selectedMap'
])

const state = reactive({
    currentPosition: [] as any,
    addressList: [] as Record<string, any>[],
    searchText: '',
    curPositionObj: {} as any, // 当前位置对象
    glMap: {} as any,
    isFirstLoad: true
})
/**
 * @name: searchMapByKeyword
 * @test: test font
 * @msg: 根据关键词搜索
 * @param params
 * @param type
 */
const searchMapByKeyword = (params: any, type?: string) => {
    axios({
        method: 'get', // 请求方法
        params: {},
        url: params.location ? `http://gis-test.fpi-inc.site/fpi-gis-server/api/v1/geocoder/input-tip?keywords=${params.keywords}&location=${params.location}` : `http://gis-test.fpi-inc.site/fpi-gis-server/api/v1/geocoder/input-tip?keywords=${params.keywords}`,
    }).then((res: any) => {
        const { data }: any = res
        const tips = data?.data?.tips || []
        if (Array.isArray(tips)) {
            state.addressList = tips.map((item: any, index: number) => {
                return {
                    ...item,
                    address: `${item?.district}${item?.address}`
                }
            })
            // 搜索之后，定位要改变,飞到定位的位置
            if (!type && state.addressList.length) {
                state.glMap.flyTo({
                    center: state.addressList[0]?.location.split(','),
                    zoom: 12.5,
                    speed: 1,
                })
                $emit('selectedMap', state.addressList[0])
            }
        }
    })
}
/**
 * @msg: 根据经纬度搜索
 */
const searchMapByLocation = (location: any): any => {
    axios({
        method: 'get', // 请求方法
        params: {},
        url: `http://gis-test.fpi-inc.site/fpi-gis-server/api/v1/geocoder/regeo?location=${location}`,
    }).then((res: any) => {
        const { data }: any = res
        const regeocode = data?.data?.regeocode || {}
        const { adcode } = regeocode?.addressComponent || {}
        state.addressList = regeocode?.pois
        // 搜索附件的地点
        data.curPositionObj = {
            address: regeocode?.formatted_address,
            adcode,
            location
        }
        state.glMap.flyTo({
            center: data.curPositionObj.location.split(','),
            speed: 1,
        })
        // 首次加载不根据经纬度获取位置
        if (state.isFirstLoad) {
            state.isFirstLoad = false
            return
        }
        $emit('selectedMap', data.curPositionObj)
    })
}
/**
 * @name: searchKey
 * @test: test font
 * @msg: 搜索关键词
 * @return {*}
 */
const searchKey = (queryString: any, cb: any) => {
    searchMapByKeyword({
        keywords: state.searchText,
    }, 'search')
    setTimeout(() => {
        const results = state.addressList.map((item: Record<string, any>) => {
            return {
                ...item,
                value: item.address
            }
        })
        cb(results)
    }, 500)
}
/**
 * @name: handleSelect
 * @msg: 选中
 */
const handleSelect = (item: any) => {
    // 如果只是查看 不需要跳转
    if (props.isLook)
        return

    state.glMap.flyTo({
        center: item?.location.split(','),
        zoom: 12.5,
        speed: 1,
    })
    $emit('selectedMap', item)
}
/**
 * @msg: 初始化地图
 */
const initMap = (): any => {
    const container = 'fpiMapContainer'
    // 如果项目中没有引入
    if (!mapboxgl)
        return
    const glMap = state.glMap = new mapboxgl.Map({
        container,
        minZoom: 4,
        maxZoom: 20,
        center: state.currentPosition,
        zoom: 12.5,
        pitch: 0,
        style: styleJson,
        hash: false,
        antialias: true
    })
    glMap.on('load', () => {
        // 加载自定义标注
        setMarker()
    })
    // 点击地图
    glMap.on('click', (e: any) => {
        const location = e && e.lngLat ? `${Number(e.lngLat.lng).toFixed(props.toFixedNum)},${Number(e.lngLat.lat).toFixed(props.toFixedNum)}` : ''
        setMarker(location.split(','))
        if (props.isLook)
            return
        searchMapByLocation(location)
    })
    // 拖拽
    glMap.on('drag', () => {
        const pos = glMap.getCenter()
        const location = pos && pos.lat ? `${Number(pos.lng).toFixed(props.toFixedNum)},${Number(pos.lat).toFixed(props.toFixedNum)}` : ''
    })
    // 拖拽结束
    glMap.on('dragend', (e: any) => {
        const pos = glMap.getCenter()
        const location = pos && pos.lat ? `${Number(pos.lng)},${Number(pos.lat)}` : ''
        state.searchText = ''
        if (props.isLook)
            return

        searchMapByLocation(location)
    })
}
const marker = ref()
const setMarker = (location?: string[]) => {
    // 移除顺序不能变
    if (state.glMap.hasImage('IconImg'))
        state.glMap.removeImage('IconImg')
    if (state.glMap.getLayer('points'))
        state.glMap.removeLayer('points')
    if (state.glMap.getSource('point'))
        state.glMap.removeSource('point')

    state.glMap.loadImage(Icon, (error: any, image: any) => {
        if (error) throw error
        state.glMap.addImage('IconImg', image)
        state.glMap.addSource('point', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: location || state.currentPosition
                    }
                }]
            }
        })
        state.glMap.addLayer({
            id: 'points',
            type: 'symbol',
            source: 'point',
            layout: {
                'icon-image': 'IconImg',
                'icon-size': 1
            }
        })
    })
}
// 监听位置变化
watch(() => props.centerPosition, (val) => {
    if (!val.length) return
    state.currentPosition = props.centerPosition
    state.glMap = null
    nextTick(() => {
        initMap()
        // 加载自定义标注
        searchMapByLocation(state.currentPosition?.join(','))
    })
}, { deep: true, immediate: true })
onMounted(() => {
    setTimeout(() => {
        initMap()
    })
})

const render = () => {
    state.glMap.resize()
}
const { currentPosition, searchText } = toRefs(state)
defineExpose({
    render
})
</script>

<style lang="scss">
@import "./style/index";
</style>
