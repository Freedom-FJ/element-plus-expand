"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiElPageLayout_vue_vue_type_script_setup_true_lang = require("./fpi-el-page-layout.vue.js");
require("./fpi-el-page-layout.vue2.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElPageLayout = install(fpiElPageLayout_vue_vue_type_script_setup_true_lang.default);
exports.default = fpiElPageLayout_vue_vue_type_script_setup_true_lang.default;
exports.FpiElPageLayout = FpiElPageLayout;
