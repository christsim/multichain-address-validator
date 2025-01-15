import cryptoUtils from '../crypto/utils.js';
import { getAddress } from '../helpers.js';
function decodeBase58Address(base58String) {
    if (typeof (base58String) !== 'string') {
        return false;
    }
    if (base58String.length !== 34) {
        return false;
    }
    let address;
    try {
        address = cryptoUtils.base58(base58String);
    }
    catch (e) {
        return false;
    }
    const len = address.length;
    const offset = len - 4;
    const checkSum = address.slice(offset);
    address = address.slice(0, offset);
    const hash0 = cryptoUtils.sha256(cryptoUtils.byteArray2hexStr(address));
    const hash1 = cryptoUtils.hexStr2byteArray(cryptoUtils.sha256(hash0));
    const checkSum1 = hash1.slice(0, 4);
    if (checkSum[0] === checkSum1[0] && checkSum[1] === checkSum1[1] && checkSum[2]
        === checkSum1[2] && checkSum[3] === checkSum1[3]) {
        return address;
    }
    return false;
}
const DefaultTronValidatorOpts = {
    addressTypes: ['65']
};
export default (opts) => ({
    isValidAddress: function (address) {
        const _opts = { ...DefaultTronValidatorOpts, ...opts };
        const addr = decodeBase58Address(getAddress(address));
        if (!addr) {
            return false;
        }
        if (addr.length !== 21) {
            return false;
        }
        return _opts.addressTypes.includes(addr[0].toString());
    }
});
