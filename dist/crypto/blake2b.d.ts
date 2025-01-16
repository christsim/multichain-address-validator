export default Blake2b;
declare function Blake2b(outlen: any, key: any, salt: any, personal: any): void;
declare class Blake2b {
    constructor(outlen: any, key: any, salt: any, personal: any);
    b: Uint8Array;
    h: Uint32Array;
    t: number;
    c: number;
    outlen: any;
    update(input: any): this;
    digest(out: any): any;
    final: any;
}
