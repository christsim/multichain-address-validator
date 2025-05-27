"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("../helpers.js");
function isValidEOSAddress(address) {
    const regex = /^[a-z0-9.]+$/g; // Must be numbers, lowercase letters and decimal points only
    return address.search(regex) !== -1 && address.length === 12;
}
exports.default = {
    isValidAddress: function (address) {
        return isValidEOSAddress((0, helpers_js_1.getAddress)(address));
    }
};
