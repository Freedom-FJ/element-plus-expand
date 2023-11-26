import { defineComponent, computed, ref, onMounted, openBlock, createBlock, unref, mergeProps } from "vue";
import { ElDatePicker } from "element-plus";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "date-picker",
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
      type: [Number, String, Boolean, Date],
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
    const currModelValue = computed({
      set(value) {
        $emit("update:modelValue", value);
      },
      get() {
        return props.modelValue;
      }
    });
    const inputDom = ref();
    onMounted(() => {
      $emit("upDataRefInput", inputDom.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElDatePicker), mergeProps(__props.inputProps, {
        ref_key: "inputDom",
        ref: inputDom,
        modelValue: currModelValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currModelValue.value = $event),
        style: __props.inputProps.style || { width: "100%" }
      }), null, 16, ["modelValue", "style"]);
    };
  }
});
export {
  _sfc_main as default
};
