import type { PropType } from 'vue';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    direction: {
        type: PropType<"x" | "y">;
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: undefined;
    };
    time: {
        type: NumberConstructor;
        default: number;
    };
    action: {
        type: PropType<"hover" | "click" | "none" | "dblclick">;
        default: string;
    };
    scrollAble: {
        type: BooleanConstructor;
        default: boolean;
    };
    isDragControl: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    clearAnimation: () => CSSStyleSheet | undefined;
    controlAnimation: () => void;
    changeForcedStop: (val: boolean) => import("vue").Ref<boolean>;
    startAnimation: () => void;
    animationName: string;
    isRolling: import("vue").WritableComputedRef<boolean>;
    forcedStop: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "domChange")[], "update:modelValue" | "change" | "domChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: PropType<"x" | "y">;
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        default: undefined;
    };
    time: {
        type: NumberConstructor;
        default: number;
    };
    action: {
        type: PropType<"hover" | "click" | "none" | "dblclick">;
        default: string;
    };
    scrollAble: {
        type: BooleanConstructor;
        default: boolean;
    };
    isDragControl: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDomChange?: ((...args: any[]) => any) | undefined;
}, {
    time: number;
    modelValue: boolean;
    direction: "x" | "y";
    action: "hover" | "click" | "none" | "dblclick";
    scrollAble: boolean;
    isDragControl: boolean;
}, {}>, {
    default: (_: {}) => any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
