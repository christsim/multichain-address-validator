"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base58_js_1 = __importDefault(require("../crypto/base58.js"));
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
const prefix = new Uint8Array([6, 161, 159]);
function decodeRaw(buffer) {
    let payload = buffer.slice(0, -4);
    let checksum = buffer.slice(-4);
    let newChecksum = utils_js_1.default.hexStr2byteArray(utils_js_1.default.sha256x2(utils_js_1.default.byteArray2hexStr(payload)));
    if (checksum[0] ^ newChecksum[0] |
        checksum[1] ^ newChecksum[1] |
        checksum[2] ^ newChecksum[2] |
        checksum[3] ^ newChecksum[3])
        return;
    return payload;
}
exports.default = {
    isValidAddress(address) {
        try {
            let buffer = base58_js_1.default.decode((0, helpers_js_1.getAddress)(address));
            let payload = decodeRaw(buffer);
            if (!payload)
                return false;
            payload.slice(prefix.length);
            return true;
        }
        catch (e) {
            return false;
        }
    }
};
