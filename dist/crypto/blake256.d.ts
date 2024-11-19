export default Blake256;
declare function Blake256(): void;
declare class Blake256 {
    _h: number[];
    _s: number[];
    _block: Buffer;
    _blockOffset: number;
    _length: number[];
    _nullt: boolean;
    _zo: Buffer;
    _oo: Buffer;
    _length_carry(arr: any): void;
    update(data: any, encoding: any): this;
    _compress(): void;
    _padding(): void;
    digest(encoding: any): string;
}
declare namespace Blake256 {
    let sigma: number[][];
    let u256: number[];
    let padding: Buffer;
}
