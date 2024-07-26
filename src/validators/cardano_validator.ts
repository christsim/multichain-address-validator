import cbor from 'cbor-js'
import CRC from 'crc'

import base58 from '../crypto/base58'
import BIP173Validator from './bip173_validator'
import {Address, NetworkType} from '../types'
import {getAddress} from '../helpers'

function getDecoded(address: string) {
    try {
        const decoded = base58.decode(address);
        return cbor.decode(new Uint8Array(decoded).buffer);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}

function isValidAddressV1(address: string) {
    const decoded = getDecoded(address);

    if (!decoded || (!Array.isArray(decoded) && decoded.length != 2)) {
        return false;
    }

    const tagged = decoded[0];
    const validCrc = decoded[1];
    if (typeof (validCrc) != 'number') {
        return false;
    }

    // get crc of the payload
    const crc = CRC.crc32(tagged);

    return crc == validCrc;
}

function isValidAddressShelley(address: string, networkType: NetworkType, opts: any) {
    // shelley address are just bip 173 - bech32 addresses (https://cips.cardano.org/cips/cip4/)
    return BIP173Validator.isValidAddress(address, networkType, opts);
}

interface AdaValidatorOptions {
    bech32Hrp: { mainnet: string[], testnet: string[] }
}

export default (networkType: NetworkType, opts?: AdaValidatorOptions) => ({
    isValidAddress(address: Address) {
        const addr = getAddress(address)
        return isValidAddressV1(getAddress(addr)) || isValidAddressShelley(addr, networkType, opts);
    }
});
