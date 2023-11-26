import type { ElCascaderPanel } from 'element-plus';
import type { TypeList } from './types';
type ElCascaderPanelProp = InstanceType<typeof ElCascaderPanel>['$props'];
export interface cascaderProps extends /* @vue-ignore */ ElCascaderPanelProp {
    textHolder: string;
    typeList: TypeList[];
    searchName: string;
    currentType: string;
    hasBackground: boolean;
    size: 'large' | 'default' | 'small';
    modelValue: ElCascaderPanelProp['modelValue'];
    options: ElCascaderPanelProp['options'];
    props: ElCascaderPanelProp['props'];
}
export declare const defaultCascaderPropsData: {
    size: "small";
    textHolder: string;
    hasBackground: boolean;
    props: () => any;
};
export {};
