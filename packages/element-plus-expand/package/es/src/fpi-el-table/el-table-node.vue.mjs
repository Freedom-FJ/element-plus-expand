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
import { defineComponent, openBlock, createBlock, unref, h } from "vue";
import { ElTableColumn } from "element-plus";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "el-table-node",
  props: {
    /**
     * @desc 表格column列对象
     */
    columnData: {
      type: Object,
      default: () => {
        return {};
      }
    },
    /**
     * @desc 父亲插槽
     */
    slots: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    const getRenderColumn = (columnData) => {
      return h(
        ElTableColumn,
        __spreadValues({}, columnData),
        __spreadValues(__spreadValues({}, getDefault(columnData)), getHeader(columnData))
      );
    };
    const getHeader = (columnData) => {
      return props.slots[`${columnData.prop}-header`] ? getHeaderNode(columnData) : "";
    };
    const getDefault = (columnData) => {
      return {
        default(scope) {
          return getReturnNode(scope, columnData);
        }
      };
    };
    const getReturnNode = (scope, columnData) => {
      const { type, isSlot, column, prop, render } = columnData;
      let returnNode = null;
      if (render)
        returnNode = render(scope, columnData);
      else if (column && column.length)
        returnNode = getColumnNode(columnData);
      else if (prop && isSlot && prop in props.slots)
        returnNode = getSlotNode(scope, columnData);
      else if (type === "tools")
        returnNode = getToolNode(scope, columnData);
      else if (type === "expand")
        returnNode = getExtendNode(scope);
      return returnNode;
    };
    const getHeaderNode = (columnData) => {
      return {
        header(scope) {
          return h(
            "div",
            props.slots[`${columnData.prop}-header`] ? props.slots[`${columnData.prop}-header`]({ scope, item: columnData }) : h("span", columnData.label)
          );
        }
      };
    };
    const getExtendNode = (scope) => {
      return h(
        "div",
        props.slots["expand-slot"] ? props.slots["expand-slot"](scope) : ""
      );
    };
    const getSlotNode = (scope, columnData) => {
      const propKey = columnData.prop || "";
      return h(
        "div",
        props.slots[propKey]({ scope, item: columnData })
      );
    };
    const getToolNode = (scope, columnData) => {
      return h(
        "div",
        {
          class: "fpi-tools-box",
          style: __spreadValues({
            "display": "flex",
            "justify-content": "space-between",
            "width": "100%"
          }, columnData.toolsStyle ? columnData.toolsStyle() : {})
        },
        (columnData.toolsArr || []).map((item, index) => getToolTipsNode(item, index, scope))
      );
    };
    const getToolTipsNode = (item, index, scope) => {
      return h(
        "div",
        {
          class: "fpi-tools-tip",
          key: index,
          style: __spreadValues({
            "font-size": "14px",
            "font-weight": "normal",
            "line-height": "22px",
            "color": "#0084ff",
            "letter-spacing": 0,
            "cursor": "pointer"
          }, item.style ? item.style() : {}),
          onClick: (e) => {
            e.stopPropagation();
            item.click && item.click(scope.row, scope.$index);
          }
        },
        item.label
      );
    };
    const getColumnNode = (columnData) => {
      return columnData.column.map((column) => {
        return getRenderColumn(column);
      });
    };
    const elTableNode = defineComponent({
      render() {
        return getRenderColumn(props.columnData);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(elTableNode));
    };
  }
});
export {
  _sfc_main as default
};
