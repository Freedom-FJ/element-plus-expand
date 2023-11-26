import _sfc_main from "./fpi-el-year-range-picker.vue.mjs";
import "./fpi-el-year-range-picker.vue2.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElYearRangePicker = install(_sfc_main);
export {
  FpiElYearRangePicker,
  FpiElYearRangePicker as default
};
