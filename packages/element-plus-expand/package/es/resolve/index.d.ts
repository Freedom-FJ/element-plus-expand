export declare function fpiELementPlusResolver(option?: {
    isSSR?: boolean;
}): {
    type: "component";
    resolve: (name: string) => {
        name: string;
        from: string;
        sideEffects: string[] | undefined;
    } | undefined;
};
export default fpiELementPlusResolver;
