import baseX from 'base-x';
import cryptoUtils from '../crypto/utils.js';
import { getAddress } from '../helpers.js';
const ALLOWED_CHARS = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';
const codec = baseX(ALLOWED_CHARS);
const regexp = new RegExp('^r[' + ALLOWED_CHARS + ']{27,35}$');
export default {
    /**
     * ripple address validation
     */
    isValidAddress: function (address) {
        const addr = getAddress(address);
        const destinationTag = address.destinationTag;
        const validAddress = regexp.test(addr) && this.verifyChecksum(addr);
        return validAddress && this.verifyMemo(destinationTag);
    },
    verifyMemo(destinationTag) {
        if (!destinationTag)
            return true; // Optional
        const tagNumber = Number(destinationTag);
        // A destination tag is a 32-bit unsigned integer.
        return /^[0-9]+$/.test(destinationTag) && tagNumber >= 0 && tagNumber <= 4294967295;
    },
    verifyChecksum: function (address) {
        const bytes = codec.decode(address);
        const computedChecksum = cryptoUtils.sha256Checksum(cryptoUtils.toHex(bytes.slice(0, -4)));
        const checksum = cryptoUtils.toHex(bytes.slice(-4));
        return computedChecksum === checksum;
    }
};
