"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiElCascader_vue_vue_type_script_setup_true_name_fpiCascader_lang = require("./fpi-el-cascader.vue_vue_type_script_setup_true_name_fpi-cascader_lang.js");
require("./fpi-el-cascader.vue_vue_type_style_index_0_lang.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElCascader = install(fpiElCascader_vue_vue_type_script_setup_true_name_fpiCascader_lang.default);
exports.default = fpiElCascader_vue_vue_type_script_setup_true_name_fpiCascader_lang.default;
exports.FpiElCascader = FpiElCascader;
