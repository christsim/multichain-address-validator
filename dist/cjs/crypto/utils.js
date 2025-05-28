"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
const sha256_1 = require("@noble/hashes/sha256");
const sha512_1 = require("@noble/hashes/sha512");
const utils_1 = require("@noble/hashes/utils");
const sha3_1 = require("@noble/hashes/sha3");
const base32_js_1 = __importDefault(require("./base32.js"));
const base58_js_1 = __importDefault(require("./base58.js"));
const blake256_js_1 = __importDefault(require("./blake256.js"));
const blake2b_js_1 = __importDefault(require("./blake2b.js"));
function numberToHex(number, length) {
    let hex = number.toString(16);
    if (hex.length % 2 === 1) {
        hex = '0' + hex;
    }
    return hex.padStart(length, '0');
}
function isHexChar(c) {
    if ((c >= 'A' && c <= 'F') ||
        (c >= 'a' && c <= 'f') ||
        (c >= '0' && c <= '9')) {
        return 1;
    }
    return 0;
}
/* Convert a hex char to value */
function hexChar2byte(c) {
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
function byte2hexStr(byte) {
    const hexByteMap = "0123456789ABCDEF";
    let str = "";
    str += hexByteMap.charAt(byte >> 4);
    str += hexByteMap.charAt(byte & 0x0f);
    return str;
}
function byteArray2hexStr(byteArray) {
    let str = "";
    let i = 0;
    for (i = 0; i < (byteArray.length - 1); i++) {
        str += byte2hexStr(byteArray[i]);
    }
    str += byte2hexStr(byteArray[i]);
    return str;
}
function hexStr2byteArray(str) {
    const byteArray = new Uint8Array(str.length / 2);
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
exports.default = {
    numberToHex: numberToHex,
    toHex: function (arrayOfBytes) {
        let hex = '';
        for (let i = 0; i < arrayOfBytes.length; i++) {
            // @ts-expect-error
            hex += numberToHex(arrayOfBytes[i]);
        }
        return hex;
    },
    sha256: function (payload, format = 'HEX') {
        return (0, utils_1.bytesToHex)((0, sha256_1.sha256)(hexStr2byteArray(payload)));
    },
    sha256x2: function (buffer, format = 'HEX') {
        return this.sha256(this.sha256(buffer, format), format);
    },
    sha256Checksum: function (payload) {
        return this.sha256(this.sha256(payload)).slice(0, 8);
    },
    sha512: function (payload, format = 'HEX') {
        return (0, utils_1.bytesToHex)((0, sha512_1.sha512)(payload));
    },
    sha512_256: function (payload, format = 'HEX') {
        return (0, utils_1.bytesToHex)((0, sha512_1.sha512_256)(hexStr2byteArray(payload)));
    },
    blake256: function (hexString) {
        return new blake256_js_1.default().update(hexString, 'hex').digest('hex');
    },
    blake256Checksum: function (payload) {
        return this.blake256(this.blake256(payload)).substr(0, 8);
    },
    blake2b: function (hexString, outlen) {
        return new blake2b_js_1.default(outlen).update(buffer_1.Buffer.from(hexString, 'hex')).digest('hex');
    },
    keccak256: function (hexString) {
        return (0, utils_1.bytesToHex)((0, sha3_1.keccak_256)(hexString));
    },
    keccak256Checksum: function (payload) {
        return this.keccak256(payload).toString().substr(0, 8);
    },
    blake2b256: function (hexString) {
        return new blake2b_js_1.default(32).update(buffer_1.Buffer.from(hexString, 'hex')).digest('hex');
    },
    base58: base58_js_1.default.decode,
    byteArray2hexStr: byteArray2hexStr,
    hexStr2byteArray: hexStr2byteArray,
    base32: base32_js_1.default
};
