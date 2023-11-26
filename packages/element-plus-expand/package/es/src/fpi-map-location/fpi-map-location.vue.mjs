import { defineComponent, reactive, watch, toRefs, openBlock, createElementBlock, createVNode, unref, withCtx, createElementVNode, renderSlot, isRef, normalizeStyle, createTextVNode, createBlock, createCommentVNode } from "vue";
import { ElForm, ElFormItem, ElInput, ElDialog, ElButton } from "element-plus";
import "../fpi-map/index.mjs";
import Icon from "./images/location.png.mjs";
import _sfc_main$1 from "../fpi-map/fpi-map.vue.mjs";
import "../fpi-map/fpi-map.vue2.mjs";
const _hoisted_1 = { class: "fpi-map-location" };
const _hoisted_2 = { class: "fpi-location-form" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { style: { "width": "750px" } };
const _hoisted_5 = {
  class: "dialog-footer",
  style: { "text-align": "center" }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const state = reactive({
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
    watch(() => props.modelValue, (location) => {
      const longitude = location[0] || "";
      const latitude = location[1] || "";
      state.form.longitude = longitude;
      state.form.latitude = latitude;
      if (!(location == null ? void 0 : location.length)) {
        return;
      }
      state.centerPosition = location;
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
    watch(() => state.form.longitude, (value, oldValue) => {
      if (value === "") {
        return;
      }
      const regExp = new RegExp(`^(\\-)?(((\\d|[1-9]\\d|1[0-7]\\d|0{1,3})(\\.[0-9]{0,${props.toFixedNum}})?)|180)$`, "g");
      const isRight = regExp.test(value);
      if (!isRight) {
        state.form.longitude = oldValue;
      }
    });
    watch(() => state.form.latitude, (value, oldValue) => {
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
      const location = (info == null ? void 0 : info.location) || "120.193938105986, 30.190082529340692";
      const longitude = location.split(",")[0];
      const latitude = location.split(",")[1];
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
    } = toRefs(state);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElForm), { model: unref(form) }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              createVNode(unref(ElFormItem), {
                prop: "longitude",
                class: "mr8"
              }, {
                default: withCtx(() => [
                  createVNode(unref(ElInput), {
                    modelValue: unref(form).longitude,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(form).longitude = $event),
                    placeholder: "请输入经度",
                    onChange: onChangeLongitude
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(unref(ElFormItem), { prop: "latitude" }, {
                default: withCtx(() => [
                  createVNode(unref(ElInput), {
                    modelValue: unref(form).latitude,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).latitude = $event),
                    placeholder: "请输入纬度",
                    onChange: onChangeLatitudee
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(unref(ElFormItem), null, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "img", {}, () => [
                    createElementVNode("img", {
                      class: "fpi-map-icon",
                      src: unref(Icon),
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
        createElementVNode("div", null, [
          createVNode(unref(ElDialog), {
            modelValue: unref(isShowDialog),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(isShowDialog) ? isShowDialog.value = $event : null),
            class: "fpi-map-dialog",
            width: "810px",
            draggable: "",
            "append-to-body": "",
            "modal-append-to-body": true,
            style: normalizeStyle([{ "height": "550px", "font-size": "14px", "border-radius": "8px" }, props.style]),
            title: props.title
          }, {
            footer: withCtx(() => [
              createElementVNode("div", _hoisted_5, [
                createVNode(unref(ElButton), {
                  onClick: _cache[2] || (_cache[2] = ($event) => isShowDialog.value = false)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 取消 ")
                  ]),
                  _: 1
                }),
                createVNode(unref(ElButton), {
                  type: "primary",
                  onClick: onConfirm
                }, {
                  default: withCtx(() => [
                    createTextVNode(" 确定 ")
                  ]),
                  _: 1
                })
              ])
            ]),
            default: withCtx(() => [
              createElementVNode("div", _hoisted_4, [
                unref(isShowDialog) ? (openBlock(), createBlock(unref(_sfc_main$1), {
                  key: 0,
                  width: "100%",
                  "to-fixed-num": props.toFixedNum,
                  "center-position": unref(centerPosition),
                  onSelectedMap: selectedMap
                }, null, 8, ["to-fixed-num", "center-position"])) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "style", "title"])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
