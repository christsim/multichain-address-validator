"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cbor_js_1 = __importDefault(require("cbor-js"));
const crc_1 = __importDefault(require("crc"));
const base58_js_1 = __importDefault(require("../crypto/base58.js"));
const bip173_validator_js_1 = __importDefault(require("./bip173_validator.js"));
const helpers_js_1 = require("../helpers.js");
function getDecoded(address) {
    try {
        const decoded = base58_js_1.default.decode(address);
        return cbor_js_1.default.decode(new Uint8Array(decoded).buffer);
    }
    catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}
function isValidAddressV1(address) {
    const decoded = getDecoded(address);
    if (!decoded || (!Array.isArray(decoded) && decoded.length != 2)) {
        return false;
    }
    const tagged = decoded[0];
    const validCrc = decoded[1];
    if (typeof (validCrc) != 'number') {
        return false;
    }
    // get crc of the payload
    const crc = crc_1.default.crc32(tagged);
    return crc == validCrc;
}
function isValidAddressShelley(address, opts) {
    // shelley address are just bip 173 - bech32 addresses (https://cips.cardano.org/cips/cip4/)
    return bip173_validator_js_1.default.isValidAddress(address, opts);
}
exports.default = {
    isValidAddress(address) {
        const addr = (0, helpers_js_1.getAddress)(address);
        return isValidAddressV1((0, helpers_js_1.getAddress)(addr)) || isValidAddressShelley(addr, {
            bech32Hrp: ['addr']
        });
    }
};
