import type { Plugin } from 'vue';
import _FpiElForm from './fpi-el-form.vue';
type SFCWithInstall<T> = T & Plugin;
export declare const FpiElForm: SFCWithInstall<{
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {
            trigger?: "blur" | "change" | undefined;
            labelWidth?: string | undefined;
            modelValue?: Record<string, any> | undefined;
            isText?: boolean | undefined;
            formOption?: import("./types").formItemTs[] | undefined;
            formBtnOption?: import("./types").btnOptionTs[] | undefined;
            isShowBtnBox?: boolean | undefined;
            btnBoxStyle?: Record<string, any> | undefined;
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
            onSubmit?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onCancel?: ((...args: any[]) => any) | undefined;
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
        $emit: (event: "submit" | "cancel" | "update:modelValue", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            formOption: {
                type: import("vue").PropType<import("./types").formItemTs[]>;
                default: () => never[];
            };
            formBtnOption: {
                type: import("vue").PropType<import("./types").btnOptionTs[]>;
                default: () => ({
                    type: string;
                    label: string;
                    onClick: string;
                } | {
                    label: string;
                    onClick: string;
                    type?: undefined;
                })[];
            };
            trigger: {
                type: import("vue").PropType<"blur" | "change">;
                default: string;
            };
            isShowBtnBox: {
                type: BooleanConstructor;
                default: boolean;
            };
            btnBoxStyle: {
                type: ObjectConstructor;
                default: undefined;
            };
            modelValue: {
                type: import("vue").PropType<Record<string, any>>;
                default: () => null;
            };
            labelWidth: {
                type: StringConstructor;
                default: string;
            };
            isText: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & {
            onSubmit?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onCancel?: ((...args: any[]) => any) | undefined;
        }, {
            getFormData: () => Record<string, any> | null;
            getForm: () => any;
            validate: (callback?: ((isValid: boolean, invalidFields?: any) => void) | undefined) => import("element-plus").FormValidationResult | undefined;
            validateField: (props?: import("./types").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: ((isValid: boolean, invalidFields?: any) => void) | undefined) => import("element-plus").FormValidationResult | undefined;
            resetFields: (props?: import("./types").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            scrollToField: (prop: import("element-plus").FormItemProp) => void;
            clearValidate: (props?: import("./types").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
            refInput: Record<string, any>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "cancel" | "update:modelValue")[], string, {
            trigger: "blur" | "change";
            labelWidth: string;
            modelValue: Record<string, any>;
            isText: boolean;
            formOption: import("./types").formItemTs[];
            formBtnOption: import("./types").btnOptionTs[];
            isShowBtnBox: boolean;
            btnBoxStyle: Record<string, any>;
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
        formOption: {
            type: import("vue").PropType<import("./types").formItemTs[]>;
            default: () => never[];
        };
        formBtnOption: {
            type: import("vue").PropType<import("./types").btnOptionTs[]>;
            default: () => ({
                type: string;
                label: string;
                onClick: string;
            } | {
                label: string;
                onClick: string;
                type?: undefined;
            })[];
        };
        trigger: {
            type: import("vue").PropType<"blur" | "change">;
            default: string;
        };
        isShowBtnBox: {
            type: BooleanConstructor;
            default: boolean;
        };
        btnBoxStyle: {
            type: ObjectConstructor;
            default: undefined;
        };
        modelValue: {
            type: import("vue").PropType<Record<string, any>>;
            default: () => null;
        };
        labelWidth: {
            type: StringConstructor;
            default: string;
        };
        isText: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {
        onSubmit?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onCancel?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{
        getFormData: () => Record<string, any> | null;
        getForm: () => any;
        validate: (callback?: ((isValid: boolean, invalidFields?: any) => void) | undefined) => import("element-plus").FormValidationResult | undefined;
        validateField: (props?: import("./types").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: ((isValid: boolean, invalidFields?: any) => void) | undefined) => import("element-plus").FormValidationResult | undefined;
        resetFields: (props?: import("./types").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        scrollToField: (prop: import("element-plus").FormItemProp) => void;
        clearValidate: (props?: import("./types").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
        refInput: Record<string, any>;
    }> & {} & import("vue").ComponentCustomProperties & {};
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    formOption: {
        type: import("vue").PropType<import("./types").formItemTs[]>;
        default: () => never[];
    };
    formBtnOption: {
        type: import("vue").PropType<import("./types").btnOptionTs[]>;
        default: () => ({
            type: string;
            label: string;
            onClick: string;
        } | {
            label: string;
            onClick: string;
            type?: undefined;
        })[];
    };
    trigger: {
        type: import("vue").PropType<"blur" | "change">;
        default: string;
    };
    isShowBtnBox: {
        type: BooleanConstructor;
        default: boolean;
    };
    btnBoxStyle: {
        type: ObjectConstructor;
        default: undefined;
    };
    modelValue: {
        type: import("vue").PropType<Record<string, any>>;
        default: () => null;
    };
    labelWidth: {
        type: StringConstructor;
        default: string;
    };
    isText: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
}, {
    getFormData: () => Record<string, any> | null;
    getForm: () => any;
    validate: (callback?: ((isValid: boolean, invalidFields?: any) => void) | undefined) => import("element-plus").FormValidationResult | undefined;
    validateField: (props?: import("./types").Arrayable<import("element-plus").FormItemProp> | undefined, callback?: ((isValid: boolean, invalidFields?: any) => void) | undefined) => import("element-plus").FormValidationResult | undefined;
    resetFields: (props?: import("./types").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    scrollToField: (prop: import("element-plus").FormItemProp) => void;
    clearValidate: (props?: import("./types").Arrayable<import("element-plus").FormItemProp> | undefined) => void;
    refInput: Record<string, any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "cancel" | "update:modelValue")[], "submit" | "cancel" | "update:modelValue", {
    trigger: "blur" | "change";
    labelWidth: string;
    modelValue: Record<string, any>;
    isText: boolean;
    formOption: import("./types").formItemTs[];
    formBtnOption: import("./types").btnOptionTs[];
    isShowBtnBox: boolean;
    btnBoxStyle: Record<string, any>;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
    };
})>;
export default _FpiElForm;
