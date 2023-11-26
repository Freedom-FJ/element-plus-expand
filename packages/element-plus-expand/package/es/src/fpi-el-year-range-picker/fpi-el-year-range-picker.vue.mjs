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
import { defineComponent, shallowRef, computed, resolveComponent, openBlock, createBlock, withCtx, createElementVNode, normalizeClass, normalizeStyle, createVNode, unref, toDisplayString, withDirectives, createElementBlock, vShow, createCommentVNode, Fragment, renderList } from "vue";
import dayjs from "dayjs";
import { ClickOutside } from "element-plus";
import { Calendar, CircleClose, DArrowLeft, DArrowRight } from "@element-plus/icons-vue";
const _hoisted_1 = { class: "year-input-icon" };
const _hoisted_2 = { class: "year-input-range" };
const _hoisted_3 = {
  key: 0,
  class: "year-input-clear"
};
const _hoisted_4 = { class: "year-popper-header" };
const _hoisted_5 = { class: "year-popper-header-title" };
const _hoisted_6 = { class: "year-popper-cell-container" };
const _hoisted_7 = ["onClick"];
const __default__ = {
  name: "FpiElYearRangePicker"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    showFormat: { default: "YYYY年" },
    modelValue: { default: () => [] },
    disabled: { type: Boolean, default: false },
    startPlaceholder: { default: "请选择开始年度" },
    endPlaceholder: { default: "请选择结束年度" },
    valueFormat: { default: "" },
    clearable: { type: Boolean, default: true },
    disabledDate: { type: Function, default: (val) => val.year > val.currentYear },
    popperClass: { default: "" },
    rangeSeparator: { default: "至" },
    inputWrapperClass: { default: "" },
    inputWrapperStyle: { default: () => ({}) },
    cellFormat: { default: "YYYY" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const showYearNum = 12;
    const pickerVisible = shallowRef(false);
    const selectStart = shallowRef();
    const selectStartKey = computed(() => {
      if (selectStart.value) {
        return dayjs(selectStart.value).year();
      }
      return 0;
    });
    const selectEnd = shallowRef();
    const selectEndKey = computed(() => {
      if (selectEnd.value) {
        return dayjs(selectEnd.value).year();
      }
      return 0;
    });
    let tempDateInfo = null;
    const showBg = computed(() => {
      if (selectEndKey.value && selectStart.value) {
        return true;
      }
      return false;
    });
    const currentYear = dayjs().year();
    const displayLeftValue = computed({
      get: () => {
        if (!props.modelValue) {
          return null;
        }
        if (!props.modelValue[0]) {
          return null;
        }
        return dayjs(props.modelValue[0]).format(props.showFormat);
      },
      set: () => {
      }
    });
    const displayRightValue = computed({
      get: () => {
        if (!props.modelValue) {
          return null;
        }
        if (!props.modelValue[1]) {
          return null;
        }
        return dayjs(props.modelValue[1]).format(props.showFormat);
      },
      set: () => {
      }
    });
    const inHover = shallowRef(false);
    const isShowClearBtn = computed(() => {
      return Boolean(displayRightValue.value) && Boolean(displayLeftValue.value) && inHover.value;
    });
    const popperEndYear = shallowRef(currentYear);
    const showPopperTitle = computed(() => {
      return `${popperEndYear.value - showYearNum + 1} ~ ${popperEndYear.value}`;
    });
    const popperYearList = computed(() => {
      const list = [];
      if (popperEndYear.value) {
        for (let index = showYearNum - 1; index >= 0; index--) {
          const year = popperEndYear.value - index;
          const disabled = props.disabledDate({
            currentYear,
            year
          });
          list.push({
            text: dayjs(`${year}`).format(props.cellFormat),
            year,
            yearStart: dayjs(`${year}`).startOf("year").toDate(),
            yearEnd: dayjs(`${year}`).endOf("year").toDate(),
            disabled
          });
        }
      }
      return list;
    });
    const handleClickPopperLeftYear = () => {
      popperEndYear.value = popperEndYear.value - showYearNum;
    };
    const handleClickPopperRightYear = () => {
      popperEndYear.value = popperEndYear.value + showYearNum;
    };
    const handleOpenPopper = () => {
      tempDateInfo = null;
      pickerVisible.value = true;
      if (props.modelValue[0]) {
        selectStart.value = dayjs(props.modelValue[0]).toDate();
      }
      if (props.modelValue[1]) {
        selectEnd.value = dayjs(props.modelValue[1]).toDate();
        popperEndYear.value = dayjs(props.modelValue[1]).year();
      } else {
        popperEndYear.value = currentYear;
      }
    };
    const handleClickPopperOut = () => {
      pickerVisible.value = false;
    };
    const handleClickTime = (item) => {
      if (item.disabled) {
        return;
      }
      if (selectStart.value && selectEnd.value || !selectStart.value && !selectEnd.value) {
        tempDateInfo = item;
        selectStart.value = item.yearStart;
        selectEnd.value = null;
      } else if (selectStart.value && tempDateInfo) {
        if (item.year >= tempDateInfo.year) {
          selectEnd.value = item.yearEnd;
        } else {
          selectEnd.value = tempDateInfo.yearEnd;
          selectStart.value = item.yearStart;
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
    return (_ctx, _cache) => {
      const _component_el_icon = resolveComponent("el-icon");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_popover = resolveComponent("el-popover");
      return openBlock(), createBlock(_component_el_popover, {
        visible: pickerVisible.value,
        trigger: "click",
        width: "400"
      }, {
        reference: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(["fpi-el-year-range-picker", {
              [_ctx.inputWrapperClass]: Boolean(_ctx.inputWrapperClass),
              "is-focus": pickerVisible.value
            }]),
            style: normalizeStyle(__spreadValues({}, _ctx.inputWrapperStyle)),
            onMouseenter: _cache[2] || (_cache[2] = ($event) => inHover.value = true),
            onMouseleave: _cache[3] || (_cache[3] = ($event) => inHover.value = false)
          }, [
            createElementVNode("span", _hoisted_1, [
              createVNode(_component_el_icon, null, {
                default: withCtx(() => [
                  createVNode(unref(Calendar))
                ]),
                _: 1
              })
            ]),
            createVNode(_component_el_input, {
              modelValue: displayLeftValue.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => displayLeftValue.value = $event),
              placeholder: _ctx.startPlaceholder,
              disabled: _ctx.disabled,
              onClick: handleOpenPopper
            }, null, 8, ["modelValue", "placeholder", "disabled"]),
            createElementVNode("span", _hoisted_2, toDisplayString(_ctx.rangeSeparator), 1),
            createVNode(_component_el_input, {
              modelValue: displayRightValue.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => displayRightValue.value = $event),
              placeholder: _ctx.endPlaceholder,
              disabled: _ctx.disabled,
              onClick: handleOpenPopper
            }, null, 8, ["modelValue", "placeholder", "disabled"]),
            _ctx.clearable ? withDirectives((openBlock(), createElementBlock("span", _hoisted_3, [
              createVNode(_component_el_icon, {
                style: { "margin-right": "8px" },
                onClick: handleClearTime
              }, {
                default: withCtx(() => [
                  createVNode(unref(CircleClose))
                ]),
                _: 1
              })
            ], 512)), [
              [vShow, isShowClearBtn.value]
            ]) : createCommentVNode("", true)
          ], 38)
        ]),
        default: withCtx(() => [
          withDirectives((openBlock(), createElementBlock("div", {
            class: normalizeClass(["fpi-el-year-range-popper", { [_ctx.popperClass]: Boolean(_ctx.popperClass) }])
          }, [
            createElementVNode("div", _hoisted_4, [
              createVNode(_component_el_icon, {
                style: { "position": "absolute", "top": "2px", "left": "0", "cursor": "pointer" },
                onClick: handleClickPopperLeftYear
              }, {
                default: withCtx(() => [
                  createVNode(unref(DArrowLeft))
                ]),
                _: 1
              }),
              createElementVNode("span", _hoisted_5, toDisplayString(showPopperTitle.value), 1),
              createVNode(_component_el_icon, {
                style: { "position": "absolute", "top": "2px", "right": "0", "cursor": "pointer" },
                onClick: handleClickPopperRightYear
              }, {
                default: withCtx(() => [
                  createVNode(unref(DArrowRight))
                ]),
                _: 1
              })
            ]),
            createElementVNode("div", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(popperYearList.value, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.year,
                  class: normalizeClass(["year-popper-cell", {
                    "current-year": unref(currentYear) === item.year,
                    "select-bg": showBg.value && item.year >= selectStartKey.value && item.year <= selectEndKey.value,
                    "select-bg-end": showBg.value && item.year === selectEndKey.value,
                    "select-bg-start": showBg.value && item.year === selectStartKey.value,
                    "disabled": item.disabled
                  }]),
                  onClick: ($event) => handleClickTime(item)
                }, [
                  createElementVNode("span", {
                    class: normalizeClass([{
                      select: selectStartKey.value === item.year || selectEndKey.value === item.year
                    }, "year-popper-cell-text"])
                  }, toDisplayString(item.text), 3)
                ], 10, _hoisted_7);
              }), 128))
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
