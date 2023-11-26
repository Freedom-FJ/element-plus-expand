import type { VNode } from 'vue';
import type { FormInstance, FormItemRule } from 'element-plus';
export type record = Record<string, any>;
export interface formDataTs {
    form: null | Record<string, any>;
    rulesData: null | Partial<Record<string, Arrayable<any>>>;
    timer: null | any;
    refInput: Record<string, any>;
}
export interface inputPropsTs {
    size?: 'large' | 'default' | 'small';
    maxlength: string | number;
    minlength: number;
    showWordLimit: boolean;
    clearable?: boolean;
    disabled?: boolean;
    style?: any;
    prefixIcon: string | any;
    suffixIcon: string | any;
    readonly: boolean;
    rows: number;
    inputStyle?: Record<string, any>;
    autocomplete?: 'on' | 'off';
    type?: 'data' | 'password' | 'button' | 'email' | 'textarea';
    showPassword?: boolean;
    placeholder?: string;
    optionExpr?: {
        value: string;
        label?: string;
        selectLabel?: string;
    };
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    min?: number;
    max?: number;
    step?: number;
    stepStrictly?: boolean;
    precision?: number;
    controlsPosition?: 'right';
    disabledDate: (value1: Date, value2?: Date) => boolean;
    shortcuts: {
        text: string;
        value: Date | (() => Date);
    }[];
    format: string;
    unlinkPanels: boolean;
    rangeSeparator: string;
    startPlaceholder: string;
    endPlaceholder: string;
    defaultValue: Date | Date[];
    valueFormat: string;
    multiple: boolean;
    collapseTags: boolean;
    collapseTagsTooltip: boolean;
    filterable: boolean;
    activeText: string;
    inactiveText: string;
    inlinePrompt: boolean;
    activeIcon: any;
    inactiveIcon: any;
    activeValue: string | boolean | number;
    inactiveValue: string | boolean | number;
    isRange: boolean;
    isFocus: boolean;
    inputLimit: InputLimitTs | ((value: string | null) => string | number | null);
    prefix: VNode;
    suffix: VNode;
    prepend: VNode;
    append: VNode;
    empty: VNode;
    ref: any;
    onBlur: EventType;
    onFocus: EventType;
    onChange: EventType;
    onInput: EventType;
    onClear: EventType;
    onVisibleChange: EventType;
    onRemoveTag: EventType;
}
export interface optionTs {
    value?: string | number | boolean;
    label?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    checked?: boolean;
    border?: boolean;
    [key: string]: any;
}
export type fromTypeTs = 'time-picker' | 'date-picker' | 'select' | 'input' | 'checkbox' | 'radio' | 'switch' | 'dom' | 'input-number' | 'text';
export interface formItemTs {
    prop: string;
    label?: string;
    labelWidth?: string | number;
    required?: boolean;
    rules?: staticRulesKeyTs | Array<any> | Partial<Record<string, Arrayable<FormItemRule>>>;
    error: string;
    inlineMessage: boolean;
    showMessage: boolean;
    size?: 'large' | 'default' | 'small';
    for?: string;
    validateStatus?: '' | 'error' | 'validating' | 'success';
    type?: fromTypeTs;
    textStyle: record;
    value?: any;
    slot?: boolean;
    labelSlot?: boolean;
    slotLine?: string;
    defaultSelect?: number;
    itemRules?: Array<Record<string, any>>;
    option?: Array<optionTs>;
    inputWidth?: string;
    inputProps?: Partial<inputPropsTs>;
    span?: number;
    render?: (index: number) => VNode;
    vHtml?: (index: number) => string;
    col?: formItemTs[];
    gutter?: number;
    isLine?: boolean;
    lineLabel?: string;
    lineLabelStyle?: record;
    lineStyle?: record;
}
type EventType = (e: any) => any;
type EventFromType = (form: FormInstance | undefined, e: any) => any;
export interface btnOptionTs {
    type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text';
    label?: string;
    size?: 'large' | 'default' | 'small';
    click?: EventFromType | 'submit' | 'cancel';
    onClick?: EventFromType | 'submit' | 'cancel';
    onDblclick?: EventType;
    onMouseenter?: EventType;
    onMouseleave?: EventType;
}
export interface fpiFormTs {
    getForm: () => FormInstance;
    getFormData: () => Record<string, any>;
}
export type staticRulesKeyTs = 'email' | 'date' | 'select' | 'unNull' | 'number' | 'phone' | 'checkbox' | string;
export type InputLimitTs = 'number' | 'int' | 'positive-int' | 'negative-int' | 'positive-number' | 'negative-number';
export declare type Nullable<T> = T | null;
export declare type Arrayable<T> = T | T[];
export declare type Awaitable<T> = Promise<T> | T;
export {};
