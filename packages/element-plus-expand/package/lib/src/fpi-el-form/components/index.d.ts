declare const _default: {
    checkbox: import("vue").DefineComponent<{
        inputProps: {
            type: import("vue").PropType<import("../types").inputPropsTs>;
            default: () => {};
        };
        modelValue: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        inputProps: {
            type: import("vue").PropType<import("../types").inputPropsTs>;
            default: () => {};
        };
        modelValue: {
            type: import("vue").PropType<any[]>;
            default: () => never[];
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onUpDataRefInput?: ((...args: any[]) => any) | undefined;
    }, {
        type: import("../types").fromTypeTs;
        option: import("../types").optionTs[];
        inputProps: import("../types").inputPropsTs;
        modelValue: any[];
    }, {}>;
    'date-picker': import("vue").DefineComponent<{
        inputProps: {
            type: import("vue").PropType<any>;
            default: () => {};
        };
        modelValue: {
            type: import("vue").PropType<any>;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        inputProps: {
            type: import("vue").PropType<any>;
            default: () => {};
        };
        modelValue: {
            type: import("vue").PropType<any>;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onUpDataRefInput?: ((...args: any[]) => any) | undefined;
    }, {
        type: import("../types").fromTypeTs;
        inputProps: any;
        modelValue: any;
    }, {}>;
    'input-number': import("vue").DefineComponent<{
        inputProps: {
            type: import("vue").PropType<import("../types").inputPropsTs>;
            default: () => {};
        };
        modelValue: {
            type: NumberConstructor[];
            default: number;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        inputProps: {
            type: import("vue").PropType<import("../types").inputPropsTs>;
            default: () => {};
        };
        modelValue: {
            type: NumberConstructor[];
            default: number;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onUpDataRefInput?: ((...args: any[]) => any) | undefined;
    }, {
        type: import("../types").fromTypeTs;
        option: import("../types").optionTs[];
        inputProps: import("../types").inputPropsTs;
        modelValue: number;
    }, {}>;
    input: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                type?: import("../types").fromTypeTs | undefined;
                inputProps?: any;
                modelValue?: string | number | boolean | undefined;
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
                "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                onUpDataRefInput?: ((...args: any[]) => any) | undefined;
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
            $emit: (event: "update:modelValue" | "upDataRefInput", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                inputProps: {
                    type: import("vue").PropType<any>;
                    default: () => {};
                };
                modelValue: {
                    type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
                    default: string;
                };
                type: {
                    type: import("vue").PropType<import("../types").fromTypeTs>;
                    default: string;
                };
            }>> & {
                "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                onUpDataRefInput?: ((...args: any[]) => any) | undefined;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], string, {
                type: import("../types").fromTypeTs;
                inputProps: any;
                modelValue: string | number | boolean;
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
            inputProps: {
                type: import("vue").PropType<any>;
                default: () => {};
            };
            modelValue: {
                type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
                default: string;
            };
            type: {
                type: import("vue").PropType<import("../types").fromTypeTs>;
                default: string;
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onUpDataRefInput?: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        inputProps: {
            type: import("vue").PropType<any>;
            default: () => {};
        };
        modelValue: {
            type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onUpDataRefInput?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", {
        type: import("../types").fromTypeTs;
        inputProps: any;
        modelValue: string | number | boolean;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            prefix: (_: {}) => any;
            suffix: (_: {}) => any;
            prepend: (_: {}) => any;
            append: (_: {}) => any;
        };
    });
    radio: import("vue").DefineComponent<{
        inputProps: {
            type: import("vue").PropType<import("../types").inputPropsTs>;
            default: () => {};
        };
        modelValue: {
            type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        inputProps: {
            type: import("vue").PropType<import("../types").inputPropsTs>;
            default: () => {};
        };
        modelValue: {
            type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onUpDataRefInput?: ((...args: any[]) => any) | undefined;
    }, {
        type: import("../types").fromTypeTs;
        option: import("../types").optionTs[];
        inputProps: import("../types").inputPropsTs;
        modelValue: string | number | boolean;
    }, {}>;
    select: {
        new (...args: any[]): {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: {
                type?: import("../types").fromTypeTs | undefined;
                option?: import("../types").optionTs[] | undefined;
                inputProps?: import("../types").inputPropsTs | undefined;
                modelValue?: string | number | boolean | Record<string, any> | unknown[] | undefined;
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
                "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                onUpDataRefInput?: ((...args: any[]) => any) | undefined;
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
            $emit: (event: "update:modelValue" | "upDataRefInput", ...args: any[]) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                inputProps: {
                    type: import("vue").PropType<import("../types").inputPropsTs>;
                    default: () => {};
                };
                modelValue: {
                    type: import("vue").PropType<string | number | boolean | Record<string, any> | unknown[] | undefined>;
                    default: string;
                };
                type: {
                    type: import("vue").PropType<import("../types").fromTypeTs>;
                    default: string;
                };
                option: {
                    type: import("vue").PropType<import("../types").optionTs[]>;
                    default: () => never[];
                };
            }>> & {
                "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
                onUpDataRefInput?: ((...args: any[]) => any) | undefined;
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], string, {
                type: import("../types").fromTypeTs;
                option: import("../types").optionTs[];
                inputProps: import("../types").inputPropsTs;
                modelValue: string | number | boolean | Record<string, any> | unknown[] | undefined;
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
            inputProps: {
                type: import("vue").PropType<import("../types").inputPropsTs>;
                default: () => {};
            };
            modelValue: {
                type: import("vue").PropType<string | number | boolean | Record<string, any> | unknown[] | undefined>;
                default: string;
            };
            type: {
                type: import("vue").PropType<import("../types").fromTypeTs>;
                default: string;
            };
            option: {
                type: import("vue").PropType<import("../types").optionTs[]>;
                default: () => never[];
            };
        }>> & {
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onUpDataRefInput?: ((...args: any[]) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties & {};
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        inputProps: {
            type: import("vue").PropType<import("../types").inputPropsTs>;
            default: () => {};
        };
        modelValue: {
            type: import("vue").PropType<string | number | boolean | Record<string, any> | unknown[] | undefined>;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onUpDataRefInput?: ((...args: any[]) => any) | undefined;
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", {
        type: import("../types").fromTypeTs;
        option: import("../types").optionTs[];
        inputProps: import("../types").inputPropsTs;
        modelValue: string | number | boolean | Record<string, any> | unknown[] | undefined;
    }, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            prefix: (_: {}) => any;
            empty: (_: {}) => any;
        };
    });
    'time-picker': import("vue").DefineComponent<{
        inputProps: {
            type: import("vue").PropType<any>;
            default: () => {};
        };
        modelValue: {
            type: import("vue").PropType<any>;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        inputProps: {
            type: import("vue").PropType<any>;
            default: () => {};
        };
        modelValue: {
            type: import("vue").PropType<any>;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onUpDataRefInput?: ((...args: any[]) => any) | undefined;
    }, {
        type: import("../types").fromTypeTs;
        option: import("../types").optionTs[];
        inputProps: any;
        modelValue: any;
    }, {}>;
    switch: import("vue").DefineComponent<{
        inputProps: {
            type: import("vue").PropType<import("../types").inputPropsTs>;
            default: () => {};
        };
        modelValue: {
            type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "upDataRefInput")[], "update:modelValue" | "upDataRefInput", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        inputProps: {
            type: import("vue").PropType<import("../types").inputPropsTs>;
            default: () => {};
        };
        modelValue: {
            type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../types").fromTypeTs>;
            default: string;
        };
        option: {
            type: import("vue").PropType<import("../types").optionTs[]>;
            default: () => never[];
        };
    }>> & {
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onUpDataRefInput?: ((...args: any[]) => any) | undefined;
    }, {
        type: import("../types").fromTypeTs;
        option: import("../types").optionTs[];
        inputProps: import("../types").inputPropsTs;
        modelValue: string | number | boolean;
    }, {}>;
};
export default _default;
