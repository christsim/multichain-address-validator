import baseX from 'base-x'

import cryptoUtils from '../crypto/utils.js'
import {Address} from '../types.js'
import {getAddress} from '../helpers.js'

const ALLOWED_CHARS = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';

const codec = baseX(ALLOWED_CHARS);
const regexp = new RegExp('^r[' + ALLOWED_CHARS + ']{27,35}$');

export default {
    /**
     * ripple address validation
     */
    isValidAddress: function (address: Address) {
        const addr = getAddress(address)
        const destinationTag = (address as any).destinationTag

        const validAddress = regexp.test(addr) && this.verifyChecksum(addr);

        return validAddress && this.verifyMemo(destinationTag)
    },

    verifyMemo(destinationTag: string | null) {
        return !destinationTag || /[0-9]+/.test(destinationTag)
    },

    verifyChecksum: function (address: string) {
        const bytes = codec.decode(address);
        const computedChecksum = cryptoUtils.sha256Checksum(cryptoUtils.toHex(bytes.slice(0, -4)));
        const checksum = cryptoUtils.toHex(bytes.slice(-4));

        return computedChecksum === checksum
    }
};
