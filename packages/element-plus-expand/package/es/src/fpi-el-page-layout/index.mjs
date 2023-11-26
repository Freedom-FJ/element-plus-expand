import _sfc_main from "./fpi-el-page-layout.vue.mjs";
import "./fpi-el-page-layout.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElPageLayout = install(_sfc_main);
export {
  FpiElPageLayout,
  _sfc_main as default
};
