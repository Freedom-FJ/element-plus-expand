import _sfc_main from "./Crontab-Result.vue2.mjs";
import { openBlock, createElementBlock, createElementVNode, Fragment, renderList, toDisplayString } from "vue";
import _export_sfc from "../../../_virtual/_plugin-vue_export-helper.mjs";
const _hoisted_1 = { class: "popup-result" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("p", { class: "title" }, " 最近5次运行时间 ", -1);
const _hoisted_3 = { class: "popup-result-scroll" };
const _hoisted_4 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createElementVNode("ul", _hoisted_3, [
      _ctx.isShow ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.resultList, (item) => {
        return openBlock(), createElementBlock("li", { key: item }, toDisplayString(item), 1);
      }), 128)) : (openBlock(), createElementBlock("li", _hoisted_4, " 计算结果中... "))
    ])
  ]);
}
const CrontabResult = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  CrontabResult as default
};
