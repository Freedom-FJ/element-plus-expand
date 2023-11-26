import _sfc_main from "./Crontab-Year.vue2.mjs";
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createTextVNode, createElementBlock, Fragment, renderList } from "vue";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.mjs";
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ElRadio = resolveComponent("ElRadio");
  const _component_ElFormItem = resolveComponent("ElFormItem");
  const _component_ElInputNumber = resolveComponent("ElInputNumber");
  const _component_ElOption = resolveComponent("ElOption");
  const _component_ElSelect = resolveComponent("ElSelect");
  const _component_ElForm = resolveComponent("ElForm");
  return openBlock(), createBlock(_component_ElForm, null, {
    default: withCtx(() => [
      createVNode(_component_ElFormItem, null, {
        default: withCtx(() => [
          createVNode(_component_ElRadio, {
            modelValue: _ctx.radioValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.radioValue = $event),
            label: 1
          }, {
            default: withCtx(() => [
              createTextVNode(" 不填，允许的通配符[, - * /] ")
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(_component_ElFormItem, null, {
        default: withCtx(() => [
          createVNode(_component_ElRadio, {
            modelValue: _ctx.radioValue,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.radioValue = $event),
            label: 2
          }, {
            default: withCtx(() => [
              createTextVNode(" 每年 ")
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(_component_ElFormItem, null, {
        default: withCtx(() => [
          createVNode(_component_ElRadio, {
            modelValue: _ctx.radioValue,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.radioValue = $event),
            label: 3
          }, {
            default: withCtx(() => [
              createTextVNode(" 周期从 "),
              createVNode(_component_ElInputNumber, {
                modelValue: _ctx.cycle01,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.cycle01 = $event),
                min: _ctx.fullYear
              }, null, 8, ["modelValue", "min"]),
              createTextVNode(" - "),
              createVNode(_component_ElInputNumber, {
                modelValue: _ctx.cycle02,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.cycle02 = $event),
                min: _ctx.fullYear
              }, null, 8, ["modelValue", "min"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(_component_ElFormItem, null, {
        default: withCtx(() => [
          createVNode(_component_ElRadio, {
            modelValue: _ctx.radioValue,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.radioValue = $event),
            label: 4
          }, {
            default: withCtx(() => [
              createTextVNode(" 从 "),
              createVNode(_component_ElInputNumber, {
                modelValue: _ctx.average01,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.average01 = $event),
                min: _ctx.fullYear
              }, null, 8, ["modelValue", "min"]),
              createTextVNode(" 年开始，每 "),
              createVNode(_component_ElInputNumber, {
                modelValue: _ctx.average02,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.average02 = $event),
                min: _ctx.fullYear
              }, null, 8, ["modelValue", "min"]),
              createTextVNode(" 年执行一次 ")
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(_component_ElFormItem, null, {
        default: withCtx(() => [
          createVNode(_component_ElRadio, {
            modelValue: _ctx.radioValue,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.radioValue = $event),
            label: 5
          }, {
            default: withCtx(() => [
              createTextVNode(" 指定 "),
              createVNode(_component_ElSelect, {
                modelValue: _ctx.checkboxList,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.checkboxList = $event),
                clearable: "",
                placeholder: "可多选",
                multiple: ""
              }, {
                default: withCtx(() => [
                  (openBlock(), createElementBlock(Fragment, null, renderList(9, (item) => {
                    return createVNode(_component_ElOption, {
                      key: item,
                      value: item - 1 + _ctx.fullYear,
                      label: item - 1 + _ctx.fullYear
                    }, null, 8, ["value", "label"]);
                  }), 64))
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const CrontabYear = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  CrontabYear as default
};
