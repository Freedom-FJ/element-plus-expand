"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const fpiElCronTab = require("./fpi-el-cron-tab.vue.js");
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElCronTab = install(fpiElCronTab.default);
exports.default = fpiElCronTab.default;
exports.FpiElCronTab = FpiElCronTab;
