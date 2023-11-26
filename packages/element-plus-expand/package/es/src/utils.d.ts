/**
 * @dec 替换{{}}变量
 * @param {*} vm 变量对象
 * @param {*} expr 变量在对象内的位置  如server.base
 */
export declare const getVal: (vm: any, expr: string) => any;
/**
 * 获取类型方法 返回 参数类型 或者 true/false
 * @param {*} tgt 需要判断类型的变量
 * @param {*} type? 可传可不传， 不传的话方法返回变量类型，传的话返回参数类型是否一致true/false
 * 可确定的类型：undefined、null、string、number、boolean、array、object、symbol、
 * date、regexp、function、asyncfunction、arguments、set、map、weakset、weakmap
 */
export declare function DataType(tgt: any): string;
export declare function DataType(tgt: any, type: string): boolean;
export declare function pickKey<T extends Record<string, any>, K extends keyof T>(obj: T, keyArr: K[]): Record<string, any>;
export declare const deepClone: (obj: any, cache?: WeakMap<object, any>) => any;
export declare const equal: (a: any, b: any) => boolean;
/**
 * @dec 赋值对象
 * @param {*} obj 变量对象
 * @param {*} key 变量在对象内的位置  如server.base
 * @param {*} val 变量的值
 */
export declare const getDeepObj: (obj: Record<string, any>, key: string, val: string | number) => void;
export declare const isString: (val: any) => val is string;
export declare const isArray: (val: string | object | Array<any> | undefined) => val is any[];
export declare const isObject: (val: string | object | Array<any> | undefined) => val is object;
export declare function camelCase(str: string): string;
export declare function kebabCase(key: string): string;
export declare function capitalize(str: string): string;
