import baseX from 'base-x'

import cryptoUtils from '../crypto/utils.js'
import {Address, NetworkType} from '../types.js'
import {getAddress, getMemo} from '../helpers.js'

const ALLOWED_CHARS = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';

const codec = baseX(ALLOWED_CHARS);
const regexp = new RegExp('^r[' + ALLOWED_CHARS + ']{27,35}$');
// XLS-5 X-address: a 2-byte network prefix, the 20-byte account ID, a flags byte and an 8-byte tag
const xAddressRegexp = new RegExp('^[XT][' + ALLOWED_CHARS + ']{46}$');
const xAddressPrefix = {
    [NetworkType.MainNet]: '0544',
    [NetworkType.TestNet]: '0493',
}

export default (networkType: NetworkType) => ({
    /**
     * ripple address validation
     */
    isValidAddress: function (address: Address) {
        const addr = getAddress(address)
        const memo = getMemo(address)

        if (xAddressRegexp.test(addr)) {
            return this.verifyXAddress(addr, memo)
        }

        const validAddress = regexp.test(addr) && this.verifyChecksum(addr);

        return validAddress && this.verifyMemo(memo)
    },

    isValidMemo(memo: string): boolean {
        return this.verifyMemo(memo)
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
    },

    /**
     * XLS-5: an untagged X-address takes any valid memo; a tagged one takes only a memo equal to its tag.
     * Flags 0x02 (64-bit tag, reserved) and unknown flags are invalid.
     */
    verifyXAddress(address: string, memo?: string): boolean {
        const bytes = codec.decode(address);
        if (bytes.length !== 35 || !this.verifyChecksum(address)) {
            return false
        }
        if (cryptoUtils.toHex(bytes.slice(0, 2)) !== xAddressPrefix[networkType]) {
            return false
        }

        const flags = bytes[22]
        const tag = bytes.slice(23, 31)
        if (flags === 0 && tag.every(byte => byte === 0)) {
            return this.verifyMemo(memo)
        }
        if (flags === 1 && tag.slice(4).every(byte => byte === 0)) {
            const tagValue = tag[0] + tag[1] * 0x100 + tag[2] * 0x10000 + tag[3] * 0x1000000
            return !memo || (this.verifyMemo(memo) && Number(memo) === tagValue)
        }
        return false
    },
});
