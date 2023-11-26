import type { Plugin } from 'vue';
import _FpiElCascaderTabSelect from './fpi-el-cascader-tab-select.vue';
type SFCWithInstall<T> = T & Plugin;
export declare const FpiElCascaderTabSelect: SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            props?: import("element-plus").CascaderProps | undefined;
            size?: "small" | "default" | "large" | undefined;
            textHolder?: string | undefined;
            hasBackground?: boolean | undefined;
            key?: string | number | symbol | undefined;
            ref?: import("vue").VNodeRef | undefined;
            ref_for?: boolean | undefined;
            ref_key?: string | undefined;
            onVnodeBeforeMount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeMounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUpdate?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUpdated?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>, oldVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeBeforeUnmount?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            onVnodeUnmounted?: ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void) | ((vnode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>) => void)[] | undefined;
            class?: unknown;
            style?: unknown;
            readonly border?: boolean | undefined;
            readonly onChange?: ((...args: any[]) => any) | undefined;
            "onExpand-change"?: (((...args: any[]) => any) & ((...args: any[]) => any)) | undefined;
            "onUpdate:modelValue"?: (((...args: any[]) => any) & ((...args: any[]) => any)) | undefined;
            readonly modelValue: import("element-plus/es/components/cascader-panel/src/node").CascaderValue | undefined;
            readonly options: import("element-plus").CascaderOption[] | undefined;
            readonly onClose?: ((...args: any[]) => any) | undefined;
            readonly renderLabel?: import("element-plus/es/components/cascader-panel/src/node").RenderLabel | undefined;
            readonly typeList: import("./types").TypeList[];
            readonly searchName: string;
            readonly currentType: string;
            "onUpdate:currentType"?: ((...args: any[]) => any) | undefined;
            "onHandle-change-node"?: ((...args: any[]) => any) | undefined;
            "onHandle-type-change"?: ((...args: any[]) => any) | undefined;
            "onHandle-search-event"?: ((...args: any[]) => any) | undefined;
            "onHandle-input-event"?: ((...args: any[]) => any) | undefined;
            "onExpand-close"?: ((...args: any[]) => any) | undefined;
            "onPanel-open"?: ((...args: any[]) => any) | undefined;
            "onPanel-close"?: ((...args: any[]) => any) | undefined;
        };
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null;
        $emit: (event: "expand-change" | "update:modelValue" | "update:currentType" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event" | "expand-close" | "panel-open" | "panel-close", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
            "onExpand-change"?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            "onUpdate:currentType"?: ((...args: any[]) => any) | undefined;
            "onHandle-change-node"?: ((...args: any[]) => any) | undefined;
            "onHandle-type-change"?: ((...args: any[]) => any) | undefined;
            "onHandle-search-event"?: ((...args: any[]) => any) | undefined;
            "onHandle-input-event"?: ((...args: any[]) => any) | undefined;
            "onExpand-close"?: ((...args: any[]) => any) | undefined;
            "onPanel-open"?: ((...args: any[]) => any) | undefined;
            "onPanel-close"?: ((...args: any[]) => any) | undefined;
        }, {
            getCheckedNodes: (leafOnly: boolean) => any;
            clearCheckedNodes: () => any;
            getOptionList: () => any;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("expand-change" | "update:modelValue" | "update:currentType" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event" | "expand-close" | "panel-open" | "panel-close")[], string, {
            props: import("element-plus").CascaderProps | undefined;
            size: "small" | "default" | "large";
            textHolder: string;
            hasBackground: boolean;
        }, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch<T extends string | ((...args: any) => any)>(source: T, cb: T extends (...args: any) => infer R ? (args_0: R, args_1: R) => any : (...args: any) => any, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
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
        "onExpand-change"?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onUpdate:currentType"?: ((...args: any[]) => any) | undefined;
        "onHandle-change-node"?: ((...args: any[]) => any) | undefined;
        "onHandle-type-change"?: ((...args: any[]) => any) | undefined;
        "onHandle-search-event"?: ((...args: any[]) => any) | undefined;
        "onHandle-input-event"?: ((...args: any[]) => any) | undefined;
        "onExpand-close"?: ((...args: any[]) => any) | undefined;
        "onPanel-open"?: ((...args: any[]) => any) | undefined;
        "onPanel-close"?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        getCheckedNodes: (leafOnly: boolean) => any;
        clearCheckedNodes: () => any;
        getOptionList: () => any;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
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
    "onExpand-change"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:currentType"?: ((...args: any[]) => any) | undefined;
    "onHandle-change-node"?: ((...args: any[]) => any) | undefined;
    "onHandle-type-change"?: ((...args: any[]) => any) | undefined;
    "onHandle-search-event"?: ((...args: any[]) => any) | undefined;
    "onHandle-input-event"?: ((...args: any[]) => any) | undefined;
    "onExpand-close"?: ((...args: any[]) => any) | undefined;
    "onPanel-open"?: ((...args: any[]) => any) | undefined;
    "onPanel-close"?: ((...args: any[]) => any) | undefined;
}, {
    getCheckedNodes: (leafOnly: boolean) => any;
    clearCheckedNodes: () => any;
    getOptionList: () => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("expand-change" | "update:modelValue" | "update:currentType" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event" | "expand-close" | "panel-open" | "panel-close")[], "expand-change" | "update:modelValue" | "update:currentType" | "handle-change-node" | "handle-type-change" | "handle-search-event" | "handle-input-event" | "expand-close" | "panel-open" | "panel-close", {
    props: import("element-plus").CascaderProps | undefined;
    size: "small" | "default" | "large";
    textHolder: string;
    hasBackground: boolean;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
})>;
export default _FpiElCascaderTabSelect;
