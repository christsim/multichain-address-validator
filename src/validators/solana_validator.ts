import base58Validator from './base58_validator';
import {Address} from '../types'

export default {
    isValidAddress: function (address: Address) {
        address = (address as any).address ?? address
        return base58Validator.isValidAddress(address, {
            maxLength: 44,
            minLength: 43,
        })
    }
};
