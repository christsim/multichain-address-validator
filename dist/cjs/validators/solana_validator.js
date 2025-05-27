"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base58_validator_js_1 = __importDefault(require("./base58_validator.js"));
const helpers_js_1 = require("../helpers.js");
exports.default = {
    isValidAddress: function (address) {
        return base58_validator_js_1.default.isValidAddress((0, helpers_js_1.getAddress)(address), {
            maxLength: 44,
            minLength: 43,
        });
    }
};
