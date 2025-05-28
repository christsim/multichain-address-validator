"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_x_1 = __importDefault(require("base-x"));
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
const ALLOWED_CHARS = 'rpshnaf39wBUDNEGHJKLM4PQRST7VWXYZ2bcdeCg65jkm8oFqi1tuvAxyz';
const codec = (0, base_x_1.default)(ALLOWED_CHARS);
const regexp = new RegExp('^r[' + ALLOWED_CHARS + ']{27,35}$');
exports.default = {
    /**
     * ripple address validation
     */
    isValidAddress: function (address) {
        const addr = (0, helpers_js_1.getAddress)(address);
        const destinationTag = address.destinationTag;
        const validAddress = regexp.test(addr) && this.verifyChecksum(addr);
        return validAddress && this.verifyMemo(destinationTag);
    },
    verifyMemo(destinationTag) {
        if (!destinationTag)
            return true; // Optional
        const tagNumber = Number(destinationTag);
        // A destination tag is a 32-bit unsigned integer.
        return /^[0-9]+$/.test(destinationTag) && tagNumber >= 0 && tagNumber <= 4294967295;
    },
    verifyChecksum: function (address) {
        const bytes = codec.decode(address);
        const computedChecksum = utils_js_1.default.sha256Checksum(utils_js_1.default.toHex(bytes.slice(0, -4)));
        const checksum = utils_js_1.default.toHex(bytes.slice(-4));
        return computedChecksum === checksum;
    }
};
