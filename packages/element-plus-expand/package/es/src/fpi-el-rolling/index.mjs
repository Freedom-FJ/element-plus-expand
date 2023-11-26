import _sfc_main from "./fpi-el-rolling.vue.mjs";
import "./fpi-el-rolling.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElRolling = install(_sfc_main);
export {
  FpiElRolling,
  _sfc_main as default
};
