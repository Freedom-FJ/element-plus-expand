"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const elementPlus = require("element-plus");
const _sfc_main = vue.defineComponent({
  name: "CrontabSecond",
  components: {
    ElForm: elementPlus.ElForm,
    ElFormItem: elementPlus.ElFormItem,
    ElRadio: elementPlus.ElRadio,
    ElInputNumber: elementPlus.ElInputNumber,
    ElSelect: elementPlus.ElSelect,
    ElOption: elementPlus.ElOption
  },
  props: ["check", "radioParent"],
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
    checkboxString: "checkboxChange",
    radioParent() {
      this.radioValue = this.radioParent;
    }
  },
  methods: {
    radioChange() {
      switch (this.radioValue) {
        case 1:
          this.$emit("update", "second", "*", "second");
          this.$emit("update", "min", "*", "second");
          break;
        case 2:
          this.$emit("update", "second", `${this.cycle01}-${this.cycle02}`);
          break;
        case 3:
          this.$emit("update", "second", `${this.average01}/${this.average02}`);
          break;
        case 4:
          this.$emit("update", "second", this.checkboxString);
          break;
      }
    },
    cycleChange() {
      if (this.radioValue === 2) {
        this.$emit("update", "second", this.cycleTotal);
      }
    },
    averageChange() {
      if (this.radioValue === 3) {
        this.$emit("update", "second", this.averageTotal);
      }
    },
    checkboxChange() {
      if (this.radioValue === 4) {
        this.$emit("update", "second", this.checkboxString);
      }
    },
    othChange() {
      const ins = this.cron.second("\u53CD\u89E3\u6790 second", ins);
      if (ins === "*") {
        this.radioValue = 1;
      } else if (ins.includes("-")) {
        this.radioValue = 2;
      } else if (ins.includes("/")) {
        this.radioValue = 3;
      } else {
        this.radioValue = 4;
        this.checkboxList = ins.split(",");
      }
    }
  }
});
exports.default = _sfc_main;
