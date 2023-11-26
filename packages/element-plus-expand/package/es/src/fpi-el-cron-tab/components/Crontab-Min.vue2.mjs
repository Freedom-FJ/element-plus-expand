import { defineComponent } from "vue";
import { ElForm, ElFormItem, ElRadio, ElInputNumber, ElSelect, ElOption } from "element-plus";
const _sfc_main = defineComponent({
  name: "CrontabMin",
  components: {
    ElForm,
    ElFormItem,
    ElRadio,
    ElInputNumber,
    ElSelect,
    ElOption
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
    // 计算两个周期值
    cycleTotal() {
      this.cycle01 = this.checkNum(this.cycle01, 0, 59);
      this.cycle02 = this.checkNum(this.cycle02, 0, 59);
      return `${this.cycle01}-${this.cycle02}`;
    },
    // 计算平均用到的值
    averageTotal() {
      this.average01 = this.checkNum(this.average01, 0, 59);
      this.average02 = this.checkNum(this.average02, 1, 59);
      return `${this.average01}/${this.average02}`;
    },
    // 计算勾选的checkbox值合集
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
    // 单选按钮值变化时
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
    // 周期两个值变化时
    cycleChange() {
      if (this.radioValue === 2) {
        this.$emit("update", "min", this.cycleTotal, "min");
      }
    },
    // 平均两个值变化时
    averageChange() {
      if (this.radioValue === 3) {
        this.$emit("update", "min", this.averageTotal, "min");
      }
    },
    // checkbox值变化时
    checkboxChange() {
      if (this.radioValue === 4) {
        this.$emit("update", "min", this.checkboxString, "min");
      }
    }
  }
});
export {
  _sfc_main as default
};
