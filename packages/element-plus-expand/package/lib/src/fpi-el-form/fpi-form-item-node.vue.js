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
const utils = require("../utils.js");
const index = require("./components/index.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "fpi-form-item-node",
  props: {
    /**
     * @desc 表单配置项
     * @abstract
     */
    formItem: {
      type: Object,
      default: () => {
        return [];
      }
    },
    /**
     * @desc 是否是文本表单
     */
    isText: {
      type: Boolean,
      default: false
    },
    /**
     * @desc 父亲插槽
     */
    slots: {
      type: Object,
      default: () => {
        return {};
      }
    },
    formKey: {
      type: Number,
      default: 0
    },
    /**
     * @desc 对应vModel值
     */
    modelValue: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  emits: [
    "update:modelValue",
    "upDataValue",
    "upDataRefInput"
  ],
  setup(__props, { emit: $emit }) {
    const props = __props;
    const currInputType = vue.computed(() => (type) => {
      return index.default[type];
    });
    const formItemRef = vue.ref();
    const getRenderFormItem = (formItem) => {
      return vue.h(
        elementPlus.ElFormItem,
        __spreadProps(__spreadValues({}, formItem), {
          ref: (e) => formItemRef.value = e,
          rules: formItem.itemRules
        }),
        __spreadValues(__spreadValues({}, getDefault(formItem)), getLabel(formItem))
      );
    };
    const getDefault = (formItem) => {
      return {
        default() {
          return getDefaultReturnNode(formItem);
        }
      };
    };
    const getDefaultReturnNode = (formItem) => {
      return [formItem.slot ? getSlotNode(formItem) : formItem.col ? getRowColNode(formItem) : formItem.type === "dom" ? getDomNode(formItem) : formItem.type === "text" || props.isText ? getTextNode(formItem) : formItem.type ? getInputNode(formItem) : ""];
    };
    const getLabel = (formItem) => {
      return props.slots[`${formItem.prop}-label`] ? getLabelNode(formItem) : {};
    };
    const getTextNode = (formItem) => {
      const value = utils.getVal(props.modelValue, formItem.prop);
      return vue.h(
        "div",
        __spreadValues({
          class: "fpi-el-form-text",
          style: formItem.textStyle
        }, formItem.inputProps || {}),
        getOptionValue(value, formItem)
      );
    };
    const getOptionValue = (value, formItem) => {
      var _a, _b, _c, _d;
      const optionExpr = (_a = formItem.inputProps) == null ? void 0 : _a.optionExpr;
      const valueExpr = (_b = optionExpr == null ? void 0 : optionExpr.value) != null ? _b : "value";
      const labelExpr = (_c = optionExpr == null ? void 0 : optionExpr.label) != null ? _c : "label";
      if (!formItem.option)
        return value;
      if (Array.isArray(value))
        return value.map((item) => {
          var _a2, _b2;
          return (_b2 = (_a2 = formItem.option.find((fd) => fd[valueExpr] === item)) == null ? void 0 : _a2[labelExpr]) != null ? _b2 : item;
        }).join("、");
      return (_d = formItem.option.find((item) => item[valueExpr] === value)) == null ? void 0 : _d[labelExpr];
    };
    const getRowColNode = (formItem) => {
      return vue.h(
        elementPlus.ElRow,
        {
          gutter: formItem.gutter || 0,
          style: "width: 100%;"
        },
        {
          default: () => formItem.col.map((colItem, colIndex) => {
            return vue.h(
              elementPlus.ElCol,
              {
                key: colIndex,
                span: colItem.span
              },
              {
                default: () => [getRenderFormItem(colItem)]
              }
            );
          })
        }
      );
    };
    const getDomNode = (formItem) => {
      return vue.h(
        "div",
        formItem.render ? {
          class: "html-dom",
          style: "width: 100%;"
        } : {
          class: "html-dom",
          style: "width: 100%;",
          innerHTML: formItem.vHtml && formItem.vHtml(props.formKey)
        },
        [formItem.render && formItem.render(props.formKey)]
      );
    };
    const getInputNode = (formItem) => {
      return vue.h(
        currInputType.value(formItem.type),
        {
          "inputProps": formItem.inputProps,
          "type": formItem.type,
          "option": formItem.option,
          "modelValue": utils.getVal(props.modelValue, formItem.prop),
          "onUpDataRefInput": (ref2) => $emit("upDataRefInput", formItem.prop, ref2),
          "onUpdate:modelValue": (value) => $emit("upDataValue", formItem.prop, value)
        },
        {
          prefix() {
            var _a;
            return (_a = formItem.inputProps) == null ? void 0 : _a.prefix;
          },
          suffix() {
            var _a;
            return (_a = formItem.inputProps) == null ? void 0 : _a.suffix;
          },
          prepend() {
            var _a;
            return (_a = formItem.inputProps) == null ? void 0 : _a.prepend;
          },
          append() {
            var _a;
            return (_a = formItem.inputProps) == null ? void 0 : _a.append;
          },
          empty() {
            var _a;
            return (_a = formItem.inputProps) == null ? void 0 : _a.empty;
          }
        }
      );
    };
    const getLabelNode = (formItem) => {
      return {
        label() {
          return vue.h(
            "div",
            props.slots[`${formItem.prop}-label`](formItem)
          );
        }
      };
    };
    const getSlotNode = (formItem) => {
      return vue.h(
        "div",
        { style: "width: 100%;" },
        props.slots[formItem.prop] ? props.slots[formItem.prop](formItem) : ""
      );
    };
    const getLineSlot = (formItem) => {
      return vue.h(
        "div",
        {
          class: "line-slot",
          style: {
            width: "100%"
          }
        },
        props.slots[formItem.slotLine] ? props.slots[formItem.slotLine](formItem) : ""
      );
    };
    const getLineNode = (formItem) => {
      return vue.h(
        "div",
        {
          class: "line-box",
          style: {
            "display": "flex",
            "align-items": "center",
            "justify-content": "space-between",
            "width": "100%",
            "margin-bottom": "12px"
          }
        },
        [
          getLineLabelNode(formItem),
          getLineBodyNode(formItem)
        ]
      );
    };
    const getLineBodyNode = (formItem) => {
      const { lineStyle = {} } = formItem;
      return vue.h(
        "div",
        {
          class: "line-body",
          style: __spreadValues({
            width: "90%",
            height: "1px",
            background: "#0084ff"
          }, lineStyle)
        }
      );
    };
    const getLineLabelNode = (formItem) => {
      const { lineLabelStyle = {}, lineLabel } = formItem;
      return vue.h(
        "div",
        {
          class: "line-title",
          style: __spreadValues({
            "font-family": "PingFangSC",
            "font-size": "14px",
            "font-weight": 500,
            "line-height": "22px",
            "color": "#0084ff",
            "letter-spacing": 0
          }, lineLabelStyle)
        },
        lineLabel
      );
    };
    const elFromItemNode = vue.defineComponent({
      render() {
        return props.formItem.slotLine ? getLineSlot(props.formItem) : props.formItem.isLine ? getLineNode(props.formItem) : getRenderFormItem(props.formItem);
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.unref(elFromItemNode));
    };
  }
});
exports.default = _sfc_main;
