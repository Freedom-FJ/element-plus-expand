import { defineComponent, computed, ref, onMounted, openBlock, createBlock, unref, mergeProps, createSlots, withCtx, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString, renderSlot } from "vue";
import { ElSelect, ElOption } from "element-plus";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const currModelValue = computed({
      set(value) {
        $emit("update:modelValue", value);
      },
      get() {
        return props.modelValue;
      }
    });
    const inputDom = ref();
    const showExpr = computed(() => (item, name) => {
      const optionExpr = props.inputProps.optionExpr;
      if (!optionExpr)
        return item[name];
      return item[optionExpr[name] || name];
    });
    onMounted(() => {
      $emit("upDataRefInput", inputDom.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElSelect), mergeProps(__props.inputProps, {
        ref_key: "inputDom",
        ref: inputDom,
        modelValue: currModelValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currModelValue.value = $event)
      }), createSlots({
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.option || [], (selItem, ind) => {
            return openBlock(), createBlock(unref(ElOption), mergeProps({ key: ind }, selItem, {
              value: showExpr.value(selItem, "value"),
              label: showExpr.value(selItem, "label")
            }), {
              default: withCtx(() => [
                createTextVNode(toDisplayString(showExpr.value(selItem, "selectLabel") || showExpr.value(selItem, "label")), 1)
              ]),
              _: 2
            }, 1040, ["value", "label"]);
          }), 128))
        ]),
        _: 2
      }, [
        __props.inputProps.prefix ? {
          name: "prefix",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "prefix")
          ]),
          key: "0"
        } : void 0,
        __props.inputProps.empty ? {
          name: "empty",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "empty")
          ]),
          key: "1"
        } : void 0
      ]), 1040, ["modelValue"]);
    };
  }
});
export {
  _sfc_main as default
};
