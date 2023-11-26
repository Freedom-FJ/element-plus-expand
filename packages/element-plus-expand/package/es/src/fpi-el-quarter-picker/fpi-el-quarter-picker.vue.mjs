var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, ref, computed, openBlock, createBlock, unref, normalizeStyle, withCtx, createVNode, normalizeClass, withDirectives, createElementBlock, createElementVNode, toDisplayString, Fragment, renderList } from "vue";
import { ElPopover, ElInput, ElIcon, ClickOutside } from "element-plus";
import { Calendar, DArrowLeft, DArrowRight } from "@element-plus/icons-vue";
import dayjs from "dayjs";
const _hoisted_1 = { class: "fpi-quarter-picker-popover-content" };
const _hoisted_2 = { class: "fpi-quarter-picker-popover-content-header" };
const _hoisted_3 = { style: { "user-select": "none" } };
const _hoisted_4 = { class: "fpi-quarter-picker-popover-quarter-wrap" };
const _hoisted_5 = ["onClick"];
const __default__ = {
  name: "FpiElQuarterPicker"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    // 弹窗的className
    popperClass: {
      type: String,
      default: ""
    },
    // 弹窗的style
    popperStyle: {
      type: Object,
      default: () => ({})
    },
    // 弹窗的宽度
    popperWidth: {
      type: Number,
      default: 284
    },
    // 输入框的样式
    inputClass: {
      type: String,
      default: ""
    },
    // 输入框的style
    inputStyle: {
      type: Object,
      default: () => ({})
    },
    // 输入框显示值的格式化
    format: {
      type: String,
      default: "YYYY年第q季度"
    },
    // v-model绑定值
    modelValue: {
      type: [Date, String]
    },
    // 输入提示
    placeholder: {
      type: String,
      default: "请选择季度"
    },
    // 禁止选择的季度
    disabledDate: {
      type: Function,
      default: (date) => !date
    },
    // 是否显示清楚值
    clearable: {
      type: Boolean,
      default: true
    },
    // 输入框尺寸大小
    size: {
      type: String,
      default: "default"
    },
    // 选择值的显示
    valueFormat: {
      type: String,
      default: "第q季度"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const quarterConfig = [
      {
        startMonth: 0,
        endMonth: 2,
        q: "一",
        Q: "1"
      },
      {
        startMonth: 3,
        endMonth: 5,
        q: "二",
        Q: "2"
      },
      {
        startMonth: 6,
        endMonth: 8,
        q: "三",
        Q: "3"
      },
      {
        startMonth: 9,
        endMonth: 11,
        q: "四",
        Q: "4"
      }
    ];
    const pickerVisible = ref(false);
    const showYear = ref(dayjs().year());
    const currenQuarterKey = computed(() => {
      const date = dayjs();
      const year = date.year();
      const month = date.month();
      const quarter = quarterConfig.find(
        (c) => c.endMonth >= month && c.startMonth <= month
      );
      return `${year}-${quarter == null ? void 0 : quarter.Q}`;
    });
    const selectValueList = computed(() => {
      const year = showYear.value;
      const text1 = dayjs().set("year", year).format(props.valueFormat);
      return quarterConfig.map((item) => {
        const text = text1.replace("q", item.q).replace("Q", item.Q);
        const key = `${year}-${item.Q}`;
        const isCurrent = currenQuarterKey.value === key;
        const isDisabled = props.disabledDate(__spreadValues({ year }, item));
        return __spreadProps(__spreadValues({
          year
        }, item), {
          text,
          key,
          isCurrent,
          isDisabled
        });
      });
    });
    const selectValue = computed(() => {
      if (props.modelValue) {
        const isValid = dayjs(props.modelValue).isValid();
        if (isValid) {
          const date = dayjs(props.modelValue);
          const year = date.year();
          const month = date.month();
          const quarter = quarterConfig.find(
            (c) => c.endMonth >= month && c.startMonth <= month
          );
          if (quarter)
            return `${year}-${quarter.Q}`;
          return "";
        }
        return "";
      }
      return "";
    });
    const inputValue = computed({
      get: () => {
        if (props.modelValue) {
          const isValid = dayjs(props.modelValue).isValid();
          if (isValid) {
            const date = dayjs(props.modelValue);
            const str1 = date.format(props.format);
            const month = date.month();
            const quarter = quarterConfig.find(
              (c) => c.endMonth >= month && c.startMonth <= month
            );
            if (quarter)
              return str1.replace("q", quarter == null ? void 0 : quarter.q).replace("Q", quarter == null ? void 0 : quarter.Q);
            return "";
          }
          return "";
        }
        return "";
      },
      set: () => {
      }
    });
    const onClickInput = () => {
      pickerVisible.value = true;
      const isValid = dayjs(props.modelValue).isValid();
      if (isValid)
        showYear.value = dayjs(props.modelValue).year();
    };
    const onClosePopoverOut = () => {
      pickerVisible.value = false;
    };
    const onClickInputClear = () => {
      emit("update:modelValue", null);
      emit("change", null, null);
    };
    const onClickPrevYear = () => {
      showYear.value = showYear.value - 1;
    };
    const onClickNextYear = () => {
      showYear.value = showYear.value + 1;
    };
    const onClickQuarter = (item) => {
      const date = dayjs().set("year", item.year).set("month", item.startMonth).startOf("month").toDate();
      pickerVisible.value = false;
      emit("update:modelValue", date);
      emit("change", date, transformQuarterInfoByDate(date));
    };
    const transformQuarterInfoByDate = (date) => {
      if (date) {
        const dayjsObj = dayjs(date);
        const isValid = dayjsObj.isValid();
        if (isValid) {
          const year = dayjsObj.year();
          const month = dayjsObj.month();
          const quarter = quarterConfig.find(
            (c) => c.endMonth >= month && c.startMonth <= month
          );
          if (quarter) {
            const text1 = dayjs(date).format(props.valueFormat);
            const text = text1.replace("q", quarter.q).replace("Q", quarter.Q);
            const key = `${year}-${quarter.Q}`;
            return __spreadProps(__spreadValues({
              year
            }, quarter), {
              text,
              key
            });
          }
          return null;
        }
        return null;
      }
      return null;
    };
    __expose({
      transformQuarterInfoByDate
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopover), {
        visible: pickerVisible.value,
        trigger: "click",
        "popper-class": [__props.popperClass],
        width: __props.popperWidth,
        style: normalizeStyle(__props.popperStyle)
      }, {
        reference: withCtx(() => [
          createVNode(unref(ElInput), {
            modelValue: inputValue.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
            class: normalizeClass(["fpi-quarter-picker-input", [__props.inputClass]]),
            "prefix-icon": unref(Calendar),
            clearable: __props.clearable,
            placeholder: __props.placeholder,
            style: normalizeStyle(__props.inputStyle),
            size: __props.size,
            onClick: onClickInput,
            onClear: onClickInputClear
          }, null, 8, ["modelValue", "class", "prefix-icon", "clearable", "placeholder", "style", "size"])
        ]),
        default: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode("span", {
                class: "fpi-quarter-picker-popover-content-header-btn",
                onClick: onClickPrevYear
              }, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(DArrowLeft))
                  ]),
                  _: 1
                })
              ]),
              createElementVNode("span", _hoisted_3, toDisplayString(showYear.value), 1),
              createElementVNode("span", {
                class: "fpi-quarter-picker-popover-content-header-btn",
                onClick: onClickNextYear
              }, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(DArrowRight))
                  ]),
                  _: 1
                })
              ])
            ]),
            createElementVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(selectValueList.value, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.key,
                  class: "fpi-quarter-picker-popover-quarter-item",
                  onClick: ($event) => onClickQuarter(item)
                }, [
                  createElementVNode("span", {
                    class: normalizeClass({
                      "fpi-quarter-picker-popover-quarter-item-current": item.isCurrent,
                      "fpi-quarter-picker-popover-quarter-item-disabled": item.isDisabled,
                      "fpi-quarter-picker-popover-quarter-item-selected": selectValue.value === item.key
                    })
                  }, toDisplayString(item.text), 3)
                ], 8, _hoisted_5);
              }), 128))
            ])
          ])), [
            [unref(ClickOutside), onClosePopoverOut]
          ])
        ]),
        _: 1
      }, 8, ["visible", "popper-class", "width", "style"]);
    };
  }
}));
export {
  _sfc_main as default
};
