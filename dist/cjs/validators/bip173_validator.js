"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bech32_js_1 = __importDefault(require("../crypto/bech32.js"));
// bip 173 bech 32 addresses (https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki)
exports.default = {
    isValidAddress: function (address, opts) {
        const decoded = bech32_js_1.default.decode(address, bech32_js_1.default.encodings.BECH32);
        if (!decoded) {
            return false;
        }
        const bech32Hrp = decoded.hrp;
        return opts.bech32Hrp.indexOf(bech32Hrp) !== -1;
    }
};
