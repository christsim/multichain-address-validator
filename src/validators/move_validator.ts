import type { Address} from '../types.js'
import {getAddress} from '../helpers.js'

const regexp = new RegExp('^0x[0-9a-fA-F]{64}$');

export default {
    isValidAddress(address: Address) {
        const addr = getAddress(address)
        return regexp.test(addr)
    },
};
