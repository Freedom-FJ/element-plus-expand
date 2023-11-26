import _sfc_main from "./fpi-el-quarter-range-picker.vue.mjs";
import "./fpi-el-quarter-range-picker.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElQuarterRangePicker = install(_sfc_main);
export {
  FpiElQuarterRangePicker,
  FpiElQuarterRangePicker as default
};
