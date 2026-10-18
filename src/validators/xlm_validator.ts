import baseX from 'base-x'
import {Buffer} from 'buffer'
import crc from 'crc'

import cryptoUtils from '../crypto/utils.js'
import {Address} from '../types.js'
import {getAddress, getMemo} from '../helpers.js'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const base32 = baseX(ALPHABET);
const regexp = new RegExp('^[' + ALPHABET + ']{56}$');
const ed25519PublicKeyVersionByte = (6 << 3);
// SEP-23 muxed account: a version byte, the 32-byte ed25519 key, an 8-byte ID and a 2-byte CRC
const muxedRegexp = new RegExp('^M[' + ALPHABET + ']{68}$');
const muxedEd25519VersionByte = (12 << 3);

/**
 * RFC 4648 base32 without padding, as strkeys use it. Undefined when the unused trailing bits are not zero (SEP-23).
 */
function decodeStrkey(strkey: string): Uint8Array | undefined {
    const bytes: number[] = []
    let buffer = 0
    let bits = 0
    for (const char of strkey) {
        buffer = ((buffer << 5) | ALPHABET.indexOf(char)) & 0xffff
        bits += 5
        if (bits >= 8) {
            bits -= 8
            bytes.push((buffer >> bits) & 0xff)
        }
    }
    return (buffer & ((1 << bits) - 1)) === 0 ? Uint8Array.from(bytes) : undefined
}

function swap16(number: number) {
    const lower = number & 0xFF;
    const upper = (number >> 8) & 0xFF;
    return (lower << 8) | upper;
}

export default {
    isValidAddress: function (address: Address) {
        const addr = getAddress(address)
        const memo = getMemo(address)

        const validAddress = (regexp.test(addr) && this.verifyChecksum(addr))
            || (muxedRegexp.test(addr) && this.verifyMuxedChecksum(addr));

        return validAddress && this.verifyMemo(memo)
    },

    isValidMemo(memo: string): boolean {
        return this.verifyMemo(memo)
    },

    verifyMemo(memo?: string): boolean {
        if (!memo) return true; // Optional

        // Ensure it's a valid UTF-8 string and does not exceed 28 bytes
        const encoder = new TextEncoder();
        return encoder.encode(memo).length <= 28;
    },

    verifyChecksum: function (address: string) {
        // based on https://github.com/stellar/js-stellar-base/blob/master/src/strkey.js#L126
        var bytes = base32.decode(address);
        if (bytes[0] !== ed25519PublicKeyVersionByte) {
            return false;
        }

        const computedChecksum = cryptoUtils.numberToHex(swap16(crc.crc16xmodem(Buffer.from(bytes.slice(0, -2)))), 4);
        const checksum = cryptoUtils.toHex(bytes.slice(-2));

        return computedChecksum === checksum
    },

    verifyMuxedChecksum: function (address: string) {
        const bytes = decodeStrkey(address);
        if (!bytes || bytes.length !== 43 || bytes[0] !== muxedEd25519VersionByte) {
            return false;
        }

        const computedChecksum = cryptoUtils.numberToHex(swap16(crc.crc16xmodem(Buffer.from(bytes.slice(0, -2)))), 4);
        const checksum = cryptoUtils.toHex(bytes.slice(-2));

        return computedChecksum === checksum
    }
};
