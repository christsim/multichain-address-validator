import { getAddress } from '../helpers.js';
export default {
    isValidAddress(address) {
        // Regex to match the format "shard.realm.account" (e.g., "0.0.12345")
        const regex = /^\d+\.\d+\.\d+$/;
        const addr = getAddress(address);
        if (!regex.test(addr)) {
            return false;
        }
        // Split the address into shard, realm, and account parts
        const [shard, realm, account] = addr.split('.').map(Number);
        // Validate each part is a non-negative integer
        return (Number.isInteger(shard) &&
            shard >= 0 &&
            Number.isInteger(realm) &&
            realm >= 0 &&
            Number.isInteger(account) &&
            account >= 0);
    }
};
