"use strict";
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
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const config = require("./src/fpi-el-table/config.js");
const index$e = require("./src/index.js");
const index$1 = require("./resolve/index.js");
const index$2 = require("./src/fpi-el-table/index.js");
const index$3 = require("./src/fpi-el-form/index.js");
const index$4 = require("./src/fpi-el-rolling/index.js");
const index$5 = require("./src/fpi-el-quarter-picker/index.js");
const index$6 = require("./src/fpi-map-location/index.js");
const index$7 = require("./src/fpi-map/index.js");
const index$8 = require("./src/fpi-el-quarter-range-picker/index.js");
const index$9 = require("./src/fpi-el-year-range-picker/index.js");
const index$a = require("./src/fpi-el-cron-tab/index.js");
const index$b = require("./src/fpi-el-cascader-tab-select/index.js");
const index$c = require("./src/fpi-el-grid-progress-bar/index.js");
const index$d = require("./src/fpi-el-page-layout/index.js");
const setTableConfig = (option) => {
  config.fpiTableConfig.value = __spreadValues(__spreadValues({}, config.fpiTableConfig.value), option);
};
const index = {
  install: (app) => {
    for (const c in index$e)
      app.use(index$e[c]);
  },
  setTableConfig
};
exports.fpiELementPlusResolver = index$1.fpiELementPlusResolver;
exports.FpiElTable = index$2.FpiElTable;
exports.FpiElForm = index$3.FpiElForm;
exports.FpiElRolling = index$4.FpiElRolling;
exports.FpiElQuarterPicker = index$5.FpiElQuarterPicker;
exports.FpiMapLocation = index$6.FpiMapLocation;
exports.FpiMap = index$7.FpiMap;
exports.FpiElQuarterRangePicker = index$8.FpiElQuarterRangePicker;
exports.FpiElYearRangePicker = index$9.FpiElYearRangePicker;
exports.FpiElCronTab = index$a.FpiElCronTab;
exports.FpiElCascaderTabSelect = index$b.FpiElCascaderTabSelect;
exports.FpiElGridProgressBar = index$c.FpiElGridProgressBar;
exports.FpiElPageLayout = index$d.FpiElPageLayout;
exports.default = index;
exports.setTableConfig = setTableConfig;
