"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiElTable_vue_vue_type_script_setup_true_lang = require("./fpi-el-table.vue.js");
require("./fpi-el-table.vue2.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElTable = install(fpiElTable_vue_vue_type_script_setup_true_lang.default);
exports.default = fpiElTable_vue_vue_type_script_setup_true_lang.default;
exports.FpiElTable = FpiElTable;
