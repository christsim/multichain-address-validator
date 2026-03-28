import {Address, NetworkType} from '../types.js'
import BTCValidator from './bitcoin_validator.js'
import {getAddress} from '../helpers.js'

const CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
const GENERATOR = [
    0x98f2bc8e61n, 0x79b76d99e2n, 0xf33e5fb3c4n, 0xae2eabe2a8n, 0x1e4f43e470n
];

function cashAddrPolymod(values: number[]): bigint {
    let chk = 1n;
    for (let i = 0; i < values.length; i++) {
        const top = chk >> 35n;
        chk = ((chk & 0x07ffffffffn) << 5n) ^ BigInt(values[i]);
        for (let j = 0n; j < 5n; j++) {
            if ((top >> j) & 1n) {
                chk ^= GENERATOR[Number(j)];
            }
        }
    }
    return chk ^ 1n;
}

function prefixExpand(prefix: string): number[] {
    const ret: number[] = [];
    for (let i = 0; i < prefix.length; i++) {
        ret.push(prefix.charCodeAt(i) & 31);
    }
    ret.push(0);
    return ret;
}

function verifyCashAddrChecksum(prefix: string, payload: number[]): boolean {
    const expanded = prefixExpand(prefix).concat(payload);
    return cashAddrPolymod(expanded) === 0n;
}

function validateCashAddr(address: string, opts: BCHValidatorOpts): boolean {
    let raw_address: string;

    const prefix = opts.networkType === NetworkType.MainNet
        ? 'bitcoincash'
        : 'bchtest';

    const res = address.split(':');
    if (res.length === 1) {
        raw_address = address;
    } else {
        if (res[0] !== prefix) {
            return false;
        }
        raw_address = res[1];
    }

    const regexp = new RegExp(opts.regexp!);
    if (!regexp.test(raw_address)) {
        return false;
    }

    if (raw_address.toLowerCase() !== raw_address && raw_address.toUpperCase() !== raw_address) {
        return false;
    }

    raw_address = raw_address.toLowerCase();

    // Decode characters using the bech32/CashAddr charset
    const data: number[] = [];
    for (const c of raw_address) {
        const d = CHARSET.indexOf(c);
        if (d === -1) {
            return false;
        }
        data.push(d);
    }

    try {
        if (!verifyCashAddrChecksum(prefix, data)) {
            return false;
        }
    } catch {
        return false;
    }

    return true;
}

interface BCHValidatorOpts {
    addressTypes: string[]
    expectedLength?: number
    bech32Hrp?: [string],
    hashFunction?: 'blake256' | 'blake256keccak256' | 'keccak256' | 'sha256',
    regexp?: RegExp,
    networkType: NetworkType,
}

const DefaultBCHValidatorOpts: Partial<BCHValidatorOpts> = {
    regexp: /^[qQpP][0-9a-zA-Z]{41}$/,
}

export default (opts: BCHValidatorOpts) => ({
    isValidAddress: function (address: Address) {
        const addr = getAddress(address)
        const _opts = {...DefaultBCHValidatorOpts, ...opts}
        return validateCashAddr(addr, _opts) || BTCValidator(opts).isValidAddress(address);
    }
})
