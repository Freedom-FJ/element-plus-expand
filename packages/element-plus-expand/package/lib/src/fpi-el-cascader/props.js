"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const defaultCascaderPropsData = {
  size: "small",
  textHolder: "",
  hasBackground: false,
  props: () => {
    return {
      expandTrigger: "hover",
      multiple: false,
      checkStrictly: true,
      emitPath: false,
      lazy: false,
      value: "id",
      label: "label",
      children: "children",
      disabled: "disabled",
      leaf: "leaf"
    };
  }
};
exports.defaultCascaderPropsData = defaultCascaderPropsData;
