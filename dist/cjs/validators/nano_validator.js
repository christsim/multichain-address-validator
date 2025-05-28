"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_x_1 = __importDefault(require("base-x"));
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
const ALLOWED_CHARS = '13456789abcdefghijkmnopqrstuwxyz';
const codec = (0, base_x_1.default)(ALLOWED_CHARS);
// https://github.com/nanocurrency/raiblocks/wiki/Accounts,-Keys,-Seeds,-and-Wallet-Identifiers
const regexp = new RegExp('^(xrb|nano)_([' + ALLOWED_CHARS + ']{60})$');
exports.default = {
    isValidAddress(address) {
        const addr = (0, helpers_js_1.getAddress)(address);
        if (regexp.test(addr)) {
            return this.verifyChecksum(addr);
        }
        return false;
    },
    verifyChecksum: function (address) {
        const bytes = codec.decode(regexp.exec(address)[2]).slice(-37);
        // https://github.com/nanocurrency/raiblocks/blob/master/rai/lib/numbers.cpp#L73
        const computedChecksum = utils_js_1.default.blake2b(utils_js_1.default.toHex(bytes.slice(0, -5)), 5);
        const checksum = utils_js_1.default.toHex(bytes.slice(-5).reverse());
        return computedChecksum === checksum;
    }
};
