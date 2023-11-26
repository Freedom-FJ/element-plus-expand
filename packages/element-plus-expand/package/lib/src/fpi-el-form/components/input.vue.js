"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const utils = require("../utils.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "input",
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
      type: [Number, String, Boolean],
      default: ""
    },
    /**
     * @desc 对应表格type
     */
    type: {
      type: String,
      default: ""
    }
  },
  emits: [
    "update:modelValue",
    "upDataRefInput"
  ],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const inputDom = vue.ref();
    const currModelValue = vue.computed({
      set(value) {
        const inputLimit = props.inputProps.inputLimit;
        const fun = typeof inputLimit === "string" ? utils.inputLimitObj[inputLimit] : inputLimit;
        fun && (value = fun(value));
        $emit("update:modelValue", value);
      },
      get() {
        return props.modelValue;
      }
    });
    vue.onMounted(() => {
      if (props.inputProps.isFocus)
        inputDom.value && inputDom.value.focus();
      $emit("upDataRefInput", inputDom.value);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElInput), vue.mergeProps(__props.inputProps, {
        ref_key: "inputDom",
        ref: inputDom,
        modelValue: currModelValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currModelValue.value = $event)
      }), vue.createSlots({ _: 2 }, [
        __props.inputProps.prefix ? {
          name: "prefix",
          fn: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "prefix")
          ]),
          key: "0"
        } : void 0,
        __props.inputProps.suffix ? {
          name: "suffix",
          fn: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "suffix")
          ]),
          key: "1"
        } : void 0,
        __props.inputProps.prepend ? {
          name: "prepend",
          fn: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "prepend")
          ]),
          key: "2"
        } : void 0,
        __props.inputProps.append ? {
          name: "append",
          fn: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "append")
          ]),
          key: "3"
        } : void 0
      ]), 1040, ["modelValue"]);
    };
  }
});
exports.default = _sfc_main;
