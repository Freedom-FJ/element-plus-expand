import _sfc_main from "./fpi-el-table.vue.mjs";
import "./fpi-el-table.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElTable = install(_sfc_main);
export {
  FpiElTable,
  _sfc_main as default
};
