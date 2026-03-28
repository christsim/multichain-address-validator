import BIP173Validator from './bip173_validator.js'
import {Address} from '../types.js'
import {getAddress} from '../helpers.js'

// Cosmos uses Bech32 encoding with 'cosmos' as the HRP (Human Readable Part)
// Mainnet addresses start with 'cosmos1'
export default {
    isValidAddress(address: Address) {
        const addr = getAddress(address)
        return BIP173Validator.isValidAddress(addr, {
            bech32Hrp: ['cosmos']
        })
    }
}
