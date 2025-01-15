export default Blake256;
declare function Blake256(): void;
declare class Blake256 {
    _h: number[];
    _s: number[];
    _block: any;
    _blockOffset: number;
    _length: number[];
    _nullt: boolean;
    _zo: any;
    _oo: any;
    _length_carry(arr: any): void;
    update(data: any, encoding: any): this;
    _compress(): void;
    _padding(): void;
    digest(encoding: any): any;
}
declare namespace Blake256 {
    let sigma: number[][];
    let u256: number[];
    let padding: any;
}
