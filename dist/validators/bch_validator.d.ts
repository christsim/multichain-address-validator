import { Address, NetworkType } from '../types.js';
interface BCHValidatorOpts {
    addressTypes: string[];
    expectedLength?: number;
    bech32Hrp?: [string];
    hashFunction?: 'blake256' | 'blake256keccak256' | 'keccak256' | 'sha256';
    regexp?: RegExp;
    networkType: NetworkType;
}
declare const _default: (opts: BCHValidatorOpts) => {
    isValidAddress: (address: Address) => boolean;
};
export default _default;
