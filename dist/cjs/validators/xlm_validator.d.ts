import { Address } from '../types.js';
declare const _default: {
    isValidAddress: (address: Address) => any;
    verifyMemo(memo: string | null): boolean;
    verifyChecksum: (address: string) => boolean;
};
export default _default;
