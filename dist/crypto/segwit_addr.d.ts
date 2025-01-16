declare namespace _default {
    export { encode };
    export { decode };
    export { isValidAddress };
}
export default _default;
declare function encode(hrp: any, version: any, program: any): any;
declare function decode(hrp: any, addr: any): {
    version: any;
    program: number[];
};
declare function isValidAddress(address: any, opts?: {}): boolean;
