import { defineComponent } from "vue";
import { ElForm, ElFormItem, ElRadio, ElInputNumber, ElSelect, ElOption } from "element-plus";
const _sfc_main = defineComponent({
  name: "CrontabYear",
  components: {
    ElForm,
    ElFormItem,
    ElRadio,
    ElInputNumber,
    ElSelect,
    ElOption
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
    // 计算两个周期值
    cycleTotal() {
      this.cycle01 = this.checkNum(this.cycle01, this.fullYear, this.fullYear + 100);
      this.cycle02 = this.checkNum(this.cycle02, this.fullYear + 1, this.fullYear + 101);
      return `${this.cycle01}-${this.cycle02}`;
    },
    // 计算平均用到的值
    averageTotal() {
      this.average01 = this.checkNum(this.average01, this.fullYear, this.fullYear + 100);
      this.average02 = this.checkNum(this.average02, 1, 10);
      return `${this.average01}/${this.average02}`;
    },
    // 计算勾选的checkbox值合集
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
    this.fullYear = Number((/* @__PURE__ */ new Date()).getFullYear());
  },
  methods: {
    // 单选按钮值变化时
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
    // 周期两个值变化时
    cycleChange() {
      if (this.radioValue === 3) {
        this.$emit("update", "year", this.cycleTotal);
      }
    },
    // 平均两个值变化时
    averageChange() {
      if (this.radioValue === 4) {
        this.$emit("update", "year", this.averageTotal);
      }
    },
    // checkbox值变化时
    checkboxChange() {
      if (this.radioValue === 5) {
        this.$emit("update", "year", this.checkboxString);
      }
    }
  }
});
export {
  _sfc_main as default
};
