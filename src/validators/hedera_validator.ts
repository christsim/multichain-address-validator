import type {Address} from '../types.js'
import {getAddress} from '../helpers.js'

export default {
    isValidAddress(address: Address) {
        // Regex to validate the format "shard.realm.account"
        const regex = /^\d+\.\d+\.\d+$/;
        return regex.test(getAddress(address));
    }
};
