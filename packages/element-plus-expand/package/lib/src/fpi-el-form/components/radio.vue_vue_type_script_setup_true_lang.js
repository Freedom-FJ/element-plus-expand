"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "radio",
  props: {
    inputProps: {
      type: Object,
      default: () => {
        return {};
      }
    },
    modelValue: {
      type: [Number, String, Boolean],
      default: ""
    },
    type: {
      type: String,
      default: ""
    },
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
    const showExpr = vue.computed(() => (item, name) => {
      const optionExpr = props.inputProps.optionExpr;
      if (!optionExpr)
        return item[name];
      return item[optionExpr[name] || name];
    });
    const inputDom = vue.ref();
    vue.onMounted(() => {
      $emit("upDataRefInput", inputDom.value);
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElRadioGroup), vue.mergeProps(__props.inputProps, {
        ref_key: "inputDom",
        ref: inputDom,
        modelValue: currModelValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currModelValue.value = $event)
      }), {
        default: vue.withCtx(() => [
          __props.inputProps.type === "button" ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(__props.option || [], (selItem, ind) => {
            return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElRadioButton), vue.mergeProps({ key: ind }, selItem, {
              label: showExpr.value(selItem, "value")
            }), {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(showExpr.value(selItem, "label")), 1)
              ]),
              _: 2
            }, 1040, ["label"]);
          }), 128)) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(__props.option || [], (selItem, ind) => {
            return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElRadio), vue.mergeProps({ key: ind }, selItem, {
              label: showExpr.value(selItem, "value")
            }), {
              default: vue.withCtx(() => [
                vue.createTextVNode(vue.toDisplayString(showExpr.value(selItem, "label")), 1)
              ]),
              _: 2
            }, 1040, ["label"]);
          }), 128))
        ]),
        _: 1
      }, 16, ["modelValue"]);
    };
  }
});
exports.default = _sfc_main;
