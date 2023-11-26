"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const CrontabResult_vue_vue_type_script_lang = require("./Crontab-Result.vue2.js");
const vue = require("vue");
const _pluginVue_exportHelper = require("../../../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = { class: "popup-result" };
const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("p", { class: "title" }, " 最近5次运行时间 ", -1);
const _hoisted_3 = { class: "popup-result-scroll" };
const _hoisted_4 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    vue.createElementVNode("ul", _hoisted_3, [
      _ctx.isShow ? (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 0 }, vue.renderList(_ctx.resultList, (item) => {
        return vue.openBlock(), vue.createElementBlock("li", { key: item }, vue.toDisplayString(item), 1);
      }), 128)) : (vue.openBlock(), vue.createElementBlock("li", _hoisted_4, " 计算结果中... "))
    ])
  ]);
}
const CrontabResult = /* @__PURE__ */ _pluginVue_exportHelper.default(CrontabResult_vue_vue_type_script_lang.default, [["render", _sfc_render]]);
exports.default = CrontabResult;
