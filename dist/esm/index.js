import { NetworkType } from './types.js';
import { getValidatorForChain } from './chain-validators.js';
export function validate(address, chain) {
    const validator = getValidatorForChain(chain);
    if (!validator) {
        throw new Error(`Missing validator for chain: ${chain}`);
    }
    return validator.isValidAddress(address);
}
export { NetworkType };
export default {
    validate
};
