import type { App } from 'vue';
import type { tableConfig } from './src/fpi-el-table/types';
export * from './src/index';
export { fpiELementPlusResolver } from './resolve';
export declare const setTableConfig: (option: tableConfig) => void;
declare const _default: {
    install: (app: App) => void;
    setTableConfig: (option: tableConfig) => void;
};
export default _default;
