import {Address} from '../types'
import cryptoUtils from '../crypto/utils'

function decodeBase58Address(base58String: string) {
    if (typeof (base58String) !== 'string') {
        return false;
    }
    if (base58String.length !== 34) {
        return false;
    }

    let address: string
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
    isValidAddress: function (mainAddress: Address) {
        const _opts = {...DefaultTronValidatorOpts, ...opts}
        mainAddress = ((mainAddress as any).address ?? mainAddress) as string
        const address = decodeBase58Address(mainAddress);

        if (!address) {
            return false;
        }

        if (address.length !== 21) {
            return false;
        }

        return _opts.addressTypes.includes(address[0].toString());
    }
});
