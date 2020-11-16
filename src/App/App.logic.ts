export const sum = (a: number, b: number) => {
    return a + b;
};

export interface AppLogic {
    sum: (a: number, b: number) => number
};