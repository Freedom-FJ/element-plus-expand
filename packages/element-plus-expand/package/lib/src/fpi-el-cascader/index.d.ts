import type { Plugin } from 'vue';
import _FpiElCascader from './fpi-el-cascader.vue';
type SFCWithInstall<T> = T & Plugin;
export declare const FpiElCascader: SFCWithInstall<import("vue").DefineComponent<{
    props: {
        type: import("vue").PropType<import("element-plus").CascaderProps | undefined>;
        required: true;
    } & {
        default: () => any;
    };
    key: {
        type: import("vue").PropType<string | number | symbol>;
    };
    ref: {
        type: import("vue").PropType<import("vue").VNodeRef>;
    };
    ref_for: {
        type: import("vue").PropType<boolean>;
    };
    ref_key: {
        type: import("vue").PropType<string>;
    };
    onVnodeBeforeMount: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeMounted: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeBeforeUpdate: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeUpdated: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeBeforeUnmount: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeUnmounted: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    class: {
        type: import("vue").PropType<unknown>;
    };
    style: {
        type: import("vue").PropType<unknown>;
    };
    size: {
        type: import("vue").PropType<"small" | "default" | "large">;
        required: true;
    } & {
        default: "small";
    };
    border: {
        type: import("vue").PropType<boolean>;
    };
    onChange: {
        type: import("vue").PropType<(...args: any[]) => any>;
    };
    "onExpand-change": {
        type: import("vue").PropType<(...args: any[]) => any>;
    };
    "onUpdate:modelValue": {
        type: import("vue").PropType<(...args: any[]) => any>;
    };
    modelValue: {
        type: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").CascaderValue | undefined>;
        required: true;
    };
    options: {
        type: import("vue").PropType<import("element-plus").CascaderOption[] | undefined>;
        required: true;
    };
    onClose: {
        type: import("vue").PropType<(...args: any[]) => any>;
    };
    readonly renderLabel: {
        type: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").RenderLabel>;
    };
    textHolder: {
        type: import("vue").PropType<string>;
        required: true;
    } & {
        default: string;
    };
    typeList: {
        type: import("vue").PropType<import("./types").TypeList[]>;
        required: true;
    };
    searchName: {
        type: import("vue").PropType<string>;
        required: true;
    };
    currentType: {
        type: import("vue").PropType<string>;
        required: true;
    };
    hasBackground: {
        type: import("vue").PropType<boolean>;
        required: true;
    } & {
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event")[], "update:modelValue" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    props: {
        type: import("vue").PropType<import("element-plus").CascaderProps | undefined>;
        required: true;
    } & {
        default: () => any;
    };
    key: {
        type: import("vue").PropType<string | number | symbol>;
    };
    ref: {
        type: import("vue").PropType<import("vue").VNodeRef>;
    };
    ref_for: {
        type: import("vue").PropType<boolean>;
    };
    ref_key: {
        type: import("vue").PropType<string>;
    };
    onVnodeBeforeMount: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeMounted: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeBeforeUpdate: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeUpdated: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeBeforeUnmount: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    onVnodeUnmounted: {
        type: import("vue").PropType<((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>) => void)[]>;
    };
    class: {
        type: import("vue").PropType<unknown>;
    };
    style: {
        type: import("vue").PropType<unknown>;
    };
    size: {
        type: import("vue").PropType<"small" | "default" | "large">;
        required: true;
    } & {
        default: "small";
    };
    border: {
        type: import("vue").PropType<boolean>;
    };
    onChange: {
        type: import("vue").PropType<(...args: any[]) => any>;
    };
    "onExpand-change": {
        type: import("vue").PropType<(...args: any[]) => any>;
    };
    "onUpdate:modelValue": {
        type: import("vue").PropType<(...args: any[]) => any>;
    };
    modelValue: {
        type: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").CascaderValue | undefined>;
        required: true;
    };
    options: {
        type: import("vue").PropType<import("element-plus").CascaderOption[] | undefined>;
        required: true;
    };
    onClose: {
        type: import("vue").PropType<(...args: any[]) => any>;
    };
    readonly renderLabel: {
        type: import("vue").PropType<import("element-plus/es/components/cascader-panel/src/node").RenderLabel>;
    };
    textHolder: {
        type: import("vue").PropType<string>;
        required: true;
    } & {
        default: string;
    };
    typeList: {
        type: import("vue").PropType<import("./types").TypeList[]>;
        required: true;
    };
    searchName: {
        type: import("vue").PropType<string>;
        required: true;
    };
    currentType: {
        type: import("vue").PropType<string>;
        required: true;
    };
    hasBackground: {
        type: import("vue").PropType<boolean>;
        required: true;
    } & {
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onHandle-change-node"?: ((...args: any[]) => any) | undefined;
    "onHandle-type-change"?: ((...args: any[]) => any) | undefined;
    "onHandle-search-event"?: ((...args: any[]) => any) | undefined;
    "onHandle-input-event"?: ((...args: any[]) => any) | undefined;
}, {
    props: import("element-plus").CascaderProps | undefined;
    size: "small" | "default" | "large";
    textHolder: string;
    hasBackground: boolean;
}, {}>>;
export default _FpiElCascader;
