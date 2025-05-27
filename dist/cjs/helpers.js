"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAddress = getAddress;
function getAddress(address) {
    return typeof address === 'string'
        ? address
        : address.address;
}
