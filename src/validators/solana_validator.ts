import base58Validator from './base58_validator.js';
import {Address} from '../types.js'
import {getAddress} from '../helpers.js'
import {Buffer} from 'buffer'
import base58 from '../crypto/base58.js'

export default {
    isValidAddress: function (address: Address) {
        const validBase58 = base58Validator.isValidAddress(getAddress(address), {
            maxLength: 44,
            minLength: 43,
        })

        if (!validBase58) {
            return false
        }

        // solana address must be 32 bytes
        return base58.decode(getAddress(address)).length === 32
    }
};
