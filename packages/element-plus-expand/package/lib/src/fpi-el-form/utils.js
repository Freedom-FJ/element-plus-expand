"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const getNumber = (value) => {
  let str = `${value != null ? value : ""}`;
  const char1 = str.charAt(0);
  const char2 = str.charAt(1);
  if (char1 === ".")
    str = "";
  if (char1 === "-" && char2 === ".")
    str = "-";
  str = str.toString().replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  value = str[str.length - 1] === "." || !str ? char1 === "-" ? char1 + str : str : parseFloat(char1 === "-" ? char1 + str : str);
  return value;
};
const getInit = (value) => {
  let str = `${value != null ? value : ""}`;
  const char = str.charAt(0);
  str = str.replace(/[^\d]/g, "");
  if (char === "-")
    str = `-${str}`;
  value = str[str.length - 1] === "-" || !str ? str : parseFloat(str);
  return value;
};
const getPositiveNumber = (value) => {
  let str = `${value != null ? value : ""}`;
  if (str && str[0] === ".")
    str = "";
  str = str.toString().replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  value = str[str.length - 1] === "." || !str ? str : parseFloat(str);
  return value;
};
const getNegativeNumber = (value) => {
  let str = `${value || ""}`;
  const char1 = str.charAt(0);
  if (char1 !== "-")
    str = "";
  str = str.toString().replace(/[^\d.]/g, "").replace(/\.{2,}/g, ".").replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
  value = str[str.length - 1] === "." || !str ? char1 === "-" ? char1 + str : str : parseFloat(char1 === "-" ? char1 + str : str);
  return value;
};
const getPositiveInt = (value) => {
  const num = parseFloat(value);
  if (Object.is(num, NaN))
    value = null;
  else
    value = num;
  return value;
};
const getNegativeInt = (value) => {
  const str = `${value || ""}`;
  if (str.length === 1 && str[0] === "-")
    ;
  else {
    const num = parseFloat(str);
    if (Object.is(num, NaN))
      value = null;
    else
      value = num;
  }
  return value;
};
const inputLimitObj = {
  "int": getInit,
  // 整数
  "positive-int": getPositiveInt,
  // 正整数
  "negative-int": getNegativeInt,
  // 负数整数
  "number": getNumber,
  // 数字
  "positive-number": getPositiveNumber,
  // 正数
  "negative-number": getNegativeNumber
  // 负数
};
exports.inputLimitObj = inputLimitObj;
