import {Address} from '../types'
import cryptoUtils from '../crypto/utils'
import {getAddress} from '../helpers'

function decodeBase58Address(base58String: string) {
    if (typeof (base58String) !== 'string') {
        return false;
    }
    if (base58String.length !== 34) {
        return false;
    }

    let address: number[]
    try {
        address = cryptoUtils.base58(base58String);
    } catch (e) {
        return false
    }

    const len = address.length;
    const offset = len - 4;
    const checkSum = address.slice(offset);
    address = address.slice(0, offset);
    const hash0 = cryptoUtils.sha256(cryptoUtils.byteArray2hexStr(address));
    const hash1 = cryptoUtils.hexStr2byteArray(cryptoUtils.sha256(hash0));
    const checkSum1 = hash1.slice(0, 4);
    if (checkSum[0] === checkSum1[0] && checkSum[1] === checkSum1[1] && checkSum[2]
        === checkSum1[2] && checkSum[3] === checkSum1[3]
    ) {
        return address;
    }

    return false;
}

interface TronValidatorOpts {
    addressTypes: string[],
}

const DefaultTronValidatorOpts: TronValidatorOpts = {
    addressTypes: ['65']
}

export default (opts?: TronValidatorOpts) => ({
    isValidAddress: function (address: Address) {
        const _opts = {...DefaultTronValidatorOpts, ...opts}
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
