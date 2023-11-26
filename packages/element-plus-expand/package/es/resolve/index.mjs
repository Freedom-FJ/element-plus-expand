import { kebabCase, camelCase } from "../src/utils.mjs";
function getSideEffects(partialName, isSSR) {
  const moduleType = isSSR ? "lib" : "es";
  if (isSSR)
    return;
  return [`@ued_fpi/element-plus-expand/${moduleType}/src/${partialName}/style/index`];
}
function fpiELementPlusResolver(option = {}) {
  return {
    type: "component",
    // 组件类型
    resolve: (name) => {
      const isSSR = !!option.isSSR;
      const moduleType = isSSR ? "lib" : "es";
      const partialName = kebabCase(name);
      const CaseName = camelCase(name);
      if (partialName.startsWith("fpi-el")) {
        return {
          // 组件名称
          name: CaseName,
          // 从哪个路径导入，es/lib
          from: `@ued_fpi/element-plus-expand/${moduleType}`,
          // 根据组件名称获取到对应的 css 导入路径。BackTop => es/back-top/style/index
          // sideEffects: getSideEffects(kebabName.slice(7), options),
          sideEffects: getSideEffects(partialName, isSSR)
        };
      }
    }
  };
}
export {
  fpiELementPlusResolver as default,
  fpiELementPlusResolver
};
