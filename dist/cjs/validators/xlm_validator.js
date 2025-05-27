"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_x_1 = __importDefault(require("base-x"));
const crc_1 = __importDefault(require("crc"));
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
const base32 = (0, base_x_1.default)(ALPHABET);
const regexp = new RegExp('^[' + ALPHABET + ']{56}$');
const ed25519PublicKeyVersionByte = (6 << 3);
function swap16(number) {
    const lower = number & 0xFF;
    const upper = (number >> 8) & 0xFF;
    return (lower << 8) | upper;
}
exports.default = {
    isValidAddress: function (address) {
        const addr = (0, helpers_js_1.getAddress)(address);
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
        const computedChecksum = utils_js_1.default.numberToHex(swap16(crc_1.default.crc16xmodem(bytes.slice(0, -2))), 4);
        const checksum = utils_js_1.default.toHex(bytes.slice(-2));
        return computedChecksum === checksum;
    }
};
