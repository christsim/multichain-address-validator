"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_js_1 = __importDefault(require("../crypto/utils.js"));
const helpers_js_1 = require("../helpers.js");
const cnBase58_js_1 = __importDefault(require("../crypto/cnBase58.js"));
const addressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{95}$');
const integratedAddressRegTest = new RegExp('^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{106}$');
const types = {
    addressTypes: { mainnet: ['18', '42'], testnet: ['53', '63'], stagenet: ['24'] },
    iAddressTypes: { mainnet: ['19'], testnet: ['54'], stagenet: ['25'] },
};
function validateNetwork(decoded, networkType, addressType) {
    const addressTypes = addressType === 'integrated'
        ? types.iAddressTypes[networkType]
        : types.addressTypes[networkType];
    const at = parseInt(decoded.substr(0, 2), 16).toString();
    switch (networkType) {
        case 'mainnet':
            return addressTypes.indexOf(at) >= 0;
        case 'testnet':
            return addressTypes.indexOf(at) >= 0;
        // case 'stagenet':
        //     return network.stagenet.indexOf(at) >= 0
        // case 'both':
        //     return network.prod.indexOf(at) >= 0 || network.testnet.indexOf(at) >= 0 || network.stagenet.indexOf(at) >= 0
        default:
            return false;
    }
}
function hextobin(hex) {
    if (hex.length % 2 !== 0)
        return null;
    const res = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length / 2; ++i) {
        res[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    }
    return res;
}
exports.default = (networkType) => ({
    isValidAddress(address) {
        const addr = (0, helpers_js_1.getAddress)(address);
        let addressType = 'standard';
        if (!addressRegTest.test(addr)) {
            if (integratedAddressRegTest.test(addr)) {
                addressType = 'integrated';
            }
            else {
                return false;
            }
        }
        const decodedAddrStr = cnBase58_js_1.default.decode(addr);
        if (!decodedAddrStr)
            return false;
        if (!validateNetwork(decodedAddrStr, networkType, addressType))
            return false;
        const addrChecksum = decodedAddrStr.slice(-8);
        const hashChecksum = utils_js_1.default.keccak256Checksum(hextobin(decodedAddrStr.slice(0, -8)));
        return addrChecksum === hashChecksum;
    }
});
