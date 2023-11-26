"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const _sfc_main = vue.defineComponent({
  name: "CrontabDay",
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
      workday: 1,
      cycle01: 1,
      cycle02: 2,
      average01: 1,
      average02: 1,
      checkboxList: [],
      checkNum: this.$props.check
    };
  },
  computed: {
    cycleTotal() {
      this.cycle01 = this.checkNum(this.cycle01, 1, 31);
      this.cycle02 = this.checkNum(this.cycle02, 1, 31);
      return `${this.cycle01}-${this.cycle02}`;
    },
    averageTotal() {
      this.average01 = this.checkNum(this.average01, 1, 31);
      this.average02 = this.checkNum(this.average02, 1, 31);
      return `${this.average01}/${this.average02}`;
    },
    workdayCheck() {
      this.workday = this.checkNum(this.workday, 1, 31);
      return this.workday;
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
    workdayCheck: "workdayChange",
    checkboxString: "checkboxChange"
  },
  methods: {
    radioChange() {
      "day rachange";
      if (this.radioValue === 1) {
        this.$emit("update", "day", "*", "day");
        this.$emit("update", "week", "?", "day");
        this.$emit("update", "mouth", "*", "day");
      } else {
        if (this.cron.hour === "*") {
          this.$emit("update", "hour", "0", "day");
        }
        if (this.cron.min === "*") {
          this.$emit("update", "min", "0", "day");
        }
        if (this.cron.second === "*") {
          this.$emit("update", "second", "0", "day");
        }
      }
      switch (this.radioValue) {
        case 2:
          this.$emit("update", "day", "?");
          break;
        case 3:
          this.$emit("update", "day", `${this.cycle01}-${this.cycle02}`);
          break;
        case 4:
          this.$emit("update", "day", `${this.average01}/${this.average02}`);
          break;
        case 5:
          this.$emit("update", "day", `${this.workday}W`);
          break;
        case 6:
          this.$emit("update", "day", "L");
          break;
        case 7:
          this.$emit("update", "day", this.checkboxString);
          break;
      }
    },
    cycleChange() {
      if (this.radioValue === 3) {
        this.$emit("update", "day", this.cycleTotal);
      }
    },
    averageChange() {
      if (this.radioValue === 4) {
        this.$emit("update", "day", this.averageTotal);
      }
    },
    workdayChange() {
      if (this.radioValue === 5) {
        this.$emit("update", "day", `${this.workday}W`);
      }
    },
    checkboxChange() {
      if (this.radioValue === 7) {
        this.$emit("update", "day", this.checkboxString);
      }
    },
    weekChange() {
      if (this.cron.week === "?" && Number(this.radioValue) === 2) {
        this.radioValue = 1;
      } else if (this.cron.week !== "?" && Number(this.radioValue) !== 2) {
        this.radioValue = 2;
      }
    }
  }
});
exports.default = _sfc_main;
