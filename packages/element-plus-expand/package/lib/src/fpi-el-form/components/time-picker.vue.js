"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "time-picker",
  props: {
    /**
     * @desc 表单配置项
     * @abstract
     */
    inputProps: {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**
     * @desc 对应vModel值
     */
    modelValue: {
      type: [Number, String, Date],
      default: ""
    },
    /**
     * @desc 对应表格type
     */
    type: {
      type: String,
      default: ""
    },
    /**
     * @desc 表单选择配置数组
     */
    option: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: [
    "update:modelValue",
    "upDataRefInput"
  ],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const currModelValue = vue.computed({
      set(value) {
        $emit("update:modelValue", value);
      },
      get() {
        return props.modelValue;
      }
    });
    const inputDom = vue.ref();
    vue.onMounted(() => {
      $emit("upDataRefInput", inputDom.value);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTimePicker), vue.mergeProps(__props.inputProps, {
        ref_key: "inputDom",
        ref: inputDom,
        modelValue: currModelValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currModelValue.value = $event)
      }), null, 16, ["modelValue"]);
    };
  }
});
exports.default = _sfc_main;
