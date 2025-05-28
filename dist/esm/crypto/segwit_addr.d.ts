declare namespace _default {
    export { encode };
    export { decode };
    export { isValidAddress };
}
export default _default;
declare function encode(hrp: any, version: any, program: any): string;
declare function decode(hrp: any, addr: any): {
    version: number;
    program: number[];
};
declare function isValidAddress(address: any, opts?: {}): boolean;
