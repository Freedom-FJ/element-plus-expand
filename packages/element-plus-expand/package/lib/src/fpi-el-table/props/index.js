"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const config = require("../config.js");
const fpiTableProps = {
  /**
   * @desc 表格列配置
   * @abstract 内部对象对应每个el-table-column的配置属性
   */
  column: {
    type: Array,
    default: () => {
      return [];
    }
  },
  /**
  * @desc api请求请求方法 如果为空则不会请求
  * @abstract  传入方法要求：入口传参是请求参数，返回一个promise
  * 以下为可以搭配api自动请求可以传入的其他属性
  * @param pageInit 初始化页码的默认值
  * @param pageReqExpr 页面请求对应页码参数的名称
  * @param pageTotalExpr 请求回传totol值对应在对象内的位置
  * @param currentPageOffset 当前页面偏移量例如第一页对应的传值为0
  * @param resExpr 请求回传对象对应的table数据在对象内的位置
  * @param filterMethod 对请求回传table数据进行过滤的回调函数
  * @param resPretreatment 手动处理res回调 返回table表格数组 async
  * @method reLoadTable 手动请求方法
  * @method getTableData 外层获取表格数据方法
  */
  api: {
    type: Function,
    default: void 0
  },
  /**
   * @desc 在传了api属性后create时是否自动请求表格数据
   * @abstract true不自动请求 false 自动请求需要手动调用reLoadTable方法请求
   */
  isLazyRequest: {
    type: Boolean,
    default: false
  },
  /**
   * @desc 除了页码变量以外的搜索列表参数
   * @abstract 需要双向数据绑定每次列表请求都会一起带上此对象内的参数
   */
  params: {
    type: Object,
    default: () => {
      return {};
    }
  },
  /**
   * @desc 对于请求回传对象对应的table数据在对象内的位置
   * @abstract 如果数据在res内的位置为如下则传入 data.entris
   * res: {
   *     data: {
   *          entris:[...]表格数组
   *     }
   * }
   */
  resExpr: {
    type: String,
    default: config.fpiTableConfig.value.resExpr || ""
  },
  /**
   * @desc 静态数据（当前页）
   * @abstract 当api为空时不会请求table表格数据 此变量同el-table的data属性
   * 以下为可以配合静态数据传入table的其他属性
   * @param pageParams 如果有页码需要传入页码变量
   * @param pageInit 初始化页码的值
   * @param pageReqExpr 页面请求对应页码参数的名称
   * @param currentPageOffset 当前页面偏移量例如第一页对应的传值为0
   * @method page-change 对应页码切换回调函数
   */
  tableData: {
    type: Object,
    default: void 0
  },
  /**
   * @desc 过滤数据方法
   * @abstract 对于回传数据每条进行过滤操作 类似于js filter的回调函数
   * @param row 对于每条数据的对象
   * @param index 索引
   * @param arr 整个表格数组
   * @return Boolean   true/返回  false/去除
   */
  filterMethod: {
    type: Function,
    default: void 0
  },
  /**
   * @desc api自动请求模式res预处理方法 可异步需要传入async方法
   * @abstract 可以用于将复杂的res回调处理成需要表格渲染的table数组
   * @abstract 也可用于代替resExpr参数
   * @return table表格数组
   */
  resPretreatment: {
    type: Function,
    default: void 0
  }
};
const pageProps = {
  /**
   * @desc 总共数据条数对应在请求返回对象内位置
   * @abstract 如果数据在res内的位置为如下则传入 data.total
   * res: {
   *     data: {
   *          total:56
   *     }
   * }
   */
  pageTotalExpr: {
    type: String,
    default: config.fpiTableConfig.value.pageTotalExpr || "total"
  },
  /**
   * @desc 静态组件时（api不传时）页码参数
   * @abstract 需要传入双向数据绑定对象
   * @abstract 里面包含pageSizes currentPage total
   * @param currentPage 当前页
   * @param pageSizes 当前每页显示条数
   * @param total 总共多少条
   */
  pageParams: {
    type: Object,
    default: void 0
  },
  /**
   * @desc 初始化页码
   * @abstract 需要修改表格默认的页码参数可以传入次对象
   * @abstract 里面包含pageSizes currentPage total pageSizesArr
   * @param currentPage 默认第几页
   * @param pageSizes 默认页码显示几条数据
   * @param total 默认页码总页数
   * @param pageSizesArr 默认页码尺寸
   */
  pageInit: {
    type: Object,
    default: () => {
      return config.fpiTableConfig.value.pageInit || {
        pageSizes: 10,
        currentPage: 1,
        total: 0,
        pageSizesArr: [10, 20, 30, 50]
      };
    }
  },
  /**
   * @desc 页面请求对应参数的名称
   * @abstract 页码的请求参数可能与默认的不一致时需要传入对象
   * @abstract 里面包含pageSizes currentPage变量对应新请求参数名称的字符串
   * @param 当前页对应的请求参数名称
   * @param 页码size对应的请求参数名称
   */
  pageReqExpr: {
    type: Object,
    default: () => {
      return config.fpiTableConfig.value.pageReqExpr || {
        pageSizes: "pageSize",
        currentPage: "pageNum"
      };
    }
  },
  /**
   * @desc 是否显示页码
   */
  isShowPage: {
    type: Boolean,
    default: config.fpiTableConfig.value.isShowPage === void 0 ? true : config.fpiTableConfig.value.isShowPage
  },
  /**
   * @desc 分页按钮类型
   * @abstract 同element的page属性
   */
  pageLayout: {
    type: String,
    default: "total,sizes,prev, pager,next,jumper"
  },
  /**
   * @desc 当前页面偏移量 用于配合后端特殊的要求
   * @abstract 例如第一页 对应请求应该传0页则传入-1
   */
  currentPageOffset: {
    type: Number,
    default: config.fpiTableConfig.value.currentPageOffset || 0
  },
  /**
   * @desc 是否显示页码按钮背景
   */
  isShowPageback: {
    type: Boolean,
    default: true
  },
  /**
   * @desc 是否使用小型分页样式
   */
  small: {
    type: Boolean,
    default: false
  },
  /**
   * @desc 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
   * @limit 5 ≤ x ≤ 21 的奇数
   */
  pagerCount: {
    type: Number,
    default: 7
  },
  /**
   * @desc 页码盒子的样式
   */
  pageBoxStyle: {
    type: Object,
    default: () => {
      return {};
    }
  }
};
const loadingProps = {
  /**
   * @desc 是否在表格显示加载图标
   * @abstract api 不为空时请求会自动显示加载图标
   * @abstract api 为空时可以手动调用changeLoading方法显示加载
   */
  isShowLoading: {
    type: Boolean,
    default: true
  },
  /**
   * @desc 加载图标文字
   */
  elementLoadingText: {
    type: String,
    default: "Loading..."
  },
  /**
   * @desc 背景遮罩的颜色
   */
  elementLoadingBackground: {
    type: String,
    default: void 0
  },
  /**
   * @desc 自定义加载图标 (与 element-loading-spinner 相同)
   */
  elementLoadingSvg: {
    type: String,
    default: void 0
  },
  /**
   * @desc loading svg图标遮罩偏移位置 逗号分割 四个数组
   * @abstract 例如 -10, -10, 50, 50
   */
  elementLoadingSvgViewBox: {
    type: String,
    default: void 0
  }
};
exports.fpiTableProps = fpiTableProps;
exports.loadingProps = loadingProps;
exports.pageProps = pageProps;
