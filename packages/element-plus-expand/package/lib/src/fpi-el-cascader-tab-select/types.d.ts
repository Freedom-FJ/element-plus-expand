import type CascaderNode from 'element-plus/es/components/cascader-panel/src/node';
export interface TypeList {
    label: string;
    key: string;
    options?: any[];
}
export type CascaderNodeValue = string | number;
export interface CascaderOption extends Record<string, unknown> {
    label?: string;
    value?: CascaderNodeValue;
    children?: CascaderOption[];
    disabled?: boolean;
    leaf?: boolean;
}
export declare enum ExpandTrigger {
    CLICK = "click",
    HOVER = "hover"
}
export type isDisabled = (data: CascaderOption, node: CascaderNode) => boolean;
export type isLeaf = (data: CascaderOption, node: CascaderNode) => boolean;
export type Resolve = (dataList?: CascaderOption[]) => void;
export type LazyLoad = (node: CascaderNode, resolve: Resolve) => void;
export interface CascaderProps {
    expandTrigger?: ExpandTrigger;
    multiple?: boolean;
    checkStrictly?: boolean;
    emitPath?: boolean;
    lazy?: boolean;
    lazyLoad?: LazyLoad;
    value?: string;
    label?: string;
    children?: string;
    disabled?: string | isDisabled;
    leaf?: string | isLeaf;
    hoverThreshold?: number;
}
