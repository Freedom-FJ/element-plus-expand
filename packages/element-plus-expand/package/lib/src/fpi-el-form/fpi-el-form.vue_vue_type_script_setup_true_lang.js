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
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const utils = require("../utils.js");
const fpiFormItemNode_vue_vue_type_script_setup_true_lang = require("./fpi-form-item-node.vue_vue_type_script_setup_true_lang.js");
const _hoisted_1 = {
  key: 0,
  class: "fpi-el-form"
};
const __default__ = {
  name: "FpiElForm"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    formOption: {
      type: Array,
      default: () => {
        return [];
      }
    },
    formBtnOption: {
      type: Array,
      default: () => {
        return [
          {
            type: "primary",
            label: "\u63D0\u4EA4",
            onClick: "submit"
          },
          {
            label: "\u53D6\u6D88",
            onClick: "cancel"
          }
        ];
      }
    },
    trigger: {
      type: String,
      default: "change"
    },
    isShowBtnBox: {
      type: Boolean,
      default: true
    },
    btnBoxStyle: {
      type: Object,
      default: void 0
    },
    modelValue: {
      type: Object,
      default: () => {
        return null;
      }
    },
    labelWidth: {
      type: String,
      default: "120px"
    },
    isText: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    "update:modelValue",
    "submit",
    "cancel"
  ],
  setup(__props, { expose: __expose, emit: $emit }) {
    const props = __props;
    const slots = vue.useSlots();
    const attrs = vue.useAttrs();
    const staticRules = {
      unNull: { required: true, message: "\u4E0D\u80FD\u4E3A\u7A7A", trigger: "change" },
      number: { type: "number", message: "\u8BF7\u8F93\u5165\u6570\u5B57\u503C", trigger: "change" },
      phone: { pattern: /^1[3456789]\d{9}$/, message: "\u624B\u673A\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E" },
      checkbox: { type: "array", required: true, message: "\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u9879", trigger: "change" },
      select: { required: true, message: "\u8BF7\u9009\u62E9", trigger: "change" },
      date: { required: true, message: "\u8BF7\u9009\u62E9\u65F6\u95F4", trigger: "change" },
      email: { type: "email", required: true, message: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F", trigger: "change" }
    };
    const data = vue.reactive({
      form: null,
      rulesData: null,
      timer: null,
      refInput: {}
    });
    const fpiForm = vue.ref();
    vue.watch(
      () => props.modelValue,
      (val) => {
        if (!utils.equal(data.form, val))
          data.form = utils.deepClone(val);
      },
      { deep: true }
    );
    vue.watch(
      () => props.formOption,
      () => {
        initForm();
        setTimeout(() => {
        });
      },
      { deep: true }
    );
    const getBtnAttrib = vue.computed(() => (val) => {
      const attr = __spreadValues({}, val);
      if (attr.onClick) {
        attr.click = attr.onClick;
        attr.onClick = void 0;
      }
      return attr;
    });
    const initForm = (isFirst) => {
      if (!["object", "array"].includes(utils.DataType(data.form)) || props.isText)
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
      if (utils.isObject(rules)) {
        Object.keys(rules).forEach((key) => {
          if (key in staticRules && utils.isString(rules[key])) {
            returnRules.push(__spreadProps(__spreadValues({}, staticRules[key]), {
              message: rules[key],
              trigger: props.trigger
            }));
          }
        });
        return returnRules;
      }
      if (utils.isString(rules)) {
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
      utils.getDeepObj(data.form, key, value);
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
    data.form = utils.deepClone(props.modelValue);
    initForm(true);
    const { form, rulesData } = vue.toRefs(data);
    __expose({
      getFormData,
      getForm,
      validate,
      validateField,
      resetFields,
      scrollToField,
      clearValidate,
      refInput: data.refInput
    });
    return (_ctx, _cache) => {
      return vue.unref(form) ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createVNode(vue.unref(elementPlus.ElForm), vue.mergeProps(vue.unref(attrs), {
          ref_key: "fpiForm",
          ref: fpiForm,
          model: vue.unref(form),
          "label-width": __props.labelWidth,
          rules: vue.unref(rulesData) || {}
        }), {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.formOption, (item, index) => {
              return vue.openBlock(), vue.createBlock(fpiFormItemNode_vue_vue_type_script_setup_true_lang.default, {
                key: index,
                modelValue: vue.unref(form),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => vue.isRef(form) ? form.value = $event : null),
                "form-item": item,
                "is-text": __props.isText,
                "form-key": index,
                slots: vue.unref(slots),
                onUpDataRefInput: upDataRefInput,
                onUpDataValue: upDataValue
              }, null, 8, ["modelValue", "form-item", "is-text", "form-key", "slots"]);
            }), 128))
          ]),
          _: 1
        }, 16, ["model", "label-width", "rules"]),
        vue.renderSlot(_ctx.$slots, "default"),
        __props.isShowBtnBox ? (vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElFormItem), {
          key: 0,
          style: vue.normalizeStyle({ "margin-left": __props.labelWidth })
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("div", {
              style: vue.normalizeStyle(__props.btnBoxStyle)
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.formBtnOption, (item, index) => {
                return vue.openBlock(), vue.createBlock(vue.unref(elementPlus.ElButton), vue.mergeProps(getBtnAttrib.value(item), {
                  key: index,
                  onClick: (e) => btnMethodsControl(e, item.onClick)
                }), {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(vue.toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1040, ["onClick"]);
              }), 128))
            ], 4)
          ]),
          _: 1
        }, 8, ["style"])) : vue.createCommentVNode("", true)
      ])) : vue.createCommentVNode("", true);
    };
  }
}));
exports.default = _sfc_main;
