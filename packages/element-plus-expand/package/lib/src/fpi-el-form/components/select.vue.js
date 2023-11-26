"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "select",
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
      type: [Number, String, Boolean, Array],
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
    const showExpr = vue.computed(() => (item, name) => {
      const optionExpr = props.inputProps.optionExpr;
      if (!optionExpr)
        return item[name];
      return item[optionExpr[name] || name];
    });
    vue.onMounted(() => {
      $emit("upDataRefInput", inputDom.value);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElSelect), vue.mergeProps(__props.inputProps, {
        ref_key: "inputDom",
        ref: inputDom,
        modelValue: currModelValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currModelValue.value = $event)
      }), vue.createSlots({
        default: vue.withCtx(() => [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.option || [], (selItem, ind) => {
            return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElOption), vue.mergeProps({ key: ind }, selItem, {
              value: showExpr.value(selItem, "value"),
              label: showExpr.value(selItem, "label")
            }), {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(showExpr.value(selItem, "selectLabel") || showExpr.value(selItem, "label")), 1)
              ]),
              _: 2
            }, 1040, ["value", "label"]);
          }), 128))
        ]),
        _: 2
      }, [
        __props.inputProps.prefix ? {
          name: "prefix",
          fn: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "prefix")
          ]),
          key: "0"
        } : void 0,
        __props.inputProps.empty ? {
          name: "empty",
          fn: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "empty")
          ]),
          key: "1"
        } : void 0
      ]), 1040, ["modelValue"]);
    };
  }
});
exports.default = _sfc_main;
