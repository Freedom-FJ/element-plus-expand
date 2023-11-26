import { defineComponent, computed, ref, onMounted, openBlock, createBlock, unref, mergeProps, withCtx, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString } from "vue";
import { ElRadioGroup, ElRadioButton, ElRadio } from "element-plus";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radio",
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
    const currModelValue = computed({
      set(value) {
        $emit("update:modelValue", value);
      },
      get() {
        return props.modelValue;
      }
    });
    const showExpr = computed(() => (item, name) => {
      const optionExpr = props.inputProps.optionExpr;
      if (!optionExpr)
        return item[name];
      return item[optionExpr[name] || name];
    });
    const inputDom = ref();
    onMounted(() => {
      $emit("upDataRefInput", inputDom.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElRadioGroup), mergeProps(__props.inputProps, {
        ref_key: "inputDom",
        ref: inputDom,
        modelValue: currModelValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currModelValue.value = $event)
      }), {
        default: withCtx(() => [
          __props.inputProps.type === "button" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.option || [], (selItem, ind) => {
            return openBlock(), createBlock(unref(ElRadioButton), mergeProps({ key: ind }, selItem, {
              label: showExpr.value(selItem, "value")
            }), {
              default: withCtx(() => [
                createTextVNode(toDisplayString(showExpr.value(selItem, "label")), 1)
              ]),
              _: 2
            }, 1040, ["label"]);
          }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.option || [], (selItem, ind) => {
            return openBlock(), createBlock(unref(ElRadio), mergeProps({ key: ind }, selItem, {
              label: showExpr.value(selItem, "value")
            }), {
              default: withCtx(() => [
                createTextVNode(toDisplayString(showExpr.value(selItem, "label")), 1)
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
export {
  _sfc_main as default
};
