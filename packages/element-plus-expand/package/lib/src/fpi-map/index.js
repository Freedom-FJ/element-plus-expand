"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiMap_vue_vue_type_script_setup_true_lang = require("./fpi-map.vue.js");
require("./fpi-map.vue2.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiMap = install(fpiMap_vue_vue_type_script_setup_true_lang.default);
exports.default = fpiMap_vue_vue_type_script_setup_true_lang.default;
exports.FpiMap = FpiMap;
