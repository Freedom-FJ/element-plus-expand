var __defProp = Object.defineProperty;
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
import { defineComponent, mergeDefaults, useAttrs, reactive, ref, computed, watch, nextTick, onMounted, onUnmounted, resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeClass, toDisplayString, createVNode, Transition, withCtx, withDirectives, Fragment, renderList, createBlock, createTextVNode, unref, mergeProps, renderSlot, vShow } from "vue";
import { Search } from "@element-plus/icons-vue";
import { ElCascaderPanel } from "element-plus";
import { defaultCascaderPropsData } from "./props.mjs";
const _hoisted_1 = { class: "fpi-el-cascader" };
const _hoisted_2 = { class: "text" };
const _hoisted_3 = ["id"];
const _hoisted_4 = { class: "el-cascader-flex-bw-c" };
const _hoisted_5 = { class: "cascader-popup-type" };
const _hoisted_6 = { class: "cascader-popup-search" };
const _hoisted_7 = { class: "cascader-panel" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "fpi-el-cascader-tab-select",
  props: mergeDefaults({
    textHolder: {},
    typeList: {},
    searchName: {},
    currentType: {},
    hasBackground: { type: Boolean },
    size: {},
    modelValue: {},
    options: {},
    props: {}
  }, defaultCascaderPropsData),
  emits: [
    "update:modelValue",
    "update:currentType",
    "handle-change-node",
    "handle-type-change",
    "handle-search-event",
    "handle-input-event",
    "expand-change",
    "expand-close",
    "panel-open",
    "panel-close"
  ],
  setup(__props, { expose: __expose, emit: $emit }) {
    const currProps = __props;
    const attrs = useAttrs();
    const cascaderObj = reactive({
      searchName: "",
      showPanel: false,
      insetType: currProps.currentType,
      staticRememberType: "",
      id: `fpi-cascader${Math.random()}`
    });
    const fpiCascaderRef = ref();
    const showOption = computed(() => {
      return !cascaderObj.searchName ? getCurrOption.value : getTargetNodeList(getCurrOption.value, cascaderObj.searchName);
    });
    const useModelValue = computed({
      get() {
        return currProps.modelValue;
      },
      set(val) {
        $emit("update:modelValue", val);
      }
    });
    const getCurrOption = computed(() => {
      var _a, _b;
      if (cascaderObj.insetType && Array.isArray(currProps.typeList)) {
        return (_b = (_a = currProps.typeList.find((item) => item.key === cascaderObj.insetType)) == null ? void 0 : _a.options) != null ? _b : currProps.options || [];
      }
      return currProps.options || [];
    });
    const getCurrOutOption = computed(() => {
      var _a, _b;
      if (cascaderObj.insetType && Array.isArray(currProps.typeList)) {
        return (_b = (_a = currProps.typeList.find((item) => item.key === currProps.currentType)) == null ? void 0 : _a.options) != null ? _b : currProps.options || [];
      }
      return currProps.options || [];
    });
    watch(() => cascaderObj.showPanel, (val) => {
      if (val) {
        $emit("panel-open");
        cascaderObj.insetType = currProps.currentType;
      } else {
        $emit("panel-close");
        nextTick(() => {
          cascaderObj.insetType = currProps.currentType;
        });
      }
    });
    watch(() => currProps.currentType, (val) => {
      cascaderObj.insetType = val;
    });
    watch([() => currProps.options, () => currProps.typeList], () => cascaderObj.searchName = "");
    const showComTextHolder = computed(() => {
      var _a, _b, _c;
      if (currProps.textHolder)
        return currProps.textHolder;
      const getCurrNode = getDeepTreeCurrNode(useModelValue.value, ((_a = currProps.props) == null ? void 0 : _a.value) || "value", getCurrOutOption.value);
      return `${(_b = currProps.typeList.find((item) => item.key === currProps.currentType)) == null ? void 0 : _b.label}：${getCurrNode ? getCurrNode[((_c = currProps.props) == null ? void 0 : _c.label) || "label"] : ""}`;
    });
    const changeNode = () => {
      if (cascaderObj.insetType !== currProps.currentType)
        $emit("update:currentType", cascaderObj.insetType);
      const curNodeInfo = fpiCascaderRef.value.getCheckedNodes()[0];
      $emit("handle-change-node", __spreadValues({}, curNodeInfo));
      cascaderObj.showPanel = !cascaderObj.showPanel;
    };
    let listener;
    onMounted(() => {
      listener = document.addEventListener("mouseup", (e) => {
        const pop = document.getElementById(cascaderObj.id);
        if (cascaderObj.showPanel && pop) {
          if (!pop.contains(e.target)) {
            setTimeout(() => {
              cascaderObj.showPanel = false;
              typeChange(cascaderObj.staticRememberType);
            });
          }
        }
      });
    });
    onUnmounted(() => {
      listener && listener.removeEventListener();
    });
    const getDeepTreeCurrNode = (value, key, option = []) => {
      var _a;
      if (!value)
        return;
      let returnNode;
      for (const item of option) {
        if (item[key] === value) {
          returnNode = item;
        }
        const children = item[((_a = currProps.props) == null ? void 0 : _a.children) || "children"];
        if (Array.isArray(children) && !returnNode) {
          returnNode = getDeepTreeCurrNode(value, key, children);
        }
      }
      return returnNode;
    };
    const getTargetNodeList = (list, name) => {
      if (!list)
        return;
      const result = [];
      const getTargetList = (arr, name2) => {
        arr.forEach((item) => {
          if (item.label.includes(name2))
            result.push(item);
          else if (item.children && item.children.length)
            getTargetList(item.children, name2);
        });
      };
      getTargetList(list, name);
      return result;
    };
    const typeChange = (type) => {
      cascaderObj.searchName = "";
      $emit("handle-type-change", type);
    };
    const changeIcon = () => {
      cascaderObj.showPanel = !cascaderObj.showPanel;
      if (cascaderObj.showPanel) {
        cascaderObj.staticRememberType = currProps.currentType;
      }
    };
    const expandChange = (value) => {
      $emit("expand-change", value);
    };
    const expandClose = () => {
      console.log("object");
      $emit("expand-close");
    };
    const searchEvent = (val) => {
      $emit("handle-search-event", val);
    };
    const inputEvent = (val) => {
      $emit("handle-search-event", val);
    };
    const getCheckedNodes = (leafOnly) => {
      var _a;
      return (_a = fpiCascaderRef.value) == null ? void 0 : _a.getCheckedNodes(leafOnly);
    };
    const clearCheckedNodes = () => {
      var _a;
      return (_a = fpiCascaderRef.value) == null ? void 0 : _a.clearCheckedNodes();
    };
    const getOptionList = () => {
      return showOption.value;
    };
    __expose({
      getCheckedNodes,
      clearCheckedNodes,
      getOptionList
    });
    return (_ctx, _cache) => {
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_input = resolveComponent("el-input");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          class: normalizeClass(`cascader-title flex-start-c ${_ctx.hasBackground ? "label-bg" : ""}`),
          onClick: changeIcon
        }, [
          createElementVNode("div", _hoisted_2, toDisplayString(showComTextHolder.value), 1),
          createElementVNode("div", {
            class: normalizeClass(["arrow-line tran05", cascaderObj.showPanel ? "arrow-line-ro" : ""])
          }, null, 2)
        ], 2),
        createVNode(Transition, { name: "el-zoom-in-top" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              id: cascaderObj.id,
              class: "cascader-popup border-1"
            }, [
              createElementVNode("div", _hoisted_4, [
                createElementVNode("div", _hoisted_5, [
                  createVNode(_component_el_radio_group, {
                    modelValue: cascaderObj.insetType,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => cascaderObj.insetType = $event),
                    size: _ctx.size,
                    onChange: typeChange
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.typeList, (item) => {
                        return openBlock(), createBlock(_component_el_radio_button, {
                          key: item.key,
                          label: item.key
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.label), 1)
                          ]),
                          _: 2
                        }, 1032, ["label"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "size"])
                ]),
                createElementVNode("div", _hoisted_6, [
                  createVNode(_component_el_input, {
                    modelValue: cascaderObj.searchName,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => cascaderObj.searchName = $event),
                    size: _ctx.size,
                    placeholder: "请输入",
                    "prefix-icon": unref(Search),
                    onChange: searchEvent,
                    onInput: inputEvent
                  }, null, 8, ["modelValue", "size", "prefix-icon"])
                ])
              ]),
              createElementVNode("div", _hoisted_7, [
                createVNode(unref(ElCascaderPanel), mergeProps({
                  ref_key: "fpiCascaderRef",
                  ref: fpiCascaderRef,
                  modelValue: useModelValue.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => useModelValue.value = $event),
                  size: _ctx.size,
                  options: showOption.value,
                  props: _ctx.props
                }, unref(attrs), {
                  onClose: expandClose,
                  onExpandChange: expandChange,
                  onChange: changeNode
                }), {
                  default: withCtx((scoped) => [
                    renderSlot(_ctx.$slots, "default", {}, () => [
                      createElementVNode("div", null, toDisplayString(scoped.data[_ctx.props ? _ctx.props.label || "label" : "label"]), 1)
                    ])
                  ]),
                  _: 3
                }, 16, ["modelValue", "size", "options", "props"])
              ])
            ], 8, _hoisted_3), [
              [vShow, cascaderObj.showPanel]
            ])
          ]),
          _: 3
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
