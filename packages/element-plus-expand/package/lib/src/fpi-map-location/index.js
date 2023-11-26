"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiMapLocation_vue_vue_type_script_setup_true_lang = require("./fpi-map-location.vue.js");
require("./fpi-map-location.vue2.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiMapLocation = install(fpiMapLocation_vue_vue_type_script_setup_true_lang.default);
exports.default = fpiMapLocation_vue_vue_type_script_setup_true_lang.default;
exports.FpiMapLocation = FpiMapLocation;
