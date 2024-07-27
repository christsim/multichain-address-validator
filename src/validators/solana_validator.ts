import base58Validator from './base58_validator';
import {Address} from '../types'
import {getAddress} from '../helpers'

export default {
    isValidAddress: function (address: Address) {
        return base58Validator.isValidAddress(getAddress(address), {
            maxLength: 44,
            minLength: 43,
        })
    }
};
