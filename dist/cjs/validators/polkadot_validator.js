"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
// from https://github.com/paritytech/substrate/wiki/External-Address-Format-(SS58)
const addressFormats = [
    { addressLength: 3, accountIndexLength: 1, checkSumLength: 1 },
    { addressLength: 4, accountIndexLength: 2, checkSumLength: 1 },
    { addressLength: 5, accountIndexLength: 2, checkSumLength: 2 },
    { addressLength: 6, accountIndexLength: 4, checkSumLength: 1 },
    { addressLength: 7, accountIndexLength: 4, checkSumLength: 2 },
    { addressLength: 8, accountIndexLength: 4, checkSumLength: 3 },
    { addressLength: 9, accountIndexLength: 4, checkSumLength: 4 },
    { addressLength: 10, accountIndexLength: 8, checkSumLength: 1 },
    { addressLength: 11, accountIndexLength: 8, checkSumLength: 2 },
    { addressLength: 12, accountIndexLength: 8, checkSumLength: 3 },
    { addressLength: 13, accountIndexLength: 8, checkSumLength: 4 },
    { addressLength: 14, accountIndexLength: 8, checkSumLength: 5 },
    { addressLength: 15, accountIndexLength: 8, checkSumLength: 6 },
    { addressLength: 16, accountIndexLength: 8, checkSumLength: 7 },
    { addressLength: 17, accountIndexLength: 8, checkSumLength: 8 },
    { addressLength: 34, accountIndexLength: 32, checkSumLength: 2 },
];
function verifyChecksum(address) {
    try {
        const preImage = '53533538505245';
        const decoded = utils_js_1.default.base58(address);
        const addressType = utils_js_1.default.byteArray2hexStr(decoded.slice(0, 1));
        const addressAndChecksum = decoded.slice(1);
        // get the address format
        const addressFormat = addressFormats.find(af => af.addressLength === addressAndChecksum.length);
        if (!addressFormat) {
            throw new Error('Invalid address length');
        }
        const decodedAddress = utils_js_1.default.byteArray2hexStr(addressAndChecksum.slice(0, addressFormat.accountIndexLength));
        const checksum = utils_js_1.default.byteArray2hexStr(addressAndChecksum.slice(-addressFormat.checkSumLength));
        const calculatedHash = utils_js_1.default
            .blake2b(preImage + addressType + decodedAddress, 64)
            .substr(0, addressFormat.checkSumLength * 2)
            .toUpperCase();
        return calculatedHash == checksum;
    }
    catch (err) {
        return false;
    }
}
exports.default = {
    isValidAddress(address) {
        return verifyChecksum((0, helpers_js_1.getAddress)(address));
    },
};
