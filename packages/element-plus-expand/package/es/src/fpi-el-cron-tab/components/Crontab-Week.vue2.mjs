import { defineComponent } from "vue";
import { ElForm, ElFormItem, ElRadio, ElInputNumber, ElSelect, ElOption } from "element-plus";
const _sfc_main = defineComponent({
  name: "CrontabWeek",
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
      radioValue: 2,
      weekday: 1,
      cycle01: 1,
      cycle02: 2,
      average01: 1,
      average02: 1,
      checkboxList: [],
      weekList: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      checkNum: this.$props.check
    };
  },
  computed: {
    // 计算两个周期值
    cycleTotal() {
      this.cycle01 = this.checkNum(this.cycle01, 1, 7);
      this.cycle02 = this.checkNum(this.cycle02, 1, 7);
      return `${this.cycle01}-${this.cycle02}`;
    },
    // 计算平均用到的值
    averageTotal() {
      this.average01 = this.checkNum(this.average01, 1, 4);
      this.average02 = this.checkNum(this.average02, 1, 7);
      return `${this.average01}#${this.average02}`;
    },
    // 最近的工作日（格式）
    weekdayCheck() {
      this.weekday = this.checkNum(this.weekday, 1, 7);
      return this.weekday;
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
    weekdayCheck: "weekdayChange",
    checkboxString: "checkboxChange"
  },
  methods: {
    // 单选按钮值变化时
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
    // 根据互斥事件，更改radio的值
    // 周期两个值变化时
    cycleChange() {
      if (this.radioValue === 3) {
        this.$emit("update", "week", this.cycleTotal);
      }
    },
    // 平均两个值变化时
    averageChange() {
      if (this.radioValue === 4) {
        this.$emit("update", "week", this.averageTotal);
      }
    },
    // 最近工作日值变化时
    weekdayChange() {
      if (this.radioValue === 5) {
        this.$emit("update", "week", `${this.weekday}L`);
      }
    },
    // checkbox值变化时
    checkboxChange() {
      if (this.radioValue === 6) {
        this.$emit("update", "week", this.checkboxString);
      }
    }
  }
});
export {
  _sfc_main as default
};
