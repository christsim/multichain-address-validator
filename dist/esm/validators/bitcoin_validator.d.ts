import { Address } from '../types.js';
interface BTCValidatorOpts {
    addressTypes: string[];
    expectedLength?: number;
    bech32Hrp?: [string];
    hashFunction?: 'blake256' | 'blake256keccak256' | 'keccak256' | 'sha256';
    regex?: RegExp;
}
declare const _default: (opts: BTCValidatorOpts) => {
    isValidAddress(address: Address): boolean;
};
export default _default;
