"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const _sfc_main = vue.defineComponent({
  name: "CrontabMin",
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
      radioValue: 1,
      cycle01: 1,
      cycle02: 2,
      average01: 0,
      average02: 1,
      checkboxList: [],
      checkNum: this.$props.check
    };
  },
  computed: {
    cycleTotal() {
      this.cycle01 = this.checkNum(this.cycle01, 0, 59);
      this.cycle02 = this.checkNum(this.cycle02, 0, 59);
      return `${this.cycle01}-${this.cycle02}`;
    },
    averageTotal() {
      this.average01 = this.checkNum(this.average01, 0, 59);
      this.average02 = this.checkNum(this.average02, 1, 59);
      return `${this.average01}/${this.average02}`;
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
    checkboxString: "checkboxChange"
  },
  methods: {
    radioChange() {
      if (this.radioValue !== 1 && this.cron.second === "*") {
        this.$emit("update", "second", "0", "min");
      }
      switch (this.radioValue) {
        case 1:
          this.$emit("update", "min", "*", "min");
          this.$emit("update", "hour", "*", "min");
          break;
        case 2:
          this.$emit("update", "min", `${this.cycle01}-${this.cycle02}`, "min");
          break;
        case 3:
          this.$emit("update", "min", `${this.average01}/${this.average02}`, "min");
          break;
        case 4:
          this.$emit("update", "min", this.checkboxString, "min");
          break;
      }
    },
    cycleChange() {
      if (this.radioValue === 2) {
        this.$emit("update", "min", this.cycleTotal, "min");
      }
    },
    averageChange() {
      if (this.radioValue === 3) {
        this.$emit("update", "min", this.averageTotal, "min");
      }
    },
    checkboxChange() {
      if (this.radioValue === 4) {
        this.$emit("update", "min", this.checkboxString, "min");
      }
    }
  }
});
exports.default = _sfc_main;
