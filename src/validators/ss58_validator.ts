import cryptoUtils from '../crypto/utils.js'
import {Address, Validator} from '../types.js'
import {getAddress} from '../helpers.js'

// SS58 address format (Substrate-based)
// SS58 Registry: https://github.com/paritytech/ss58-registry
const addressFormats = [
    {addressLength: 3, accountIndexLength: 1, checkSumLength: 1},
    {addressLength: 4, accountIndexLength: 2, checkSumLength: 1},
    {addressLength: 5, accountIndexLength: 2, checkSumLength: 2},
    {addressLength: 6, accountIndexLength: 4, checkSumLength: 1},
    {addressLength: 7, accountIndexLength: 4, checkSumLength: 2},
    {addressLength: 8, accountIndexLength: 4, checkSumLength: 3},
    {addressLength: 9, accountIndexLength: 4, checkSumLength: 4},
    {addressLength: 10, accountIndexLength: 8, checkSumLength: 1},
    {addressLength: 11, accountIndexLength: 8, checkSumLength: 2},
    {addressLength: 12, accountIndexLength: 8, checkSumLength: 3},
    {addressLength: 13, accountIndexLength: 8, checkSumLength: 4},
    {addressLength: 14, accountIndexLength: 8, checkSumLength: 5},
    {addressLength: 15, accountIndexLength: 8, checkSumLength: 6},
    {addressLength: 16, accountIndexLength: 8, checkSumLength: 7},
    {addressLength: 17, accountIndexLength: 8, checkSumLength: 8},
    {addressLength: 34, accountIndexLength: 32, checkSumLength: 2},
];

interface SS58ValidatorOptions {
    // Network prefix to validate (in decimal). If provided, only addresses with this prefix are valid.
    // Examples: 0 = Polkadot, 2 = Kusama, 42 = Substrate/Bittensor
    networkPrefix?: number;
}

/**
 * Creates an SS58 validator with optional network prefix filtering
 * @param options Configuration options including optional network prefix
 * @returns Validator instance for SS58 addresses
 */
export default function createSS58Validator(options: SS58ValidatorOptions = {}): Validator {
    function verifyChecksum(address: string): boolean {
        try {
            const preImage = '53533538505245'
            const decoded = cryptoUtils.base58(address);
            const addressType = cryptoUtils.byteArray2hexStr(decoded.slice(0, 1));

            // If a specific network prefix is required, validate it
            if (options.networkPrefix !== undefined) {
                const expectedPrefix = options.networkPrefix.toString(16).padStart(2, '0').toUpperCase();
                if (addressType.toUpperCase() !== expectedPrefix) {
                    return false;
                }
            }

            const addressAndChecksum = decoded.slice(1)

            // get the address format
            const addressFormat = addressFormats.find(af => af.addressLength === addressAndChecksum.length);

            if (!addressFormat) {
                throw new Error('Invalid address length');
            }

            const decodedAddress = cryptoUtils.byteArray2hexStr(addressAndChecksum.slice(0, addressFormat.accountIndexLength));
            const checksum = cryptoUtils.byteArray2hexStr(addressAndChecksum.slice(-addressFormat.checkSumLength));

            const calculatedHash = cryptoUtils
                .blake2b(preImage + addressType + decodedAddress, 64)
                .substr(0, addressFormat.checkSumLength * 2)
                .toUpperCase();

            return calculatedHash == checksum;
        } catch (err) {
            return false;
        }
    }

    return {
        isValidAddress(address: Address) {
            return verifyChecksum(getAddress(address))
        },
    }
}
