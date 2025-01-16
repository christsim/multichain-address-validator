import { getAddress } from '../helpers.js';
export default {
    isValidAddress(address) {
        // Regex to validate the format "shard.realm.account"
        const regex = /^\d+\.\d+\.\d+$/;
        return regex.test(getAddress(address));
    }
};
