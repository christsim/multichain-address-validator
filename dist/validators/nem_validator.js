import { Buffer } from 'buffer';
import cryptoUtils from '../crypto/utils.js';
import { getAddress } from '../helpers.js';
export default {
    isValidAddress(address) {
        const addr = getAddress(address).toString().toUpperCase().replace(/-/g, '');
        if (!address || addr.length !== 40) {
            return false;
        }
        const decoded = cryptoUtils.toHex(cryptoUtils.base32.b32decode(addr));
        const stepThreeChecksum = cryptoUtils.keccak256Checksum(Buffer.from(decoded.slice(0, 42), 'hex'));
        return stepThreeChecksum === decoded.slice(42);
    }
};
