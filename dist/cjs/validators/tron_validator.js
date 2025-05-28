"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
function decodeBase58Address(base58String) {
    if (typeof (base58String) !== 'string') {
        return false;
    }
    if (base58String.length !== 34) {
        return false;
    }
    let address;
    try {
        address = utils_js_1.default.base58(base58String);
    }
    catch (e) {
        return false;
    }
    const len = address.length;
    const offset = len - 4;
    const checkSum = address.slice(offset);
    address = address.slice(0, offset);
    const hash0 = utils_js_1.default.sha256(utils_js_1.default.byteArray2hexStr(address));
    const hash1 = utils_js_1.default.hexStr2byteArray(utils_js_1.default.sha256(hash0));
    const checkSum1 = hash1.slice(0, 4);
    if (checkSum[0] === checkSum1[0] && checkSum[1] === checkSum1[1] && checkSum[2]
        === checkSum1[2] && checkSum[3] === checkSum1[3]) {
        return address;
    }
    return false;
}
const DefaultTronValidatorOpts = {
    addressTypes: ['65']
};
exports.default = (opts) => ({
    isValidAddress: function (address) {
        const _opts = { ...DefaultTronValidatorOpts, ...opts };
        const addr = decodeBase58Address((0, helpers_js_1.getAddress)(address));
        if (!addr) {
            return false;
        }
        if (addr.length !== 21) {
            return false;
        }
        return _opts.addressTypes.includes(addr[0].toString());
    }
});
