import baseX from 'base-x'
import crc from 'crc'

import cryptoUtils from '../crypto/utils'
import {Address} from '../types'
import {getAddress} from '../helpers'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const base32 = baseX(ALPHABET);
const regexp = new RegExp('^[' + ALPHABET + ']{56}$');
const ed25519PublicKeyVersionByte = (6 << 3);

function swap16(number: number) {
    const lower = number & 0xFF;
    const upper = (number >> 8) & 0xFF;
    return (lower << 8) | upper;
}

export default {
    isValidAddress(address: Address) {
        const addr = getAddress(address)
        if (regexp.test(addr)) {
            return this.verifyChecksum(addr);
        }

        return false;
    },

    verifyChecksum: function (address: string) {
        // based on https://github.com/stellar/js-stellar-base/blob/master/src/strkey.js#L126
        var bytes = base32.decode(address);
        if (bytes[0] !== ed25519PublicKeyVersionByte) {
            return false;
        }

        const computedChecksum = cryptoUtils.numberToHex(swap16(crc.crc16xmodem(bytes.slice(0, -2))), 4);
        const checksum = cryptoUtils.toHex(bytes.slice(-2));

        return computedChecksum === checksum
    }
};
