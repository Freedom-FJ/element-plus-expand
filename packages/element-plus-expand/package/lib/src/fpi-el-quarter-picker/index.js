"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiElQuarterPicker_vue_vue_type_script_setup_true_lang = require("./fpi-el-quarter-picker.vue.js");
require("./fpi-el-quarter-picker.vue2.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElQuarterPicker = install(fpiElQuarterPicker_vue_vue_type_script_setup_true_lang.default);
exports.FpiElQuarterPicker = FpiElQuarterPicker;
exports.default = FpiElQuarterPicker;
