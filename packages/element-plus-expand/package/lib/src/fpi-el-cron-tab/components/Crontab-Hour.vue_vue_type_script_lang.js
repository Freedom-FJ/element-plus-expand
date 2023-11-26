"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const _sfc_main = vue.defineComponent({
  name: "CrontabHour",
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
      cycle01: 0,
      cycle02: 1,
      average01: 0,
      average02: 1,
      checkboxList: [],
      checkNum: this.$props.check
    };
  },
  computed: {
    cycleTotal() {
      this.cycle01 = this.checkNum(this.cycle01, 0, 23);
      this.cycle02 = this.checkNum(this.cycle02, 0, 23);
      return `${this.cycle01}-${this.cycle02}`;
    },
    averageTotal() {
      this.average01 = this.checkNum(this.average01, 0, 23);
      this.average02 = this.checkNum(this.average02, 1, 23);
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
      if (this.radioValue === 1) {
        this.$emit("update", "hour", "*", "hour");
        this.$emit("update", "day", "*", "hour");
      } else {
        if (this.cron.min === "*") {
          this.$emit("update", "min", "0", "hour");
        }
        if (this.cron.second === "*") {
          this.$emit("update", "second", "0", "hour");
        }
      }
      switch (this.radioValue) {
        case 2:
          this.$emit("update", "hour", `${this.cycle01}-${this.cycle02}`);
          break;
        case 3:
          this.$emit("update", "hour", `${this.average01}/${this.average02}`);
          break;
        case 4:
          this.$emit("update", "hour", this.checkboxString);
          break;
      }
    },
    cycleChange() {
      if (this.radioValue === 2) {
        this.$emit("update", "hour", this.cycleTotal);
      }
    },
    averageChange() {
      if (this.radioValue === 3) {
        this.$emit("update", "hour", this.averageTotal);
      }
    },
    checkboxChange() {
      if (this.radioValue === 4) {
        this.$emit("update", "hour", this.checkboxString);
      }
    }
  }
});
exports.default = _sfc_main;
