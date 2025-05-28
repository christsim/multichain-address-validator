"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const bech32_js_1 = __importDefault(require("../crypto/bech32.js"));
const types_js_1 = require("../types.js");
const bitcoin_validator_js_1 = __importDefault(require("./bitcoin_validator.js"));
const helpers_js_1 = require("../helpers.js");
function validateAddress(address, opts) {
    const regexp = new RegExp(opts.regexp);
    let raw_address;
    const res = address.split(':');
    if (res.length === 1) {
        raw_address = address;
    }
    else {
        if (res[0] !== 'bitcoincash') {
            return false;
        }
        raw_address = res[1];
    }
    if (!regexp.test(raw_address)) {
        return false;
    }
    if (raw_address.toLowerCase() != raw_address && raw_address.toUpperCase() != raw_address) {
        return false;
    }
    const decoded = utils_js_1.default.base32.b32decode(raw_address);
    const prefix = opts.networkType === types_js_1.NetworkType.MainNet
        ? 'bitcoincash'
        : 'bchtest';
    try {
        if (bech32_js_1.default.verifyChecksum(prefix, decoded, bech32_js_1.default.encodings.BECH32)) {
            return false;
        }
    }
    catch (e) {
        return false;
    }
    return true;
}
const DefaultBCHValidatorOpts = {
    //     addressTypes: {mainnet: ['00', '05'], testnet: ['6f', 'c4', '3c', '26']},
    //     bech32Hrp: {mainnet: ['bc'], testnet: ['tb']},
    regexp: /^[qQpP][0-9a-zA-Z]{41}$/,
};
exports.default = (opts) => ({
    isValidAddress: function (address) {
        const addr = (0, helpers_js_1.getAddress)(address);
        const _opts = { ...DefaultBCHValidatorOpts, ...opts };
        return validateAddress(addr, _opts) || (0, bitcoin_validator_js_1.default)(opts).isValidAddress(address);
    }
});
