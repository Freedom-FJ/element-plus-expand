import { defineComponent } from "vue";
const _sfc_main = defineComponent({
  name: "CrontabResult",
  props: ["ex"],
  emits: ["update"],
  data() {
    return {
      dayRule: "",
      dayRuleSup: "",
      dateArr: [],
      resultList: [],
      isShow: false
    };
  },
  watch: {
    ex: "expressionChange"
  },
  mounted() {
    this.expressionChange();
  },
  methods: {
    // 表达式值变化时，开始去计算结果
    expressionChange() {
      this.isShow = false;
      const ruleArr = this.$props.ex.split(" ");
      let nums = 0;
      const resultArr = [];
      const nTime = /* @__PURE__ */ new Date();
      const nYear = nTime.getFullYear();
      let nMouth = nTime.getMonth() + 1;
      let nDay = nTime.getDate();
      let nHour = nTime.getHours();
      let nMin = nTime.getMinutes();
      let nSecond = nTime.getSeconds();
      this.getSecondArr(ruleArr[0]);
      this.getMinArr(ruleArr[1]);
      this.getHourArr(ruleArr[2]);
      this.getDayArr(ruleArr[3]);
      this.getMouthArr(ruleArr[4]);
      this.getWeekArr(ruleArr[5]);
      this.getYearArr(ruleArr[6], nYear);
      const sDate = this.dateArr[0];
      const mDate = this.dateArr[1];
      const hDate = this.dateArr[2];
      const DDate = this.dateArr[3];
      const MDate = this.dateArr[4];
      const YDate = this.dateArr[5];
      let sIdx = this.getIndex(sDate, nSecond);
      let mIdx = this.getIndex(mDate, nMin);
      let hIdx = this.getIndex(hDate, nHour);
      let DIdx = this.getIndex(DDate, nDay);
      let MIdx = this.getIndex(MDate, nMouth);
      const YIdx = this.getIndex(YDate, nYear);
      const resetSecond = function() {
        sIdx = 0;
        nSecond = sDate[sIdx];
      };
      const resetMin = function() {
        mIdx = 0;
        nMin = mDate[mIdx];
        resetSecond();
      };
      const resetHour = function() {
        hIdx = 0;
        nHour = hDate[hIdx];
        resetMin();
      };
      const resetDay = function() {
        DIdx = 0;
        nDay = DDate[DIdx];
        resetHour();
      };
      const resetMouth = function() {
        MIdx = 0;
        nMouth = MDate[MIdx];
        resetDay();
      };
      if (nYear !== YDate[YIdx]) {
        resetMouth();
      }
      if (nMouth !== MDate[MIdx]) {
        resetDay();
      }
      if (nDay !== DDate[DIdx]) {
        resetHour();
      }
      if (nHour !== hDate[hIdx]) {
        resetMin();
      }
      if (nMin !== mDate[mIdx]) {
        resetSecond();
      }
      goYear:
        for (let Yi = YIdx; Yi < YDate.length; Yi++) {
          const YY = YDate[Yi];
          if (nMouth > MDate[MDate.length - 1]) {
            resetMouth();
            continue;
          }
          goMouth:
            for (let Mi = MIdx; Mi < MDate.length; Mi++) {
              let MM = MDate[Mi];
              MM = MM < 10 ? `0${MM}` : MM;
              if (nDay > DDate[DDate.length - 1]) {
                resetDay();
                if (Mi === MDate.length - 1) {
                  resetMouth();
                  continue goYear;
                }
                continue;
              }
              goDay:
                for (let Di = DIdx; Di < DDate.length; Di++) {
                  let DD = DDate[Di];
                  let thisDD = DD < 10 ? `0${DD}` : DD;
                  if (nHour > hDate[hDate.length - 1]) {
                    resetHour();
                    if (Di === DDate.length - 1) {
                      resetDay();
                      if (Mi === MDate.length - 1) {
                        resetMouth();
                        continue goYear;
                      }
                      continue goMouth;
                    }
                    continue;
                  }
                  if (this.checkDate(`${YY}-${MM}-${thisDD} 00:00:00`) !== true && this.dayRule !== "workDay" && this.dayRule !== "lastWeek" && this.dayRule !== "lastDay") {
                    resetDay();
                    continue goMouth;
                  }
                  if (this.dayRule === "lastDay") {
                    if (this.checkDate(`${YY}-${MM}-${thisDD} 00:00:00`) !== true) {
                      while (DD > 0 && this.checkDate(`${YY}-${MM}-${thisDD} 00:00:00`) !== true) {
                        DD--;
                        thisDD = DD < 10 ? `0${DD}` : DD;
                      }
                    }
                  } else if (this.dayRule === "workDay") {
                    if (this.checkDate(`${YY}-${MM}-${thisDD} 00:00:00`) !== true) {
                      while (DD > 0 && this.checkDate(`${YY}-${MM}-${thisDD} 00:00:00`) !== true) {
                        DD--;
                        thisDD = DD < 10 ? `0${DD}` : DD;
                      }
                    }
                    const thisWeek = this.formatDate(/* @__PURE__ */ new Date(`${YY}-${MM}-${thisDD} 00:00:00`), "week");
                    if (thisWeek === 0) {
                      DD++;
                      thisDD = DD < 10 ? `0${DD}` : DD;
                      if (this.checkDate(`${YY}-${MM}-${thisDD} 00:00:00`) !== true) {
                        DD -= 3;
                      }
                    } else if (thisWeek === 6) {
                      if (this.dayRuleSup !== 1) {
                        DD--;
                      } else {
                        DD += 2;
                      }
                    }
                  } else if (this.dayRule === "weekDay") {
                    const thisWeek = this.formatDate(/* @__PURE__ */ new Date(`${YY}-${MM}-${DD} 00:00:00`), "week");
                    if (this.dayRuleSup.includes(Number(thisWeek))) {
                      if (Di === DDate.length - 1) {
                        resetDay();
                        if (Mi === MDate.length - 1) {
                          resetMouth();
                          continue goYear;
                        }
                        continue goMouth;
                      }
                      continue;
                    }
                  } else if (this.dayRule === "assWeek") {
                    const thisWeek = Number(this.formatDate(/* @__PURE__ */ new Date(`${YY}-${MM}-${DD} 00:00:00`), "week"));
                    if (this.dayRuleSup[1] >= thisWeek) {
                      DD = (this.dayRuleSup[0] - 1) * 7 + this.dayRuleSup[1] - thisWeek + 1;
                    } else {
                      DD = this.dayRuleSup[0] * 7 + this.dayRuleSup[1] - thisWeek + 1;
                    }
                  } else if (this.dayRule === "lastWeek") {
                    if (this.checkDate(`${YY}-${MM}-${thisDD} 00:00:00`) !== true) {
                      while (DD > 0 && this.checkDate(`${YY}-${MM}-${thisDD} 00:00:00`) !== true) {
                        DD--;
                        thisDD = DD < 10 ? `0${DD}` : DD;
                      }
                    }
                    const thisWeek = this.formatDate(/* @__PURE__ */ new Date(`${YY}-${MM}-${thisDD} 00:00:00`), "week") || 0;
                    if (this.dayRuleSup < thisWeek) {
                      DD -= thisWeek - this.dayRuleSup;
                    } else if (this.dayRuleSup > thisWeek) {
                      DD -= 7 - (this.dayRuleSup - Number(thisWeek));
                    }
                  }
                  DD = DD < 10 ? `0${DD}` : DD;
                  goHour:
                    for (let hi = hIdx; hi < hDate.length; hi++) {
                      const hh = hDate[hi] < 10 ? `0${hDate[hi]}` : hDate[hi];
                      if (nMin > mDate[mDate.length - 1]) {
                        resetMin();
                        if (hi === hDate.length - 1) {
                          resetHour();
                          if (Di === DDate.length - 1) {
                            resetDay();
                            if (Mi === MDate.length - 1) {
                              resetMouth();
                              continue goYear;
                            }
                            continue goMouth;
                          }
                          continue goDay;
                        }
                        continue;
                      }
                      goMin:
                        for (let mi = mIdx; mi < mDate.length; mi++) {
                          const mm = mDate[mi] < 10 ? `0${mDate[mi]}` : mDate[mi];
                          if (nSecond > sDate[sDate.length - 1]) {
                            resetSecond();
                            if (mi === mDate.length - 1) {
                              resetMin();
                              if (hi === hDate.length - 1) {
                                resetHour();
                                if (Di === DDate.length - 1) {
                                  resetDay();
                                  if (Mi === MDate.length - 1) {
                                    resetMouth();
                                    continue goYear;
                                  }
                                  continue goMouth;
                                }
                                continue goDay;
                              }
                              continue goHour;
                            }
                            continue;
                          }
                          for (let si = sIdx; si <= sDate.length - 1; si++) {
                            const ss = sDate[si] < 10 ? `0${sDate[si]}` : sDate[si];
                            if (MM !== "00" && DD !== "00") {
                              resultArr.push(`${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`);
                              nums++;
                            }
                            if (nums === 5)
                              break goYear;
                            if (si === sDate.length - 1) {
                              resetSecond();
                              if (mi === mDate.length - 1) {
                                resetMin();
                                if (hi === hDate.length - 1) {
                                  resetHour();
                                  if (Di === DDate.length - 1) {
                                    resetDay();
                                    if (Mi === MDate.length - 1) {
                                      resetMouth();
                                      continue goYear;
                                    }
                                    continue goMouth;
                                  }
                                  continue goDay;
                                }
                                continue goHour;
                              }
                              continue goMin;
                            }
                          }
                        }
                    }
                }
            }
        }
      if (resultArr.length === 0) {
        this.resultList = ["没有达到条件的结果！"];
      } else {
        this.resultList = resultArr;
        if (resultArr.length !== 5) {
          this.resultList.push(`最近100年内只有上面${resultArr.length}条结果！`);
        }
      }
      this.isShow = true;
    },
    // 用于计算某位数字在数组中的索引
    getIndex(arr, value) {
      if (value <= arr[0] || value > arr[arr.length - 1]) {
        return 0;
      } else {
        for (let i = 0; i < arr.length - 1; i++) {
          if (value > arr[i] && value <= arr[i + 1]) {
            return i + 1;
          }
        }
      }
    },
    // 获取"年"数组
    getYearArr(rule, year) {
      this.dateArr[5] = this.getOrderArr(year, year + 100);
      if (rule !== void 0) {
        if (rule.includes("-")) {
          this.dateArr[5] = this.getCycleArr(rule, year + 100, false);
        } else if (rule.includes("/")) {
          this.dateArr[5] = this.getAverageArr(rule, year + 100);
        } else if (rule !== "*") {
          this.dateArr[5] = this.getAssignArr(rule);
        }
      }
    },
    // 获取"月"数组
    getMouthArr(rule) {
      this.dateArr[4] = this.getOrderArr(1, 12);
      if (rule.includes("-")) {
        this.dateArr[4] = this.getCycleArr(rule, 12, false);
      } else if (rule.includes("/")) {
        this.dateArr[4] = this.getAverageArr(rule, 12);
      } else if (rule !== "*") {
        this.dateArr[4] = this.getAssignArr(rule);
      }
    },
    // 获取"日"数组-主要为日期规则
    getWeekArr(rule) {
      var _a;
      if (this.dayRule === "" && this.dayRuleSup === "") {
        if (rule.includes("-")) {
          this.dayRule = "weekDay";
          this.dayRuleSup = this.getCycleArr(rule, 7, false);
        } else if (rule.includes("#")) {
          this.dayRule = "assWeek";
          const matchRule = rule.match(/[0-9]{1}/g);
          this.dayRuleSup = [Number(matchRule == null ? void 0 : matchRule[0]), Number(matchRule == null ? void 0 : matchRule[1])];
          this.dateArr[3] = [1];
          if (this.dayRuleSup[1] === 7) {
            this.dayRuleSup[1] = 0;
          }
        } else if (rule.includes("L")) {
          this.dayRule = "lastWeek";
          this.dayRuleSup = Number((_a = rule.match(/[0-9]{1,2}/g)) == null ? void 0 : _a[0]);
          this.dateArr[3] = [31];
          if (this.dayRuleSup === 7) {
            this.dayRuleSup = 0;
          }
        } else if (rule !== "*" && rule !== "?") {
          this.dayRule = "weekDay";
          this.dayRuleSup = this.getAssignArr(rule);
        }
        if (this.dayRule === "weekDay" && typeof this.dayRuleSup === "object") {
          for (let i = 0; i < this.dayRuleSup.length; i++) {
            if (this.dayRuleSup[i] === 7) {
              this.dayRuleSup[i] = 0;
            }
          }
        }
      }
    },
    // 获取"日"数组-少量为日期规则
    getDayArr(rule) {
      var _a;
      this.dateArr[3] = this.getOrderArr(1, 31);
      this.dayRule = "";
      this.dayRuleSup = "";
      if (rule.includes("-")) {
        this.dateArr[3] = this.getCycleArr(rule, 31, false);
        this.dayRuleSup = "null";
      } else if (rule.includes("/")) {
        this.dateArr[3] = this.getAverageArr(rule, 31);
        this.dayRuleSup = "null";
      } else if (rule.includes("W")) {
        this.dayRule = "workDay";
        this.dayRuleSup = Number((_a = rule.match(/[0-9]{1,2}/g)) == null ? void 0 : _a[0]);
        this.dateArr[3] = [this.dayRuleSup];
      } else if (rule.includes("L")) {
        this.dayRule = "lastDay";
        this.dayRuleSup = "null";
        this.dateArr[3] = [31];
      } else if (rule !== "*" && rule !== "?") {
        this.dateArr[3] = this.getAssignArr(rule);
        this.dayRuleSup = "null";
      } else if (rule === "*") {
        this.dayRuleSup = "null";
      }
    },
    // 获取"时"数组
    getHourArr(rule) {
      this.dateArr[2] = this.getOrderArr(0, 23);
      if (rule.includes("-")) {
        this.dateArr[2] = this.getCycleArr(rule, 24, true);
      } else if (rule.includes("/")) {
        this.dateArr[2] = this.getAverageArr(rule, 23);
      } else if (rule !== "*") {
        this.dateArr[2] = this.getAssignArr(rule);
      }
    },
    // 获取"分"数组
    getMinArr(rule) {
      this.dateArr[1] = this.getOrderArr(0, 59);
      if (rule.includes("-")) {
        this.dateArr[1] = this.getCycleArr(rule, 60, true);
      } else if (rule.includes("/")) {
        this.dateArr[1] = this.getAverageArr(rule, 59);
      } else if (rule !== "*") {
        this.dateArr[1] = this.getAssignArr(rule);
      }
    },
    // 获取"秒"数组
    getSecondArr(rule) {
      this.dateArr[0] = this.getOrderArr(0, 59);
      if (rule.includes("-")) {
        this.dateArr[0] = this.getCycleArr(rule, 60, true);
      } else if (rule.includes("/")) {
        this.dateArr[0] = this.getAverageArr(rule, 59);
      } else if (rule !== "*") {
        this.dateArr[0] = this.getAssignArr(rule);
      }
    },
    // 根据传进来的min-max返回一个顺序的数组
    getOrderArr(min, max) {
      const arr = [];
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    },
    // 根据规则中指定的零散值返回一个数组
    getAssignArr(rule) {
      const arr = [];
      const assiginArr = rule.split(",");
      for (let i = 0; i < assiginArr.length; i++) {
        arr[i] = Number(assiginArr[i]);
      }
      arr.sort(this.compare);
      return arr;
    },
    // 根据一定算术规则计算返回一个数组
    getAverageArr(rule, limit) {
      const arr = [];
      const agArr = rule.split("/");
      let min = Number(agArr[0]);
      const step = Number(agArr[1]);
      while (min <= limit) {
        arr.push(min);
        min += step;
      }
      return arr;
    },
    // 根据规则返回一个具有周期性的数组
    getCycleArr(rule, limit, status) {
      const arr = [];
      const cycleArr = rule.split("-");
      const min = Number(cycleArr[0]);
      let max = Number(cycleArr[1]);
      if (min > max) {
        max += limit;
      }
      for (let i = min; i <= max; i++) {
        let add = 0;
        if (status === false && i % limit === 0) {
          add = limit;
        }
        arr.push(Math.round(i % limit + add));
      }
      arr.sort(this.compare);
      return arr;
    },
    // 比较数字大小（用于Array.sort）
    compare(value1, value2) {
      if (value2 - value1 > 0) {
        return -1;
      } else {
        return 1;
      }
    },
    // 格式化日期格式如：2017-9-19 18:04:33
    formatDate(value, type) {
      const time = typeof value === "number" ? new Date(value) : value;
      const Y = time.getFullYear();
      const M = time.getMonth() + 1;
      const D = time.getDate();
      const h = time.getHours();
      const m = time.getMinutes();
      const s = time.getSeconds();
      const week = time.getDay();
      if (type === void 0) {
        return `${Y}-${M < 10 ? `0${M}` : M}-${D < 10 ? `0${D}` : D} ${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
      } else if (type === "week") {
        return week;
      }
    },
    // 检查日期是否存在
    checkDate(value) {
      const time = new Date(value);
      const format = this.formatDate(time);
      return value === format;
    }
  }
});
export {
  _sfc_main as default
};
