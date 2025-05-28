import cryptoUtils from '../crypto/utils.js';
import { getAddress } from '../helpers.js';
const ALGORAND_CHECKSUM_BYTE_LENGTH = 4;
const ALGORAND_ADDRESS_LENGTH = 58;
function verifyChecksum(address) {
    if (address.length !== ALGORAND_ADDRESS_LENGTH) {
        return false;
    }
    else {
        // Decode base32 Address
        const decoded = cryptoUtils.base32.b32decode(address);
        const addr = decoded.slice(0, decoded.length - ALGORAND_CHECKSUM_BYTE_LENGTH);
        const checksum = cryptoUtils.byteArray2hexStr(decoded.slice(-4));
        // Hash Address - Checksum
        const code = cryptoUtils.sha512_256(cryptoUtils.byteArray2hexStr(addr)).substr(-ALGORAND_CHECKSUM_BYTE_LENGTH * 2);
        return code.toUpperCase() === checksum;
    }
}
export default {
    isValidAddress: function (address) {
        return verifyChecksum(getAddress(address));
    }
};
