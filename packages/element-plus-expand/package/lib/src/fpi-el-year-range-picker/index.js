"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiElYearRangePicker_vue_vue_type_script_setup_true_lang = require("./fpi-el-year-range-picker.vue.js");
require("./fpi-el-year-range-picker.vue2.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElYearRangePicker = install(fpiElYearRangePicker_vue_vue_type_script_setup_true_lang.default);
exports.FpiElYearRangePicker = FpiElYearRangePicker;
exports.default = FpiElYearRangePicker;
