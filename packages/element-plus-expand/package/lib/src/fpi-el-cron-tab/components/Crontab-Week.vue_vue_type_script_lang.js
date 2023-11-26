"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const _sfc_main = vue.defineComponent({
  name: "CrontabWeek",
  components: {
    ElForm: elementPlus.ElForm,
    ElFormItem: elementPlus.ElFormItem,
    ElRadio: elementPlus.ElRadio,
    ElInputNumber: elementPlus.ElInputNumber,
    ElSelect: elementPlus.ElSelect,
    ElOption: elementPlus.ElOption
  },
  props: ["check", "cron"],
  emits: ["update"],
  data() {
    return {
      radioValue: 2,
      weekday: 1,
      cycle01: 1,
      cycle02: 2,
      average01: 1,
      average02: 1,
      checkboxList: [],
      weekList: ["\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D", "\u5468\u65E5"],
      checkNum: this.$props.check
    };
  },
  computed: {
    cycleTotal() {
      this.cycle01 = this.checkNum(this.cycle01, 1, 7);
      this.cycle02 = this.checkNum(this.cycle02, 1, 7);
      return `${this.cycle01}-${this.cycle02}`;
    },
    averageTotal() {
      this.average01 = this.checkNum(this.average01, 1, 4);
      this.average02 = this.checkNum(this.average02, 1, 7);
      return `${this.average01}#${this.average02}`;
    },
    weekdayCheck() {
      this.weekday = this.checkNum(this.weekday, 1, 7);
      return this.weekday;
    },
    checkboxString() {
      const str = this.checkboxList.join();
      return str === "" ? "*" : str;
    }
  },
  watch: {
    radioValue: "radioChange",
    cycleTotal: "cycleChange",
    averageTotal: "averageChange",
    weekdayCheck: "weekdayChange",
    checkboxString: "checkboxChange"
  },
  methods: {
    radioChange() {
      if (this.radioValue === 1) {
        this.$emit("update", "week", "*");
        this.$emit("update", "year", "*");
      } else {
        if (this.cron.mouth === "*") {
          this.$emit("update", "mouth", "0", "week");
        }
        if (this.cron.day === "*") {
          this.$emit("update", "day", "0", "week");
        }
        if (this.cron.hour === "*") {
          this.$emit("update", "hour", "0", "week");
        }
        if (this.cron.min === "*") {
          this.$emit("update", "min", "0", "week");
        }
        if (this.cron.second === "*") {
          this.$emit("update", "second", "0", "week");
        }
      }
      switch (this.radioValue) {
        case 2:
          this.$emit("update", "week", "?");
          break;
        case 3:
          this.$emit("update", "week", `${this.cycle01}-${this.cycle02}`);
          break;
        case 4:
          this.$emit("update", "week", `${this.average01}#${this.average02}`);
          break;
        case 5:
          this.$emit("update", "week", `${this.weekday}L`);
          break;
        case 6:
          this.$emit("update", "week", this.checkboxString);
          break;
      }
    },
    cycleChange() {
      if (this.radioValue === 3) {
        this.$emit("update", "week", this.cycleTotal);
      }
    },
    averageChange() {
      if (this.radioValue === 4) {
        this.$emit("update", "week", this.averageTotal);
      }
    },
    weekdayChange() {
      if (this.radioValue === 5) {
        this.$emit("update", "week", `${this.weekday}L`);
      }
    },
    checkboxChange() {
      if (this.radioValue === 6) {
        this.$emit("update", "week", this.checkboxString);
      }
    }
  }
});
exports.default = _sfc_main;
