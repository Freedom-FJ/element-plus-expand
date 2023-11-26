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
import { fpiTableConfig } from "./src/fpi-el-table/config.mjs";
import * as index$1 from "./src/index.mjs";
import { fpiELementPlusResolver } from "./resolve/index.mjs";
import { FpiElTable } from "./src/fpi-el-table/index.mjs";
import { FpiElForm } from "./src/fpi-el-form/index.mjs";
import { FpiElRolling } from "./src/fpi-el-rolling/index.mjs";
import { FpiElQuarterPicker } from "./src/fpi-el-quarter-picker/index.mjs";
import { FpiMapLocation } from "./src/fpi-map-location/index.mjs";
import { FpiMap } from "./src/fpi-map/index.mjs";
import { FpiElQuarterRangePicker } from "./src/fpi-el-quarter-range-picker/index.mjs";
import { FpiElYearRangePicker } from "./src/fpi-el-year-range-picker/index.mjs";
import { FpiElCronTab } from "./src/fpi-el-cron-tab/index.mjs";
import { FpiElCascaderTabSelect } from "./src/fpi-el-cascader-tab-select/index.mjs";
import { FpiElGridProgressBar } from "./src/fpi-el-grid-progress-bar/index.mjs";
import { FpiElPageLayout } from "./src/fpi-el-page-layout/index.mjs";
const setTableConfig = (option) => {
  fpiTableConfig.value = __spreadValues(__spreadValues({}, fpiTableConfig.value), option);
};
const index = {
  install: (app) => {
    for (const c in index$1)
      app.use(index$1[c]);
  },
  setTableConfig
};
export {
  FpiElCascaderTabSelect,
  FpiElCronTab,
  FpiElForm,
  FpiElGridProgressBar,
  FpiElPageLayout,
  FpiElQuarterPicker,
  FpiElQuarterRangePicker,
  FpiElRolling,
  FpiElTable,
  FpiElYearRangePicker,
  FpiMap,
  FpiMapLocation,
  index as default,
  fpiELementPlusResolver,
  setTableConfig
};
