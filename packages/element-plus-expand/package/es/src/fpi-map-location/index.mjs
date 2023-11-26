import _sfc_main from "./fpi-map-location.vue.mjs";
import "./fpi-map-location.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiMapLocation = install(_sfc_main);
export {
  FpiMapLocation,
  _sfc_main as default
};
