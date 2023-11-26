export declare const inputLimitObj: {
    int: (value: string | null | number) => string | number;
    'positive-int': (value: string | null | number) => number | null;
    'negative-int': (value: string | null | number) => string | number | null;
    number: (value: string | null | number) => string | number;
    'positive-number': (value: string | null | number) => string | number;
    'negative-number': (value: string | null | number) => string | number;
};
