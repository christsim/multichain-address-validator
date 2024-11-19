declare function numberToHex(number: number, length: number): string;
declare function byteArray2hexStr(byteArray: number[]): string;
declare function hexStr2byteArray(str: string): Uint8Array;
declare const _default: {
    numberToHex: typeof numberToHex;
    toHex: (arrayOfBytes: any) => string;
    sha256: (payload: any, format?: string) => string;
    sha256x2: (buffer: any, format?: string) => any;
    sha256Checksum: (payload: any) => any;
    sha512: (payload: any, format?: string) => string;
    sha512_256: (payload: any, format?: string) => string;
    blake256: (hexString: string) => string;
    blake256Checksum: (payload: any) => any;
    blake2b: (hexString: string, outlen: number) => any;
    keccak256: (hexString: string) => string;
    keccak256Checksum: (payload: any) => any;
    blake2b256: (hexString: string) => any;
    base58: (string: string) => number[];
    byteArray2hexStr: typeof byteArray2hexStr;
    hexStr2byteArray: typeof hexStr2byteArray;
    base32: {
        b32decode: (s: string) => Uint8Array;
        b32encode: (s: string) => string;
    };
};
export default _default;
