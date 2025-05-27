"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
const ALGORAND_CHECKSUM_BYTE_LENGTH = 4;
const ALGORAND_ADDRESS_LENGTH = 58;
function verifyChecksum(address) {
    if (address.length !== ALGORAND_ADDRESS_LENGTH) {
        return false;
    }
    else {
        // Decode base32 Address
        const decoded = utils_js_1.default.base32.b32decode(address);
        const addr = decoded.slice(0, decoded.length - ALGORAND_CHECKSUM_BYTE_LENGTH);
        const checksum = utils_js_1.default.byteArray2hexStr(decoded.slice(-4));
        // Hash Address - Checksum
        const code = utils_js_1.default.sha512_256(utils_js_1.default.byteArray2hexStr(addr)).substr(-ALGORAND_CHECKSUM_BYTE_LENGTH * 2);
        return code.toUpperCase() === checksum;
    }
}
exports.default = {
    isValidAddress: function (address) {
        return verifyChecksum((0, helpers_js_1.getAddress)(address));
    }
};
