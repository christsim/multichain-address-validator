interface Bip173Options {
    bech32Hrp: string[];
}
declare const _default: {
    isValidAddress: (address: string, opts: Bip173Options) => boolean;
};
export default _default;
