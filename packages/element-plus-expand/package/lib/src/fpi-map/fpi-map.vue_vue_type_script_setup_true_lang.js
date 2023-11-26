"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const axios = require("axios");
const elementPlus = require("element-plus");
const style = require("./static/style.js");
const location = require("./images/location.js");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const axios__default = /* @__PURE__ */ _interopDefaultLegacy(axios);
const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("div", {
  id: "fpiMapContainer",
  class: "map",
  style: { "width": "100%", "min-height": "300px" }
}, null, -1);
const _hoisted_2 = { class: "map-search" };
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "fpi-map",
  props: {
    centerPosition: {
      type: Array,
      default: () => {
        return [120.193938105986, 30.190082529340692];
      }
    },
    isShowSearch: {
      type: Boolean,
      default: true
    },
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
      default: "320px"
    },
    width: {
      type: String,
      default: "100%"
    },
    toFixedNum: {
      type: Number,
      default: 6
    }
  },
  emits: [
    "selectedMap"
  ],
  setup(__props, { expose: __expose, emit: $emit }) {
    const props = __props;
    const state = vue.reactive({
      currentPosition: [],
      addressList: [],
      searchText: "",
      curPositionObj: {},
      glMap: {},
      isFirstLoad: true
    });
    const searchMapByKeyword = (params, type) => {
      axios__default.default({
        method: "get",
        params: {},
        url: params.location ? `http://gis-test.fpi-inc.site/fpi-gis-server/api/v1/geocoder/input-tip?keywords=${params.keywords}&location=${params.location}` : `http://gis-test.fpi-inc.site/fpi-gis-server/api/v1/geocoder/input-tip?keywords=${params.keywords}`
      }).then((res) => {
        var _a, _b;
        const { data } = res;
        const tips = ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.tips) || [];
        if (Array.isArray(tips)) {
          state.addressList = tips.map((item, index) => {
            return __spreadProps(__spreadValues({}, item), {
              address: `${item == null ? void 0 : item.district}${item == null ? void 0 : item.address}`
            });
          });
          if (!type && state.addressList.length) {
            state.glMap.flyTo({
              center: (_b = state.addressList[0]) == null ? void 0 : _b.location.split(","),
              zoom: 12.5,
              speed: 1
            });
            $emit("selectedMap", state.addressList[0]);
          }
        }
      });
    };
    const searchMapByLocation = (location2) => {
      axios__default.default({
        method: "get",
        params: {},
        url: `http://gis-test.fpi-inc.site/fpi-gis-server/api/v1/geocoder/regeo?location=${location2}`
      }).then((res) => {
        var _a;
        const { data } = res;
        const regeocode = ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.regeocode) || {};
        const { adcode } = (regeocode == null ? void 0 : regeocode.addressComponent) || {};
        state.addressList = regeocode == null ? void 0 : regeocode.pois;
        data.curPositionObj = {
          address: regeocode == null ? void 0 : regeocode.formatted_address,
          adcode,
          location: location2
        };
        state.glMap.flyTo({
          center: data.curPositionObj.location.split(","),
          speed: 1
        });
        if (state.isFirstLoad) {
          state.isFirstLoad = false;
          return;
        }
        $emit("selectedMap", data.curPositionObj);
      });
    };
    const searchKey = (queryString, cb) => {
      searchMapByKeyword({
        keywords: state.searchText
      }, "search");
      setTimeout(() => {
        const results = state.addressList.map((item) => {
          return __spreadProps(__spreadValues({}, item), {
            value: item.address
          });
        });
        cb(results);
      }, 500);
    };
    const handleSelect = (item) => {
      if (props.isLook)
        return;
      state.glMap.flyTo({
        center: item == null ? void 0 : item.location.split(","),
        zoom: 12.5,
        speed: 1
      });
      $emit("selectedMap", item);
    };
    const initMap = () => {
      const container = "fpiMapContainer";
      if (!mapboxgl)
        return;
      const glMap = state.glMap = new mapboxgl.Map({
        container,
        minZoom: 4,
        maxZoom: 20,
        center: state.currentPosition,
        zoom: 12.5,
        pitch: 0,
        style: style.default,
        hash: false,
        antialias: true
      });
      glMap.on("load", () => {
        setMarker();
      });
      glMap.on("click", (e) => {
        const location2 = e && e.lngLat ? `${Number(e.lngLat.lng).toFixed(props.toFixedNum)},${Number(e.lngLat.lat).toFixed(props.toFixedNum)}` : "";
        setMarker(location2.split(","));
        if (props.isLook)
          return;
        searchMapByLocation(location2);
      });
      glMap.on("drag", () => {
        const pos = glMap.getCenter();
        pos && pos.lat ? `${Number(pos.lng).toFixed(props.toFixedNum)},${Number(pos.lat).toFixed(props.toFixedNum)}` : "";
      });
      glMap.on("dragend", (e) => {
        const pos = glMap.getCenter();
        const location2 = pos && pos.lat ? `${Number(pos.lng)},${Number(pos.lat)}` : "";
        state.searchText = "";
        if (props.isLook)
          return;
        searchMapByLocation(location2);
      });
    };
    vue.ref();
    const setMarker = (location$1) => {
      if (state.glMap.hasImage("IconImg"))
        state.glMap.removeImage("IconImg");
      if (state.glMap.getLayer("points"))
        state.glMap.removeLayer("points");
      if (state.glMap.getSource("point"))
        state.glMap.removeSource("point");
      state.glMap.loadImage(location.default, (error, image) => {
        if (error)
          throw error;
        state.glMap.addImage("IconImg", image);
        state.glMap.addSource("point", {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [{
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: location$1 || state.currentPosition
              }
            }]
          }
        });
        state.glMap.addLayer({
          id: "points",
          type: "symbol",
          source: "point",
          layout: {
            "icon-image": "IconImg",
            "icon-size": 1
          }
        });
      });
    };
    vue.watch(() => props.centerPosition, (val) => {
      if (!val.length)
        return;
      state.currentPosition = props.centerPosition;
      state.glMap = null;
      vue.nextTick(() => {
        var _a;
        initMap();
        searchMapByLocation((_a = state.currentPosition) == null ? void 0 : _a.join(","));
      });
    }, { deep: true, immediate: true });
    vue.onMounted(() => {
      setTimeout(() => {
        initMap();
      });
    });
    const render = () => {
      state.glMap.resize();
    };
    const { currentPosition, searchText } = vue.toRefs(state);
    __expose({
      render
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: "fpi-map",
        style: vue.normalizeStyle({ "--height": props.height, "--width": props.width })
      }, [
        _hoisted_1,
        vue.createElementVNode("div", _hoisted_2, [
          props.isShowSearch ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElAutocomplete), {
            key: 0,
            modelValue: vue.unref(searchText),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(searchText) ? searchText.value = $event : null),
            "fetch-suggestions": searchKey,
            placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",
            clearable: true,
            onSelect: handleSelect
          }, null, 8, ["modelValue"])) : vue.createCommentVNode("", true)
        ])
      ], 4);
    };
  }
});
exports.default = _sfc_main;
