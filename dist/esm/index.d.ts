import { Address, Chain, NetworkType } from './types.js';
export declare function validate(address: Address, chain: Chain): boolean;
export type { Address, Chain };
export { NetworkType };
declare const _default: {
    validate: typeof validate;
};
export default _default;
