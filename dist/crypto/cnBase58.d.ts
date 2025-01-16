export default cnBase58;
declare namespace cnBase58 {
    function encode_block(data: any, buf: any, index: any): any;
    function encode(hex: any): string;
    function decode_block(data: any, buf: any, index: any): any;
    function decode(enc: any): string;
}
