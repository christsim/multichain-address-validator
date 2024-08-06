import base58Validator from './base58_validator.js';
import {Address} from '../types.js'
import {getAddress} from '../helpers.js'

export default {
    isValidAddress: function (address: Address) {
        return base58Validator.isValidAddress(getAddress(address), {
            maxLength: 44,
            minLength: 43,
        })
    }
};
