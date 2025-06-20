import {Address, Chain, NetworkType} from './types.js'
import {getValidatorForChain} from './chain-validators.js'

export function validate(address: Address, chain: Chain): boolean {
    const validator = getValidatorForChain(chain)
    if (!validator) {
        throw new Error(`Missing validator for chain: ${chain}`);
    }

    return validator.isValidAddress(address);
}

export function validateMemo(memo: string, chain: Chain): boolean {
    const validator = getValidatorForChain(chain)
    if (!validator) {
        throw new Error(`Missing validator for chain: ${chain}`);
    }

    return validator.isValidMemo?.(memo) ?? true
}

export type { Address, Chain }
export { NetworkType }

export default {
    validate
}
