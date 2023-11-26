"use strict";
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
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const CrontabSecond = require("./components/Crontab-Second.js");
const CrontabMin = require("./components/Crontab-Min.js");
const CrontabHour = require("./components/Crontab-Hour.js");
const CrontabDay = require("./components/Crontab-Day.js");
const CrontabMouth = require("./components/Crontab-Mouth.js");
const CrontabWeek = require("./components/Crontab-Week.js");
const CrontabYear = require("./components/Crontab-Year.js");
const CrontabResult = require("./components/Crontab-Result.js");
const _sfc_main = vue.defineComponent({
  name: "FpiElCronTab",
  components: {
    CrontabSecond: CrontabSecond.default,
    CrontabMin: CrontabMin.default,
    CrontabHour: CrontabHour.default,
    CrontabDay: CrontabDay.default,
    CrontabMouth: CrontabMouth.default,
    CrontabWeek: CrontabWeek.default,
    CrontabYear: CrontabYear.default,
    CrontabResult: CrontabResult.default,
    ElTabs: elementPlus.ElTabs,
    ElTabPane: elementPlus.ElTabPane
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    hideComponent: {
      type: Array,
      default: () => []
    },
    showResult: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      tabTitles: ["\u79D2", "\u5206\u949F", "\u5C0F\u65F6", "\u65E5", "\u6708", "\u5468", "\u5E74"],
      tabActive: 0,
      myindex: 0,
      showTab: false,
      contabValueObj: {
        second: "*",
        min: "*",
        hour: "*",
        day: "*",
        mouth: "*",
        week: "?",
        year: ""
      }
    };
  },
  computed: {
    contabValueString() {
      const obj = this.contabValueObj;
      const str = `${obj.second} ${obj.min} ${obj.hour} ${obj.day} ${obj.mouth} ${obj.week}${obj.year === "" ? "" : ` ${obj.year}`}`;
      return str;
    }
  },
  watch: {
    modelValue(newV) {
      if (newV && newV !== this.contabValueString) {
        this.resolveExp();
      }
    },
    contabValueString(newV) {
      if (newV !== this.modelValue) {
        this.$emit("update:modelValue", this.contabValueString);
      }
    }
  },
  mounted() {
    this.resolveExp();
    this.showTab = true;
  },
  methods: {
    shouldHide(key) {
      if (this.hideComponent && this.hideComponent.includes(key))
        return false;
      return true;
    },
    resolveExp() {
      if (this.modelValue) {
        const arr = this.modelValue.split(" ");
        if (arr.length >= 6) {
          const obj = {
            second: arr[0],
            min: arr[1],
            hour: arr[2],
            day: arr[3],
            mouth: arr[4],
            week: arr[5],
            year: arr[6] ? arr[6] : ""
          };
          this.contabValueObj = __spreadValues({}, obj);
          for (const i in obj) {
            if (obj[i])
              this.changeRadio(i, obj[i]);
          }
        }
      }
    },
    tabCheck(index) {
      this.tabActive = index;
    },
    updateContabValue(name, value, from) {
      this.contabValueObj[name] = value;
      if (from && from !== name) {
        this.changeRadio(name, value);
      }
    },
    changeRadio(name, value) {
      const arr = ["second", "min", "hour", "mouth"];
      const refName = `cron${name}`;
      let insVlaue;
      if (!this.$refs[refName])
        return;
      if (arr.includes(name)) {
        if (value === "*") {
          insVlaue = 1;
        } else if (value.includes("-")) {
          const indexArr = value.split("-");
          isNaN(indexArr[0]) ? this.$refs[refName].cycle01 = 0 : this.$refs[refName].cycle01 = indexArr[0];
          this.$refs[refName].cycle02 = indexArr[1];
          insVlaue = 2;
        } else if (value.includes("/")) {
          const indexArr = value.split("/");
          isNaN(indexArr[0]) ? this.$refs[refName].average01 = 0 : this.$refs[refName].average01 = indexArr[0];
          this.$refs[refName].average02 = indexArr[1];
          insVlaue = 3;
        } else {
          insVlaue = 4;
          this.$refs[refName].checkboxList = value.split(",");
        }
      } else if (name === "day") {
        if (value === "*") {
          insVlaue = 1;
        } else if (value === "?") {
          insVlaue = 2;
        } else if (value.includes("-")) {
          const indexArr = value.split("-");
          isNaN(indexArr[0]) ? this.$refs[refName].cycle01 = 0 : this.$refs[refName].cycle01 = indexArr[0];
          this.$refs[refName].cycle02 = indexArr[1];
          insVlaue = 3;
        } else if (value.includes("/")) {
          const indexArr = value.split("/");
          isNaN(indexArr[0]) ? this.$refs[refName].average01 = 0 : this.$refs[refName].average01 = indexArr[0];
          this.$refs[refName].average02 = indexArr[1];
          insVlaue = 4;
        } else if (value.includes("W")) {
          const indexArr = value.split("W");
          isNaN(indexArr[0]) ? this.$refs[refName].workday = 0 : this.$refs[refName].workday = indexArr[0];
          insVlaue = 5;
        } else if (value === "L") {
          insVlaue = 6;
        } else {
          this.$refs[refName].checkboxList = value.split(",");
          insVlaue = 7;
        }
      } else if (name === "week") {
        if (value === "*") {
          insVlaue = 1;
        } else if (value === "?") {
          insVlaue = 2;
        } else if (value.includes("-")) {
          const indexArr = value.split("-");
          isNaN(indexArr[0]) ? this.$refs[refName].cycle01 = 0 : this.$refs[refName].cycle01 = indexArr[0];
          this.$refs[refName].cycle02 = indexArr[1];
          insVlaue = 3;
        } else if (value.includes("#")) {
          const indexArr = value.split("#");
          isNaN(indexArr[0]) ? this.$refs[refName].average01 = 1 : this.$refs[refName].average01 = indexArr[0];
          this.$refs[refName].average02 = indexArr[1];
          insVlaue = 4;
        } else if (value.includes("L")) {
          const indexArr = value.split("L");
          isNaN(indexArr[0]) ? this.$refs[refName].weekday = 1 : this.$refs[refName].weekday = indexArr[0];
          insVlaue = 5;
        } else {
          this.$refs[refName].checkboxList = value.split(",");
          insVlaue = 7;
        }
      } else if (name === "year") {
        if (value === "") {
          insVlaue = 1;
        } else if (value === "*") {
          insVlaue = 2;
        } else if (value.includes("-")) {
          insVlaue = 3;
        } else if (value.includes("/")) {
          insVlaue = 4;
        } else {
          this.$refs[refName].checkboxList = value.split(",");
          insVlaue = 5;
        }
      }
      this.$refs[refName].radioValue = insVlaue;
    },
    checkNumber(value, minLimit, maxLimit) {
      value = Math.floor(value);
      if (value < minLimit) {
        value = minLimit;
      } else if (value > maxLimit) {
        value = maxLimit;
      }
      return value;
    }
  }
});
exports.default = _sfc_main;
