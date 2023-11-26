import _sfc_main from "./fpi-el-form.vue.mjs";
import "./fpi-el-form.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElForm = install(_sfc_main);
export {
  FpiElForm,
  _sfc_main as default
};
