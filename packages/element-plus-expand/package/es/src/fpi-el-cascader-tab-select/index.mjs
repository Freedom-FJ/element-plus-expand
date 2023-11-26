import _sfc_main from "./fpi-el-cascader-tab-select.vue.mjs";
import "./fpi-el-cascader-tab-select.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElCascaderTabSelect = install(_sfc_main);
export {
  FpiElCascaderTabSelect,
  _sfc_main as default
};
