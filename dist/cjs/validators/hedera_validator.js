"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_js_1 = require("../helpers.js");
exports.default = {
    isValidAddress(address) {
        // Regex to validate the format "shard.realm.account"
        const regex = /^\d+\.\d+\.\d+$/;
        return regex.test((0, helpers_js_1.getAddress)(address));
    }
};
