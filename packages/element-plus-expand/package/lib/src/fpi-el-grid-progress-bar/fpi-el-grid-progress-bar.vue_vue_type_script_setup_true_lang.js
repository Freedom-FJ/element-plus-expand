"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
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
const __default__ = {
  name: "FpiElGridProgressBar"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    value: {
      type: Number,
      default: 0
    },
    checkColor: {
      type: String,
      default: ""
    },
    checkBoxBack: {
      type: String,
      default: ""
    },
    defaultColor: {
      type: String,
      default: ""
    },
    defaultBoxBack: {
      type: String,
      default: ""
    },
    gridStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    gridWidth: {
      type: Number,
      default: 1
    },
    gridMid: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    baseLine: {
      type: String,
      default: "x"
    },
    gridRotate: {
      type: Number,
      default: 0
    },
    linearStartColor: {
      type: String,
      default: ""
    },
    linearEndColor: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const data = vue.reactive({
      gridBarDom: vue.ref(),
      hiddenGride: 0,
      barHeight: 0,
      currCheckNum: 0,
      gridNum: 0,
      linearColorList: []
    });
    const getCurrCheckNum = vue.computed(() => {
      var _a, _b, _c, _d;
      const height = (_b = (_a = data.gridBarDom) == null ? void 0 : _a.offsetHeight) != null ? _b : 0;
      const width = (_d = (_c = data.gridBarDom) == null ? void 0 : _c.offsetWidth) != null ? _d : 0;
      const isHeight = props.baseLine === "y";
      const useValue = isHeight ? height : width;
      const gridNum2 = Math.ceil((useValue + props.gridMid) / ((props.gridMid || 0) + (props.gridWidth || 0)));
      data.gridNum = gridNum2;
      const currCheckNum = Math.round(gridNum2 / 100 * props.value);
      data.currCheckNum = currCheckNum;
      return currCheckNum;
    });
    const getCheckColor = vue.computed(() => (index) => {
      if (props.linearEndColor && props.linearStartColor) {
        if (!data.currCheckNum)
          return "";
        const colorList = gradientColors(props.linearStartColor, props.linearEndColor, data.currCheckNum + 1);
        const color = `linear-gradient(to ${props.baseLine === "y" ? "top" : "right"}, ${colorList[index - 1]}, ${colorList[index]})`;
        return color;
      } else {
        return props.checkColor;
      }
    });
    vue.onMounted(() => {
      var _a, _b, _c, _d;
      const height = (_b = (_a = data.gridBarDom) == null ? void 0 : _a.offsetHeight) != null ? _b : 0;
      const width = (_d = (_c = data.gridBarDom) == null ? void 0 : _c.offsetWidth) != null ? _d : 0;
      const isHeight = props.baseLine === "y";
      const useValue = isHeight ? height : width;
      const gridNum2 = Math.ceil((useValue + props.gridMid) / ((props.gridMid || 0) + (props.gridWidth || 0)));
      data.gridNum = gridNum2;
      const currCheckNum = Math.round(gridNum2 / 100 * props.value);
      data.currCheckNum = currCheckNum;
    });
    const gradientColors = function(start, end, steps, gamma) {
      const output = [];
      const so = [];
      let i, j, ms, me;
      gamma = gamma || 1;
      const normalize = function(channel) {
        return __pow(channel / 255, gamma || 1);
      };
      const startColor = !start.includes("rgb") ? start : colorRGBtoHex(start);
      const endColor = !end.includes("rgb") ? end : colorRGBtoHex(end);
      const startNum = parseColor(startColor).map(normalize);
      const endNum = parseColor(endColor).map(normalize);
      for (i = 0; i < steps; i++) {
        ms = i / (steps - 1);
        me = 1 - ms;
        for (j = 0; j < 3; j++)
          so[j] = pad(Math.round(__pow(startNum[j] * me + endNum[j] * ms, 1 / gamma) * 255).toString(16));
        output.push(`#${so.join("")}`);
      }
      return output;
    };
    const parseColor = function(hexStr) {
      return hexStr.length === 4 ? hexStr.substr(1).split("").map((s) => {
        return 17 * parseInt(s, 16);
      }) : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map((s) => {
        return parseInt(s, 16);
      });
    };
    const colorRGBtoHex = (color) => {
      const rgb = color.split(",");
      const r = parseInt(rgb[0].split("(")[1]);
      const g = parseInt(rgb[1]);
      const b = parseInt(rgb[2].split(")")[0]);
      const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
      return hex;
    };
    const pad = function(s) {
      return s.length === 1 ? `0${s}` : s;
    };
    const { gridBarDom, gridNum } = vue.toRefs(data);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "gridBarDom",
        ref: gridBarDom,
        class: "fpi-el-grid-progress-bar",
        style: vue.normalizeStyle({
          backgroundColor: __props.backgroundColor,
          flexDirection: __props.baseLine === "y" ? "column-reverse" : "row"
        })
      }, [
        vue.unref(gridNum) ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "fpi-el-check-box",
          style: vue.normalizeStyle({
            height: __props.baseLine === "y" ? `${getCurrCheckNum.value * (__props.gridWidth + __props.gridMid) - __props.gridMid}px` : void 0,
            width: __props.baseLine === "x" ? `${getCurrCheckNum.value * (__props.gridWidth + __props.gridMid) - __props.gridMid}px` : void 0,
            display: __props.baseLine === "x" ? "flex" : "",
            backgroundColor: __props.checkBoxBack
          })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(getCurrCheckNum.value, (index) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: index,
              class: "fpi-el-check-bar",
              style: vue.normalizeStyle(__spreadValues({
                height: __props.baseLine === "y" ? `${__props.gridWidth}px` : void 0,
                width: __props.baseLine === "x" ? `${__props.gridWidth}px` : void 0,
                background: getCheckColor.value(index),
                marginRight: __props.baseLine === "x" ? `${__props.gridMid}px` : "",
                marginBottom: __props.baseLine === "y" ? `${__props.gridMid}px` : "",
                transform: `rotate(${__props.gridRotate}deg)`
              }, __props.gridStyle))
            }, null, 4);
          }), 128))
        ], 4)) : vue.createCommentVNode("", true),
        vue.unref(gridNum) ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 1,
          class: "fpi-el-default-box",
          style: vue.normalizeStyle({
            height: __props.baseLine === "y" ? `${(vue.unref(gridNum) - getCurrCheckNum.value) * (__props.gridWidth + __props.gridMid) + __props.gridMid}px` : void 0,
            width: __props.baseLine === "x" ? `${(vue.unref(gridNum) - getCurrCheckNum.value) * (__props.gridWidth + __props.gridMid) + __props.gridMid}px` : void 0,
            display: __props.baseLine === "x" ? "flex" : "",
            backgroundColor: __props.defaultBoxBack
          })
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(new Array(vue.unref(gridNum) - getCurrCheckNum.value), (index) => {
            return vue.openBlock(), vue.createElementBlock("div", {
              key: index,
              class: "fpi-el-default-bar",
              style: vue.normalizeStyle(__spreadValues({
                height: __props.baseLine === "y" ? `${__props.gridWidth}px` : void 0,
                width: __props.baseLine === "x" ? `${__props.gridWidth}px` : void 0,
                marginLeft: __props.baseLine === "x" ? `${__props.gridMid}px` : "",
                marginBottom: __props.baseLine === "y" ? `${__props.gridMid}px` : "",
                background: __props.defaultColor,
                transform: `rotate(${__props.gridRotate}deg)`
              }, __props.gridStyle))
            }, null, 4);
          }), 128))
        ], 4)) : vue.createCommentVNode("", true)
      ], 4);
    };
  }
}));
exports.default = _sfc_main;
