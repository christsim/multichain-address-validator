"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base58_js_1 = __importDefault(require("../crypto/base58.js"));
// simple base58 validator.  Just checks if it can be decoded.
exports.default = {
    isValidAddress: function (address, opts) {
        try {
            if (!address || address.length == 0) {
                return false;
            }
            if (opts.minLength && (address.length < opts.minLength)) {
                return false;
            }
            if (opts.maxLength && (address.length > opts.maxLength)) {
                return false;
            }
            try {
                const decoded = base58_js_1.default.decode(address);
                if (!decoded || !decoded.length) {
                    return false;
                }
            }
            catch (e) {
                // if decoding fails, assume invalid address
                return false;
            }
            return true;
        }
        catch (e) {
            return false;
        }
    }
};
