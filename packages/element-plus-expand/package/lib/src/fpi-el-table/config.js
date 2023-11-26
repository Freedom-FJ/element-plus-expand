"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const fpiTableConfig = vue.shallowRef({
  resExpr: "data",
  // 对于请求回传对象对应的table数据在对象内的位置
  pageTotalExpr: "total",
  // 总共数据条数对于的请求返回对象内位置
  pageReqExpr: {
    // 页面请求对应参数的名称
    pageSizes: "pageSize",
    currentPage: "pageNum"
  },
  currentPageOffset: 0,
  // 当前页面偏移量 用于配合后端特殊的要求
  pageInit: {
    // 初始化页码
    pageSizes: 10,
    currentPage: 1,
    total: 0,
    pageSizesArr: [10, 20, 30, 50]
  },
  headerRowStyle: void 0,
  headerCellStyle: void 0,
  rowStyle: void 0,
  cellStyle: void 0,
  isShowPage: void 0
});
exports.fpiTableConfig = fpiTableConfig;
