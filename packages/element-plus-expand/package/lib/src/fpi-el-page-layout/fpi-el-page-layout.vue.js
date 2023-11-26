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
const iconsVue = require("@element-plus/icons-vue");
const elementPlus = require("element-plus");
const _hoisted_1 = { class: "header-text" };
const _hoisted_2 = ["onMousedown"];
const __default__ = {
  name: "FpiElPageLayout"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    title: { default: "test" },
    showBack: { type: Boolean, default: false },
    showTabs: { type: Boolean, default: false },
    tab: {},
    tabs: { default: () => [] },
    columns: { default: () => [] }
  },
  emits: ["update:tab", "back"],
  setup(__props, { emit }) {
    const props = __props;
    const clsRoot = "fpi-el-page-layout";
    const hasColumns = vue.computed(() => props.columns && props.columns.length);
    const innerTab = vue.computed({
      get() {
        return props.tab;
      },
      set(v) {
        emit("update:tab", v);
      }
    });
    const onMouseDownBorder = (e, item) => {
      if (item.disableDrag) {
        return;
      }
      const startX = e.clientX;
      const ele = e.target.offsetParent;
      const eleInfo = ele.getBoundingClientRect();
      const mouseMoveHander = (e2) => {
        const endX = e2.clientX;
        const distance = endX - startX;
        let width = eleInfo.width + distance;
        if (item.maxWidth && width > item.maxWidth) {
          width = item.maxWidth;
        }
        if (item.minWidth && width < item.minWidth) {
          width = item.minWidth;
        }
        ele.style.width = `${width}px`;
      };
      document.addEventListener("mousemove", mouseMoveHander);
      const mouseUpHander = (e2) => {
        document.removeEventListener("mousemove", mouseMoveHander);
        document.removeEventListener("mouseup", mouseUpHander);
      };
      document.addEventListener("mouseup", mouseUpHander);
    };
    const onBack = () => emit("back");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass(`${clsRoot}-container`)
      }, [
        vue.createElementVNode("header", {
          class: vue.normalizeClass(`${clsRoot}-header`)
        }, [
          vue.createElementVNode("div", {
            class: vue.normalizeClass(`${clsRoot}-header-left`)
          }, [
            vue.createElementVNode("span", _hoisted_1, vue.toDisplayString(_ctx.title), 1),
            _ctx.showBack ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), {
              key: 0,
              class: "reset-el-btn",
              style: { "margin-right": "10px" },
              icon: vue.unref(iconsVue.ArrowLeft),
              onClick: onBack
            }, {
              default: vue.withCtx(() => [
                vue.createTextVNode(" 返回 ")
              ]),
              _: 1
            }, 8, ["icon"])) : vue.createCommentVNode("", true),
            _ctx.showTabs ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElRadioGroup), {
              key: 1,
              modelValue: innerTab.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => innerTab.value = $event),
              class: "reset-el-radio",
              style: { "margin-right": "10px" }
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.tabs, (item) => {
                  return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElRadioButton), {
                    key: item.code,
                    label: item.code
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])) : vue.createCommentVNode("", true),
            vue.renderSlot(_ctx.$slots, "header-left")
          ], 2),
          vue.createElementVNode("div", {
            class: vue.normalizeClass(`${clsRoot}-header-right`)
          }, [
            vue.renderSlot(_ctx.$slots, "header-right")
          ], 2)
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass(`${clsRoot}-main`)
        }, [
          hasColumns.value ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            class: vue.normalizeClass(`${clsRoot}-main-columns`)
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.columns, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                key: item.name,
                class: vue.normalizeClass({
                  [`${clsRoot}-column-item`]: true,
                  [`is-finally`]: index === _ctx.columns.length - 1,
                  [`${item.class}`]: true
                }),
                style: vue.normalizeStyle(__spreadProps(__spreadValues({}, item.style), {
                  width: index < _ctx.columns.length - 1 ? item.defaultWidth ? `${item.defaultWidth}px` : "200px" : void 0
                }))
              }, [
                vue.renderSlot(_ctx.$slots, item.slotName),
                index < _ctx.columns.length - 1 && !item.hideBorder ? (vue.openBlock(), vue.createElementBlock("div", {
                  key: 0,
                  class: vue.normalizeClass(["drag-border", {
                    "disable-drag": item.disableDrag
                  }]),
                  onMousedown: ($event) => onMouseDownBorder($event, item)
                }, null, 42, _hoisted_2)) : vue.createCommentVNode("", true)
              ], 6);
            }), 128))
          ], 2)) : (vue.openBlock(), vue.createElementBlock("div", {
            key: 1,
            class: vue.normalizeClass(`${clsRoot}-main-default`)
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ], 2))
        ], 2)
      ], 2);
    };
  }
}));
exports.default = _sfc_main;
