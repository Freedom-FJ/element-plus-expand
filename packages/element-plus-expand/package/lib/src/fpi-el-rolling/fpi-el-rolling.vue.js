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
const __default__ = {
  name: "FpiElRolling"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    // 播放的方向
    direction: {
      type: String,
      default: "x"
    },
    // 播放的开始和暂停
    modelValue: {
      type: Boolean,
      default: void 0
    },
    // 播放周期时间
    time: {
      type: Number,
      default: 10
    },
    // 触发播放改变逻辑
    action: {
      type: String,
      default: "hover"
    },
    // 是否可以鼠标滚动触发
    scrollAble: {
      type: Boolean,
      default: false
    },
    // 是否可以鼠标拖拽控制动画
    isDragControl: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "domChange", "change"],
  setup(__props, { expose: __expose, emit: emits }) {
    const props = __props;
    const rollingBody = vue.ref();
    const rollingBoxBody = vue.ref();
    const staticModelValue = vue.ref(true);
    const forcedStop = vue.ref(false);
    const animationName = `rollingsAnnualTasks${Math.floor(Math.random() * 1e5)}`;
    let distance = 0;
    let hasAnimation = false;
    let observer = null;
    const isRolling = vue.computed({
      get() {
        return props.modelValue === void 0 ? staticModelValue.value : props.modelValue;
      },
      set(val) {
        props.modelValue === void 0 ? staticModelValue.value = val : emits("update:modelValue", val);
      }
    });
    vue.watch(() => isRolling.value, (val) => {
      !hasAnimation && val && controlAnimation();
    });
    vue.watch(() => props.time, () => {
      isRolling.value && controlAnimation();
    });
    vue.onMounted(() => {
      checkDistance();
      observer = new MutationObserver((MutationObserver2) => {
        checkDistance(MutationObserver2);
      });
      vue.nextTick(() => {
        rollingBody.value && observer.observe(rollingBody.value, {
          attributes: true,
          childList: true,
          // attributeFilter: ['height'],
          characterData: true,
          subtree: true
        });
      });
    });
    vue.onUnmounted(() => {
      clearAnimation();
      observer && observer.disconnect();
    });
    const checkDistance = (MutationObserver2) => {
      const { fatherDistance, currDistance } = getDistance();
      if (currDistance === distance)
        return;
      distance = currDistance;
      MutationObserver2 && emits("domChange", currDistance, MutationObserver2);
      if (!isRolling.value)
        return;
      changeForcedStop(fatherDistance > currDistance);
    };
    const startAnimation = () => {
      isRolling.value = true;
      controlAnimation();
    };
    const getDistance = () => {
      const dom = rollingBody.value;
      const domFather = rollingBoxBody.value;
      const currDistance = (props.direction === "x" ? dom.offsetWidth : dom.offsetHeight) / (forcedStop.value ? 1 : 2);
      const fatherDistance = props.direction === "x" ? domFather.offsetWidth : domFather.offsetHeight;
      return { fatherDistance, currDistance };
    };
    const controlAnimation = () => {
      const dom = rollingBody.value;
      if (!dom)
        return;
      const { currDistance } = getDistance();
      distance = currDistance;
      const style = clearAnimation();
      if (!isRolling.value || !style)
        return;
      dom.style.animationPlayState = "";
      style.insertRule(`@keyframes ${animationName} {0%{ transform: translateX(0%);}100%{transform: translate${props.direction === "x" ? "X" : "Y"}(-${distance}px);}}`, 0);
      hasAnimation = true;
    };
    const clearAnimation = () => {
      const style = document.styleSheets[0];
      if (!style)
        return;
      const styleArray = [].slice.call(style.cssRules);
      const index = styleArray.findIndex((item) => item.name === animationName);
      if (index !== -1)
        style.deleteRule(index);
      hasAnimation = false;
      return style;
    };
    const mousewheel = (e) => {
      if (!props.scrollAble || forcedStop.value)
        return;
      e.preventDefault();
      let offset = props.direction === "y" ? e.wheelDeltaY : e.wheelDeltaX;
      const { fatherDistance } = getDistance();
      const currMaxDis = fatherDistance / 5 * 2;
      offset = offset > currMaxDis ? currMaxDis : offset < -currMaxDis ? -currMaxDis : offset;
      const element = document.getElementById(animationName);
      if (!element)
        return;
      const animation = element.getAnimations();
      animation.forEach((item) => {
        const currTime = (item.currentTime || 0) - offset * 10;
        item.currentTime = currTime < 0 ? props.time * 1e3 + currTime : currTime;
      });
    };
    const mouseenter = () => {
      if (forcedStop.value)
        return;
      if (props.action === "hover") {
        isRolling.value = false;
        emits("change", false);
      }
    };
    const mouseleave = () => {
      if (forcedStop.value)
        return;
      if (props.action === "hover") {
        isRolling.value = true;
        emits("change", true);
      }
    };
    const handleClick = () => {
      if (forcedStop.value)
        return;
      if (props.action === "click") {
        emits("change", !isRolling.value);
        isRolling.value = !isRolling.value;
      }
    };
    const handleDblclick = () => {
      if (forcedStop.value)
        return;
      if (props.action === "dblclick") {
        emits("change", !isRolling.value);
        isRolling.value = !isRolling.value;
      }
    };
    const changeForcedStop = (val) => {
      forcedStop.value = val;
      if (forcedStop.value)
        clearAnimation();
      else
        controlAnimation();
      return forcedStop;
    };
    const onMouseDownBorder = (e) => {
      if (!props.isDragControl || forcedStop.value)
        return;
      const element = document.getElementById(animationName);
      if (!element)
        return;
      const animation = element.getAnimations();
      const startDis = props.direction === "y" ? e.clientY : e.clientX;
      const { currDistance } = getDistance();
      const speed = currDistance / (props.time * 1e3);
      let rememberDis;
      const mouseMoveHander = (e2) => {
        const endDis = props.direction === "y" ? e2.clientY : e2.clientX;
        const distance2 = endDis - startDis;
        animation.forEach((item) => {
          if (!rememberDis)
            rememberDis = item.currentTime || 0;
          const currTime = rememberDis - distance2 / speed;
          item.currentTime = currTime < 0 ? props.time * 1e3 + currTime : currTime;
        });
      };
      document.addEventListener("mousemove", mouseMoveHander);
      const mouseUpHander = (e2) => {
        document.removeEventListener("mousemove", mouseMoveHander);
        document.removeEventListener("mouseup", mouseUpHander);
      };
      document.addEventListener("mouseup", mouseUpHander);
    };
    __expose({
      clearAnimation,
      controlAnimation,
      changeForcedStop,
      startAnimation,
      animationName,
      isRolling,
      forcedStop
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "rollingBoxBody",
        ref: rollingBoxBody,
        class: "fpi-el-rolling-box"
      }, [
        vue.createElementVNode("div", {
          id: animationName,
          ref_key: "rollingBody",
          ref: rollingBody,
          class: vue.normalizeClass(["fpi-el-rolling", { "fpi-el-rolling-flex": __props.direction === "x" }]),
          style: vue.normalizeStyle({
            animation: `${animationName} ${__props.time}s linear infinite`,
            animationPlayState: isRolling.value ? "running" : "paused",
            height: __props.direction === "x" ? "100%" : void 0,
            width: __props.direction === "y" ? "100%" : void 0
          }),
          onMouseenter: mouseenter,
          onMousedown: onMouseDownBorder,
          onMouseleave: mouseleave,
          onDblclick: handleDblclick,
          onClick: handleClick,
          onMousewheel: mousewheel
        }, [
          vue.renderSlot(_ctx.$slots, "default"),
          !forcedStop.value ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }) : vue.createCommentVNode("", true)
        ], 38)
      ], 512);
    };
  }
}));
exports.default = _sfc_main;
