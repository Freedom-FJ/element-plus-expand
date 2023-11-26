"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiElRolling_vue_vue_type_script_setup_true_lang = require("./fpi-el-rolling.vue.js");
require("./fpi-el-rolling.vue2.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElRolling = install(fpiElRolling_vue_vue_type_script_setup_true_lang.default);
exports.default = fpiElRolling_vue_vue_type_script_setup_true_lang.default;
exports.FpiElRolling = FpiElRolling;
