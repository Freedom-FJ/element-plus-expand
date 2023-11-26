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
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createBlock, unref, withCtx, createTextVNode, createCommentVNode, Fragment, renderList, renderSlot, normalizeStyle } from "vue";
import { ArrowLeft } from "@element-plus/icons-vue";
import { ElButton, ElRadioGroup, ElRadioButton } from "element-plus";
const _hoisted_1 = { class: "header-text" };
const _hoisted_2 = ["onMousedown"];
const __default__ = {
  name: "FpiElPageLayout"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
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
    const hasColumns = computed(() => props.columns && props.columns.length);
    const innerTab = computed({
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
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${clsRoot}-container`)
      }, [
        createElementVNode("header", {
          class: normalizeClass(`${clsRoot}-header`)
        }, [
          createElementVNode("div", {
            class: normalizeClass(`${clsRoot}-header-left`)
          }, [
            createElementVNode("span", _hoisted_1, toDisplayString(_ctx.title), 1),
            _ctx.showBack ? (openBlock(), createBlock(unref(ElButton), {
              key: 0,
              class: "reset-el-btn",
              style: { "margin-right": "10px" },
              icon: unref(ArrowLeft),
              onClick: onBack
            }, {
              default: withCtx(() => [
                createTextVNode(" 返回 ")
              ]),
              _: 1
            }, 8, ["icon"])) : createCommentVNode("", true),
            _ctx.showTabs ? (openBlock(), createBlock(unref(ElRadioGroup), {
              key: 1,
              modelValue: innerTab.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => innerTab.value = $event),
              class: "reset-el-radio",
              style: { "margin-right": "10px" }
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabs, (item) => {
                  return openBlock(), createBlock(unref(ElRadioButton), {
                    key: item.code,
                    label: item.code
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["label"]);
                }), 128))
              ]),
              _: 1
            }, 8, ["modelValue"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "header-left")
          ], 2),
          createElementVNode("div", {
            class: normalizeClass(`${clsRoot}-header-right`)
          }, [
            renderSlot(_ctx.$slots, "header-right")
          ], 2)
        ], 2),
        createElementVNode("div", {
          class: normalizeClass(`${clsRoot}-main`)
        }, [
          hasColumns.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(`${clsRoot}-main-columns`)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (item, index) => {
              return openBlock(), createElementBlock("div", {
                key: item.name,
                class: normalizeClass({
                  [`${clsRoot}-column-item`]: true,
                  [`is-finally`]: index === _ctx.columns.length - 1,
                  [`${item.class}`]: true
                }),
                style: normalizeStyle(__spreadProps(__spreadValues({}, item.style), {
                  width: index < _ctx.columns.length - 1 ? item.defaultWidth ? `${item.defaultWidth}px` : "200px" : void 0
                }))
              }, [
                renderSlot(_ctx.$slots, item.slotName),
                index < _ctx.columns.length - 1 && !item.hideBorder ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(["drag-border", {
                    "disable-drag": item.disableDrag
                  }]),
                  onMousedown: ($event) => onMouseDownBorder($event, item)
                }, null, 42, _hoisted_2)) : createCommentVNode("", true)
              ], 6);
            }), 128))
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(`${clsRoot}-main-default`)
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2))
        ], 2)
      ], 2);
    };
  }
}));
export {
  _sfc_main as default
};
