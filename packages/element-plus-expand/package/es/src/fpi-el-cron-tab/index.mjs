import _FpiElCronTab from "./fpi-el-cron-tab.vue.mjs";
const install = (comp) => {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
};
const FpiElCronTab = install(_FpiElCronTab);
export {
  FpiElCronTab,
  _FpiElCronTab as default
};
