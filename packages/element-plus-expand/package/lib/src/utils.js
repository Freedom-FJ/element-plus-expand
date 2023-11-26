"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const getVal = (vm, expr) => {
  if (!expr)
    return vm;
  const value = expr.split(".").reduce((data, current) => {
    return typeof data === "object" ? data[current] : void 0;
  }, vm);
  return value;
};
function DataType(tgt, type) {
  const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();
  return type ? dataType === type : dataType;
}
const deepClone = (obj, cache = /* @__PURE__ */ new WeakMap()) => {
  if (obj === null || typeof obj !== "object")
    return obj;
  if (obj instanceof Date)
    return new Date(obj);
  if (obj instanceof RegExp)
    return new RegExp(obj);
  if (cache.has(obj))
    return cache.get(obj);
  const cloneObj = new obj.constructor();
  cache.set(obj, cloneObj);
  for (const key in obj) {
    if (key in obj)
      cloneObj[key] = deepClone(obj[key], cache);
  }
  return cloneObj;
};
const equal = (a, b) => {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    let length, i;
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    const keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      const key = keys[i];
      if (!equal(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
};
const getDeepObj = (obj, key, val) => {
  const keyArr = key.split(".");
  keyArr.reduce((data, current, arr) => {
    if (arr === keyArr.length - 1)
      data[current] = val;
    return data[current];
  }, obj);
};
const isString = (val) => {
  return typeof val === "string";
};
const isObject = (val) => {
  return DataType(val, "object");
};
function camelCase(str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : "");
}
function kebabCase(key) {
  const result = key.replace(/([A-Z])/g, " $1").trim();
  return result.split(" ").join("-").toLowerCase();
}
exports.DataType = DataType;
exports.camelCase = camelCase;
exports.deepClone = deepClone;
exports.equal = equal;
exports.getDeepObj = getDeepObj;
exports.getVal = getVal;
exports.isObject = isObject;
exports.isString = isString;
exports.kebabCase = kebabCase;
