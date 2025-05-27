import baseX from 'base-x';
import crc from 'crc';
import cryptoUtils from '../crypto/utils.js';
import { getAddress } from '../helpers.js';
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const base32 = baseX(ALPHABET);
const regexp = new RegExp('^[' + ALPHABET + ']{56}$');
const ed25519PublicKeyVersionByte = (6 << 3);
function swap16(number) {
    const lower = number & 0xFF;
    const upper = (number >> 8) & 0xFF;
    return (lower << 8) | upper;
}
export default {
    isValidAddress: function (address) {
        const addr = getAddress(address);
        const destinationTag = address.destinationTag;
        const validAddress = regexp.test(addr) && this.verifyChecksum(addr);
        return validAddress && this.verifyMemo(destinationTag);
    },
    verifyMemo(memo) {
        if (!memo)
            return true; // Optional
        // Ensure it's a valid UTF-8 string and does not exceed 28 bytes
        const encoder = new TextEncoder();
        return encoder.encode(memo).length <= 28;
    },
    verifyChecksum: function (address) {
        // based on https://github.com/stellar/js-stellar-base/blob/master/src/strkey.js#L126
        var bytes = base32.decode(address);
        if (bytes[0] !== ed25519PublicKeyVersionByte) {
            return false;
        }
        const computedChecksum = cryptoUtils.numberToHex(swap16(crc.crc16xmodem(bytes.slice(0, -2))), 4);
        const checksum = cryptoUtils.toHex(bytes.slice(-2));
        return computedChecksum === checksum;
    }
};
