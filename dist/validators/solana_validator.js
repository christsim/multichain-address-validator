import base58Validator from './base58_validator.js';
import { getAddress } from '../helpers.js';
export default {
    isValidAddress: function (address) {
        return base58Validator.isValidAddress(getAddress(address), {
            maxLength: 44,
            minLength: 43,
        });
    }
};
