"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base58_js_1 = __importDefault(require("../crypto/base58.js"));
const segwit_addr_js_1 = __importDefault(require("../crypto/segwit_addr.js"));
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
const buffer_1 = require("buffer");
function getDecoded(address) {
    try {
        return base58_js_1.default.decode(address);
    }
    catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}
function getChecksum(hashFunction, payload) {
    // Each currency may implement different hashing algorithm
    switch (hashFunction) {
        // blake then keccak hash chain
        case 'blake256keccak256':
            const blake = utils_js_1.default.blake2b256(payload);
            return utils_js_1.default.keccak256Checksum(buffer_1.Buffer.from(blake, 'hex'));
        case 'blake256':
            return utils_js_1.default.blake256Checksum(payload);
        case 'keccak256':
            return utils_js_1.default.keccak256Checksum(payload);
        case 'sha256':
        default:
            return utils_js_1.default.sha256Checksum(payload);
    }
}
function getAddressType(address, opts) {
    // should be 25 bytes per btc address spec and 26 decred
    const expectedLength = opts.expectedLength || 25;
    const hashFunction = opts.hashFunction || 'sha256';
    const decoded = getDecoded(address);
    if (decoded) {
        const length = decoded.length;
        if (length !== expectedLength) {
            return null;
        }
        if (opts.regex) {
            if (!opts.regex.test(address)) {
                return false;
            }
        }
        const checksum = utils_js_1.default.toHex(decoded.slice(length - 4, length)), body = utils_js_1.default.toHex(decoded.slice(0, length - 4)), goodChecksum = getChecksum(hashFunction, body);
        return checksum === goodChecksum ? utils_js_1.default.toHex(decoded.slice(0, expectedLength - 24)) : null;
    }
    return null;
}
function isValidP2PKHandP2SHAddress(address, opts) {
    const addressType = getAddressType(address, opts);
    if (addressType) {
        return opts.addressTypes.indexOf(addressType) >= 0;
    }
    return false;
}
// const DefaultBTCValidatorOpts: BTCValidatorOpts = {
//     addressTypes: {mainnet: ['00', '05'], testnet: ['6f', 'c4', '3c', '26']},
//     bech32Hrp: {mainnet: ['bc'], testnet: ['tb']},
// }
exports.default = (opts) => ({
    isValidAddress(address) {
        const addr = (0, helpers_js_1.getAddress)(address);
        // const _opts = {...DefaultBTCValidatorOpts, ...opts}
        return isValidP2PKHandP2SHAddress(addr, opts) || segwit_addr_js_1.default.isValidAddress(addr, opts);
    }
});
