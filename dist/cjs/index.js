"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkType = void 0;
exports.validate = validate;
const types_js_1 = require("./types.js");
Object.defineProperty(exports, "NetworkType", { enumerable: true, get: function () { return types_js_1.NetworkType; } });
const chain_validators_js_1 = require("./chain-validators.js");
function validate(address, chain) {
    const validator = (0, chain_validators_js_1.getValidatorForChain)(chain);
    if (!validator) {
        throw new Error(`Missing validator for chain: ${chain}`);
    }
    return validator.isValidAddress(address);
}
exports.default = {
    validate
};
