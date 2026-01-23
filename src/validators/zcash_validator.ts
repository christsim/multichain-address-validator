import base58 from '../crypto/base58.js'
import cryptoUtils from '../crypto/utils.js'
import {Address, NetworkType} from '../types.js'
import {getAddress} from '../helpers.js'

function getDecoded(address: string) {
    try {
        return base58.decode(address);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }
}

function getChecksum(payload: any) {
    return cryptoUtils.sha256Checksum(payload);
}

function isValidTransparentAddress(address: string, networkType: NetworkType) {
    // Zcash transparent addresses use 2-byte version prefixes
    // Expected length: 26 bytes (2 bytes version + 20 bytes payload + 4 bytes checksum)
    const expectedLength = 26;
    const decoded = getDecoded(address);

    if (!decoded || decoded.length !== expectedLength) {
        return false;
    }

    const checksum = cryptoUtils.toHex(decoded.slice(expectedLength - 4, expectedLength));
    const body = cryptoUtils.toHex(decoded.slice(0, expectedLength - 4));
    const goodChecksum = getChecksum(body);

    if (checksum !== goodChecksum) {
        return false;
    }

    // Get the 2-byte version prefix
    const versionPrefix = cryptoUtils.toHex(decoded.slice(0, 2));

    // Define valid version prefixes for each network
    // Only supporting transparent addresses (t1/t3 for mainnet, tm/t2 for testnet)
    const validPrefixes = networkType === NetworkType.MainNet
        ? ['1cb8', '1cbd'] // t1 (P2PKH) and t3 (P2SH) for mainnet
        : ['1d25', '1cba']; // tm (P2PKH) and t2 (P2SH) for testnet

    return validPrefixes.includes(versionPrefix);
}

export default (networkType: NetworkType) => ({
    isValidAddress(address: Address): boolean {
        const addr = getAddress(address);

        // Only validate transparent addresses (t1/t3 for mainnet, tm/t2 for testnet)
        // Sapling (zs) and Unified (u) addresses are NOT supported
        return isValidTransparentAddress(addr, networkType);
    }
})
