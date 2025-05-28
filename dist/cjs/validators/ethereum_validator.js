"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
exports.default = {
    isValidAddress: function (address) {
        const addr = (0, helpers_js_1.getAddress)(address);
        if (!/^0x[0-9a-fA-F]{40}$/.test(addr)) {
            // Check if it has the basic requirements of an address
            return false;
        }
        if (/^0x[0-9a-f]{40}$/.test(addr) || /^0x?[0-9A-F]{40}$/.test(addr)) {
            // If it's all small caps or all caps, return true
            return true;
        }
        // Otherwise check each case
        return this.verifyChecksum(addr);
    },
    verifyChecksum: function (address) {
        // Check each case
        address = address.replace('0x', '');
        const addressHash = utils_js_1.default.keccak256(address.toLowerCase());
        for (let i = 0; i < 40; i++) {
            // The nth letter should be uppercase if the nth digit of casemap is 1
            if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) ||
                (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
                return false;
            }
        }
        return true;
    }
};
