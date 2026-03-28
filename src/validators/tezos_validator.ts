import base58 from '../crypto/base58.js'
import cryptoUtils from '../crypto/utils.js'
import {Address} from '../types.js'
import {getAddress} from '../helpers.js'

const VALID_PREFIXES = [
    [6, 161, 159], // tz1 (ed25519)
    [6, 161, 161], // tz2 (secp256k1)
    [6, 161, 164], // tz3 (p256)
    [2, 90, 121],  // KT1 (originated)
];

function decodeRaw(buffer: number[]) {
    const payload = buffer.slice(0, -4);
    const checksum = buffer.slice(-4);
    const newChecksum = cryptoUtils.hexStr2byteArray(
        cryptoUtils.sha256x2(cryptoUtils.byteArray2hexStr(payload))
    );

    if (checksum[0] ^ newChecksum[0] |
        checksum[1] ^ newChecksum[1] |
        checksum[2] ^ newChecksum[2] |
        checksum[3] ^ newChecksum[3])
        return;
    return payload;
}

function hasValidPrefix(payload: number[]): boolean {
    return VALID_PREFIXES.some(prefix =>
        prefix.every((byte, i) => payload[i] === byte)
    );
}

export default {
    isValidAddress(address: Address) {
        try {
            const buffer = base58.decode(getAddress(address));
            const payload = decodeRaw(buffer);
            if (!payload)
                return false;
            return hasValidPrefix(payload);
        } catch {
            return false;
        }
    }
}
