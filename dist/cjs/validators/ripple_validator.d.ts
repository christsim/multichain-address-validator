import { Address } from '../types.js';
declare const _default: {
    /**
     * ripple address validation
     */
    isValidAddress: (address: Address) => any;
    verifyMemo(destinationTag: string | null): boolean;
    verifyChecksum: (address: string) => boolean;
};
export default _default;
