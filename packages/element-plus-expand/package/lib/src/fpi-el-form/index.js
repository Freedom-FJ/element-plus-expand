"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiElForm_vue_vue_type_script_setup_true_lang = require("./fpi-el-form.vue.js");
require("./fpi-el-form.vue2.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElForm = install(fpiElForm_vue_vue_type_script_setup_true_lang.default);
exports.default = fpiElForm_vue_vue_type_script_setup_true_lang.default;
exports.FpiElForm = FpiElForm;
