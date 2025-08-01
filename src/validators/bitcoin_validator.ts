import base58 from '../crypto/base58.js'
import segwit from '../crypto/segwit_addr.js'
import cryptoUtils from '../crypto/utils.js'

import {Address, NetworkType} from '../types.js'
import {getAddress} from '../helpers.js'
import {Buffer} from 'buffer'

function getDecoded(address: string) {
    try {
        return base58.decode(address);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}

function getChecksum(hashFunction: BTCValidatorOpts['hashFunction'], payload: any) {
    // Each currency may implement different hashing algorithm
    switch (hashFunction) {
        // blake then keccak hash chain
        case 'blake256keccak256':
            const blake = cryptoUtils.blake2b256(payload);
            return cryptoUtils.keccak256Checksum(Buffer.from(blake, 'hex'));
        case 'blake256':
            return cryptoUtils.blake256Checksum(payload);
        case 'keccak256':
            return cryptoUtils.keccak256Checksum(payload);
        case 'sha256':
        default:
            return cryptoUtils.sha256Checksum(payload);
    }
}

function getAddressType(address: string, opts: BTCValidatorOpts) {
    // should be 25 bytes per btc address spec and 26 decred
    const expectedLength = opts.expectedLength || 25;
    const hashFunction = opts.hashFunction || 'sha256';
    const decoded = getDecoded(address);

    if (decoded) {
        const length = decoded.length;

        if (length !== expectedLength) {
            return null;
        }

        if (opts.regex) {
            if (!opts.regex.test(address)) {
                return false;
            }
        }

        const checksum = cryptoUtils.toHex(decoded.slice(length - 4, length)),
            body = cryptoUtils.toHex(decoded.slice(0, length - 4)),
            goodChecksum = getChecksum(hashFunction, body);

        return checksum === goodChecksum ? cryptoUtils.toHex(decoded.slice(0, expectedLength - 24)) : null;
    }

    return null;
}

function isValidP2PKHandP2SHAddress(address: string, opts: BTCValidatorOpts) {
    const addressType = getAddressType(address, opts);

    if (addressType) {
        return opts.addressTypes.indexOf(addressType) >= 0;
    }

    return false;
}

export enum SegwitVersion {
    NativeSegwit = 0,
    TapRoot = 1,
}

interface BTCValidatorOpts {
    addressTypes: string[],
    expectedLength?: number,
    bech32Hrp?: [string],
    allowedSegwitVersions?: [number],
    hashFunction?: 'blake256' | 'blake256keccak256' | 'keccak256' | 'sha256',
    regex?: RegExp,
}

export default (opts: BTCValidatorOpts) => ({
    isValidAddress(address: Address): boolean {
        const addr = getAddress(address)
        return isValidP2PKHandP2SHAddress(addr, opts) || segwit.isValidAddress(addr, opts);
    }
})
