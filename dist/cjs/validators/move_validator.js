"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("../helpers.js");
const regexp = new RegExp('^0x[0-9a-fA-F]{64}$');
exports.default = {
    isValidAddress(address) {
        const addr = (0, helpers_js_1.getAddress)(address);
        return regexp.test(addr);
    },
};
