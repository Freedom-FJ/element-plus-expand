"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiElCascaderTabSelect_vue_vue_type_script_setup_true_name_fpiCascader_lang = require("./fpi-el-cascader-tab-select.vue.js");
require("./fpi-el-cascader-tab-select.vue2.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElCascaderTabSelect = install(fpiElCascaderTabSelect_vue_vue_type_script_setup_true_name_fpiCascader_lang.default);
exports.default = fpiElCascaderTabSelect_vue_vue_type_script_setup_true_name_fpiCascader_lang.default;
exports.FpiElCascaderTabSelect = FpiElCascaderTabSelect;
