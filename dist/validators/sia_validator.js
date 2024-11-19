import isEqual from 'lodash.isequal';
import cryptoUtils from '../crypto/utils.js';
import { getAddress } from '../helpers.js';
function hexToBytes(hex) {
    const bytes = [];
    for (let c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
}
function verifyChecksum(address) {
    const checksumBytes = address.slice(0, 32 * 2);
    const check = address.slice(32 * 2, 38 * 2);
    const blakeHash = cryptoUtils.blake2b(checksumBytes, 32).slice(0, 6 * 2);
    return !!isEqual(blakeHash, check);
}
export default {
    isValidAddress: function (address) {
        const addr = getAddress(address);
        if (addr.length !== 76) {
            // Check if it has the basic requirements of an address
            return false;
        }
        // Otherwise check each case
        return verifyChecksum(addr);
    },
};
