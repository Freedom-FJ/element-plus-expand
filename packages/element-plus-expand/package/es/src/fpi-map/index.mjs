import _sfc_main from "./fpi-map.vue.mjs";
import "./fpi-map.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiMap = install(_sfc_main);
export {
  FpiMap,
  _sfc_main as default
};
