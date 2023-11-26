"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const utils = require("../utils.js");
const elTableNode_vue_vue_type_script_setup_true_name_ElTableNode_lang = require("./el-table-node.vue_vue_type_script_setup_true_name_ElTableNode_lang.js");
const expose = require("./hook/expose.js");
const index = require("./props/index.js");
const config = require("./config.js");
const _hoisted_1 = { class: "fpi-el-table" };
const _hoisted_2 = { style: { "width": "fit-content" } };
const __default__ = {
  name: "FpiElTable"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: __spreadValues(__spreadValues(__spreadValues({}, index.fpiTableProps), index.pageProps), index.loadingProps),
  emits: [
    "page-change"
  ],
  setup(__props, { expose: __expose, emit: $emit }) {
    const props = __props;
    const attrs = vue.useAttrs();
    const slots = vue.useSlots();
    const data = vue.reactive({
      apiTableData: [],
      pageParameter: {
        pageSizes: 10,
        currentPage: 1,
        total: 0
      },
      loading: false
    });
    const currTableData = vue.computed(() => {
      return props.api ? data.apiTableData : props.tableData;
    });
    const singleTableRef = vue.ref();
    vue.watch(
      () => props.pageParams,
      () => {
        detailParamsPage();
      },
      { deep: true }
    );
    const detailParamsPage = () => {
      props.pageParams && Object.keys(props.pageParams).forEach((item) => {
        data.pageParameter[item] = props.pageParams[item] || 0;
      });
    };
    const currentChange = (page) => {
      data.pageParameter.currentPage = page;
      if (props.api) {
        exposeFun.reLoadTable();
      } else {
        $emit("page-change", {
          currentPage: data.pageParameter.currentPage,
          total: data.pageParameter.total,
          pageSizes: data.pageParameter.pageSizes
        });
      }
    };
    const currentSizeChange = () => {
      if (data.pageParameter.total <= (data.pageParameter.currentPage - 1) * data.pageParameter.pageSizes)
        return;
      if (props.api) {
        exposeFun.reLoadTable();
      } else {
        $emit("page-change", {
          currentPage: data.pageParameter.currentPage,
          total: data.pageParameter.total,
          pageSizes: data.pageParameter.pageSizes
        });
      }
    };
    const initTable = () => __async(this, null, function* () {
      const { pageInit } = props;
      Object.keys(pageInit).forEach((item) => {
        data.pageParameter[item] = pageInit[item];
      });
      detailParamsPage();
      if (props.api && !props.isLazyRequest)
        data.apiTableData = yield filterData();
    });
    const filterData = () => __async(this, null, function* () {
      let currData = (yield sendRequest(data.pageParameter.currentPage, data.pageParameter.pageSizes)) || [];
      if (props.filterMethod)
        currData = currData.filter(props.filterMethod);
      return currData;
    });
    const sendRequest = (currentPage, pageSizes, isUnLoading) => __async(this, null, function* () {
      return new Promise((resolve) => {
        if (props.isShowLoading && !isUnLoading)
          data.loading = true;
        const { params } = props;
        const reqParams = __spreadValues({}, params);
        if (props.isShowPage) {
          reqParams[props.pageReqExpr.currentPage] = currentPage + props.currentPageOffset;
          reqParams[props.pageReqExpr.pageSizes] = pageSizes;
        }
        props.api && props.api(reqParams).then((res) => __async(this, null, function* () {
          data.loading = false;
          props.isShowPage && (data.pageParameter.total = props.pageTotalExpr ? Number(utils.getVal(res, props.pageTotalExpr) || 0) : 0);
          if (props.resPretreatment)
            res = utils.DataType(props.resPretreatment, "asyncfunction") ? yield props.resPretreatment(res) : props.resPretreatment(res);
          resolve(utils.getVal(res, props.resPretreatment ? "" : props.resExpr));
        }));
      });
    });
    const exposeFun = expose.exposeHook(data, props, singleTableRef, { sendRequest, filterData });
    initTable();
    const { loading, pageParameter } = vue.toRefs(data);
    __expose(exposeFun);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.withDirectives((vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElTable), vue.mergeProps({
          ref_key: "singleTableRef",
          ref: singleTableRef,
          style: { "width": "100%" },
          "header-row-style": vue.unref(config.fpiTableConfig).headerRowStyle,
          "header-cell-style": vue.unref(config.fpiTableConfig).headerCellStyle,
          "row-style": vue.unref(config.fpiTableConfig).rowStyle,
          "cell-style": vue.unref(config.fpiTableConfig).cellStyle
        }, vue.unref(attrs), {
          "element-loading-text": _ctx.elementLoadingText,
          "element-loading-background": _ctx.elementLoadingBackground,
          "element-loading-svg-view-box": _ctx.elementLoadingSvgViewBox,
          "element-loading-svg": _ctx.elementLoadingSvg,
          data: currTableData.value
        }), {
          empty: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "empty")
          ]),
          append: vue.withCtx(() => [
            vue.renderSlot(_ctx.$slots, "append")
          ]),
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(_ctx.column, (item, index2) => {
              return vue.openBlock(), vue.createBlock(elTableNode_vue_vue_type_script_setup_true_name_ElTableNode_lang.default, {
                key: index2,
                "column-data": item,
                slots: vue.unref(slots)
              }, null, 8, ["column-data", "slots"]);
            }), 128))
          ]),
          _: 3
        }, 16, ["header-row-style", "header-cell-style", "row-style", "cell-style", "element-loading-text", "element-loading-background", "element-loading-svg-view-box", "element-loading-svg", "data"])), [
          [vue.unref(elementPlus.vLoading), vue.unref(loading)]
        ]),
        _ctx.isShowPage ? (vue.openBlock(), vue.createElementBlock("div", {
          key: 0,
          class: "fpi-el-table-list-page",
          style: vue.normalizeStyle(_ctx.pageBoxStyle)
        }, [
          vue.createElementVNode("div", _hoisted_2, [
            vue.createVNode(vue.unref(elementPlus.ElPagination), {
              "page-size": vue.unref(pageParameter).pageSizes,
              "onUpdate:pageSize": _cache[0] || (_cache[0] = ($event) => vue.unref(pageParameter).pageSizes = $event),
              layout: _ctx.pageLayout,
              "popper-class": "transformPage",
              background: _ctx.isShowPageback,
              "page-sizes": _ctx.pageInit.pageSizesArr || [10, 20, 30, 50],
              total: vue.unref(pageParameter).total,
              "pager-count": _ctx.pagerCount,
              small: _ctx.small,
              "current-page": vue.unref(pageParameter).currentPage,
              onCurrentChange: currentChange,
              onSizeChange: currentSizeChange
            }, null, 8, ["page-size", "layout", "background", "page-sizes", "total", "pager-count", "small", "current-page"])
          ])
        ], 4)) : vue.createCommentVNode("", true)
      ]);
    };
  }
}));
exports.default = _sfc_main;
