declare namespace _default {
    export { decode };
    export { encode };
    export { encodings };
    export { verifyChecksum };
}
export default _default;
declare function decode(bechString: any, enc: any): {
    hrp: any;
    data: number[];
};
declare function encode(hrp: any, data: any, enc: any): string;
declare namespace encodings {
    let BECH32: string;
    let BECH32M: string;
}
declare function verifyChecksum(hrp: any, data: any, enc: any): boolean;
