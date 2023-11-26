import _sfc_main from "./fpi-el-grid-progress-bar.vue.mjs";
import "./fpi-el-grid-progress-bar.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElGridProgressBar = install(_sfc_main);
export {
  FpiElGridProgressBar,
  _sfc_main as default
};
