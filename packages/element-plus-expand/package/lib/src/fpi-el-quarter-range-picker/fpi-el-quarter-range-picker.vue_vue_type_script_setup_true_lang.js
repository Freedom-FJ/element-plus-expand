"use strict";
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
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const dayjs = require("dayjs");
const iconsVue = require("@element-plus/icons-vue");
const _interopDefaultLegacy = (e) => e && typeof e === "object" && "default" in e ? e : { default: e };
const dayjs__default = /* @__PURE__ */ _interopDefaultLegacy(dayjs);
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
const _sfc_main = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    showFormat: { default: "YYYY\u5E74\u7B2Cq\u5B63\u5EA6" },
    modelValue: { default: () => [] },
    disabled: { type: Boolean, default: false },
    startPlaceholder: { default: "\u8BF7\u9009\u62E9\u5F00\u59CB\u5B63\u5EA6" },
    endPlaceholder: { default: "\u8BF7\u9009\u62E9\u7ED3\u675F\u5B63\u5EA6" },
    valueFormat: { default: "" },
    clearable: { type: Boolean, default: true },
    disabledDate: { type: Function, default: (val) => {
      return Number(`${val.year}${val.quarter}`) > Number(`${val.currentYear}${val.currentQuarter}`);
    } },
    popperClass: { default: "" },
    rangeSeparator: { default: "\u81F3" },
    inputWrapperClass: { default: "" },
    inputWrapperStyle: { default: () => ({}) },
    cellFormat: { default: "\u7B2Cq\u5B63\u5EA6" }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const clsfix = "fpi-el-quarter-range-picker";
    const quarterText = ["\u4E00", "\u4E8C", "\u4E09", "\u56DB"];
    const formatDateToQuarter = function(date, format) {
      if (!date)
        return "";
      const quarter = Math.ceil((date.getMonth() + 1) / 3);
      let formatData = dayjs__default.default(date).format(format);
      formatData = formatData.replace(/Q/, `${quarter}`).replace(/q/, quarterText[quarter - 1]);
      return formatData;
    };
    const formatQuarterToText = (quarter) => {
      return props.cellFormat.replace(/Q/, `${quarter}`).replace(/q/, quarterText[quarter - 1]);
    };
    const formatDateToKey = (date) => {
      const year = dayjs__default.default(date).year();
      const quarter = Math.ceil((dayjs__default.default(date).month() + 1) / 3);
      return Number(`${year}${quarter}`);
    };
    const getQuarterStartDate = (year, quarter) => {
      const month = (quarter - 1) * 3 + 1;
      return dayjs__default.default(`${year}-${month}`).startOf("month").toDate();
    };
    const getQuarterEndDate = (year, quarter) => {
      const month = (quarter - 1) * 3 + 3;
      return dayjs__default.default(`${year}-${month}`).endOf("month").toDate();
    };
    const pickerVisible = vue.shallowRef(false);
    const selectStart = vue.shallowRef();
    const selectStartKey = vue.computed(() => {
      if (selectStart.value)
        return formatDateToKey(selectStart.value);
      return 0;
    });
    const selectEnd = vue.shallowRef();
    const selectEndKey = vue.computed(() => {
      if (selectEnd.value)
        return formatDateToKey(selectEnd.value);
      return 0;
    });
    let tempDateInfo = null;
    const showBg = vue.computed(() => {
      if (selectEndKey.value && selectStart.value)
        return true;
      return false;
    });
    const currentYear = dayjs__default.default().year();
    const currentQuarter = Math.ceil((dayjs__default.default().month() + 1) / 3);
    const currentQuarterKey = vue.ref(Number(`${currentYear}${currentQuarter}`));
    const displayLeftValue = vue.computed({
      get: () => {
        if (!props.modelValue)
          return null;
        if (!props.modelValue[0])
          return null;
        return formatDateToQuarter(dayjs__default.default(props.modelValue[0]).toDate(), props.showFormat);
      },
      set: () => {
      }
    });
    const displayRightValue = vue.computed({
      get: () => {
        if (!props.modelValue)
          return null;
        if (!props.modelValue[1])
          return null;
        return formatDateToQuarter(dayjs__default.default(props.modelValue[1]).toDate(), props.showFormat);
      },
      set: () => {
      }
    });
    const inHover = vue.shallowRef(false);
    const isShowClearBtn = vue.computed(() => {
      return Boolean(displayRightValue.value) && Boolean(displayLeftValue.value) && (inHover.value || pickerVisible.value);
    });
    const popperLeftYear = vue.shallowRef(null);
    const popperQuarterLeftList = vue.computed(() => {
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
    const popperRightYear = vue.shallowRef(null);
    const popperQuarterRightList = vue.computed(() => {
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
        selectStart.value = dayjs__default.default(props.modelValue[0]).toDate();
      if (props.modelValue[1]) {
        selectEnd.value = dayjs__default.default(props.modelValue[1]).toDate();
        popperRightYear.value = dayjs__default.default(props.modelValue[1]).year();
      } else {
        popperRightYear.value = dayjs__default.default().year() + 1;
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
      getQuarterInfoByDate(dates) {
        if (dates && dates.length) {
          const startDate = dates[0];
          const endDate = dates[1];
          return {
            startYear: dayjs__default.default(startDate).year(),
            startQuarter: Math.ceil((dayjs__default.default(startDate).month() + 1) / 3),
            endYear: dayjs__default.default(endDate).year(),
            endQuarter: Math.ceil((dayjs__default.default(endDate).month() + 1) / 3)
          };
        }
        return null;
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElPopover), {
        visible: pickerVisible.value,
        trigger: "click",
        width: "500"
      }, {
        reference: vue.withCtx(() => [
          vue.createElementVNode("div", {
            class: vue.normalizeClass({
              [`${clsfix}-input-container`]: true,
              [_ctx.inputWrapperClass]: Boolean(_ctx.inputWrapperClass),
              [`${clsfix}-input-is-focus`]: pickerVisible.value,
              [`${clsfix}-disabled-input-conatiner`]: _ctx.disabled
            }),
            style: vue.normalizeStyle(__spreadValues({}, _ctx.inputWrapperStyle)),
            onMouseenter: _cache[2] || (_cache[2] = ($event) => !_ctx.disabled && (inHover.value = true)),
            onMouseleave: _cache[3] || (_cache[3] = ($event) => !_ctx.disabled && (inHover.value = false))
          }, [
            vue.createVNode(vue.unref(elementPlus.ElInput), {
              modelValue: displayLeftValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => displayLeftValue.value = $event),
              class: vue.normalizeClass(`${clsfix}-first-input`),
              "prefix-icon": vue.unref(iconsVue.Calendar),
              placeholder: _ctx.startPlaceholder,
              clearable: false,
              readonly: true,
              disabled: _ctx.disabled,
              onClick: handleOpenPopper
            }, null, 8, ["modelValue", "class", "prefix-icon", "placeholder", "disabled"]),
            vue.createElementVNode("span", {
              class: vue.normalizeClass(`${clsfix}-range-separator`)
            }, vue.toDisplayString(_ctx.rangeSeparator), 3),
            vue.createVNode(vue.unref(elementPlus.ElInput), {
              modelValue: displayRightValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => displayRightValue.value = $event),
              class: vue.normalizeClass(`${clsfix}-two-input`),
              clearable: false,
              readonly: true,
              placeholder: _ctx.endPlaceholder,
              disabled: _ctx.disabled,
              onClick: handleOpenPopper
            }, null, 8, ["modelValue", "class", "placeholder", "disabled"]),
            _ctx.clearable ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("span", {
              key: 0,
              class: vue.normalizeClass(`${clsfix}-clear`)
            }, [
              vue.createVNode(vue.unref(elementPlus.ElIcon), {
                style: { "margin-right": "8px" },
                onClick: handleClearTime
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(vue.unref(iconsVue.CircleClose))
                ]),
                _: 1
              })
            ], 2)), [
              [vue.vShow, isShowClearBtn.value]
            ]) : vue.createCommentVNode("", true)
          ], 38)
        ]),
        default: vue.withCtx(() => [
          vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
            class: vue.normalizeClass(["quarter-popper", { [_ctx.popperClass]: Boolean(_ctx.popperClass) }])
          }, [
            vue.createElementVNode("div", _hoisted_1, [
              vue.createElementVNode("div", _hoisted_2, [
                vue.createVNode(vue.unref(elementPlus.ElIcon), {
                  style: { "position": "absolute", "top": "2px", "left": "0", "cursor": "pointer" },
                  onClick: handleClickPopperLeftYear
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(iconsVue.DArrowLeft))
                  ]),
                  _: 1
                }),
                vue.createElementVNode("span", _hoisted_3, vue.toDisplayString(popperLeftYear.value), 1)
              ]),
              vue.createElementVNode("div", _hoisted_4, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(popperQuarterLeftList.value, (item) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    key: item.key,
                    class: vue.normalizeClass(["quarter-popper-cell", {
                      "current-quarter": currentQuarterKey.value === item.key,
                      "select-bg": showBg.value && item.key >= selectStartKey.value && item.key <= selectEndKey.value,
                      "select-bg-end": showBg.value && item.key === selectEndKey.value,
                      "select-bg-start": showBg.value && item.key === selectStartKey.value,
                      "disabled": item.disabled
                    }]),
                    onClick: ($event) => handleClickTime(item)
                  }, [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass([{
                        select: selectStartKey.value === item.key || selectEndKey.value === item.key
                      }, "quarter-popper-cell-text"])
                    }, vue.toDisplayString(item.text), 3)
                  ], 10, _hoisted_5);
                }), 128))
              ])
            ]),
            vue.createElementVNode("div", _hoisted_6, [
              vue.createElementVNode("div", _hoisted_7, [
                vue.createElementVNode("span", _hoisted_8, vue.toDisplayString(popperRightYear.value), 1),
                vue.createVNode(vue.unref(elementPlus.ElIcon), {
                  style: { "position": "absolute", "top": "2px", "right": "0", "cursor": "pointer" },
                  onClick: handleClickPopperRightYear
                }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(vue.unref(iconsVue.DArrowRight))
                  ]),
                  _: 1
                })
              ]),
              vue.createElementVNode("div", _hoisted_9, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(popperQuarterRightList.value, (item) => {
                  return vue.openBlock(), vue.createElementBlock("div", {
                    key: item.key,
                    class: vue.normalizeClass(["quarter-popper-cell", {
                      "current-quarter": currentQuarterKey.value === item.key,
                      "select-bg": showBg.value && item.key >= selectStartKey.value && item.key <= selectEndKey.value,
                      "select-bg-end": showBg.value && item.key === selectEndKey.value,
                      "select-bg-start": showBg.value && item.key === selectStartKey.value,
                      "disabled": item.disabled
                    }]),
                    onClick: ($event) => handleClickTime(item)
                  }, [
                    vue.createElementVNode("span", {
                      class: vue.normalizeClass(["quarter-popper-cell-text", {
                        select: selectStartKey.value === item.key || selectEndKey.value === item.key
                      }])
                    }, vue.toDisplayString(item.text), 3)
                  ], 10, _hoisted_10);
                }), 128))
              ])
            ])
          ], 2)), [
            [vue.unref(elementPlus.ClickOutside), handleClickPopperOut]
          ])
        ]),
        _: 1
      }, 8, ["visible"]);
    };
  }
}));
exports.default = _sfc_main;
