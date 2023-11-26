"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
require("../fpi-map/index.js");
const location = require("./images/location.png.js");
const fpiMap_vue_vue_type_script_setup_true_lang = require("../fpi-map/fpi-map.vue.js");
require("../fpi-map/fpi-map.vue2.js");
const _hoisted_1 = { class: "fpi-map-location" };
const _hoisted_2 = { class: "fpi-location-form" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { style: { "width": "750px" } };
const _hoisted_5 = {
  class: "dialog-footer",
  style: { "text-align": "center" }
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "fpi-map-location",
  props: {
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
      default: "请在地图上单击选择坐标点"
    },
    style: {
      type: Object,
      default: () => {
      }
    }
  },
  emits: ["getAddress", "update:modelValue"],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const state = vue.reactive({
      isShowDialog: false,
      // 是否显示弹框
      centerPosition: [120.193938105986, 30.190082529340692],
      mapInfo: {},
      // 地图信息
      address: "",
      // 当前经纬度的地址
      form: {
        longitude: "",
        // 经度 0 - 180
        latitude: ""
        // 纬度 0 - 90
      }
    });
    vue.watch(() => props.modelValue, (location2) => {
      const longitude = location2[0] || "";
      const latitude = location2[1] || "";
      state.form.longitude = longitude;
      state.form.latitude = latitude;
      if (!(location2 == null ? void 0 : location2.length)) {
        return;
      }
      state.centerPosition = location2;
    }, { deep: true, immediate: true });
    const onClickIcon = () => {
      state.isShowDialog = !state.isShowDialog;
    };
    const selectedMap = (val) => {
      state.mapInfo = val;
    };
    const onChangeLongitude = (value) => {
      $emit("update:modelValue", [value, state.form.latitude]);
    };
    vue.watch(() => state.form.longitude, (value, oldValue) => {
      if (value === "") {
        return;
      }
      const regExp = new RegExp(`^(\\-)?(((\\d|[1-9]\\d|1[0-7]\\d|0{1,3})(\\.[0-9]{0,${props.toFixedNum}})?)|180)$`, "g");
      const isRight = regExp.test(value);
      if (!isRight) {
        state.form.longitude = oldValue;
      }
    });
    vue.watch(() => state.form.latitude, (value, oldValue) => {
      if (value === "") {
        return;
      }
      const regExp = new RegExp(`^(\\-)?(((\\d|[1-8]\\d|0)(\\.[0-9]{0,${props.toFixedNum}})?)|90)$`, "g");
      const isRight = regExp.test(value);
      if (!isRight) {
        state.form.latitude = oldValue;
      }
    });
    const onChangeLatitudee = (value) => {
      $emit("update:modelValue", [state.form.longitude, value]);
    };
    const onConfirm = () => {
      const info = state.mapInfo;
      state.address = info == null ? void 0 : info.address;
      const location2 = (info == null ? void 0 : info.location) || "120.193938105986, 30.190082529340692";
      const longitude = location2.split(",")[0];
      const latitude = location2.split(",")[1];
      state.form.longitude = longitude ? Number(longitude).toFixed(props.toFixedNum) : "";
      state.form.latitude = latitude ? Number(latitude).toFixed(props.toFixedNum) : "";
      state.isShowDialog = false;
      $emit("getAddress", state.address);
      $emit("update:modelValue", [state.form.longitude, state.form.latitude]);
    };
    const {
      isShowDialog,
      centerPosition,
      form
    } = vue.toRefs(state);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(vue.unref(elementPlus.ElForm), { model: vue.unref(form) }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", _hoisted_2, [
              vue.createVNode(vue.unref(elementPlus.ElFormItem), {
                prop: "longitude",
                class: "mr8"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(elementPlus.ElInput), {
                    modelValue: vue.unref(form).longitude,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.unref(form).longitude = $event),
                    placeholder: "请输入经度",
                    onChange: onChangeLongitude
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              vue.createVNode(vue.unref(elementPlus.ElFormItem), { prop: "latitude" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(elementPlus.ElInput), {
                    modelValue: vue.unref(form).latitude,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => vue.unref(form).latitude = $event),
                    placeholder: "请输入纬度",
                    onChange: onChangeLatitudee
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              vue.createVNode(vue.unref(elementPlus.ElFormItem), null, {
                default: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "img", {}, () => [
                    vue.createElementVNode("img", {
                      class: "fpi-map-icon",
                      src: vue.unref(location.default),
                      alt: "",
                      onClick: onClickIcon
                    }, null, 8, _hoisted_3)
                  ])
                ]),
                _: 3
              })
            ])
          ]),
          _: 3
        }, 8, ["model"]),
        vue.createElementVNode("div", null, [
          vue.createVNode(vue.unref(elementPlus.ElDialog), {
            modelValue: vue.unref(isShowDialog),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => vue.isRef(isShowDialog) ? isShowDialog.value = $event : null),
            class: "fpi-map-dialog",
            width: "810px",
            draggable: "",
            "append-to-body": "",
            "modal-append-to-body": true,
            style: vue.normalizeStyle([{ "height": "550px", "font-size": "14px", "border-radius": "8px" }, props.style]),
            title: props.title
          }, {
            footer: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_5, [
                vue.createVNode(vue.unref(elementPlus.ElButton), {
                  onClick: _cache[2] || (_cache[2] = ($event) => isShowDialog.value = false)
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" 取消 ")
                  ]),
                  _: 1
                }),
                vue.createVNode(vue.unref(elementPlus.ElButton), {
                  type: "primary",
                  onClick: onConfirm
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" 确定 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: vue.withCtx(() => [
              vue.createElementVNode("div", _hoisted_4, [
                vue.unref(isShowDialog) ? (vue.openBlock(), vue.createBlock(vue.unref(fpiMap_vue_vue_type_script_setup_true_lang.default), {
                  key: 0,
                  width: "100%",
                  "to-fixed-num": props.toFixedNum,
                  "center-position": vue.unref(centerPosition),
                  onSelectedMap: selectedMap
                }, null, 8, ["to-fixed-num", "center-position"])) : vue.createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "style", "title"])
        ])
      ]);
    };
  }
});
exports.default = _sfc_main;
