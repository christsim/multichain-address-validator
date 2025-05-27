"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
exports.default = {
    isValidAddress(address) {
        const addr = (0, helpers_js_1.getAddress)(address).toString().toUpperCase().replace(/-/g, '');
        if (!address || addr.length !== 40) {
            return false;
        }
        const decoded = utils_js_1.default.toHex(utils_js_1.default.base32.b32decode(addr));
        const stepThreeChecksum = utils_js_1.default.keccak256Checksum(buffer_1.Buffer.from(decoded.slice(0, 42), 'hex'));
        return stepThreeChecksum === decoded.slice(42);
    }
};
