import {Buffer} from 'buffer'
import { sha256 } from '@noble/hashes/sha256'
import { sha512, sha512_256 } from '@noble/hashes/sha512'
import { bytesToHex } from '@noble/hashes/utils'
import { keccak_256 } from '@noble/hashes/sha3'

import base32 from './base32.js'
import base58 from './base58.js'

import Blake256 from './blake256.js'
import Blake2B from './blake2b.js'

function numberToHex(number: number, length: number) {
    let hex = number.toString(16);
    if (hex.length % 2 === 1) {
        hex = '0' + hex;
    }
    return hex.padStart(length, '0');
}

function isHexChar(c: string) {
    if ((c >= 'A' && c <= 'F') ||
        (c >= 'a' && c <= 'f') ||
        (c >= '0' && c <= '9')) {
        return 1;
    }
    return 0;
}

/* Convert a hex char to value */
function hexChar2byte(c: string) {
    let d = 0;
    if (c >= 'A' && c <= 'F') {
        d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    }
    else if (c >= 'a' && c <= 'f') {
        d = c.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
    }
    else if (c >= '0' && c <= '9') {
        d = c.charCodeAt(0) - '0'.charCodeAt(0);
    }
    return d;
}

/* Convert a byte to string */
function byte2hexStr(byte: number) {
    const hexByteMap = "0123456789ABCDEF";
    let str = "";
    str += hexByteMap.charAt(byte >> 4);
    str += hexByteMap.charAt(byte & 0x0f);
    return str;
}

function byteArray2hexStr(byteArray: number[]) {
    let str = "";
    let i = 0
    for (i = 0; i < (byteArray.length - 1); i++) {
        str += byte2hexStr(byteArray[i]);
    }
    str += byte2hexStr(byteArray[i]);
    return str;
}

function hexStr2byteArray(str: string) {
    const byteArray = new Uint8Array(str.length/2);
    let d = 0;
    let i = 0;
    let j = 0;
    let k = 0;

     for (i = 0; i < str.length; i++) {
        const c = str.charAt(i);
        if (isHexChar(c)) {
            d <<= 4;
            d += hexChar2byte(c);
            j++;
            if (0 === (j % 2)) {
                byteArray[k++] = d;
                d = 0;
            }
        }
    }
    return byteArray;
}

export default {
    numberToHex: numberToHex,
    toHex: function (arrayOfBytes: any) {
        let hex = '';
        for (let i = 0; i < arrayOfBytes.length; i++) {
            // @ts-expect-error
            hex += numberToHex(arrayOfBytes[i]);
        }
        return hex;
    },
    sha256: function (payload: any, format = 'HEX') {
        return bytesToHex(sha256(hexStr2byteArray(payload) as any))
    },
    sha256x2: function (buffer: any, format = 'HEX') {
        return this.sha256(this.sha256(buffer, format), format);
    },
    sha256Checksum: function (payload: any) {
        return this.sha256(this.sha256(payload)).slice(0, 8);
    },
    sha512: function(payload: any, format = 'HEX') {
        return bytesToHex(sha512(payload))
    },
    sha512_256: function (payload: any, format = 'HEX') {
        return bytesToHex(sha512_256(hexStr2byteArray(payload)))
    },
    blake256: function (hexString: string) {
        return new Blake256().update(hexString, 'hex').digest('hex');
    },
    blake256Checksum: function (payload: any) {
        return this.blake256(this.blake256(payload)).substr(0, 8);
    },
    blake2b: function (hexString: string, outlen: number) {
        return new Blake2B(outlen).update(Buffer.from(hexString, 'hex')).digest('hex');
    },
    keccak256: function (hexString: string) {
        return bytesToHex(keccak_256(hexString));
    },
    keccak256Checksum: function (payload: any) {
        return this.keccak256(payload).toString().substr(0, 8);
    },
    blake2b256: function (hexString: string) {
        return new Blake2B(32).update(Buffer.from(hexString, 'hex')).digest('hex');
    },
    base58: base58.decode,
    byteArray2hexStr: byteArray2hexStr,
    hexStr2byteArray: hexStr2byteArray,
    base32: base32
}
