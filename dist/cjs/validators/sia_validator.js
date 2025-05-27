"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_isequal_1 = __importDefault(require("lodash.isequal"));
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
function hexToBytes(hex) {
    const bytes = [];
    for (let c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
}
function verifyChecksum(address) {
    const checksumBytes = address.slice(0, 32 * 2);
    const check = address.slice(32 * 2, 38 * 2);
    const blakeHash = utils_js_1.default.blake2b(checksumBytes, 32).slice(0, 6 * 2);
    return !!(0, lodash_isequal_1.default)(blakeHash, check);
}
exports.default = {
    isValidAddress: function (address) {
        const addr = (0, helpers_js_1.getAddress)(address);
        if (addr.length !== 76) {
            // Check if it has the basic requirements of an address
            return false;
        }
        // Otherwise check each case
        return verifyChecksum(addr);
    },
};
