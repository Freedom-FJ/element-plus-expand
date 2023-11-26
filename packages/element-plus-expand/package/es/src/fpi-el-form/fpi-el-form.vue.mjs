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
import { defineComponent, useSlots, useAttrs, reactive, ref, watch, computed, toRefs, unref, openBlock, createElementBlock, createVNode, mergeProps, withCtx, Fragment, renderList, createBlock, isRef, renderSlot, normalizeStyle, createElementVNode, createTextVNode, toDisplayString, createCommentVNode } from "vue";
import { ElForm, ElFormItem, ElButton } from "element-plus";
import { equal, deepClone, DataType, isObject, isString, getDeepObj } from "../utils.mjs";
import _sfc_main$1 from "./fpi-form-item-node.vue.mjs";
const _hoisted_1 = {
  key: 0,
  class: "fpi-el-form"
};
const __default__ = {
  name: "FpiElForm"
};
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    /**
     * @desc 表单配置项
     * @abstract
     */
    formOption: {
      type: Array,
      default: () => {
        return [];
      }
    },
    /**
     * @desc 表单按钮配置项
     * @abstract
     */
    formBtnOption: {
      type: Array,
      default: () => {
        return [
          {
            type: "primary",
            label: "提交",
            onClick: "submit"
          },
          {
            label: "取消",
            onClick: "cancel"
          }
        ];
      }
    },
    /**
     * @name: rule 提供的语法糖触发校验的时机（自定义数组形式的rule无效）
     * @desc:
     * @return {*}
     */
    trigger: {
      type: String,
      default: "change"
    },
    /**
     * @name: 是否隐藏form按钮
     * @desc:
     * @return {*}
     */
    isShowBtnBox: {
      type: Boolean,
      default: true
    },
    /**
     * @desc 按钮盒子样式
     * @abstract
     */
    btnBoxStyle: {
      type: Object,
      default: void 0
    },
    /**
     * @desc 表单v-model 对象
     * @abstract
     */
    modelValue: {
      type: Object,
      default: () => {
        return null;
      }
    },
    /**
     * @desc  标签的长度
     * @abstract 例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。
     */
    labelWidth: {
      type: String,
      default: "120px"
    },
    /**
     * @desc  是否是文本形式表单
     */
    isText: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "update:modelValue",
    "submit",
    // 表单提交默认方法
    "cancel"
    // 表单取消默认方法
  ],
  setup(__props, { expose: __expose, emit: $emit }) {
    const props = __props;
    const slots = useSlots();
    const attrs = useAttrs();
    const staticRules = {
      unNull: { required: true, message: "不能为空", trigger: "change" },
      number: { type: "number", message: "请输入数字值", trigger: "change" },
      phone: { pattern: /^1[3456789]\d{9}$/, message: "手机号格式不正确" },
      checkbox: { type: "array", required: true, message: "请至少选择一项", trigger: "change" },
      select: { required: true, message: "请选择", trigger: "change" },
      date: { required: true, message: "请选择时间", trigger: "change" },
      email: { type: "email", required: true, message: "请输入正确的邮箱格式", trigger: "change" }
    };
    const data = reactive({
      form: null,
      // form 表格对象数据
      rulesData: null,
      // rules对象
      timer: null,
      // 定时器防抖
      refInput: {}
      // 所有输入框dom节点
    });
    const fpiForm = ref();
    watch(
      () => props.modelValue,
      (val) => {
        if (!equal(data.form, val))
          data.form = deepClone(val);
      },
      { deep: true }
    );
    watch(
      () => props.formOption,
      () => {
        initForm();
        setTimeout(() => {
        });
      },
      { deep: true }
    );
    const getBtnAttrib = computed(() => (val) => {
      const attr = __spreadValues({}, val);
      if (attr.onClick) {
        attr.click = attr.onClick;
        attr.onClick = void 0;
      }
      return attr;
    });
    const initForm = (isFirst) => {
      if (!["object", "array"].includes(DataType(data.form)) || props.isText)
        return;
      const currFrom = data.form;
      const { formOption } = props;
      const currRules = {};
      deepDetailParam(currFrom, currRules, formOption, isFirst);
      data.rulesData = currRules;
      isFirst && $emit("update:modelValue", currFrom);
    };
    const deepDetailParam = (currFrom, currRules, formOption, isFirst) => {
      formOption.forEach((item) => {
        item.col ? deepDetailParam(currFrom, currRules, item.col, isFirst) : initParams(currFrom, currRules, item, isFirst);
      });
    };
    const initParams = (currFrom, currRules, item, isFirst) => {
      if (item.type === "text" || !item.prop)
        return;
      "value" in item && isFirst && (currFrom[item.prop] = item.value);
      if (item.type === "select" && item.defaultSelect !== void 0 && item.option && item.option.length >= item.defaultSelect + 1) {
        const value = item.option[item.defaultSelect].value;
        currFrom[item.prop] = value;
      }
      currRules[item.prop] = currRules[item.prop] ? [...currRules[item.prop], ...getStaticRules(item.rules)] : getStaticRules(item.rules);
    };
    const getStaticRules = (rules) => {
      const returnRules = [];
      if (isObject(rules)) {
        Object.keys(rules).forEach((key) => {
          if (key in staticRules && isString(rules[key])) {
            returnRules.push(__spreadProps(__spreadValues({}, staticRules[key]), {
              message: rules[key],
              trigger: props.trigger
            }));
          }
        });
        return returnRules;
      }
      if (isString(rules)) {
        const rulesArr = rules.split(",");
        rulesArr.forEach((item) => {
          const currRules = staticRules[item];
          currRules && returnRules.push(__spreadProps(__spreadValues({}, currRules), {
            trigger: props.trigger
          }));
        });
        return returnRules;
      }
      return rules || [];
    };
    const btnMethodsControl = (e, clickKey) => {
      switch (clickKey) {
        case "submit":
          submitForm(e);
          break;
        case "cancel":
          cancel(e);
          break;
        default:
          clickKey && clickKey(fpiForm.value, e);
      }
    };
    const upDataValue = (key, value) => {
      if (!data.form)
        return;
      getDeepObj(data.form, key, value);
      $emit("update:modelValue", data.form);
    };
    const submitForm = (e) => {
      const formRef = fpiForm.value;
      formRef && formRef.validate((valid) => {
        if (valid)
          $emit("submit", formRef, e);
      });
    };
    const cancel = (e) => {
      const formRef = fpiForm.value;
      formRef && formRef.resetFields();
      $emit("update:modelValue", data.form);
      $emit("cancel", formRef, e);
    };
    const upDataRefInput = (key, ref2) => {
      data.refInput[key] = ref2;
    };
    const getFormData = () => {
      return data.form;
    };
    const validate = (callback) => {
      return fpiForm.value && fpiForm.value.validate(callback);
    };
    const validateField = (props2, callback) => {
      return fpiForm.value && fpiForm.value.validateField(props2, callback);
    };
    const resetFields = (props2) => {
      fpiForm.value && fpiForm.value.resetFields(props2);
    };
    const scrollToField = (prop) => {
      fpiForm.value && fpiForm.value.scrollToField(prop);
    };
    const clearValidate = (props2) => {
      fpiForm.value && fpiForm.value.clearValidate(props2);
    };
    const getForm = () => {
      return fpiForm.value;
    };
    data.form = deepClone(props.modelValue);
    initForm(true);
    const { form, rulesData } = toRefs(data);
    __expose({
      getFormData,
      // 获取表单obj变量
      getForm,
      // 获取 form dom
      validate,
      // 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。
      validateField,
      // 验证具体的某个字段。
      resetFields,
      // 重置该表单项，将其值重置为初始值，并移除校验结果。
      scrollToField,
      // 滚动到指定的字段
      clearValidate,
      // 清理某个字段的表单验证信息
      refInput: data.refInput
      // 所有input dom节点
    });
    return (_ctx, _cache) => {
      return unref(form) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElForm), mergeProps(unref(attrs), {
          ref_key: "fpiForm",
          ref: fpiForm,
          model: unref(form),
          "label-width": __props.labelWidth,
          rules: unref(rulesData) || {}
        }), {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.formOption, (item, index) => {
              return openBlock(), createBlock(_sfc_main$1, {
                key: index,
                modelValue: unref(form),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(form) ? form.value = $event : null),
                "form-item": item,
                "is-text": __props.isText,
                "form-key": index,
                slots: unref(slots),
                onUpDataRefInput: upDataRefInput,
                onUpDataValue: upDataValue
              }, null, 8, ["modelValue", "form-item", "is-text", "form-key", "slots"]);
            }), 128))
          ]),
          _: 1
        }, 16, ["model", "label-width", "rules"]),
        renderSlot(_ctx.$slots, "default"),
        __props.isShowBtnBox ? (openBlock(), createBlock(unref(ElFormItem), {
          key: 0,
          style: normalizeStyle({ "margin-left": __props.labelWidth })
        }, {
          default: withCtx(() => [
            createElementVNode("div", {
              style: normalizeStyle(__props.btnBoxStyle)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.formBtnOption, (item, index) => {
                return openBlock(), createBlock(unref(ElButton), mergeProps(getBtnAttrib.value(item), {
                  key: index,
                  onClick: (e) => btnMethodsControl(e, item.onClick)
                }), {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1040, ["onClick"]);
              }), 128))
            ], 4)
          ]),
          _: 1
        }, 8, ["style"])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true);
    };
  }
}));
export {
  _sfc_main as default
};
