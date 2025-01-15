import { Address } from '../types.js';
interface TronValidatorOpts {
    addressTypes: string[];
}
declare const _default: (opts?: TronValidatorOpts) => {
    isValidAddress: (address: Address) => boolean;
};
export default _default;
