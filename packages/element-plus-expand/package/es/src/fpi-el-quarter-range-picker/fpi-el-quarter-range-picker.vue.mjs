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
import { defineComponent, shallowRef, computed, ref, openBlock, createBlock, unref, withCtx, createElementVNode, normalizeClass, normalizeStyle, createVNode, toDisplayString, withDirectives, createElementBlock, vShow, createCommentVNode, Fragment, renderList } from "vue";
import { ElPopover, ElInput, ElIcon, ClickOutside } from "element-plus";
import dayjs from "dayjs";
import { Calendar, CircleClose, DArrowLeft, DArrowRight } from "@element-plus/icons-vue";
const _hoisted_1 = { class: "quarter-popper-left" };
const _hoisted_2 = { class: "quarter-popper-header" };
const _hoisted_3 = { class: "quarter-popper-header-title" };
const _hoisted_4 = { class: "quarter-popper-cell-container" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "quarter-popper-right" };
const _hoisted_7 = { class: "quarter-popper-header" };
const _hoisted_8 = { class: "quarter-popper-header-title" };
const _hoisted_9 = { class: "quarter-popper-cell-container" };
const _hoisted_10 = ["onClick"];
const __default__ = {
  name: "FpiElQuarterRangePicker"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    showFormat: { default: "YYYY年第q季度" },
    modelValue: { default: () => [] },
    disabled: { type: Boolean, default: false },
    startPlaceholder: { default: "请选择开始季度" },
    endPlaceholder: { default: "请选择结束季度" },
    valueFormat: { default: "" },
    clearable: { type: Boolean, default: true },
    disabledDate: { type: Function, default: (val) => {
      return Number(`${val.year}${val.quarter}`) > Number(`${val.currentYear}${val.currentQuarter}`);
    } },
    popperClass: { default: "" },
    rangeSeparator: { default: "至" },
    inputWrapperClass: { default: "" },
    inputWrapperStyle: { default: () => ({}) },
    cellFormat: { default: "第q季度" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const clsfix = "fpi-el-quarter-range-picker";
    const quarterText = ["一", "二", "三", "四"];
    const formatDateToQuarter = function(date, format) {
      if (!date)
        return "";
      const quarter = Math.ceil((date.getMonth() + 1) / 3);
      let formatData = dayjs(date).format(format);
      formatData = formatData.replace(/Q/, `${quarter}`).replace(/q/, quarterText[quarter - 1]);
      return formatData;
    };
    const formatQuarterToText = (quarter) => {
      return props.cellFormat.replace(/Q/, `${quarter}`).replace(/q/, quarterText[quarter - 1]);
    };
    const formatDateToKey = (date) => {
      const year = dayjs(date).year();
      const quarter = Math.ceil((dayjs(date).month() + 1) / 3);
      return Number(`${year}${quarter}`);
    };
    const getQuarterStartDate = (year, quarter) => {
      const month = (quarter - 1) * 3 + 1;
      return dayjs(`${year}-${month}`).startOf("month").toDate();
    };
    const getQuarterEndDate = (year, quarter) => {
      const month = (quarter - 1) * 3 + 3;
      return dayjs(`${year}-${month}`).endOf("month").toDate();
    };
    const pickerVisible = shallowRef(false);
    const selectStart = shallowRef();
    const selectStartKey = computed(() => {
      if (selectStart.value)
        return formatDateToKey(selectStart.value);
      return 0;
    });
    const selectEnd = shallowRef();
    const selectEndKey = computed(() => {
      if (selectEnd.value)
        return formatDateToKey(selectEnd.value);
      return 0;
    });
    let tempDateInfo = null;
    const showBg = computed(() => {
      if (selectEndKey.value && selectStart.value)
        return true;
      return false;
    });
    const currentYear = dayjs().year();
    const currentQuarter = Math.ceil((dayjs().month() + 1) / 3);
    const currentQuarterKey = ref(Number(`${currentYear}${currentQuarter}`));
    const displayLeftValue = computed({
      get: () => {
        if (!props.modelValue)
          return null;
        if (!props.modelValue[0])
          return null;
        return formatDateToQuarter(dayjs(props.modelValue[0]).toDate(), props.showFormat);
      },
      set: () => {
      }
    });
    const displayRightValue = computed({
      get: () => {
        if (!props.modelValue)
          return null;
        if (!props.modelValue[1])
          return null;
        return formatDateToQuarter(dayjs(props.modelValue[1]).toDate(), props.showFormat);
      },
      set: () => {
      }
    });
    const inHover = shallowRef(false);
    const isShowClearBtn = computed(() => {
      return Boolean(displayRightValue.value) && Boolean(displayLeftValue.value) && (inHover.value || pickerVisible.value);
    });
    const popperLeftYear = shallowRef(null);
    const popperQuarterLeftList = computed(() => {
      if (popperLeftYear.value) {
        return [1, 2, 3, 4].map((item) => {
          const disabled = props.disabledDate({
            currentYear,
            currentQuarter,
            quarter: item,
            year: popperLeftYear.value
          });
          return {
            text: formatQuarterToText(item),
            year: popperLeftYear.value,
            quarter: item,
            key: Number(`${popperLeftYear.value}${item}`),
            quarterStart: getQuarterStartDate(popperLeftYear.value, item),
            quarterEnd: getQuarterEndDate(popperLeftYear.value, item),
            disabled
          };
        });
      }
      return [];
    });
    const popperRightYear = shallowRef(null);
    const popperQuarterRightList = computed(() => {
      if (popperRightYear.value) {
        return [1, 2, 3, 4].map((item) => {
          const disabled = props.disabledDate({
            currentYear,
            currentQuarter,
            quarter: item,
            year: popperRightYear.value
          });
          return {
            text: formatQuarterToText(item),
            year: popperRightYear.value,
            quarter: item,
            key: Number(`${popperRightYear.value}${item}`),
            quarterStart: getQuarterStartDate(popperRightYear.value, item),
            quarterEnd: getQuarterEndDate(popperRightYear.value, item),
            disabled
          };
        });
      }
      return [];
    });
    const handleClickPopperLeftYear = () => {
      if (popperLeftYear.value && popperRightYear.value) {
        popperLeftYear.value--;
        popperRightYear.value--;
      }
    };
    const handleClickPopperRightYear = () => {
      if (popperLeftYear.value && popperRightYear.value) {
        popperLeftYear.value++;
        popperRightYear.value++;
      }
    };
    const handleOpenPopper = () => {
      tempDateInfo = null;
      pickerVisible.value = true;
      if (props.modelValue[0])
        selectStart.value = dayjs(props.modelValue[0]).toDate();
      if (props.modelValue[1]) {
        selectEnd.value = dayjs(props.modelValue[1]).toDate();
        popperRightYear.value = dayjs(props.modelValue[1]).year();
      } else {
        popperRightYear.value = dayjs().year() + 1;
      }
      popperLeftYear.value = popperRightYear.value - 1;
    };
    const handleClickPopperOut = () => {
      pickerVisible.value = false;
      popperLeftYear.value = null;
      popperRightYear.value = null;
    };
    const handleClickTime = (item) => {
      if (item.disabled)
        return;
      if (selectStart.value && selectEnd.value || !selectStart.value && !selectEnd.value) {
        tempDateInfo = item;
        selectStart.value = item.quarterStart;
        selectEnd.value = null;
      } else if (selectStart.value && tempDateInfo) {
        if (item.key >= tempDateInfo.key) {
          selectEnd.value = item.quarterEnd;
        } else {
          selectEnd.value = tempDateInfo.quarterEnd;
          selectStart.value = item.quarterStart;
        }
        const date = [selectStart.value, selectEnd.value];
        emits("update:modelValue", date);
        setTimeout(() => {
          selectEnd.value = null;
          selectStart.value = null;
          pickerVisible.value = false;
        }, 300);
      }
    };
    const handleClearTime = () => {
      emits("update:modelValue", []);
      tempDateInfo = null;
      setTimeout(() => {
        selectStart.value = null;
        selectEnd.value = null;
        pickerVisible.value = false;
      });
    };
    __expose({
      // 获取季度数据
      getQuarterInfoByDate(dates) {
        if (dates && dates.length) {
          const startDate = dates[0];
          const endDate = dates[1];
          return {
            startYear: dayjs(startDate).year(),
            startQuarter: Math.ceil((dayjs(startDate).month() + 1) / 3),
            endYear: dayjs(endDate).year(),
            endQuarter: Math.ceil((dayjs(endDate).month() + 1) / 3)
          };
        }
        return null;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElPopover), {
        visible: pickerVisible.value,
        trigger: "click",
        width: "500"
      }, {
        reference: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass({
              [`${clsfix}-input-container`]: true,
              [_ctx.inputWrapperClass]: Boolean(_ctx.inputWrapperClass),
              [`${clsfix}-input-is-focus`]: pickerVisible.value,
              [`${clsfix}-disabled-input-conatiner`]: _ctx.disabled
            }),
            style: normalizeStyle(__spreadValues({}, _ctx.inputWrapperStyle)),
            onMouseenter: _cache[2] || (_cache[2] = ($event) => !_ctx.disabled && (inHover.value = true)),
            onMouseleave: _cache[3] || (_cache[3] = ($event) => !_ctx.disabled && (inHover.value = false))
          }, [
            createVNode(unref(ElInput), {
              modelValue: displayLeftValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => displayLeftValue.value = $event),
              class: normalizeClass(`${clsfix}-first-input`),
              "prefix-icon": unref(Calendar),
              placeholder: _ctx.startPlaceholder,
              clearable: false,
              readonly: true,
              disabled: _ctx.disabled,
              onClick: handleOpenPopper
            }, null, 8, ["modelValue", "class", "prefix-icon", "placeholder", "disabled"]),
            createElementVNode("span", {
              class: normalizeClass(`${clsfix}-range-separator`)
            }, toDisplayString(_ctx.rangeSeparator), 3),
            createVNode(unref(ElInput), {
              modelValue: displayRightValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => displayRightValue.value = $event),
              class: normalizeClass(`${clsfix}-two-input`),
              clearable: false,
              readonly: true,
              placeholder: _ctx.endPlaceholder,
              disabled: _ctx.disabled,
              onClick: handleOpenPopper
            }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
            _ctx.clearable ? withDirectives((openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(`${clsfix}-clear`)
            }, [
              createVNode(unref(ElIcon), {
                style: { "margin-right": "8px" },
                onClick: handleClearTime
              }, {
                default: withCtx(() => [
                  createVNode(unref(CircleClose))
                ]),
                _: 1
              })
            ], 2)), [
              [vShow, isShowClearBtn.value]
            ]) : createCommentVNode("", true)
          ], 38)
        ]),
        default: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            class: normalizeClass(["quarter-popper", { [_ctx.popperClass]: Boolean(_ctx.popperClass) }])
          }, [
            createElementVNode("div", _hoisted_1, [
              createElementVNode("div", _hoisted_2, [
                createVNode(unref(ElIcon), {
                  style: { "position": "absolute", "top": "2px", "left": "0", "cursor": "pointer" },
                  onClick: handleClickPopperLeftYear
                }, {
                  default: withCtx(() => [
                    createVNode(unref(DArrowLeft))
                  ]),
                  _: 1
                }),
                createElementVNode("span", _hoisted_3, toDisplayString(popperLeftYear.value), 1)
              ]),
              createElementVNode("div", _hoisted_4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(popperQuarterLeftList.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.key,
                    class: normalizeClass(["quarter-popper-cell", {
                      "current-quarter": currentQuarterKey.value === item.key,
                      "select-bg": showBg.value && item.key >= selectStartKey.value && item.key <= selectEndKey.value,
                      "select-bg-end": showBg.value && item.key === selectEndKey.value,
                      "select-bg-start": showBg.value && item.key === selectStartKey.value,
                      "disabled": item.disabled
                    }]),
                    onClick: ($event) => handleClickTime(item)
                  }, [
                    createElementVNode("span", {
                      class: normalizeClass([{
                        select: selectStartKey.value === item.key || selectEndKey.value === item.key
                      }, "quarter-popper-cell-text"])
                    }, toDisplayString(item.text), 3)
                  ], 10, _hoisted_5);
                }), 128))
              ])
            ]),
            createElementVNode("div", _hoisted_6, [
              createElementVNode("div", _hoisted_7, [
                createElementVNode("span", _hoisted_8, toDisplayString(popperRightYear.value), 1),
                createVNode(unref(ElIcon), {
                  style: { "position": "absolute", "top": "2px", "right": "0", "cursor": "pointer" },
                  onClick: handleClickPopperRightYear
                }, {
                  default: withCtx(() => [
                    createVNode(unref(DArrowRight))
                  ]),
                  _: 1
                })
              ]),
              createElementVNode("div", _hoisted_9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(popperQuarterRightList.value, (item) => {
                  return openBlock(), createElementBlock("div", {
                    key: item.key,
                    class: normalizeClass(["quarter-popper-cell", {
                      "current-quarter": currentQuarterKey.value === item.key,
                      "select-bg": showBg.value && item.key >= selectStartKey.value && item.key <= selectEndKey.value,
                      "select-bg-end": showBg.value && item.key === selectEndKey.value,
                      "select-bg-start": showBg.value && item.key === selectStartKey.value,
                      "disabled": item.disabled
                    }]),
                    onClick: ($event) => handleClickTime(item)
                  }, [
                    createElementVNode("span", {
                      class: normalizeClass(["quarter-popper-cell-text", {
                        select: selectStartKey.value === item.key || selectEndKey.value === item.key
                      }])
                    }, toDisplayString(item.text), 3)
                  ], 10, _hoisted_10);
                }), 128))
              ])
            ])
          ], 2)), [
            [unref(ClickOutside), handleClickPopperOut]
          ])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
}));
export {
  _sfc_main as default
};
