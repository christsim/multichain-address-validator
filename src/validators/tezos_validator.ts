import base58 from '../crypto/base58.js'
import cryptoUtils from '../crypto/utils.js'
import {Address} from '../types.js'
import {getAddress} from '../helpers.js'

const prefix = new Uint8Array([6, 161, 159]);

function decodeRaw(buffer: any) {
    let payload = buffer.slice(0, -4);
    let checksum = buffer.slice(-4);
    let newChecksum = cryptoUtils.hexStr2byteArray(
        cryptoUtils.sha256x2(cryptoUtils.byteArray2hexStr(payload))
    );

    if (checksum[0] ^ newChecksum[0] |
        checksum[1] ^ newChecksum[1] |
        checksum[2] ^ newChecksum[2] |
        checksum[3] ^ newChecksum[3])
        return;
    return payload;
}

export default {
    isValidAddress(address: Address) {
        try {
            let buffer = base58.decode(getAddress(address));
            let payload = decodeRaw(buffer);
            if (!payload)
                return false;
            payload.slice(prefix.length);
            return true;
        } catch (e) {
            return false;
        }
    }
}
