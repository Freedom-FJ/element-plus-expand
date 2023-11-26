import _sfc_main from "./fpi-el-quarter-picker.vue.mjs";
import "./fpi-el-quarter-picker.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElQuarterPicker = install(_sfc_main);
export {
  FpiElQuarterPicker,
  FpiElQuarterPicker as default
};
