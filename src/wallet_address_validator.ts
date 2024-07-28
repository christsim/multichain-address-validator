import {Address, Chain} from './types'
import {getValidatorForChain} from './chain-validators'

export function validate(address: Address, chain: Chain) {
    const validator = getValidatorForChain(chain)
    if (validator) {
        return validator.isValidAddress(address);
    }

    throw new Error(`Missing validator for chain: ${chain}`);
}
