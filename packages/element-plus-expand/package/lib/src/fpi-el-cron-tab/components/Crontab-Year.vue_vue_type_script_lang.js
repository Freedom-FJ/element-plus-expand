"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const _sfc_main = vue.defineComponent({
  name: "CrontabYear",
  components: {
    ElForm: elementPlus.ElForm,
    ElFormItem: elementPlus.ElFormItem,
    ElRadio: elementPlus.ElRadio,
    ElInputNumber: elementPlus.ElInputNumber,
    ElSelect: elementPlus.ElSelect,
    ElOption: elementPlus.ElOption
  },
  props: ["check", "mouth", "cron"],
  emits: ["update"],
  data() {
    return {
      fullYear: 0,
      radioValue: 1,
      cycle01: 0,
      cycle02: 0,
      average01: 0,
      average02: 1,
      checkboxList: [],
      checkNum: this.$props.check
    };
  },
  computed: {
    cycleTotal() {
      this.cycle01 = this.checkNum(this.cycle01, this.fullYear, this.fullYear + 100);
      this.cycle02 = this.checkNum(this.cycle02, this.fullYear + 1, this.fullYear + 101);
      return `${this.cycle01}-${this.cycle02}`;
    },
    averageTotal() {
      this.average01 = this.checkNum(this.average01, this.fullYear, this.fullYear + 100);
      this.average02 = this.checkNum(this.average02, 1, 10);
      return `${this.average01}/${this.average02}`;
    },
    checkboxString() {
      const str = this.checkboxList.join();
      return str;
    }
  },
  watch: {
    radioValue: "radioChange",
    cycleTotal: "cycleChange",
    averageTotal: "averageChange",
    checkboxString: "checkboxChange"
  },
  mounted() {
    this.fullYear = Number(new Date().getFullYear());
  },
  methods: {
    radioChange() {
      if (this.cron.mouth === "*") {
        this.$emit("update", "mouth", "0", "year");
      }
      if (this.cron.day === "*") {
        this.$emit("update", "day", "0", "year");
      }
      if (this.cron.hour === "*") {
        this.$emit("update", "hour", "0", "year");
      }
      if (this.cron.min === "*") {
        this.$emit("update", "min", "0", "year");
      }
      if (this.cron.second === "*") {
        this.$emit("update", "second", "0", "year");
      }
      switch (this.radioValue) {
        case 1:
          this.$emit("update", "year", "");
          break;
        case 2:
          this.$emit("update", "year", "*");
          break;
        case 3:
          this.$emit("update", "year", `${this.cycle01}-${this.cycle02}`);
          break;
        case 4:
          this.$emit("update", "year", `${this.average01}/${this.average02}`);
          break;
        case 5:
          this.$emit("update", "year", this.checkboxString);
          break;
      }
    },
    cycleChange() {
      if (this.radioValue === 3) {
        this.$emit("update", "year", this.cycleTotal);
      }
    },
    averageChange() {
      if (this.radioValue === 4) {
        this.$emit("update", "year", this.averageTotal);
      }
    },
    checkboxChange() {
      if (this.radioValue === 5) {
        this.$emit("update", "year", this.checkboxString);
      }
    }
  }
});
exports.default = _sfc_main;
