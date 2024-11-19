import { getValidatorForChain } from './chain-validators.js';
export function validate(address, chain) {
    const validator = getValidatorForChain(chain);
    if (validator) {
        return validator.isValidAddress(address);
    }
    throw new Error(`Missing validator for chain: ${chain}`);
}
