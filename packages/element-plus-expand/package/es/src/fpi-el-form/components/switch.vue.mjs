import { defineComponent, computed, ref, onMounted, openBlock, createBlock, unref, mergeProps } from "vue";
import { ElSwitch } from "element-plus";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "switch",
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
    const inputDom = ref();
    onMounted(() => {
      $emit("upDataRefInput", inputDom.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElSwitch), mergeProps(__props.inputProps, {
        ref_key: "inputDom",
        ref: inputDom,
        modelValue: currModelValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currModelValue.value = $event)
      }), null, 16, ["modelValue"]);
    };
  }
});
export {
  _sfc_main as default
};
