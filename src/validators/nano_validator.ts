import baseX from 'base-x'

import cryptoUtils from '../crypto/utils.js'
import {Address} from '../types.js'
import {getAddress} from '../helpers.js'


const ALLOWED_CHARS = '13456789abcdefghijkmnopqrstuwxyz';

const codec = baseX(ALLOWED_CHARS);
// https://github.com/nanocurrency/raiblocks/wiki/Accounts,-Keys,-Seeds,-and-Wallet-Identifiers
const regexp = new RegExp('^(xrb|nano)_([' + ALLOWED_CHARS + ']{60})$');

export default {
    isValidAddress(address: Address) {
        const addr = getAddress(address)
        if (regexp.test(addr)) {
            return this.verifyChecksum(addr);
        }

        return false;
    },

    verifyChecksum: function (address: string) {
        const bytes = codec.decode(regexp.exec(address)[2]).slice(-37);
        // https://github.com/nanocurrency/raiblocks/blob/master/rai/lib/numbers.cpp#L73
        const computedChecksum = cryptoUtils.blake2b(cryptoUtils.toHex(bytes.slice(0, -5)), 5);
        const checksum = cryptoUtils.toHex(bytes.slice(-5).reverse());

        return computedChecksum === checksum
    }
};
