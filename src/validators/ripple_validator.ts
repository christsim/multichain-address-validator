import baseX from 'base-x'

import cryptoUtils from '../crypto/utils.js'
import {Address} from '../types.js'
import {getAddress, getMemo} from '../helpers.js'

const ALLOWED_CHARS = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';

const codec = baseX(ALLOWED_CHARS);
const regexp = new RegExp('^r[' + ALLOWED_CHARS + ']{27,35}$');

export default {
    /**
     * ripple address validation
     */
    isValidAddress: function (address: Address) {
        const addr = getAddress(address)
        const memo = getMemo(address)

        const validAddress = regexp.test(addr) && this.verifyChecksum(addr);

        return validAddress && this.verifyMemo(memo)
    },

    verifyMemo(memo?: string): boolean {
        if (!memo) return true; // Optional

        const memoNumber = Number(memo);
        // A memo is a 32-bit unsigned integer.
        return /^[0-9]+$/.test(memo) && memoNumber >= 0 && memoNumber <= 4294967295;
    },

    verifyChecksum(address: string): boolean {
        const bytes = codec.decode(address);
        const computedChecksum = cryptoUtils.sha256Checksum(cryptoUtils.toHex(bytes.slice(0, -4)));
        const checksum = cryptoUtils.toHex(bytes.slice(-4));

        return computedChecksum === checksum
    }
};
