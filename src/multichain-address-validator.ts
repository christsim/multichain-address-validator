import {Address, Chain, NetworkType} from './types.js'
import {getValidatorForChain} from './chain-validators.js'

export function validate(address: Address, chain: Chain) {
    const validator = getValidatorForChain(chain)
    if (!validator) {
        throw new Error(`Missing validator for chain: ${chain}`);
    }

    return validator.isValidAddress(address);
}

export type { Address, Chain, NetworkType }
