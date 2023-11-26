var __defProp = Object.defineProperty;
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
import { toRaw } from "vue";
import { deepClone } from "../../utils.mjs";
function exposeHook(data, props, singleTableRef, fun) {
  const getTableData = (types) => __async(this, null, function* () {
    if (!types || !props.isShowPage)
      return deepClone(toRaw(data.apiTableData));
    if (types === "all") {
      const returnData = yield fun.sendRequest(1, data.pageParameter.total, true);
      return returnData;
    }
    if (typeof types === "number")
      return deepClone(data.apiTableData[types]);
    if (typeof types === "object") {
      const returnData = yield fun.sendRequest(types.currentPage, types.pageSizes, true);
      return returnData;
    }
  });
  const reLoadTable = () => __async(this, null, function* () {
    if (props.api)
      data.apiTableData = yield fun.filterData();
    else
      data.apiTableData = deepClone(props.tableData);
  });
  const setCurrentRow = (row) => {
    var _a, _b;
    const currTableData = props.api ? data.apiTableData : props.tableData;
    if (typeof row === "number")
      singleTableRef && ((_a = singleTableRef.value) == null ? void 0 : _a.setCurrentRow(currTableData[row]));
    else
      singleTableRef && ((_b = singleTableRef.value) == null ? void 0 : _b.setCurrentRow(row));
  };
  const toggleSelection = (rows) => {
    var _a, _b;
    const currTableData = props.api ? data.apiTableData : props.tableData;
    if (rows === "all") {
      (_a = singleTableRef.value) == null ? void 0 : _a.toggleAllSelection();
    } else if (rows) {
      rows.forEach((row) => {
        var _a2, _b2;
        if (typeof row === "number")
          (_a2 = singleTableRef.value) == null ? void 0 : _a2.toggleRowSelection(currTableData[row]);
        else
          (_b2 = singleTableRef.value) == null ? void 0 : _b2.toggleRowSelection(row);
      });
    } else {
      (_b = singleTableRef.value) == null ? void 0 : _b.clearSelection();
    }
  };
  const getSelectionRows = () => {
    var _a;
    return (_a = singleTableRef.value) == null ? void 0 : _a.getSelectionRows();
  };
  const sort = (prop, order) => {
    var _a;
    return (_a = singleTableRef.value) == null ? void 0 : _a.sort(prop, order);
  };
  const toggleRowExpansion = (rowOrIndex, expanded) => {
    var _a, _b;
    const currTableData = props.api ? data.apiTableData : props.tableData;
    if (typeof rowOrIndex === "number")
      return (_a = singleTableRef.value) == null ? void 0 : _a.toggleRowExpansion(currTableData[rowOrIndex], expanded);
    return (_b = singleTableRef.value) == null ? void 0 : _b.toggleRowExpansion(rowOrIndex, expanded);
  };
  const changeLoading = (type) => __async(this, null, function* () {
    data.loading = type;
  });
  const clearSort = () => {
    var _a;
    return (_a = singleTableRef.value) == null ? void 0 : _a.clearSort();
  };
  const doLayout = () => {
    var _a;
    return (_a = singleTableRef.value) == null ? void 0 : _a.doLayout();
  };
  const scrollTo = (options, yCoord) => {
    var _a;
    return (_a = singleTableRef.value) == null ? void 0 : _a.scrollTo(options, yCoord);
  };
  const setScrollTop = (top) => {
    var _a;
    return (_a = singleTableRef.value) == null ? void 0 : _a.setScrollTop(top);
  };
  const clearFilter = (columnKeys) => {
    var _a;
    return (_a = singleTableRef.value) == null ? void 0 : _a.clearFilter(columnKeys);
  };
  const setScrollLeft = (top) => {
    var _a;
    return (_a = singleTableRef.value) == null ? void 0 : _a.setScrollLeft(top);
  };
  const setPage = (pageData) => {
    data.pageParameter = __spreadValues(__spreadValues({}, data.pageParameter), pageData);
    reLoadTable();
  };
  return {
    // 获取表格数据
    getTableData,
    // 请求数据
    reLoadTable,
    // 设置表格选中行
    setCurrentRow,
    // 复选框手动调用方法
    toggleSelection,
    // 获取复选框选中行
    getSelectionRows,
    // 手动排序
    sort,
    // 设置展开行展开或者收缩
    toggleRowExpansion,
    // 外部改变loading方法
    changeLoading,
    // 用于清空排序条件，数据会恢复成未排序的状态
    clearSort,
    // 传入由columnKey 组成的数组以清除指定列的过滤条件。 如果没有参数，清除所有过滤器
    clearFilter,
    // 对 Table 进行重新布局。 当表格可见性变化时，您可能需要调用此方法以获得正确的布局
    doLayout,
    // 滚动到一组特定坐标
    scrollTo,
    // 设置垂直滚动位置
    setScrollTop,
    // 设置水平滚动位置
    setScrollLeft,
    // 设置页码参数
    setPage
  };
}
export {
  exposeHook
};
